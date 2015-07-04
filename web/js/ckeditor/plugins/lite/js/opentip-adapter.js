﻿(function(x){var e,t,s,r,p,y,u,v,z,w,o=[].slice,A=[].indexOf||function(b){for(var a=0,c=this.length;a<c;a++)if(a in this&&this[a]===b)return a;return-1},B={}.hasOwnProperty;e=function(){function b(a,c,d,g){var n,f,e,j=this;this.id=++b.lastId;this.adapter=b.adapter;g=this.adapter.clone(g);"object"===typeof c?(g=c,c=d=void 0):"object"===typeof d&&(g=d,d=void 0);this._element=a;this._boundingElement=g.boundingElement;this._document=a.ownerDocument;this._window=this._document.defaultView;this._body=this._document.body;
b.addTip(this);n=b.getTips(a);n.push(this);b.setTips(a,n);this.triggerElement=this.adapter.wrap(a);if(1<this.triggerElement.length)throw Error("You can't call Opentip on multiple elements.");if(1>this.triggerElement.length)throw Error("Invalid element.");this.visible=this.loading=this.loaded=!1;this.currentPosition={left:0,top:0};this.dimensions={width:100,height:50};this.content="";this.redraw=!0;this.currentObservers={showing:!1,visible:!1,hiding:!1,hidden:!1};null!=d&&(g.title=d);null!=c&&this.setContent(c);
null==g["extends"]&&(g["extends"]=null!=g.style?g.style:b.defaultStyle);a=[g];for(d=g;d["extends"];){c=d["extends"];d=b.styles[c];if(null==d)throw Error("Invalid style: "+c);a.unshift(d);null!=d["extends"]||"standard"===c||(d["extends"]="standard")}g=(e=this.adapter).extend.apply(e,[{}].concat(o.call(a)));g.hideTriggers=function(){var a,d,c,b;c=g.hideTriggers;b=[];a=0;for(d=c.length;a<d;a++){f=c[a];b.push(f)}return b}();g.hideTrigger&&0===g.hideTriggers.length&&g.hideTriggers.push(g.hideTrigger);
d=["tipJoint","targetJoint","stem"];a=0;for(c=d.length;a<c;a++)e=d[a],g[e]&&"string"===typeof g[e]&&(g[e]=new b.Joint(g[e]));if(g.ajax&&(!0===g.ajax||!g.ajax))g.ajax="A"===this.adapter.tagName(this.triggerElement)?this.adapter.attr(this.triggerElement,"href"):!1;"click"===g.showOn&&"A"===this.adapter.tagName(this.triggerElement)&&this.adapter.observe(this.triggerElement,"click",function(a){a.preventDefault();a.stopPropagation();return a.stopped=true});g.target&&(g.fixed=!0);!0===g.stem&&(g.stem=new b.Joint(g.tipJoint));
!0===g.target?g.target=this.triggerElement:g.target&&(g.target=this.adapter.wrap(g.target));this.currentStem=g.stem;null==g.delay&&(g.delay="mouseover"===g.showOn?0.2:0);null==g.targetJoint&&(g.targetJoint=(new b.Joint(g.tipJoint)).flip());this.showTriggers=[];this.showTriggersWhenVisible=[];this.hideTriggers=[];g.showOn&&"creation"!==g.showOn&&this.showTriggers.push({element:this.triggerElement,event:g.showOn});null!=g.ajaxCache&&(g.cache=g.ajaxCache,delete g.ajaxCache);this.options=g;this.bound=
{};d=["prepareToShow","prepareToHide","show","hide","reposition"];a=0;for(c=d.length;a<c;a++)e=d[a],this.bound[e]=function(a){return function(){return j[a].apply(j,arguments)}}(e);this.adapter.domReady(function(){j.activate();if(j.options.showOn==="creation")return j.prepareToShow()})}b.prototype.STICKS_OUT_TOP=1;b.prototype.STICKS_OUT_BOTTOM=2;b.prototype.STICKS_OUT_LEFT=1;b.prototype.STICKS_OUT_RIGHT=2;b.prototype["class"]={container:"opentip-container",opentip:"opentip",header:"ot-header",content:"ot-content",
loadingIndicator:"ot-loading-indicator",close:"ot-close",goingToHide:"ot-going-to-hide",hidden:"ot-hidden",hiding:"ot-hiding",goingToShow:"ot-going-to-show",showing:"ot-showing",visible:"ot-visible",loading:"ot-loading",ajaxError:"ot-ajax-error",fixed:"ot-fixed",showEffectPrefix:"ot-show-effect-",hideEffectPrefix:"ot-hide-effect-",stylePrefix:"style-"};b.prototype._setup=function(){var a,c,d,g,b,f;this.debug("Setting up the tooltip.");this._buildContainer(this.triggerElement);this.hideTriggers=[];
f=this.options.hideTriggers;a=g=0;for(b=f.length;g<b;a=++g){c=f[a];d=null;a=this.options.hideOn instanceof Array?this.options.hideOn[a]:this.options.hideOn;if("string"===typeof c)switch(c){case "trigger":a=a||"mouseout";d=this.triggerElement;break;case "tip":a=a||"mouseover";d=this.container;break;case "target":a=a||"mouseover";d=this.options.target;break;case "closeButton":break;default:throw Error("Unknown hide trigger: "+c+".");}else a=a||"mouseover",d=this.adapter.wrap(c);d&&this.hideTriggers.push({element:d,
event:a,original:c})}b=this.hideTriggers;f=[];d=0;for(g=b.length;d<g;d++)c=b[d],f.push(this.showTriggersWhenVisible.push({element:c.element,event:"mouseover"}));return f};b.prototype._buildContainer=function(){this.container=this.adapter.create('<div id="opentip-'+this.id+'" class="'+this["class"].container+" "+this["class"].hidden+" "+this["class"].stylePrefix+this.options.className+'"></div>',this._document);this.adapter.css(this.container,{position:"absolute"});this.options.ajax&&this.adapter.addClass(this.container,
this["class"].loading);this.options.fixed&&this.adapter.addClass(this.container,this["class"].fixed);this.options.showEffect&&this.adapter.addClass(this.container,""+this["class"].showEffectPrefix+this.options.showEffect);if(this.options.hideEffect)return this.adapter.addClass(this.container,""+this["class"].hideEffectPrefix+this.options.hideEffect)};b.prototype._buildElements=function(){var a,c,d=this._document;this.tooltipElement=this.adapter.create('<div class="'+this["class"].opentip+'"><div class="'+
this["class"].header+'"></div><div class="'+this["class"].content+'"></div></div>',d);this.backgroundCanvas=this.adapter.wrap(d.createElement("canvas"));this.adapter.css(this.backgroundCanvas,{position:"absolute"});"undefined"!==typeof G_vmlCanvasManager&&null!==G_vmlCanvasManager&&G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas));a=this.adapter.find(this.tooltipElement,"."+this["class"].header);this.options.title&&(c=this.adapter.create("<h1></h1>",d),this.adapter.update(c,
this.options.title,this.options.escapeTitle),this.adapter.append(a,c));this.options.ajax&&!this.loaded&&this.adapter.append(this.tooltipElement,this.adapter.create('<div class="'+this["class"].loadingIndicator+'"><span>↻</span></div>',d));0<=A.call(this.options.hideTriggers,"closeButton")&&(this.closeButtonElement=this.adapter.create('<a href="javascript:undefined;" class="'+this["class"].close+'"><span>Close</span></a>',d),this.adapter.append(a,this.closeButtonElement));this.adapter.append(this.container,
this.backgroundCanvas);this.adapter.append(this.container,this.tooltipElement);this.adapter.append(this._body,this.container);return this.redraw=this._newContent=!0};b.prototype.setContent=function(a){this.content=a;this._newContent=!0;"function"===typeof this.content?(this._contentFunction=this.content,this.content=""):this._contentFunction=null;if(this.visible)return this._updateElementContent()};b.prototype._updateElementContent=function(){var a;if(this._newContent||!this.options.cache&&this._contentFunction)a=
this.adapter.find(this.container,"."+this["class"].content),null!=a&&(this._contentFunction&&(this.debug("Executing content function."),this.content=this._contentFunction(this)),this.adapter.update(a,this.content,this.options.escapeContent)),this._newContent=!1;this._storeAndLockDimensions();return this.reposition()};b.prototype._storeAndLockDimensions=function(){var a;if(this.container&&(a=this.dimensions,this.adapter.css(this.container,{width:"auto",left:"0px",top:"0px"}),this.dimensions=this.adapter.dimensions(this.container),
this.dimensions.width+=1,this.adapter.css(this.container,{width:""+this.dimensions.width+"px",top:""+this.currentPosition.top+"px",left:""+this.currentPosition.left+"px"}),!this._dimensionsEqual(this.dimensions,a)))return this.redraw=!0,this._draw()};b.prototype.activate=function(){return this._setupObservers("hidden","hiding")};b.prototype.deactivate=function(a){a&&this.adapter.extend(this.options,a);this.hide();b.removeTip(this);return this._setupObservers("-showing","-visible","-hidden","-hiding")};
b.prototype._setupObservers=function(){var a,c,d,g,b,f,e,j,i,h=this;g=1<=arguments.length?o.call(arguments,0):[];b=0;for(e=g.length;b<e;b++)if(d=g[b],c=!1,"-"===d.charAt(0)&&(c=!0,d=d.substr(1)),this.currentObservers[d]!==!c)switch(this.currentObservers[d]=!c,a=function(){var a,d,g;a=1<=arguments.length?o.call(arguments,0):[];return c?(d=h.adapter).stopObserving.apply(d,a):(g=h.adapter).observe.apply(g,a)},d){case "showing":i=this.hideTriggers;f=0;for(j=i.length;f<j;f++)d=i[f],a(d.element,d.event,
this.bound.prepareToHide);a(null!=document.onresize?document:window,"resize",this.bound.reposition);a(window,"scroll",this.bound.reposition);break;case "visible":i=this.showTriggersWhenVisible;f=0;for(j=i.length;f<j;f++)d=i[f],a(d.element,d.event,this.bound.prepareToShow);break;case "hiding":i=this.showTriggers;f=0;for(j=i.length;f<j;f++)d=i[f],a(d.element,d.event,this.bound.prepareToShow);break;case "hidden":break;default:throw Error("Unknown state: "+d);}return null};b.prototype.prepareToShow=function(){this._abortHiding();
this._abortShowing();if(!this.visible)return this.debug("Showing in "+this.options.delay+"s."),null==this.container&&this._setup(),this.options.group&&b._abortShowingGroup(this.options.group,this),this.preparingToShow=!0,this._setupObservers("-hidden","-hiding","showing"),this._followMousePosition(),this.options.fixed&&!this.options.target&&(this.initialMousePosition=r),this.reposition(),this._showTimeoutId=this.setTimeout(this.bound.show,this.options.delay||0)};b.prototype.show=function(){var a=
this;this._abortHiding();if(!this.visible){this._clearTimeouts();if(!this._triggerElementExists())return this.deactivate();this.debug("Showing now.");null==this.container&&this._setup();this.options.group&&b._hideGroup(this.options.group,this);this.visible=!0;this.preparingToShow=!1;null==this.tooltipElement&&this._buildElements();this._updateElementContent();this.options.ajax&&(!this.loaded||!this.options.cache)&&this._loadAjax();this._searchAndActivateCloseButtons();this._startEnsureTriggerElement();
this.adapter.css(this.container,{zIndex:b.lastZIndex++});this._setupObservers("-hidden","-hiding","-showing","-visible","showing","visible");this.options.fixed&&!this.options.target&&(this.initialMousePosition=r);this.reposition();this.adapter.removeClass(this.container,this["class"].hiding);this.adapter.removeClass(this.container,this["class"].hidden);this.adapter.addClass(this.container,this["class"].goingToShow);this.setCss3Style(this.container,{transitionDuration:"0s"});this.defer(function(){var c;
if(a.visible&&!a.preparingToHide){a.adapter.removeClass(a.container,a["class"].goingToShow);a.adapter.addClass(a.container,a["class"].showing);c=0;if(a.options.showEffect&&a.options.showEffectDuration)c=a.options.showEffectDuration;a.setCss3Style(a.container,{transitionDuration:""+c+"s"});a._visibilityStateTimeoutId=a.setTimeout(function(){a.adapter.removeClass(a.container,a["class"].showing);return a.adapter.addClass(a.container,a["class"].visible)},c);return a._activateFirstInput()}});return this._draw()}};
b.prototype._abortShowing=function(){if(this.preparingToShow)return this.debug("Aborting showing."),this._clearTimeouts(),this._stopFollowingMousePosition(),this.preparingToShow=!1,this._setupObservers("-showing","-visible","hiding","hidden")};b.prototype.prepareToHide=function(){this._abortShowing();this._abortHiding();if(this.visible)return this.preparingToHide=!0,this._setupObservers("-showing","visible","-hidden","hiding"),this._hideTimeoutId=this.setTimeout(this.bound.hide,this.options.hideDelay)};
b.prototype.hide=function(){var a=this,c;this._abortShowing();if(this.visible){this._clearTimeouts();this.preparingToHide=this.visible=!1;this._stopEnsureTriggerElement();this._setupObservers("-showing","-visible","-hiding","-hidden","hiding","hidden");if(this._element){c=this.adapter.data(this._element,"__opentips")||[];for(var d=c.length;d--;)c[d]==this&&c.slice(d,1);b.setTips(this._element,c)}this.options.fixed||this._stopFollowingMousePosition();if(this.container)return c=this["class"],this.adapter.removeClass(this.container,
c.visible),this.adapter.removeClass(this.container,c.showing),this.adapter.addClass(this.container,c.goingToHide),this.setCss3Style(this.container,{transitionDuration:"0s"}),this.defer(function(){var d;a.adapter.removeClass(a.container,a["class"].goingToHide);a.adapter.addClass(a.container,a["class"].hiding);d=0;a.options.hideEffect&&a.options.hideEffectDuration&&(d=a.options.hideEffectDuration);a.setCss3Style(a.container,{transitionDuration:""+d+"s"});return a._visibilityStateTimeoutId=a.setTimeout(function(){a.adapter.removeClass(a.container,
a["class"].hiding);a.adapter.addClass(a.container,a["class"].hidden);a.setCss3Style(a.container,{transitionDuration:"0s"});if(a.options.removeElementsOnHide){a.adapter.remove(a.container);delete a.container;return delete a.tooltipElement}},d)})}};b.prototype._abortHiding=function(){if(this.preparingToHide)return this.debug("Aborting hiding."),this._clearTimeouts(),this.preparingToHide=!1,this._setupObservers("-hiding","showing","visible")};b.prototype.reposition=function(){var a,c,d=this;a=this.getPosition();
if(null!=a&&(c=this.options.stem,this.options.containInViewport&&(c=this._ensureViewportContainment(a),a=c.position,c=c.stem),!this._positionsEqual(a,this.currentPosition)))return this.options.stem&&!c.eql(this.currentStem)&&(this.redraw=!0),this.currentPosition=a,this.currentStem=c,this._draw(),this.adapter.css(this.container,{left:""+a.left+"px",top:""+a.top+"px"}),this.defer(function(){var a;a=d.adapter.unwrap(d.container);a.style.visibility="hidden";return a.style.visibility="visible"})};b.prototype.getPosition=
function(a,c,d){var g,b,f,e,j;e=this._body;var i=this._window;if(this.container){null==a&&(a=this.options.tipJoint);null==c&&(c=this.options.targetJoint);if(this.options.target){if(f=this.adapter.offset(this.options.target),g=this.adapter.dimensions(this.options.target),c.right?(j=this.adapter.unwrap(this.options.target),f.left=null!=j.getBoundingClientRect?j.getBoundingClientRect().right+(null!=(b=i.pageXOffset)?b:e.scrollLeft):f.left+g.width):c.center&&(f.left+=Math.round(g.width/2)),c.bottom?f.top+=
g.height:c.middle&&(f.top+=Math.round(g.height/2)),this.options.borderWidth)(this.options.tipJoint.left&&(f.left+=this.options.borderWidth),this.options.tipJoint.right&&(f.left-=this.options.borderWidth),this.options.tipJoint.top)?f.top+=this.options.borderWidth:this.options.tipJoint.bottom&&(f.top-=this.options.borderWidth)}else f=this.initialMousePosition?{top:this.initialMousePosition.y,left:this.initialMousePosition.x}:{top:r.y,left:r.x};if(this.options.autoOffset&&(b=(e=this.options.stem?this.options.stemLength:
0)&&this.options.fixed?2:10,c=a.middle&&!this.options.fixed?15:0,g=a.center&&!this.options.fixed?15:0,a.right?f.left-=b+c:a.left&&(f.left+=b+c),a.bottom?f.top-=b+g:a.top&&(f.top+=b+g),e))(null==d&&(d=this.options.stem),d.right?f.left-=e:d.left&&(f.left+=e),d.bottom)?f.top-=e:d.top&&(f.top+=e);f.left+=this.options.offset[0];f.top+=this.options.offset[1];a.right?f.left-=this.dimensions.width:a.center&&(f.left-=Math.round(this.dimensions.width/2));a.bottom?f.top-=this.dimensions.height:a.middle&&(f.top-=
Math.round(this.dimensions.height/2));return f}};b.prototype._ensureViewportContainment=function(a){var c,d,g,n,f,e,j,i;c=this._document;f=this.options.stem;d={position:a,stem:f};if(!this.visible||!a)return d;e=this._sticksOut(a);if(!e[0]&&!e[1])return d;i=new b.Joint(this.options.tipJoint);this.options.targetJoint&&(j=new b.Joint(this.options.targetJoint));this.adapter.scrollOffset(this._window,this._document);c=this._boundingElement?this.adapter.dimensions(this._boundingElement):this.adapter.viewportDimensions(c);
a=!1;if(c.width>=this.dimensions.width&&e[0])switch(a=!0,e[0]){case this.STICKS_OUT_LEFT:i.setHorizontal("right");this.options.targetJoint&&j.setHorizontal("right");break;case this.STICKS_OUT_RIGHT:i.setHorizontal("left"),this.options.targetJoint&&j.setHorizontal("left")}if(c.height>=this.dimensions.height&&e[1])switch(a=!0,e[1]){case this.STICKS_OUT_TOP:i.setVertical("top");this.options.targetJoint&&j.setVertical("bottom");break;case this.STICKS_OUT_BOTTOM:i.setVertical("bottom"),this.options.targetJoint&&
j.setVertical("top")}if(!a)return d;this.options.stem&&(f=i);a=this.getPosition(i,j,f);c=this._sticksOut(a);n=g=!1;c[0]&&c[0]!==e[0]&&(g=!0,i.setHorizontal(this.options.tipJoint.horizontal),this.options.targetJoint&&j.setHorizontal(this.options.targetJoint.horizontal));c[1]&&c[1]!==e[1]&&(n=!0,i.setVertical(this.options.tipJoint.vertical),this.options.targetJoint&&j.setVertical(this.options.targetJoint.vertical));if(g&&n)return d;if(g||n)this.options.stem&&(f=i),a=this.getPosition(i,j,f);return{position:a,
stem:f}};b.prototype._sticksOut=function(a){var c,d;c=this.adapter.scrollOffset(this._window,this._document);d=this._boundingElement?this.adapter.dimensions(this._boundingElement):this.adapter.viewportDimensions(doc);a=[a.left-c[0],a.top-c[1]];c=[!1,!1];0>a[0]?c[0]=this.STICKS_OUT_LEFT:a[0]+this.dimensions.width>d.width&&(c[0]=this.STICKS_OUT_RIGHT);0>a[1]?c[1]=this.STICKS_OUT_TOP:a[1]+this.dimensions.height>d.height&&(c[1]=this.STICKS_OUT_BOTTOM);return c};b.prototype._draw=function(){var a,c,d,
g,e,f,m,j,i,h,o,r,k,q,p,l=this;if(this.backgroundCanvas&&this.redraw){this.debug("Drawing background.");this.redraw=!1;if(this.currentStem){c=["top","right","bottom","left"];e=0;for(a=c.length;e<a;e++)m=c[e],this.adapter.removeClass(this.container,"stem-"+m);this.adapter.addClass(this.container,"stem-"+this.currentStem.horizontal);this.adapter.addClass(this.container,"stem-"+this.currentStem.vertical)}i=[0,0];e=[0,0];0<=A.call(this.options.hideTriggers,"closeButton")&&(j=new b.Joint("top right"===
(null!=(f=this.currentStem)?f.toString():void 0)?"top left":"top right"),i=[this.options.closeButtonRadius+this.options.closeButtonOffset[0],this.options.closeButtonRadius+this.options.closeButtonOffset[1]],e=[this.options.closeButtonRadius-this.options.closeButtonOffset[0],this.options.closeButtonRadius-this.options.closeButtonOffset[1]]);f=this.adapter.clone(this.dimensions);m=[0,0];this.options.borderWidth&&(f.width+=2*this.options.borderWidth,f.height+=2*this.options.borderWidth,m[0]-=this.options.borderWidth,
m[1]-=this.options.borderWidth);this.options.shadow&&(f.width+=2*this.options.shadowBlur,f.width+=Math.max(0,this.options.shadowOffset[0]-2*this.options.shadowBlur),f.height+=2*this.options.shadowBlur,f.height+=Math.max(0,this.options.shadowOffset[1]-2*this.options.shadowBlur),m[0]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[0]),m[1]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[1]));g=d=c=a=0;this.currentStem&&((this.currentStem.left?a=this.options.stemLength:this.currentStem.right&&
(c=this.options.stemLength),this.currentStem.top)?d=this.options.stemLength:this.currentStem.bottom&&(g=this.options.stemLength));j&&(j.left?a=Math.max(a,e[0]):j.right&&(c=Math.max(c,e[0])),j.top?d=Math.max(d,e[1]):j.bottom&&(g=Math.max(g,e[1])));f.width+=a+c;f.height+=d+g;m[0]-=a;m[1]-=d;this.currentStem&&this.options.borderWidth&&(e=this._getPathStemMeasures(this.options.stemBase,this.options.stemLength,this.options.borderWidth),p=e.stemLength,q=e.stemBase);e=this.adapter.unwrap(this.backgroundCanvas);
e.width=f.width;e.height=f.height;this.adapter.css(this.backgroundCanvas,{width:""+e.width+"px",height:""+e.height+"px",left:""+m[0]+"px",top:""+m[1]+"px"});h=e.getContext("2d");h.setTransform(1,0,0,1,0,0);h.clearRect(0,0,e.width,e.height);h.beginPath();h.fillStyle=this._getColor(h,this.dimensions,this.options.background,this.options.backgroundGradientHorizontal);h.lineJoin="miter";h.miterLimit=500;k=this.options.borderWidth/2;this.options.borderWidth?(h.strokeStyle=this.options.borderColor,h.lineWidth=
this.options.borderWidth):(p=this.options.stemLength,q=this.options.stemBase);null==q&&(q=0);r=function(a,d,c){c&&h.moveTo(Math.max(q,l.options.borderRadius,i[0])+1-k,-k);if(d){h.lineTo(a/2-q/2,-k);h.lineTo(a/2,-p-k);return h.lineTo(a/2+q/2,-k)}};o=function(a,d,c){var b;if(a){h.lineTo(-q+k,0-k);h.lineTo(p+k,-p-k);return h.lineTo(k,q-k)}if(d){d=l.options.closeButtonOffset;a=i[0];if(c%2!==0){d=[d[1],d[0]];a=i[1]}c=Math.acos(d[1]/l.options.closeButtonRadius);b=Math.acos(d[0]/l.options.closeButtonRadius);
h.lineTo(-a+k,-k);return h.arc(k-d[0],-k+d[1],l.options.closeButtonRadius,-(Math.PI/2+c),b,false)}h.lineTo(-l.options.borderRadius+k,-k);return h.quadraticCurveTo(k,-k,k,l.options.borderRadius-k)};h.translate(-m[0],-m[1]);h.save();(function(){var a,d,c,g,f,e,n,i,k,m;m=[];d=i=0;for(k=b.positions.length/2;0<=k?i<k:i>k;d=0<=k?++i:--i){a=d*2;f=d===0||d===3?0:l.dimensions.width;e=d<2?0:l.dimensions.height;n=Math.PI/2*d;c=d%2===0?l.dimensions.width:l.dimensions.height;g=new b.Joint(b.positions[a]);a=new b.Joint(b.positions[a+
1]);h.save();h.translate(f,e);h.rotate(n);r(c,g.eql(l.currentStem),d===0);h.translate(c,0);o(a.eql(l.currentStem),a.eql(j),d);m.push(h.restore())}return m})();h.closePath();h.save();this.options.shadow&&(h.shadowColor=this.options.shadowColor,h.shadowBlur=this.options.shadowBlur,h.shadowOffsetX=this.options.shadowOffset[0],h.shadowOffsetY=this.options.shadowOffset[1]);h.fill();h.restore();this.options.borderWidth&&h.stroke();h.restore();if(j)return function(){var a,d;if(j.toString()==="top right"){d=
[l.dimensions.width-l.options.closeButtonOffset[0],l.options.closeButtonOffset[1]];a=[d[0]+k,d[1]-k]}else{d=[l.options.closeButtonOffset[0],l.options.closeButtonOffset[1]];a=[d[0]-k,d[1]-k]}h.translate(a[0],a[1]);a=l.options.closeButtonCrossSize/2;h.save();h.beginPath();h.strokeStyle=l.options.closeButtonCrossColor;h.lineWidth=l.options.closeButtonCrossLineWidth;h.lineCap="round";h.moveTo(-a,-a);h.lineTo(a,a);h.stroke();h.beginPath();h.moveTo(a,-a);h.lineTo(-a,a);h.stroke();h.restore();return l.adapter.css(l.closeButtonElement,
{left:""+(d[0]-a-l.options.closeButtonLinkOverscan)+"px",top:""+(d[1]-a-l.options.closeButtonLinkOverscan)+"px",width:""+(l.options.closeButtonCrossSize+l.options.closeButtonLinkOverscan*2)+"px",height:""+(l.options.closeButtonCrossSize+l.options.closeButtonLinkOverscan*2)+"px"})}()}};b.prototype._getPathStemMeasures=function(a,c,d){var b,d=d/2,a=Math.atan(a/2/c);b=2*(d/Math.sin(2*a))*Math.cos(a);c=d+c-b;if(0>c)throw Error("Sorry but your stemLength / stemBase ratio is strange.");a=2*Math.tan(a)*
c;return{stemLength:c,stemBase:a}};b.prototype._getColor=function(a,c,d,b){var e;null==b&&(b=!1);if("string"===typeof d)return d;a=b?a.createLinearGradient(0,0,c.width,0):a.createLinearGradient(0,0,0,c.height);e=c=0;for(b=d.length;c<b;e=++c)e=d[e],a.addColorStop(e[0],e[1]);return a};b.prototype._searchAndActivateCloseButtons=function(){var a,c,d,b;b=this.adapter.findAll(this.container,"."+this["class"].close);c=0;for(d=b.length;c<d;c++)a=b[c],this.hideTriggers.push({element:this.adapter.wrap(a),event:"click"});
this.currentObservers.showing&&this._setupObservers("-showing","showing");if(this.currentObservers.visible)return this._setupObservers("-visible","visible")};b.prototype._activateFirstInput=function(){var a;a=this.adapter.unwrap(this.adapter.find(this.container,"input, textarea"));return null!=a?"function"===typeof a.focus?a.focus():void 0:void 0};b.prototype._followMousePosition=function(){if(!this.options.fixed)return b._observeMousePosition(this.bound.reposition)};b.prototype._stopFollowingMousePosition=
function(){if(!this.options.fixed)return b._stopObservingMousePosition(this.bound.reposition)};b.prototype._clearShowTimeout=function(){return clearTimeout(this._showTimeoutId)};b.prototype._clearHideTimeout=function(){return clearTimeout(this._hideTimeoutId)};b.prototype._clearTimeouts=function(){clearTimeout(this._visibilityStateTimeoutId);this._clearShowTimeout();return this._clearHideTimeout()};b.prototype._triggerElementExists=function(){var a;for(a=this.adapter.unwrap(this.triggerElement);a.parentNode;){if("BODY"===
a.parentNode.tagName)return!0;a=a.parentNode}return!1};b.prototype._loadAjax=function(){var a=this;if(!this.loading)return this.loaded=!1,this.loading=!0,this.adapter.addClass(this.container,this["class"].loading),this.setContent(""),this.debug("Loading content from "+this.options.ajax),this.adapter.ajax({url:this.options.ajax,method:this.options.ajaxMethod,onSuccess:function(c){a.debug("Loading successful.");a.adapter.removeClass(a.container,a["class"].loading);return a.setContent(c)},onError:function(c){var d;
d=a.options.ajaxErrorMessage;a.debug(d,c);a.setContent(d);return a.adapter.addClass(a.container,a["class"].ajaxError)},onComplete:function(){a.adapter.removeClass(a.container,a["class"].loading);a.loading=!1;a.loaded=!0;a._searchAndActivateCloseButtons();a._activateFirstInput();return a.reposition()}})};b.prototype._ensureTriggerElement=function(){if(!this._triggerElementExists())return this.deactivate(),this._stopEnsureTriggerElement()};b.prototype._ensureTriggerElementInterval=1E3;b.prototype._startEnsureTriggerElement=
function(){var a=this;return this._ensureTriggerElementTimeoutId=setInterval(function(){return a._ensureTriggerElement()},this._ensureTriggerElementInterval)};b.prototype._stopEnsureTriggerElement=function(){return clearInterval(this._ensureTriggerElementTimeoutId)};return b}();u=["khtml","ms","o","moz","webkit"];e.prototype.setCss3Style=function(b,a){var c,d,g,e,f,b=this.adapter.unwrap(b);f=[];for(c in a)B.call(a,c)&&(d=a[c],null!=b.style[c]?f.push(b.style[c]=d):f.push(function(){var a,f,i;i=[];
a=0;for(f=u.length;a<f;a++)g=u[a],e=""+this.ucfirst(g)+this.ucfirst(c),null!=b.style[e]?i.push(b.style[e]=d):i.push(void 0);return i}.call(this)));return f};e.prototype.defer=function(b){return setTimeout(b,0)};e.prototype.setTimeout=function(b,a){return setTimeout(b,a?1E3*a:0)};e.prototype.ucfirst=function(b){return null==b?"":b.charAt(0).toUpperCase()+b.slice(1)};e.prototype.dasherize=function(b){return b.replace(/([A-Z])/g,function(a,c){return"-"+c.toLowerCase()})};p=[];r={x:0,y:0};e._observeMousePosition=
function(b){return p.push(b)};e._stopObservingMousePosition=function(b){var a,c,d,g;g=[];c=0;for(d=p.length;c<d;c++)a=p[c],a!==b&&g.push(a);return p=g};e.Joint=function(){function b(a){null!=a&&(a instanceof e.Joint&&(a=a.toString()),this.set(a),this)}b.prototype.set=function(a){a=a.toLowerCase();this.setHorizontal(a);this.setVertical(a);return this};b.prototype.setHorizontal=function(a){var c,d,b,e;d=["left","center","right"];b=0;for(e=d.length;b<e;b++)c=d[b],~a.indexOf(c)&&(this.horizontal=c.toLowerCase());
null==this.horizontal&&(this.horizontal="center");e=[];a=0;for(b=d.length;a<b;a++)c=d[a],e.push(this[c]=this.horizontal===c?c:void 0);return e};b.prototype.setVertical=function(a){var c,d,b,e;d=["top","middle","bottom"];b=0;for(e=d.length;b<e;b++)c=d[b],~a.indexOf(c)&&(this.vertical=c.toLowerCase());null==this.vertical&&(this.vertical="middle");e=[];a=0;for(b=d.length;a<b;a++)c=d[a],e.push(this[c]=this.vertical===c?c:void 0);return e};b.prototype.eql=function(a){return null!=a&&this.horizontal===
a.horizontal&&this.vertical===a.vertical};b.prototype.flip=function(){var a;a=e.position[this.toString(!0)];this.set(e.positions[(a+4)%8]);return this};b.prototype.toString=function(a){var c,d;null==a&&(a=!1);d="middle"===this.vertical?"":this.vertical;c="center"===this.horizontal?"":this.horizontal;d&&c&&(c=a?e.prototype.ucfirst(c):" "+c);return""+d+c};return b}();e.prototype._positionsEqual=function(b,a){return null!=b&&null!=a&&b.left===a.left&&b.top===a.top};e.prototype._dimensionsEqual=function(b,
a){return null!=b&&null!=a&&b.width===a.width&&b.height===a.height};e.prototype.debug=function(){var b;b=1<=arguments.length?o.call(arguments,0):[];if(e.debug&&null!=("undefined"!==typeof console&&null!==console?console.debug:void 0))return b.unshift("#"+this.id+" |"),console.debug.apply(console,b)};e.version="2.4.6";e.debug=!1;e.lastId=0;e.lastZIndex=100;e.tips=[];e._abortShowingGroup=function(b,a){var c,d,g,n,f;n=e.tips;f=[];d=0;for(g=n.length;d<g;d++)c=n[d],c!==a&&c.options.group===b?f.push(c._abortShowing()):
f.push(void 0);return f};e._hideGroup=function(b,a){var c,d,g,n,f;n=e.tips;f=[];d=0;for(g=n.length;d<g;d++)c=n[d],c!==a&&c.options.group===b?f.push(c.hide()):f.push(void 0);return f};e.adapters={};e.adapter=null;t=!0;e.addAdapter=function(b){e.adapters[b.name]=b;if(t)return e.adapter=b,t=!1};e.positions="top topRight right bottomRight bottom bottomLeft left topLeft".split(" ");e.position={};w=e.positions;s=v=0;for(z=w.length;v<z;s=++v)y=w[s],e.position[y]=s;e.styles={standard:{"extends":null,title:void 0,
escapeTitle:!0,escapeContent:!1,className:"standard",stem:!0,delay:null,hideDelay:0.1,fixed:!1,showOn:"mouseover",hideTrigger:"trigger",hideTriggers:[],hideOn:null,removeElementsOnHide:!1,offset:[0,0],containInViewport:!0,autoOffset:!0,showEffect:"appear",hideEffect:"fade",showEffectDuration:0.3,hideEffectDuration:0.2,stemLength:5,stemBase:8,tipJoint:"top left",target:null,targetJoint:null,cache:!0,ajax:!1,ajaxMethod:"GET",ajaxErrorMessage:"There was a problem downloading the content.",group:null,
style:null,background:"#fff18f",backgroundGradientHorizontal:!1,closeButtonOffset:[5,5],closeButtonRadius:7,closeButtonCrossSize:4,closeButtonCrossColor:"#d2c35b",closeButtonCrossLineWidth:1.5,closeButtonLinkOverscan:6,borderRadius:5,borderWidth:1,borderColor:"#f2e37b",shadow:!0,shadowBlur:10,shadowOffset:[3,3],shadowColor:"rgba(0, 0, 0, 0.1)"},glass:{"extends":"standard",className:"glass",background:[[0,"rgba(252, 252, 252, 0.8)"],[0.5,"rgba(255, 255, 255, 0.8)"],[0.5,"rgba(250, 250, 250, 0.9)"],
[1,"rgba(245, 245, 245, 0.9)"]],borderColor:"#eee",closeButtonCrossColor:"rgba(0, 0, 0, 0.2)",borderRadius:15,closeButtonRadius:10,closeButtonOffset:[8,8]},dark:{"extends":"standard",className:"dark",borderRadius:13,borderColor:"#444",closeButtonCrossColor:"rgba(240, 240, 240, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(30, 30, 30, 0.7)"],[0.5,"rgba(30, 30, 30, 0.8)"],[0.5,"rgba(10, 10, 10, 0.8)"],[1,"rgba(10, 10, 10, 0.9)"]]},alert:{"extends":"standard",className:"alert",
borderRadius:1,borderColor:"#AE0D11",closeButtonCrossColor:"rgba(255, 255, 255, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(203, 15, 19, 0.7)"],[0.5,"rgba(203, 15, 19, 0.8)"],[0.5,"rgba(189, 14, 18, 0.8)"],[1,"rgba(179, 14, 17, 0.9)"]]}};e.defaultStyle="standard";e.getTips=function(b){return e.adapter.data(b,"__opentips")||[]};e.setTips=function(b,a){return e.adapter.data(b,"__opentips",a||[])};e.removeTip=function(b){for(var a=e.tips.length;a--;)if(b=e.tips[a])return e.tips.splice(a,
1)};e.addTip=function(b){e.tips.push(b)};"undefined"!==typeof module&&null!==module?module.exports=e:window.Opentip=e;o=[].slice;(function(b){var a;jQuery.fn.opentip=function(a,d,b){return new e(this,a,d,b)};a=function(){function a(){}a.prototype.name="jquery";a.prototype.domReady=function(a){return jQuery(a)};a.prototype.create=function(a,b){if(b){var c=b.createElement("div");c.innerHTML=a;c=c.firstChild;c.parentNode.removeChild(c);return jQuery(c)}return jQuery(a)};a.prototype.wrap=function(a){a=
b(a);if(1<a.length)throw Error("Multiple elements provided.");return a};a.prototype.unwrap=function(a){return b(a)[0]};a.prototype.tagName=function(a){return this.unwrap(a).tagName};a.prototype.attr=function(){var a,c,e;c=arguments[0];a=2<=arguments.length?o.call(arguments,1):[];return(e=b(c)).attr.apply(e,a)};a.prototype.data=function(){var a,b,c;b=arguments[0];a=2<=arguments.length?o.call(arguments,1):[];return(c=jQuery(b)).data.apply(c,a)};a.prototype.find=function(a,b){return jQuery(a).find(b).get(0)};
a.prototype.findAll=function(a,b){return jQuery(a).find(b)};a.prototype.update=function(a,b,c){a=jQuery(a);return c?a.text(b):a.html(b)};a.prototype.append=function(a,c){return b(a).append(c)};a.prototype.remove=function(a){return b(a).remove()};a.prototype.addClass=function(a,c){return b(a).addClass(c)};a.prototype.removeClass=function(a,c){return b(a).removeClass(c)};a.prototype.css=function(a,c){return b(a).css(c)};a.prototype.dimensions=function(a){return{width:b(a).outerWidth(),height:b(a).outerHeight()}};
a.prototype.scrollOffset=function(a,b){return[a.pageXOffset||b.documentElement.scrollLeft||b.body.scrollLeft,a.pageYOffset||b.documentElement.scrollTop||b.body.scrollTop]};a.prototype.viewportDimensions=function(a){return{width:a.documentElement.clientWidth,height:a.documentElement.clientHeight}};a.prototype.mousePosition=function(a){return null==a?null:{x:a.pageX,y:a.pageY}};a.prototype.offset=function(a){a=jQuery(a).offset();return{left:a.left,top:a.top}};a.prototype.observe=function(a,c,e){return b(a).bind(c,
e)};a.prototype.stopObserving=function(a,c,e){return b(a).unbind(c,e)};a.prototype.ajax=function(a){var b,c;if(null==a.url)throw Error("No url provided");return jQuery.ajax({url:a.url,type:null!=(b=null!=(c=a.method)?c.toUpperCase():void 0)?b:"GET"}).done(function(b){return"function"===typeof a.onSuccess?a.onSuccess(b):void 0}).fail(function(b){return"function"===typeof a.onError?a.onError("Server responded with status "+b.status):void 0}).always(function(){return"function"===typeof a.onComplete?
a.onComplete():void 0})};a.prototype.clone=function(a){return jQuery.extend({},a)};a.prototype.extend=function(){var a,c;c=arguments[0];a=2<=arguments.length?o.call(arguments,1):[];return jQuery.extend.apply(b,[c].concat(o.call(a)))};return a}();return e.addAdapter(new a)})(jQuery);var C={removeElementsOnHide:!0,fixed:!0,showOn:"creation"},D={titleTemplate:"Changed by %u %t",delay:1E3};x.OpentipAdapter=function(){};x.OpentipAdapter.prototype={init:function(b){this._options=jQuery.extend(D,b||{});
this._tips=[]},showTooltip:function(b,a,c){c=jQuery.extend({target:b,boundingElement:c},C);a=new e(b,a,c);a.show();jQuery(b).data("_lite_tip_",a)},hideAll:function(b){try{for(var a=e.tips.length;a--;)e.tips[a].deactivate()}catch(c){}if(b&&b.ownerDocument)try{e.adapter.wrap(b.ownerDocument.body).find("div."+e.prototype["class"].container).remove()}catch(d){}},hideTooltip:function(b,a){var c=e.getTips(b);if(c){var d={};a&&(d.hideDelay=0,d.hideEffectDuration=0);for(var g=c.length;g--;)c[g].deactivate(d)}}}})(window);