<?php

use app\components\UrlHelper;

ob_start();
?>

<article class="speechUser">
    <header class="widgetTitle">{{ title }}</header>

    <div class="activeSpeaker">
        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
        <span class="title"><?= Yii::t('speech', 'current') ?>:</span>
        <span class="name" v-if="activeSpeaker">
            {{ activeSpeaker.name }}
            <span class="label label-success" v-if="isMe(activeSpeaker)"><?= Yii::t('speech', 'you') ?></span>
        </span>
        <span class="nobody" v-if="!activeSpeaker">
            <?= Yii::t('speech', 'current_nobody') ?>
        </span>
    </div>
    <div v-if="upcomingSpeakers.length > 0" class="upcomingSpeaker">
        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
        <?= Yii::t('speech', 'next_speaker') ?>:
        <ul class="upcomingSpeakerList">
            <li v-for="speaker in upcomingSpeakers">
                <span class="name">{{ speaker.name }}</span><!-- Fight unwanted whitespace
                --><span class="label label-success" v-if="isMe(speaker)"><?= Yii::t('speech', 'you') ?></span><!-- Fight unwanted whitespace
                -->
                <button type="button" class="btn btn-link" v-if="isMe(speaker)" @click="removeMeFromQueue($event)"
                        title="<?= Yii::t('speech', 'remove_me') ?>">
                    <span class="glyphicon glyphicon-trash" aria-label="<?= Yii::t('speech', 'remove_me') ?>"></span>
                </button>
            </li>
        </ul>
    </div>

    <section class="waiting waitingSingle" v-if="queue.subqueues.length === 1" aria-label="<?= Yii::t('speech', 'waiting_aria_1') ?>">
        <header>
            <div v-if="queue.subqueues[0].iAmOnList" class="appliedMe">
                <span class="label label-success">Beworben</span>
                <button type="button" class="btn btn-link" @click="removeMeFromQueue($event)" title="<?= Yii::t('speech', 'remove_me') ?>">
                    <span class="glyphicon glyphicon-trash" aria-label="<?= Yii::t('speech', 'remove_me') ?>"></span>
                </button>
            </div>

            <button class="btn btn-default btn-xs" type="button"
                    v-if="!queue.iAmOnList && showApplicationForm !== queue.subqueues[0].id"
                    @click="onShowApplicationForm($event, queue.subqueues[0])"
            >
                <?= Yii::t('speech', 'apply') ?>
            </button>
            <form @submit="register($event, queue.subqueues)" v-if="!queue.subqueues[0].iAmOnList && showApplicationForm === queue.subqueues[0].id">
                <label :for="'speechRegisterName' + queue.subqueues[0].id" class="sr-only"><?= Yii::t('speech', 'apply_name') ?></label>
                <div class="input-group">
                    <input type="text" class="form-control" v-model="registerName" :id="'speechRegisterName' + queue.subqueues[0].id"
                           ref="adderNameInput">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="submit"><?= Yii::t('speech', 'apply_do') ?></button>
                    </span>
                </div>
            </form>
        </header>
    </section>

    <section class="waiting waitingMultiple" v-if="queue.subqueues.length > 1" aria-label="<?= Yii::t('speech', 'waiting_aria_x') ?>">
        <header>
            <span class="glyphicon glyphicon-time"></span>
            <?= Yii::t('speech', 'waiting_list_x') ?>
        </header>
        <div v-for="subqueue in queue.subqueues" class="subqueue">
            <div class="name">
                {{ subqueue.name }}
            </div>

            <div class="number" :aria-label="numAppliedTitle(subqueue)" :title="numAppliedTitle(subqueue)">{{ subqueue.numApplied }}</div>

            <div v-if="subqueue.iAmOnList" class="appliedMe">
                <span class="label label-success">Beworben</span>
                <button type="button" class="btn btn-link" @click="removeMeFromQueue($event)" title="<?= Yii::t('speech', 'remove_me') ?>">
                    <span class="glyphicon glyphicon-trash" aria-label="<?= Yii::t('speech', 'remove_me') ?>"></span>
                </button>
            </div>

            <button class="btn btn-default btn-xs applyBtn" type="button"
                    v-if="queue.isOpen && !queue.iAmOnList && showApplicationForm !== subqueue.id"
                    @click="onShowApplicationForm($event, subqueue)"
            >
                <?= Yii::t('speech', 'apply') ?>
            </button>
            <form @submit="register($event, subqueue)" v-if="queue.isOpen && !queue.iAmOnList && showApplicationForm === subqueue.id">
                <label :for="'speechRegisterName' + subqueue.id" class="sr-only"><?= Yii::t('speech', 'apply_name') ?></label>
                <div class="input-group">
                    <input type="text" class="form-control" v-model="registerName" :id="'speechRegisterName' + subqueue.id" ref="adderNameInput">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="submit"><?= Yii::t('speech', 'apply_do') ?></button>
                    </span>
                </div>
            </form>
        </div>
    </section>
