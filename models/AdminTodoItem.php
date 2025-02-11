<?php

namespace app\models;

use app\models\settings\AntragsgruenApp;
use app\models\settings\PrivilegeQueryContext;
use app\models\settings\Privileges;
use app\components\{Tools, UrlHelper};
use app\models\db\{Amendment, AmendmentComment, Consultation, Motion, MotionComment, User};

class AdminTodoItem
{
    /** @var string */
    public string $todoId;
    public string $title;
    public string $action;
    public string $link;
    public string $description;
    public int $timestamp;

    public function __construct(string $todoId, string $title, string $action, string $link, int $timestamp, ?string $description = null)
    {
        $this->todoId      = $todoId;
        $this->link        = $link;
        $this->title       = $title;
        $this->action      = $action;
        $this->timestamp   = $timestamp;
        $this->description = $description;
    }

    private static array $todoCache = [];

    /**
     * @param AdminTodoItem[] $todo
     *
     * @return AdminTodoItem[]
     */
    private static function addMissingStatutesItem(Consultation $consultation, array $todo): array
    {
        if (!User::havePrivilege($consultation, Privileges::PRIVILEGE_CONSULTATION_SETTINGS, null)) {
            return [];
        }

        foreach ($consultation->motionTypes as $motionType) {
            if (!$motionType->amendmentsOnly) {
                continue;
            }
            if (count($motionType->getAmendableOnlyMotions(true, true)) === 0) {
                $description = \Yii::t('admin', 'todo_statutes_create');
                $todo[] = new AdminTodoItem(
                    'statutesCreate' . $motionType->id,
                    $motionType->titlePlural,
                    '',
                    UrlHelper::createUrl(['/admin/motion-type/type', 'motionTypeId' => $motionType->id]),
                    0,
                    $description
                );
            }
        }
        return $todo;
    }

    /**
     * @param AdminTodoItem[] $todo
     *
     * @return AdminTodoItem[]
     */
    private static function addScreeningMotionsItems(Consultation $consultation, array $todo): array
    {
        $motions = Motion::getScreeningMotions($consultation);
        foreach ($motions as $motion) {
            if (!User::havePrivilege($consultation, Privileges::PRIVILEGE_SCREENING, PrivilegeQueryContext::motion($motion))) {
                continue;
            }

            $description = \Yii::t('admin', 'todo_from') . ': ' . $motion->getInitiatorsStr();
            $todo[]      = new AdminTodoItem(
                'motionScreen' . $motion->id,
                $motion->getTitleWithPrefix(),
                str_replace('%TYPE%', $motion->getMyMotionType()->titleSingular, \Yii::t('admin', 'todo_motion_screen')),
                UrlHelper::createUrl(['/admin/motion/update', 'motionId' => $motion->id]),
                Tools::dateSql2timestamp($motion->dateCreation),
                $description
            );
        }
        return $todo;
    }

    /**
     * @param AdminTodoItem[] $todo
     *
     * @return AdminTodoItem[]
     */
    private static function addScreeningAmendmentItems(Consultation $consultation, array $todo): array
    {
        $amendments = Amendment::getScreeningAmendments($consultation);
        foreach ($amendments as $amend) {
            if (!User::havePrivilege($consultation, Privileges::PRIVILEGE_SCREENING, PrivilegeQueryContext::amendment($amend))) {
                continue;
            }

            $description = \Yii::t('admin', 'todo_from') . ': ' . $amend->getInitiatorsStr();
            $todo[]      = new AdminTodoItem(
                'amendmentsScreen' . $amend->id,
                $amend->getTitle(),
                \Yii::t('admin', 'todo_amendment_screen'),
                UrlHelper::createUrl(['/admin/amendment/update', 'amendmentId' => $amend->id]),
                Tools::dateSql2timestamp($amend->dateCreation),
                $description
            );
        }
        return $todo;
    }

    /**
     * @param AdminTodoItem[] $todo
     *
     * @return AdminTodoItem[]
     */
    private static function addScreeningMotionComments(Consultation $consultation, array $todo): array
    {
        if (!User::havePrivilege($consultation, Privileges::PRIVILEGE_SCREENING, null)) {
            return [];
        }

        $comments = MotionComment::getScreeningComments($consultation);
        foreach ($comments as $comment) {
            $description = \Yii::t('admin', 'todo_from') . ': ' . $comment->name;
            $todo[]      = new AdminTodoItem(
                'motionCommentScreen' . $comment->id,
                \Yii::t('admin', 'todo_comment_to') . ': ' . $comment->getIMotion()->getTitleWithPrefix(),
                \Yii::t('admin', 'todo_comment_screen'),
                $comment->getLink(),
                Tools::dateSql2timestamp($comment->dateCreation),
                $description
            );
        }
        return $todo;
    }

    /**
     * @param AdminTodoItem[] $todo
     *
     * @return AdminTodoItem[]
     */
    private static function addScreeningAmendmentComments(Consultation $consultation, array $todo): array
    {
        if (!User::havePrivilege($consultation, Privileges::PRIVILEGE_SCREENING, null)) {
            return [];
        }

        $comments = AmendmentComment::getScreeningComments($consultation);
        foreach ($comments as $comment) {
            $description = \Yii::t('admin', 'todo_from') . ': ' . $comment->name;
            $todo[]      = new AdminTodoItem(
                'amendmentCommentScreen' . $comment->id,
                \Yii::t('admin', 'todo_comment_to') . ': ' . $comment->getIMotion()->getTitle(),
                \Yii::t('admin', 'todo_comment_screen'),
                $comment->getLink(),
                Tools::dateSql2timestamp($comment->dateCreation),
                $description
            );
        }
        return $todo;
    }

    private static function getUnsortedItems(Consultation $consultation): array
    {
        foreach (AntragsgruenApp::getActivePlugins() as $plugin) {
            $todo = $plugin::getAdminTodoItems($consultation, User::getCurrentUser());
            if ($todo !== null) {
                return $todo;
            }
        }

        $todo = [];
        $todo = self::addMissingStatutesItem($consultation, $todo);
        $todo = self::addScreeningMotionsItems($consultation, $todo);
        $todo = self::addScreeningAmendmentItems($consultation, $todo);
        $todo = self::addScreeningMotionComments($consultation, $todo);
        $todo = self::addScreeningAmendmentComments($consultation, $todo);

        return $todo;
    }

    /**
     * @return AdminTodoItem[]
     */
    public static function getConsultationTodos(?Consultation $consultation): array
    {
        if (!$consultation) {
            return [];
        }

        if (isset(self::$todoCache[$consultation->id])) {
            return self::$todoCache[$consultation->id];
        }

        $todo = self::getUnsortedItems($consultation);

        usort($todo, function (AdminTodoItem $todo1, AdminTodoItem $todo2) {
            return $todo1->timestamp <=> $todo2->timestamp;
        });

        self::$todoCache[$consultation->id] = $todo;

        return $todo;
    }
}
