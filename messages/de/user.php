<?php
return [
    'my_acc_title'              => 'Mein Zugang',
    'my_acc_bread'              => 'Einstellungen',
    'email_address'             => 'E-Mail-Adresse',
    'email_address_new'         => 'Neue E-Mail-Adresse',
    'email_blocklist'           => 'Jeglichen Mail-Versand an diese Adresse unterbinden',
    'email_unconfirmed'         => 'unbestätigt',
    'pwd_confirm'               => 'Passwort bestätigen',
    'pwd_change'                => 'Passwort ändern',
    'pwd_change_hint'           => 'Leer lassen, falls unverändert',
    'name'                      => 'Name',
    'user_group'                => 'Gruppe',
    'user_groups'               => 'Gruppen',
    'user_groups_con'           => 'Diese Veranstaltung',
    'user_groups_system'        => 'Allgemein',
    'err_pwd_different'         => 'Die beiden Passwörter stimmen nicht überein.',
    'err_pwd_length'            => 'Das Passwort muss mindestens %MINLEN% Zeichen lang sein.',
    'err_user_acode_notfound'   => 'Benutzer*in nicht gefunden / Ungültiger Code',
    'err_user_notfound'         => 'Der Account %USER% wurde nicht gefunden.',
    'err_code_wrong'            => 'Der angegebene Code stimmt leider nicht.',
    'pwd_recovery_sent'         => 'Dir wurde eine Passwort-Wiederherstellungs-Mail geschickt.',
    'welcome'                   => 'Willkommen!',
    'err_email_acc_notfound'    => 'Es existiert kein Zugang mit der angegebenen E-Mail-Adresse...?',
    'err_email_acc_confirmed'   => 'Der Account wurde bereits bestätigt.',
    'err_invalid_email'         => 'Die angegebene E-Mail-Adresse enthält einen Fehler',
    'err_unknown'               => 'Es trat leider ein unvorhergesehener Fehler auf',
    'err_unknown_ww_repeat'     => 'Es trat ein unbekannter Fehler auf.' . "\n" .
        'Falls du versucht hast, dich mit deinen Grünen-Netz-Zugangsdaten einzuloggen, ' .
        'versuch es einfach noch ein zweites Mal - möglicherweise war das nur ' .
        'ein temporärer Fehler seitens des Grünen Netzes.',
    'err_no_recovery'           => 'Es wurde kein Wiederherstellungs-Antrag innerhalb der letzten 24 Stunden gestellt.',
    'err_change_toolong'        => 'Die Änderungsanfrage ist schon zu lange her; ' .
        'bitte fordere eine neue Änderung an und rufe den Link innerhalb von 24 Stunden auf',
    'recover_mail_title'        => 'Antragsgrün: Passwort-Wiederherstellung',
    'recover_mail_body'         => "Hallo!\n\nDu hast eine Passwort-Wiederherstellung angefordert. " .
        "Um diese durchzuführen, rufe bitte folgenden Link auf und gib dort das neue Passwort ein:\n\n%URL%\n\n" .
        "Oder gib in dem Wiederherstellungs-Formular folgenden Code ein: %CODE%",
    'err_recover_mail_sent'     => 'Es wurde bereits eine Wiederherstellungs-E-Mail in den letzten 24 Stunden verschickt.',
    'err_emailchange_mail_sent' => 'Es wurde bereits eine E-Mail-Änderung in den letzten 24 Stunden beantragt.',
    'err_emailchange_notfound'  => 'Diese E-Mail-Änderung wurde nicht beantragt oder bereits durchgeführt.',
    'err_emailchange_flood'     => 'Zwischen zwei E-Mails müssen mindestens 5 Minuten liegen, um versehentliches E-Mail-Flooding zu verhindern',
    'emailchange_mail_title'    => 'Neue E-Mail-Adresse bestätigen',
    'emailchange_mail_body'     => "Hallo!\n\nDu hast eine E-Mail-Änderung beantragt. " .
        "Um diese durchzuführen, rufe bitte folgenden Link auf:\n\n%URL%\n\n",
    'emailchange_sent'          => 'Es wurde eine Bestätigungs-E-Mail an die angegebene Adresse geschickt. ' .
        'Bitte öffne den Link darin, um die neue E-Mail-Adresse zu aktivieren.',
    'emailchange_done'          => 'Die E-Mail-Adresse wurde wie gewünscht geändert.',
    'emailchange_requested'     => 'E-Mail-Adresse beantragt (noch nicht bestätigt)',
    'emailchange_call'          => 'ändern',
    'emailchange_resend'        => 'Neue Bestätigungs-Mail',
    'email_pp_replyto'          => 'Reply-To bei Verfahrensvorschlägen (vom Admin eingestellt)',
    'del_title'                 => 'Zugang löschen',
    'del_explanation'           => 'Hier kannst du diesen Zugang von Antragsgrün löschen. Du erhältst keine E-Mail-Benachrichtigungen mehr,
        ein Login ist auch nicht mehr möglich. Deine E-Mail-Adresse, Name, Passwort usw. werden damit aus unserem
        System gelöscht.<br>
        Eingebrachte (Änderungs-)Anträge bleiben aber erhalten. Um eingebrachte Anträge zu entfernen,
        wende dich bitte an die Administrator*innen der jeweiligen Unterseite.',
    'del_confirm'               => 'Löschen bestätigen',
    'del_do'                    => 'Löschen',
    'noti_greeting'             => 'Hallo %NAME%,',
    'noti_bye'                  => "Liebe Grüße,\n   Das Antragsgrün-Team\n\n--\n\n" .
        "Falls du diese Benachrichtigung abbestellen willst, kannst du das hier tun:\n",
    'noti_new_motion_title'     => '[Antragsgrün] Neuer Antrag:',
    'noti_new_motion_body'      => "Es wurde ein neuer Antrag eingereicht:\nAnlass: %CONSULTATION%\n" .
        "Name: %TITLE%\nAntragsteller*in: %INITIATOR%\nLink: %LINK%",
    'noti_new_amend_title'      => '[Antragsgrün] Neuer Änderungsantrag zu %TITLE%',
    'noti_new_amend_body'       => "Es wurde ein neuer Änderungsantrag eingereicht:\nAnlass: %CONSULTATION%\n" .
        "Antrag: %TITLE%\nLink: %LINK%",
    'noti_amend_mymotion'       => "Es wurde ein neuer Änderungsantrag zu deinem Antrag eingereicht:\nAnlass: %CONSULTATION%\n" .
        "Antrag: %TITLE%\nAntragsteller*in: %INITIATOR%\nLink: %LINK%\n%MERGE_HINT%",
    'noti_amend_mymotion_merge' => "\nWenn du diesem Änderungsantrag zustimmst, kannst du ihn in deinen Antrag übernehmen (\"In den Antrag übernehmen\" in der Sidebar)",
    'noti_new_comment_title'    => '[Antragsgrün] Neuer Kommentar zu %TITLE%',
    'noti_new_comment_body'     => "Es wurde ein neuer Kommentar zu %TITLE% geschrieben:\n%LINK%",
    'acc_grant_email_title'     => 'Antragsgrün-Zugriff',
    'acc_grant_email_userdata'  => "E-Mail / Benutzer*innenname: %EMAIL%\nPasswort: %PASSWORD%",

    'login_title'             => 'Login',
    'login_con_pwd_title'     => 'Login mit Veranstaltungs-Passwort',
    'login_con_pwd'           => 'Veranstaltungs-Passwort',
    'login_username_title'    => 'Login per Benutzer*innenname / Passwort',
    'login_create_account'    => 'Neuen Zugang anlegen',
    'login_username'          => 'E-Mail-Adresse / Benutzer*innenname',
    'login_email_placeholder' => 'E-Mail-Adresse',
    'login_password'          => 'Passwort',
    'login_password_rep'      => 'Passwort (Bestätigung)',
    'login_create_name'       => 'Dein Name',
    'login_captcha'           => 'Gib den angezeigten Code hier ein',
    'login_btn_login'         => 'Einloggen',
    'login_btn_create'        => 'Anlegen',
    'login_forgot_pw'         => 'Passwort vergessen?',
    'login_openid'            => 'OpenID-Login',
    'login_openid_url'        => 'OpenID-URL',
    'login_managed_hint'      => '<strong>Hinweis:</strong> neu angelegte Zugänge müssen zunächst von einer Administratorin bzw. einem Administratoren freigeschaltet werden.',
    'managed_account_ask_btn' => 'Berechtigung anfragen',
    'managed_account_asked'   => 'Berechtigung angefragt.',

    'acc_request_noti_subject' => 'Anfrage: Zugriff auf Antragsgrün-Seite',
    'acc_request_noti_body'    => 'Die Benutzerin / der Benutzer %USERNAME% (%EMAIL%) fragt an, Zugriff auf die Seite "%CONSULTATION%" zu bekommen. Auf folgender Seite kannst du die Anfrage ggf. bestätigen: %ACTIONLINK%',

    'login_confirm_registration' => 'Ich stimme der elektronischen Verarbeitung meiner freiwilligen Angaben durch Antragsgrün zu. Meine Angaben zu Name und E-Mail-Adresse dürfen dazu verwendet werden, mir für mich passende Informationen zukommen zu lassen. Ich kann diese Zustimmung jederzeit per Mail an info@antragsgruen.de oder per Schreiben an die im Impressum angegebene Adresse widerrufen.',

    'login_err_password'      => 'Falsches Passwort',
    'login_err_username'      => 'Benutzer*innenname nicht gefunden',
    'login_err_siteaccess'    => 'Das Login mit Benutzer*innenname und Passwort ist bei dieser Veranstaltung nicht möglich.',
    'login_err_captcha'       => 'Der eingegebene Code stimmte nicht mit dem Angezeigten überein.',
    'create_err_emailexists'  => 'Es existiert bereits ein Zugang mit dieser E-Mail-Adresse',
    'create_err_siteaccess'   => 'Das Anlegen von Accounts ist bei dieser Veranstaltung nicht möglich.',
    'create_err_emailinvalid' => 'Bitte gib eine gültige E-Mail-Adresse als Benutzer*innenname ein.',
    'create_err_pwdlength'    => 'Das Passwort muss mindestens %MINLEN% Buchstaben lang sein.',
    'create_err_pwdmismatch'  => 'Die beiden angegebenen Passwörter stimmen nicht überein.',
    'create_err_noname'       => 'Bitte gib deinen Namen ein.',
    'err_contact_required'    => 'Du musst eine Kontaktadresse angeben.',

    'create_emailconfirm_title' => 'Anmeldung bei Antragsgrün',
    'create_emailconfirm_msg'   =>
        "Hallo,\n\num deinen Antragsgrün-Zugang zu aktivieren, klicke entweder auf folgenden Link:\n" .
        "%BEST_LINK%\n\n"
        . "...oder gib, wenn du auf Antragsgrün danach gefragt wirst, folgenden Code ein: %CODE%\n\n"
        . "Liebe Grüße,\n\tDas Antragsgrün-Team.",

    'access_denied_title'  => 'Kein Zugriff',
    'access_denied_body'   => 'Dein Zugang ist für diese Seite nicht freigeschaltet.',
    'access_granted_email' => "Hallo,\n\ndu hast soeben Zugriff auf diese Veranstaltung bekommen:\n%LINK%\n\n"
        . "Liebe Grüße,\n\tDas Antragsgrün-Team.",

    'confirm_title'     => 'Zugang bestätigen',
    'confirm_username'  => 'E-Mail-Adresse / Benutzer*innenname',
    'confirm_mail_sent' => 'Dir wurde eben eine E-Mail an die angegebene Adresse geschickt.
                            Bitte bestätige den Empfang dieser E-Mail, indem du den Link darin aufrufst oder
                            hier den Code in der E-Mail eingibst.',
    'confirm_code'      => 'Bestätigungs-Code',
    'confirm_btn_do'    => 'Bestätigen',

    'confirmed_title'         => 'Zugang bestätigt',
    'confirmed_msg'           => 'Alles klar! Dein Zugang ist freigeschaltet und du kannst loslegen!',
    'confirmed_screening_msg' => 'Dein Zugang ist nun eingerichtet. Der Admin der Veranstaltung wurde benachrichtigt, ihn für diese Veranstaltung freizuschalten.',

    'recover_title'       => 'Passwort zurücksetzen',
    'recover_step1'       => '1. Gib deine E-Mail-Adresse ein',
    'recover_email_place' => 'meine@email-adresse.de',
    'recover_send_email'  => 'Bestätigungs-Mail schicken',
    'recover_step2'       => '2. Setze ein neues Passwort',
    'recover_email'       => 'E-Mail-Adresse',
    'recover_code'        => 'Bestätigungs-Code',
    'recover_new_pwd'     => 'Neues Passwort',
    'recover_set_pwd'     => 'Neues Passwort setzen',

    'recovered_title' => 'Passwort geändert',
    'recovered_msg'   => 'Alles klar! Dein Passwort wurde geändert.',

    'deleted_title' => 'Zugang gelöscht',
    'deleted_msg'   => 'Der Zugang wurde gelöscht.',

    'no_noti_title'        => 'Benachrichtigungen abbestellen',
    'no_noti_bc'           => 'Benachrichtigungen',
    'no_noti_unchanged'    => 'Benachrichtigungen unverändert lassen',
    'no_noti_consultation' => 'Benachrichtigungen dieser Veranstaltung (%NAME%) abbestellen',
    'no_noti_all'          => 'Alle Antragsgrün-Benachrichtigungen abbestellen',
    'no_noti_blocklist'    => 'Grundsätzlich keine E-Mails mehr an meine E-Mail-Adresse <small>(auch keine Passwort-Wiederherstellungs-Mails etc.)</small>',
    'no_noti_save'         => 'Speichern',

    'notification_title' => 'E-Mail-Benachrichtigungen',
    'notification_intro' => 'Pro Veranstaltung kann einzeln festgelegt werden, wie du per E-Mail über wichtige Ereignisse benachrichtigt werden willst:',

    'export_title' => 'Daten-Export',
    'export_intro' => 'Hier kannst du alle personenbezogene Daten, die in Antragsgrün über dich gespeichert sind, in einem maschinenlesbaren JSON-Format herunterladen.',
    'export_btn'   => 'Herunterladen',

    'group_template_siteadmin' => 'Seiten-Admin',
    'group_template_siteadmin_h' => 'Kann alle Veranstaltungen dieser Seite / Subdomain verwalten.',
    'group_template_consultationadmin' => 'Veranstaltungs-Admin',
    'group_template_consultationadmin_h' => 'Kann nur diese eine Veranstaltung verwalten.',
    'group_template_proposed' => 'Antragskommission',
    'group_template_proposed_h' => 'Kann die Verfahrensvorschläge bearbeiten, aber nicht die Anträge selbst.',
    'group_template_participant' => 'Teilnehmer*in',
    'group_template_participant_h' => 'Keine besonderen Berechtigungen. Nur relevant, falls der Zugriff auf diese Veranstaltung eingeschränkt ist.',
];
