define(["require","exports","./MotionSupporterEdit","../shared/AntragsgruenEditor","../shared/AmendmentEditSinglePara","./MotionSupporterEdit"],(function(t,e,i,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AmendmentEdit=void 0;e.AmendmentEdit=class{constructor(){this.lang=$("html").attr("lang"),this.$editTextCaller=$("#amendmentTextEditCaller"),$("#amendmentDateCreationHolder").datetimepicker({locale:this.lang}),$("#amendmentDateResolutionHolder").datetimepicker({locale:this.lang}),$("#resolutionDateHolder").datetimepicker({locale:$("#resolutionDate").data("locale"),format:"L"}),this.$editTextCaller.find("button").on("click",this.textEditCalled.bind(this)),$(".wysiwyg-textarea .resetText").on("click",(t=>{let e=$(t.currentTarget).parents(".wysiwyg-textarea").find(".texteditor");window.CKEDITOR.instances[e.attr("id")].setData(e.data("original-html")),$(t.currentTarget).parents(".modifiedActions").addClass("hidden")})),$(".amendmentDeleteForm").on("submit",(function(t,e){if(e&&(e.confirmed,1)&&!0===e.confirmed)return;let i=$(this);t.preventDefault(),bootbox.confirm(__t("admin","delAmendmentConfirm"),(function(t){t&&i.trigger("submit",{confirmed:!0})}))})),this.initVotingFunctions(),new i.MotionSupporterEdit($("#motionSupporterHolder"))}textEditCalledMultiPara(){$(".wysiwyg-textarea").each((function(){let t=$(this).find(".texteditor"),e=new n.AntragsgruenEditor(t.attr("id")).getEditor();t.parents("form").on("submit",(function(){t.parent().find("textarea.raw").val(e.getData()),void 0!==e.plugins.lite&&(e.plugins.lite.findPlugin(e).acceptAll(),t.parent().find("textarea.consolidated").val(e.getData()))}))}))}textEditCalled(){this.$editTextCaller.addClass("hidden"),$("#amendmentTextEditHolder").removeClass("hidden"),this.$editTextCaller.data("multiple-paragraphs")?this.textEditCalledMultiPara():new a.AmendmentEditSinglePara,$("#amendmentUpdateForm").append("<input type='hidden' name='edittext' value='1'>")}initVotingFunctions(){const t=$(".votingDataCloser"),e=$(".votingDataOpener"),i=$(".votingDataHolder");e.on("click",(()=>{t.removeClass("hidden"),e.addClass("hidden"),i.removeClass("hidden")})),t.on("click",(()=>{t.addClass("hidden"),e.removeClass("hidden"),i.addClass("hidden")}))}}}));
//# sourceMappingURL=AmendmentEdit.js.map
