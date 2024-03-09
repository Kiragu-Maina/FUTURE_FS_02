(function(){var Util,__bind=function(fn,me){return function(){return fn.apply(me,arguments)}};Util=function(){function Util2(){}return Util2.prototype.extend=function(custom,defaults){var key,value;for(key in custom)value=custom[key],value!=null&&(defaults[key]=value);return defaults},Util2.prototype.isMobile=function(agent){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)},Util2}(),this.WOW=function(){WOW2.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0};function WOW2(options){options==null&&(options={}),this.scrollCallback=__bind(this.scrollCallback,this),this.scrollHandler=__bind(this.scrollHandler,this),this.start=__bind(this.start,this),this.scrolled=!0,this.config=this.util().extend(options,this.defaults)}return WOW2.prototype.init=function(){var _ref;return this.element=window.document.documentElement,(_ref=document.readyState)==="interactive"||_ref==="complete"?this.start():document.addEventListener("DOMContentLoaded",this.start)},WOW2.prototype.start=function(){var box,_i,_len,_ref;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(_ref=this.boxes,_i=0,_len=_ref.length;_i<_len;_i++)box=_ref[_i],this.applyStyle(box,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},WOW2.prototype.stop=function(){if(window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),this.interval!=null)return clearInterval(this.interval)},WOW2.prototype.show=function(box){return this.applyStyle(box),box.className=""+box.className+" "+this.config.animateClass},WOW2.prototype.applyStyle=function(box,hidden){var delay,duration,iteration;return duration=box.getAttribute("data-wow-duration"),delay=box.getAttribute("data-wow-delay"),iteration=box.getAttribute("data-wow-iteration"),box.setAttribute("style",this.customStyle(hidden,duration,delay,iteration))},WOW2.prototype.resetStyle=function(){var box,_i,_len,_ref,_results;for(_ref=this.boxes,_results=[],_i=0,_len=_ref.length;_i<_len;_i++)box=_ref[_i],_results.push(box.setAttribute("style","visibility: visible;"));return _results},WOW2.prototype.customStyle=function(hidden,duration,delay,iteration){var style;return style=hidden?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",duration&&(style+="-webkit-animation-duration: "+duration+"; -moz-animation-duration: "+duration+"; animation-duration: "+duration+";"),delay&&(style+="-webkit-animation-delay: "+delay+"; -moz-animation-delay: "+delay+"; animation-delay: "+delay+";"),iteration&&(style+="-webkit-animation-iteration-count: "+iteration+"; -moz-animation-iteration-count: "+iteration+"; animation-iteration-count: "+iteration+";"),style},WOW2.prototype.scrollHandler=function(){return this.scrolled=!0},WOW2.prototype.scrollCallback=function(){var box;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var _i,_len,_ref,_results;for(_ref=this.boxes,_results=[],_i=0,_len=_ref.length;_i<_len;_i++)if(box=_ref[_i],!!box){if(this.isVisible(box)){this.show(box);continue}_results.push(box)}return _results}.call(this),!this.boxes.length))return this.stop()},WOW2.prototype.offsetTop=function(element){var top;for(top=element.offsetTop;element=element.offsetParent;)top+=element.offsetTop;return top},WOW2.prototype.isVisible=function(box){var bottom,offset,top,viewBottom,viewTop;return offset=box.getAttribute("data-wow-offset")||this.config.offset,viewTop=window.pageYOffset,viewBottom=viewTop+this.element.clientHeight-offset,top=this.offsetTop(box),bottom=top+box.clientHeight,top<=viewBottom&&bottom>=viewTop},WOW2.prototype.util=function(){return this._util||(this._util=new Util)},WOW2.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},WOW2}()}).call(this),wow=new WOW({animateClass:"animated",offset:100}),wow.init();
//# sourceMappingURL=/cdn/shop/t/4/assets/wow.js.map?v=106390324212083424781646032612
