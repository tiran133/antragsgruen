<?php
/**
 * AntragsgruenController is the customized base controller class.
 * All controller classes for this application should extend from this base class.
 */
class AntragsgruenController extends CController
{
	public $layout = '//layouts/column1';
	public $menu = array();
	public $breadcrumbs = array();
	public $multimenu = null;
	public $menus_html = null;
	public $breadcrumbs_topname = null;
	public $text_comments = true;
	public $shrink_cols = false;

	/** @var null|Veranstaltung */
	public $veranstaltung = null;

	/** @var null|Veranstaltungsreihe */
	public $veranstaltungsreihe = null;


	private $_assetsBase;

	/**
	 *
	 */
	public function testeWartungsmodus()
	{
		if ($this->veranstaltung == null) return;
		/** @var VeranstaltungsEinstellungen $einstellungen */
		$einstellungen = $this->veranstaltung->getEinstellungen();
		if ($einstellungen->wartungs_modus_aktiv && !$this->veranstaltung->isAdminCurUser()) $this->redirect($this->createUrl("veranstaltung/wartungsmodus"));
	}

	/**
	 *
	 */
	protected function setStdVeranstaltung()
	{
		$veranstaltung_id    = (isset($_REQUEST["id"]) ? IntVal($_REQUEST["id"]) : Yii::app()->params['standardVeranstaltung']);
		$this->veranstaltung = Veranstaltung::model()->findByPk($veranstaltung_id);
	}

	/**
	 * @param string $route
	 * @param array $params
	 * @param string $ampersand
	 * @return string
	 */
	public function createUrl($route, $params = array(), $ampersand = '&')
	{
		$p = explode("/", $route);
		if ($p[0] != "infos") {
			if (!isset($params["veranstaltung_id"]) && $this->veranstaltung !== null) $params["veranstaltung_id"] = $this->veranstaltung->url_verzeichnis;
			if (MULTISITE_MODE && !isset($params["veranstaltungsreihe_id"]) && $this->veranstaltungsreihe != null) $params["veranstaltungsreihe_id"] = $this->veranstaltungsreihe->subdomain;
			if ($route == "veranstaltung/index" && !is_null($this->veranstaltungsreihe) && $params["veranstaltung_id"] == $this->veranstaltungsreihe->aktuelle_veranstaltung->url_verzeichnis) unset($params["veranstaltung_id"]);
			if (in_array($route, array(
				"veranstaltung/ajaxEmailIstRegistriert", "veranstaltung/benachrichtigungen", "veranstaltung/impressum", "veranstaltung/login", "veranstaltung/logout"
			))) unset($params["veranstaltung_id"]);
		}
		return parent::createUrl($route, $params, $ampersand);
	}