</article>


<?php
$html          = ob_get_clean();
$pollUrl       = UrlHelper::createUrl('speech/poll');
$registerUrl   = UrlHelper::createUrl('speech/register');
$unregisterUrl = UrlHelper::createUrl('speech/unregister');
?>

<script>
    Vue.component('speech-user-footer-widget', {
        template: <?= json_encode($html) ?>,
        props: ['queue', 'csrf', 'user', 'title'],
        data() {
            console.log(JSON.parse(JSON.stringify(this.queue)));
            return {
                registerName: this.user.name,
                showApplicationForm: false, // "null" is already taken by the default form
                pollingId: null
            };
        },
        computed: {
            activeSpeaker: function () {
                const active = this.queue.slots.filter(function (slot) {
                    return slot.dateStopped === null && slot.dateStarted !== null;
                });
                return (active.length > 0 ? active[0] : null);
            },
            upcomingSpeakers: function () {
                return this.queue.slots.filter(function (slot) {
                    return slot.dateStopped === null && slot.dateStarted === null;
                });
            }
        },
        methods: {
            isMe: function (slot) {
                return slot.userId === this.user.id;
            },
            numAppliedTitle: function (subqueue) {
                if (subqueue.numApplied === 1) {
                    const msg = "" + <?= json_encode(Yii::t('speech', 'persons_waiting_1')) ?>;
                    return msg;
                } else {
                    const msg = "" + <?= json_encode(Yii::t('speech', 'persons_waiting_x')) ?>;
                    return msg.replace(/%NUM%/, subqueue.numApplied);
                }
            },
            register: function ($event, subqueue) {
                $event.preventDefault();

                const widget = this;
                $.post(<?= json_encode($registerUrl) ?>, {
                    queue: this.queue.id,
                    subqueue: subqueue.id,
                    username: this.registerName,
                    _csrf: this.csrf,
                }, function (data) {
                    if (!data['success']) {
                        alert(data['message']);
                        return;
                    }

                    widget.queue = data['queue'];
                    widget.showApplicationForm = false;
                }).catch(function (err) {
                    alert(err.responseText);
                });
            },
            onShowApplicationForm: function ($event, subqueue) {
                $event.preventDefault();

                this.showApplicationForm = subqueue.id;
                this.$nextTick(function () {
                    this.$refs.adderNameInput[0].focus();
                });
            },
            removeMeFromQueue: function ($event) {
                $event.preventDefault();

                const widget = this;
                $.post(<?= json_encode($unregisterUrl) ?>, {
                    queue: this.queue.id,
                    _csrf: this.csrf,
                }, function (data) {
                    if (!data['success']) {
                        alert(data['message']);
                        return;
                    }

                    widget.queue = data['queue'];
                }).catch(function (err) {
                    alert(err.responseText);
                });
            },
            reloadData: function () {
                const widget = this;
                $.get(<?= json_encode($pollUrl) ?>, {queue: widget.queue.id}, function (data) {
                    if (!data['success']) {
                        return;
                    }
                    widget.queue = data['queue'];
                });
            },
            startPolling: function () {
                const widget = this;
                this.pollingId = window.setInterval(function () {
                    widget.reloadData();
                }, 3000);
            }
        },
        beforeDestroy() {
            window.clearInterval(this.pollingId)
        },
        created() {
            this.startPolling()
        }
    });
</script>
