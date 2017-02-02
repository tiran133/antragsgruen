define(["require","exports","../shared/AntragsgruenEditor","../shared/DraftSavingEngine"],function(e,t,i,n){"use strict";var o=function(){function e(){}return e.accept=function(t){$(t).hasClass("ice-ins")&&e.insertAccept(t),$(t).hasClass("ice-del")&&e.deleteAccept(t)},e.reject=function(t){$(t).hasClass("ice-ins")&&e.insertReject(t),$(t).hasClass("ice-del")&&e.deleteReject(t)},e.insertReject=function(e){var t,i=e.nodeName.toLowerCase();t="li"==i?$(e).parent():$(e),"ul"==i||"ol"==i||"li"==i||"blockquote"==i||"pre"==i||"p"==i?(t.css("overflow","hidden").height(t.height()),t.animate({height:"0"},250,function(){t.remove(),$(".collidingParagraph:empty").remove()})):t.remove()},e.insertAccept=function(e){var t=$(e);t.removeClass("ice-cts").removeClass("ice-ins").removeClass("appendHint"),"ul"!=e.nodeName.toLowerCase()&&"ol"!=e.nodeName.toLowerCase()||t.children().removeClass("ice-cts").removeClass("ice-ins").removeClass("appendHint"),"li"==e.nodeName.toLowerCase()&&t.parent().removeClass("ice-cts").removeClass("ice-ins").removeClass("appendHint"),"ins"==e.nodeName.toLowerCase()&&t.replaceWith(t.html())},e.deleteReject=function(e){var t=$(e);t.removeClass("ice-cts").removeClass("ice-del").removeClass("appendHint"),"ul"!=e.nodeName.toLowerCase()&&"ol"!=e.nodeName.toLowerCase()||t.children().removeClass("ice-cts").removeClass("ice-del").removeClass("appendHint"),"li"==e.nodeName.toLowerCase()&&t.parent().removeClass("ice-cts").removeClass("ice-del").removeClass("appendHint"),"del"==e.nodeName.toLowerCase()&&t.replaceWith(t.html())},e.deleteAccept=function(e){var t,i=e.nodeName.toLowerCase();t="li"==i?$(e).parent():$(e),"ul"==i||"ol"==i||"li"==i||"blockquote"==i||"pre"==i||"p"==i?(t.css("overflow","hidden").height(t.height()),t.animate({height:"0"},250,function(){t.remove(),$(".collidingParagraph:empty").remove()})):t.remove()},e}(),a=function(){function e(e,t,i,n){this.$element=e,this.parent=n;var o=null,a=null;e.popover({container:"body",animation:!1,trigger:"manual",placement:function(n){var r=$(n);return window.setTimeout(function(){var n=r.width(),s=e.offset().top,c=e.height();null===o&&n>0&&(o=t-n/2,a=i+10,a<s+19&&(a=s+19),a>s+c&&(a=s+c)),r.css("left",o+"px"),r.css("top",a+"px")},1),"bottom"},html:!0,content:this.getContent.bind(this)}),e.popover("show");var r=e.find("> .popover");r.on("mousemove",function(e){e.stopPropagation()}),window.setTimeout(this.removePopupIfInactive.bind(this),1e3)}return e.prototype.getContent=function(){var e,t=this.$element,i=t.data("cid");void 0==i&&(i=t.parent().data("cid")),t.parents(".texteditor").first().find("[data-cid="+i+"]").addClass("hover"),e="<div>",e+='<button type="button" class="accept btn btn-sm btn-default"></button>',e+='<button type="button" class="reject btn btn-sm btn-default"></button>',e+='<a href="#" class="btn btn-small btn-default opener" target="_blank"><span class="glyphicon glyphicon-new-window"></span></a>',e+='<div class="initiator" style="font-size: 0.8em;"></div>',e+="</div>";var n=$(e);if(n.find(".opener").attr("href",t.data("link")).attr("title",__t("merge","title_open_in_blank")),n.find(".initiator").text(__t("merge","initiated_by")+": "+t.data("username")),t.hasClass("ice-ins"))n.find("button.accept").text(__t("merge","change_accept")).click(this.accept.bind(this)),n.find("button.reject").text(__t("merge","change_reject")).click(this.reject.bind(this));else if(t.hasClass("ice-del"))n.find("button.accept").text(__t("merge","change_accept")).click(this.accept.bind(this)),n.find("button.reject").text(__t("merge","change_reject")).click(this.reject.bind(this));else if("li"==t[0].nodeName.toLowerCase()){var o=t.parent();o.hasClass("ice-ins")?(n.find("button.accept").text(__t("merge","change_accept")).click(this.accept.bind(this)),n.find("button.reject").text(__t("merge","change_reject")).click(this.reject.bind(this))):o.hasClass("ice-del")?(n.find("button.accept").text(__t("merge","change_accept")).click(this.accept.bind(this)),n.find("button.reject").text(__t("merge","change_reject")).click(this.reject.bind(this))):console.log("unknown",o)}else console.log("unknown",t),alert("unknown");return n},e.prototype.removePopupIfInactive=function(){return this.$element.is(":hover")?window.setTimeout(this.removePopupIfInactive.bind(this),1e3):$("body").find(".popover:hover").length>0?window.setTimeout(this.removePopupIfInactive.bind(this),1e3):void this.destroy()},e.prototype.affectedChangesets=function(){var e=this.$element.data("cid");return void 0==e&&(e=this.$element.parent().data("cid")),this.$element.parents(".texteditor").find("[data-cid="+e+"]")},e.prototype.performActionWithUI=function(e){var t=window.scrollX,i=window.scrollY;this.parent.saveEditorSnapshot(),this.destroy(),e.call(this),$(".collidingParagraph:empty").remove(),this.parent.focusTextarea(),window.scrollTo(t,i)},e.prototype.accept=function(){var e=this;this.performActionWithUI(function(){e.affectedChangesets().each(function(e,t){o.accept(t)})})},e.prototype.reject=function(){var e=this;this.performActionWithUI(function(){e.affectedChangesets().each(function(e,t){o.reject(t)})})},e.prototype.destroy=function(){this.$element.popover("hide").popover("destroy");var e=this.$element.data("cid");void 0==e&&(e=this.$element.parent().data("cid")),this.$element.parents(".texteditor").first().find("[data-cid="+e+"]").removeClass("hover")},e}(),r=function(){function e(e,t,i){this.$element=e,this.parent=i,e.popover({container:"body",animation:!1,trigger:"manual",placement:"bottom",html:!0,title:__t("merge","colliding_title"),content:this.getContent.bind(this)}),e.popover("show");var n=$("body > .popover"),o=n.width();n.css("left",Math.floor(e.offset().left+t-o/2+20)+"px"),n.on("mousemove",function(e){e.stopPropagation()}),window.setTimeout(this.removePopupIfInactive.bind(this),500)}return e.prototype.removePopupIfInactive=function(){return this.$element.is(":hover")?window.setTimeout(this.removePopupIfInactive.bind(this),1e3):$("body").find(".popover:hover").length>0?window.setTimeout(this.removePopupIfInactive.bind(this),1e3):void this.destroy()},e.prototype.performActionWithUI=function(e){this.parent.saveEditorSnapshot(),this.destroy(),e.call(this),$(".collidingParagraph:empty").remove(),this.parent.focusTextarea()},e.prototype.getContent=function(){var e=this,t=this.$element,i='<div style="white-space: nowrap;"><button type="button" class="btn btn-small btn-default delTitle"><span style="text-decoration: line-through">'+__t("merge","title")+"</span></button>";i+='<button type="button" class="reject btn btn-small btn-default"><span class="glyphicon glyphicon-trash"></span></button>',i+='<a href="#" class="btn btn-small btn-default opener" target="_blank"><span class="glyphicon glyphicon-new-window"></span></a>',i+='<div class="initiator" style="font-size: 0.8em;"></div>',i+="</div>";var n=$(i);return n.find(".delTitle").attr("title",__t("merge","title_del_title")),n.find(".reject").attr("title",__t("merge","title_del_colliding")),n.find("a.opener").attr("href",t.find("a").attr("href")).attr("title",__t("merge","title_open_in_blank")),n.find(".initiator").text(__t("merge","initiated_by")+": "+t.parents(".collidingParagraph").data("username")),n.find(".reject").click(function(){e.performActionWithUI.call(e,function(){var e=t.parents(".collidingParagraph");e.css({overflow:"hidden"}).height(e.height()),e.animate({height:"0"},250,function(){e.remove()})})}),n.find(".delTitle").click(function(){e.performActionWithUI.call(e,function(){t.remove()})}),n},e.prototype.destroy=function(){var e=this.$element.data("cid");void 0==e&&(e=this.$element.parent().data("cid")),this.$element.parents(".texteditor").first().find("[data-cid="+e+"]").removeClass("hover"),this.$element.popover("hide").popover("destroy")},e}(),s=function(){function e(e,t){var n=this;this.$holder=e,this.rootObject=t;var o=e.find(".texteditor"),a=new i.AntragsgruenEditor(o.attr("id"));this.texteditor=a.getEditor(),this.rootObject.addSubmitListener(function(){e.find("textarea.raw").val(n.texteditor.getData()),e.find("textarea.consolidated").val(n.texteditor.getData())}),this.prepareText(),this.initializeTooltips(),this.$holder.find(".acceptAllChanges").click(this.acceptAll.bind(this)),this.$holder.find(".rejectAllChanges").click(this.rejectAll.bind(this))}return e.prototype.prepareText=function(){var e=$("<div>"+this.texteditor.getData()+"</div>");e.find("ul.appendHint, ol.appendHint").each(function(e,t){var i=$(t),n=i.data("append-hint");i.find("> li").addClass("appendHint").attr("data-append-hint",n).attr("data-link",i.data("link")).attr("data-username",i.data("username")),i.removeClass("appendHint").removeData("append-hint")});var t=e.html();this.texteditor.setData(t)},e.prototype.initializeTooltips=function(){var e=this;this.$holder.on("mouseover",".collidingParagraphHead",function(t){$(t.target).parents(".collidingParagraph").addClass("hovered"),c.activePopup&&c.activePopup.destroy(),c.activePopup=new r($(t.currentTarget),c.currMouseX,e)}).on("mouseout",".collidingParagraphHead",function(e){$(e.target).parents(".collidingParagraph").removeClass("hovered")}),this.$holder.on("mouseover",".appendHint",function(t){c.activePopup&&c.activePopup.destroy(),c.activePopup=new a($(t.target),t.pageX,t.pageY,e)})},e.prototype.acceptAll=function(){this.texteditor.fire("saveSnapshot"),this.$holder.find(".collidingParagraph").each(function(e,t){var i=$(t);i.find(".collidingParagraphHead").remove(),i.replaceWith(i.children())}),this.$holder.find(".ice-ins").each(function(e,t){o.insertAccept(t)}),this.$holder.find(".ice-del").each(function(e,t){o.deleteAccept(t)})},e.prototype.rejectAll=function(){this.texteditor.fire("saveSnapshot"),this.$holder.find(".collidingParagraph").each(function(e,t){$(t).remove()}),this.$holder.find(".ice-ins").each(function(e,t){o.insertReject(t)}),this.$holder.find(".ice-del").each(function(e,t){o.deleteReject(t)})},e.prototype.saveEditorSnapshot=function(){this.texteditor.fire("saveSnapshot")},e.prototype.focusTextarea=function(){this.$holder.find(".texteditor").focus()},e}(),c=function(){function e(t){var i=this;this.$form=t,$(".wysiwyg-textarea").each(function(t,n){new s($(n),i),$(n).on("mousemove",function(t){e.currMouseX=t.offsetX})});var o=$("#draftHint"),a=o.data("orig-motion-id"),r=o.data("new-motion-id");new n.DraftSavingEngine(t,o,"motionmerge_"+a+"_"+r)}return e.prototype.addSubmitListener=function(e){this.$form.submit(e)},e}();c.activePopup=null,c.currMouseX=null,new c($(".motionMergeForm"))});
//# sourceMappingURL=MotionMergeAmendments.js.map