	/**
	 * @param string $veranstaltungsreihe_id
	 * @param string $veranstaltung_id
	 * @param null|Antrag $check_antrag
	 * @param null|Aenderungsantrag $check_aenderungsantrag
	 * @return null|Veranstaltung
	 */
	public function loadVeranstaltung($veranstaltungsreihe_id, $veranstaltung_id = "", $check_antrag = null, $check_aenderungsantrag = null)
	{

		if ($veranstaltungsreihe_id == "") $veranstaltungsreihe_id = Yii::app()->params['standardVeranstaltungsreihe'];

		if ($veranstaltung_id == "") {
			/** @var Veranstaltungsreihe $reihe */
			$reihe = Veranstaltungsreihe::model()->findByAttributes(array("subdomain" => $veranstaltungsreihe_id));
			if ($reihe) {
				$veranstaltung_id = $reihe->aktuelle_veranstaltung->url_verzeichnis;
			} else {
				$this->render('error', array(
					"code"    => 404,
					"message" => "Die Veranstaltungsreihe wurde nicht gefunden."
				));
			}
		}

		if (is_null($this->veranstaltungsreihe)) {
			if (is_numeric($veranstaltungsreihe_id)) {
				$this->veranstaltungsreihe = Veranstaltungsreihe::model()->findByPk($veranstaltungsreihe_id);
			} else {
				$this->veranstaltungsreihe = Veranstaltungsreihe::model()->findByAttributes(array("subdomain" => $veranstaltungsreihe_id));
			}
		}

		if (is_null($this->veranstaltung)) {
			$this->veranstaltung = Veranstaltung::model()->findByAttributes(array("url_verzeichnis" => $veranstaltung_id));
		}

		if ($this->veranstaltung->veranstaltungsreihe->subdomain != $veranstaltungsreihe_id) {
			Yii::app()->user->setFlash("error", "Fehlerhafte Parameter - die Veranstaltung gehört nicht zur Veranstaltungsreihe.");
			$this->redirect($this->createUrl("veranstaltung/index", array("veranstaltung_id" => $veranstaltung_id)));
			return null;
		}

		if (is_object($check_antrag) && $check_antrag->veranstaltung->url_verzeichnis != $veranstaltung_id) {
			Yii::app()->user->setFlash("error", "Fehlerhafte Parameter - der Antrag gehört nicht zur Veranstaltung.");
			$this->redirect($this->createUrl("veranstaltung/index", array("veranstaltung_id" => $veranstaltung_id)));
			return null;
		}

		if ($check_aenderungsantrag != null && ($check_antrag == null || $check_aenderungsantrag->antrag_id != $check_antrag->id)) {
			Yii::app()->user->setFlash("error", "Fehlerhafte Parameter - der Änderungsantrag gehört nicht zum Antrag.");
			$this->redirect($this->createUrl("veranstaltung/index", array("veranstaltung_id" => $veranstaltung_id)));
			return null;
		}

		if (!is_a($this->veranstaltung, "Veranstaltung") || $this->veranstaltung->policy_kommentare == Veranstaltung::$POLICY_NIEMAND) $this->text_comments = false;

		return $this->veranstaltung;
	}


	public function getAssetsBase()
	{
		if ($this->_assetsBase === null) {
			$this->_assetsBase = Yii::app()->assetManager->publish(
				Yii::getPathOfAlias('application.assets'),
				false,
				-1,
				defined('YII_DEBUG') && YII_DEBUG
			);
		}
		return $this->_assetsBase;
	}

