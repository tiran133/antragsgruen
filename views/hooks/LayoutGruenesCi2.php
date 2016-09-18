<?php

namespace app\views\hooks;

use app\components\UrlHelper;
use yii\helpers\Html;

class LayoutGruenesCi2 extends LayoutHooks
{
    use StdFunctionTrait;

    /**
     * @return string
     */
    public function logoRow()
    {
        $out = '<header class="row logo" role="banner">' .
            '<p id="logo"><a href="' . Html::encode(UrlHelper::homeUrl()) . '" title="Zur Startseite">' .
            '<img src="/img/gruenes_ci2_logo.png" width="185" height="100" alt="Bündnis 90 / Die GRÜNEN Logo">' .
            '</a></p>' .
            '<div class="hgroup">' .
            '<h1 id="site-title"><span>' .
            '<a href="' . Html::encode(UrlHelper::homeUrl()) . '" rel="home">Antragsgrün</a>' .
            '</span></h1>' .
            '<h2 id="site-description">Anträge zur BDK 2016</h2>' .
            '</div>' .
            '</header>';

        return $out;
    }

    /**
     * @return string
     */
    public function beforeContent()
    {
        $out = '<section class="navwrap">' .
            '<nav role="navigation" class="pos" id="mainmenu"><h6 class="unsichtbar">Hauptmenü:</h6>' .
            '<div class="navigation nav-fallback clearfix">';
        $out .= $this->getStdNavbarHeader();
        $out .= '</div></nav>';
        $out .= $this->breadcrumbs();
        $out .= '</section>';
        return $out;
    }

    /**
     * @return string
     */
    public function endPage()
    {
        return $this->footerLine();
    }
}
