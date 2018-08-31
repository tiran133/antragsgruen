<?php

namespace app\models\settings;

class MotionType implements \JsonSerializable
{
    use JsonConfigTrait;

    /** @var string */
    public $pdfIntroduction   = '';
    public $cssIcon           = '';
    public $motionTitlePrefix = '';

    /** @var bool */
    public $layoutTwoCols = false;
}