	/**
	 * @param string $success_redirect
	 * @throws Exception
	 * @return OAuthLoginForm
	 */
	protected function performLogin($success_redirect)
	{

		$model = new OAuthLoginForm();
		if (isset($_REQUEST["OAuthLoginForm"])) $model->attributes = $_REQUEST["OAuthLoginForm"];

		if (isset($_REQUEST["password"]) && $_REQUEST["password"] != "" && isset($_REQUEST["OAuthLoginForm"]["wurzelwerk"])) {
			if (strpos($_REQUEST["OAuthLoginForm"]["wurzelwerk"], "@")) $username = "email:" . $_REQUEST["OAuthLoginForm"]["wurzelwerk"];
			else $username = "openid:https://" . $_REQUEST["OAuthLoginForm"]["wurzelwerk"] . ".netzbegruener.in/";

			/** @var Person $user */
			$user = Person::model()->findByAttributes(array("auth" => $username));
			if ($user === null) {
				throw new Exception("Benutzername nicht gefunden.");
			}
			$correct = $user->validate_password($_REQUEST["password"]);
			if ($correct) {
				$identity = new AntragUserIdentityPasswd($_REQUEST["OAuthLoginForm"]["wurzelwerk"]);
				Yii::app()->user->login($identity);

				if ($user->admin) {
					//$openid->setState("role", "admin");
					Yii::app()->user->setState("role", "admin");
				}

				Yii::app()->user->setState("person_id", $user->id);
				Yii::app()->user->setFlash('success', 'Willkommen!');
				if ($success_redirect == "") $success_redirect = Yii::app()->homeUrl;

				$this->redirect($success_redirect);
			} else {
				throw new Exception("Falsches Passwort.");
			}

			//Yii::app()->user->login($us);
			die();
		} elseif (isset($_REQUEST["openid_mode"])) {
			/** @var LightOpenID $loid */
			$loid = Yii::app()->loid->load();
			if ($_REQUEST['openid_mode'] != 'cancel') {
				try {
					$us = new AntragUserIdentityOAuth($loid);
					if ($us->authenticate()) {
						Yii::app()->user->login($us);
						$user = Person::model()->findByAttributes(array("auth" => $us->getId()));
						if (!$user) {
							$user                   = new Person;
							$user->auth             = $us->getId();
							$user->name             = $us->getName();
							$user->email            = $us->getEmail();
							$user->email_bestaetigt = 0;
							$user->angelegt_datum   = date("Y-m-d H:i:s");
							$user->status           = Person::$STATUS_CONFIRMED;
							$user->typ              = Person::$TYP_PERSON;
							if (Person::model()->count() == 0) {
								$user->admin = 1;
								Yii::app()->user->setState("role", "admin");
							} else {
								$user->admin = 0;
							}
							$user->save();
						} else {
							if ($user->admin) {
								//$openid->setState("role", "admin");
								Yii::app()->user->setState("role", "admin");
							}
						}
						Yii::app()->user->setState("person_id", $user->id);
						Yii::app()->user->setFlash('success', 'Willkommen!');
						if ($success_redirect == "") $success_redirect = Yii::app()->homeUrl;
						$this->redirect($success_redirect);
					} else {
						throw new Exception("Leider ist beim Einloggen ein Fehler aufgetreten.");
					}
				} catch (Exception $e) {
					throw new Exception("Leider ist beim Einloggen ein Fehler aufgetreten:<br>" . $e->getMessage());
				}
			}

			if (!empty($err)) Yii::app()->user->setFlash("error", $err);
		} elseif (isset($_REQUEST["OAuthLoginForm"])) {
			if (stripos($model->openid_identifier, "yahoo") !== false) {
				throw new Exception("Leider ist wegen technischen Problemen ein Login mit Yahoo momentan nicht möglich.");
			} else {
				/** @var LightOpenID $loid */
				$loid = Yii::app()->loid->load();
				if ($model->wurzelwerk != "") $loid->identity = "https://" . $model->wurzelwerk . ".netzbegruener.in/";
				else $loid->identity = $model->openid_identifier;

				$loid->required  = array('namePerson/friendly', 'contact/email'); //Try to get info from openid provider
				$loid->realm     = (!empty($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'];
				$loid->returnUrl = $loid->realm . yii::app()->getRequest()->requestUri;
				if (empty($err)) {
					try {
						$url = $loid->authUrl();
						$this->redirect($url);
					} catch (Exception $e) {
						throw new Exception($e->getMessage());
					}
				}
			}
			if (!empty($err)) Yii::app()->user->setFlash("error", $err);
		} elseif (isset($_REQUEST["login"]) && $_REQUEST["login_sec"] == AntiXSS::createToken($_REQUEST["login"])) {
			/** @var Person $user */
			$user = Person::model()->findByAttributes(array("id" => $_REQUEST["login"]));
			if ($user === null) {
				throw new Exception("Benutzername nicht gefunden");
			}
			$identity = new AntragUserIdentityPasswd($user->getWurzelwerkName());
			Yii::app()->user->login($identity);

			if ($user->admin) {
				//$openid->setState("role", "admin");
				Yii::app()->user->setState("role", "admin");
			}

			Yii::app()->user->setState("person_id", $user->id);
			Yii::app()->user->setFlash('success', 'Willkommen!');
			if ($success_redirect == "") $success_redirect = Yii::app()->homeUrl;

			$this->redirect($success_redirect);
		}
		return $model;
	}

}