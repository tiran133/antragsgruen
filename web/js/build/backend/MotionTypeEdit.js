var MotionTypeEdit=function(){function e(){var e=$("#typeSupportType");e.on("changed.fu.selectlist",function(){var a=e.find("input").val();e.find('li[data-value="'+a+'"]').data("has-supporters")?($("#typeMinSupportersRow").removeClass("hidden"),$("#typeAllowMoreSupporters").removeClass("hidden")):($("#typeMinSupportersRow").addClass("hidden"),$("#typeAllowMoreSupporters").addClass("hidden"))}).trigger("changed.fu.selectlist"),$(".deleteTypeOpener a").on("click",function(e){e.preventDefault(),$(".deleteTypeForm").removeClass("hidden"),$(".deleteTypeOpener").addClass("hidden")}),$('[data-toggle="tooltip"]').tooltip(),this.initSectionList(),this.initDeadlines()}return e.prototype.initDeadlines=function(){$("#deadlineFormTypeComplex input").change(function(e){$(e.currentTarget).prop("checked")?($(".deadlineTypeSimple").addClass("hidden"),$(".deadlineTypeComplex").removeClass("hidden")):($(".deadlineTypeSimple").removeClass("hidden"),$(".deadlineTypeComplex").addClass("hidden"))}).trigger("change"),$(".datetimepicker").each(function(e,a){$(a).datetimepicker({locale:$(a).find("input").data("locale")})}),$(".deadlineHolder").each(function(e,a){var t=$(a);t.find(".deadlineAdder").click(function(){var e=$(".deadlineRowTemplate").html();e=e.replace(/TEMPLATE/,"motions");var a=$(e);t.find(".deadlineList").append(a),a.find(".datetimepicker").each(function(e,a){$(a).datetimepicker({locale:$(a).find("input").data("locale")})})}),t.on("click",".delRow",function(e){$(e.currentTarget).parents(".deadlineEntry").remove()})})},e.prototype.initSectionList=function(){var e=$("#sectionsList"),a=0;e.data("sortable",Sortable.create(e[0],{handle:".drag-handle",animation:150})),e.on("click","a.remover",function(e){e.preventDefault();var a=$(this).parents("li").first(),t=a.data("id");bootbox.confirm(__t("admin","deleteMotionSectionConfirm"),function(e){e&&($(".adminTypeForm").append('<input type="hidden" name="sectionsTodelete[]" value="'+t+'">'),a.remove())})}),e.on("change",".sectionType",function(){var e=$(this).parents("li").first(),a=parseInt($(this).val());e.removeClass("title textHtml textSimple image tabularData"),0===a?e.addClass("title"):1===a?e.addClass("textSimple"):2===a?e.addClass("textHtml"):3===a?e.addClass("image"):4===a&&(e.addClass("tabularData"),0==e.find(".tabularDataRow ul > li").length&&e.find(".tabularDataRow .addRow").click().click().click())}),e.find(".sectionType").trigger("change"),e.on("change",".maxLenSet",function(){var e=$(this).parents("li").first();$(this).prop("checked")?e.addClass("maxLenSet").removeClass("no-maxLenSet"):e.addClass("no-maxLenSet").removeClass("maxLenSet")}),e.find(".maxLenSet").trigger("change"),$(".sectionAdder").on("click",function(t){t.preventDefault();var n=$("#sectionTemplate").html();n=n.replace(/#NEW#/g,"new"+a);var i=$(n);e.append(i),a+=1,e.find(".sectionType").trigger("change"),e.find(".maxLenSet").trigger("change");var d=i.find(".tabularDataRow ul");d.data("sortable",Sortable.create(d[0],{handle:".drag-data-handle",animation:150}))});var t=0;e.on("click",".tabularDataRow .addRow",function(e){e.preventDefault();var a=$(this),n=a.parent().find("ul"),i=$(a.data("template").replace(/#NEWDATA#/g,"new"+t));t+=1,i.removeClass("no0").addClass("no"+n.children().length),n.append(i),i.find("input").focus()}),e.on("click",".tabularDataRow .delRow",function(e){var a=$(this);e.preventDefault(),bootbox.confirm(__t("admin","deleteDataConfirm"),function(e){e&&a.parents("li").first().remove()})}),e.find(".tabularDataRow ul").each(function(){$(this).data("sortable",Sortable.create(this,{handle:".drag-data-handle",animation:150}))})},e}();new MotionTypeEdit;
//# sourceMappingURL=MotionTypeEdit.js.map
