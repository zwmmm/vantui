/*! For license information please see 65.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"269":function(t,r,a){"use strict";a.r(r),a.d(r,"taro_tabbar",(function(){return c}));var n=a(53),i=a(286);function isAbsolute(t){return"/"===t.charAt(0)}function spliceOne(t,r){for(var a=r,n=a+1,i=t.length;n<i;a+=1,n+=1)t[a]=t[n];t.pop()}var s=function splitUrl(t){var r,a=t||"",n={"path":null,"query":null,"fragment":null};return(r=a.indexOf("#"))>-1&&(n.fragment=a.substring(r+1),a=a.substring(0,r)),(r=a.indexOf("?"))>-1&&(n.query=a.substring(r+1),a=a.substring(0,r)),n.path=a,n},b=function TabbarItem(t){var r=t.index,a=t.isSelected,s=void 0!==a&&a,b=t.textColor,l=t.iconPath,d=t.badgeText,h=t.showRedDot,c=void 0!==h&&h,u=t.text,f=t.onSelect,g=Object(i.a)("weui-tabbar__item",{"weui-bar__item_on":s});return Object(n.e)("a",{"key":r,"href":"javascript:;","class":g,"onClick":function v(){f(r)}},Object(n.e)("span",{"style":{"display":"inline-block","position":"relative"}},Object(n.e)("img",{"src":l,"alt":"","class":"weui-tabbar__icon"}),!!d&&Object(n.e)("span",{"class":"weui-badge taro-tabbar-badge","style":{"position":"absolute","top":"-2px","right":"-13px"}},d),c&&Object(n.e)("span",{"class":"weui-badge weui-badge_dot","style":{"position":"absolute","top":"0","right":"-6px"}})),Object(n.e)("p",{"class":"weui-tabbar__label","style":{"color":b}},u))},l=a(26),d=function addLeadingSlash(t){return"/"===t[0]?t:"/"+t},h=function stripBasename(t,r){return function hasBasename(t,r){return new RegExp("^"+r+"(\\/|\\?|#|$)","i").test(t)}(t,r)?t.substr(r.length):t},c=function(){function e(t){var r=this;Object(n.g)(this,t),this.onLongPress=Object(n.c)(this,"longpress",7),this.homePage="",this.customRoutes=[],this.tabbarPos="bottom",this.selectedIndex=-1,this.status=0,this.getOriginUrl=function(t){var a=r.customRoutes.filter((function(r){var a=r[1];return s(a).path===s(t).path}));return a.length?a[0][0]:t},this.getSelectedIndex=function(t){var a=-1;return r.list.forEach((function(r,n){var i=r.pagePath;s(t).path===s(i).path&&(a=n)})),a},this.switchTab=function(t){r.selectedIndex=t,l.navigateTo({"url":r.list[t].pagePath})},this.switchTabHandler=function(t){var a=t.url,n=t.successHandler,i=t.errorHandler,s=function resolvePathname(t,r){void 0===r&&(r="");var a,n=t&&t.split("/")||[],i=r&&r.split("/")||[],s=t&&isAbsolute(t),b=r&&isAbsolute(r),l=s||b;if(t&&isAbsolute(t)?i=n:n.length&&(i.pop(),i=i.concat(n)),!i.length)return"/";if(i.length){var d=i[i.length-1];a="."===d||".."===d||""===d}else a=!1;for(var h=0,c=i.length;c>=0;c--){var u=i[c];"."===u?spliceOne(i,c):".."===u?(spliceOne(i,c),h++):h&&(spliceOne(i,c),h--)}if(!l)for(;h--;h)i.unshift("..");!l||""===i[0]||i[0]&&isAbsolute(i[0])||i.unshift("");var f=i.join("/");return a&&"/"!==f.substr(-1)&&(f+="/"),f}(a,r.getOriginUrl(r.getCurrentUrl()||r.homePage)),b=r.getSelectedIndex(s);b>-1?(r.switchTab(b),n({"errMsg":"switchTab:ok"})):i({"errMsg":'switchTab:fail page "'+s+'" is not found'})},this.routerChangeHandler=function(t){var a,n;if(t&&(a=t.toLocation),a&&a.path){var i=d(a.path);n="/"===i?r.homePage:i}else n=r.getCurrentUrl();r.selectedIndex=r.getSelectedIndex(r.getOriginUrl(n))},this.setTabBarBadgeHandler=function(t){var a=t.index,n=t.text,i=t.errorHandler;a in r.list?(r.list[a].showRedDot=!1,r.list[a].badgeText=n):i({"errMsg":"setTabBarBadge:fail tabbar item not found"})},this.removeTabBarBadgeHandler=function(t){var a=t.index,n=t.successHandler,i=t.errorHandler;a in r.list?(r.list[a].badgeText=null,r.list[a].badgeText=null,n({"errMsg":"removeTabBarBadge:ok"})):i({"errMsg":"removeTabBarBadge:fail tabbar item not found"})},this.showTabBarRedDotHandler=function(t){var a=t.index,n=t.successHandler,i=t.errorHandler,s=r.list;a in s?(s[a].badgeText=null,s[a].showRedDot=!0,n({"errMsg":"showTabBarRedDot:ok"})):i({"errMsg":"showTabBarRedDot:fail tabbar item not found"})},this.hideTabBarRedDotHandler=function(t){var a=t.index,n=t.successHandler,i=t.errorHandler,s=r.list;a in s?(s[a].showRedDot=!1,n({"errMsg":"hideTabBarRedDot:ok"})):i({"errMsg":"hideTabBarRedDot:fail tabbar item not found"})},this.showTabBarHandler=function(t){var a=t.successHandler;r.status=0,a({"errMsg":"showTabBar:ok"})},this.hideTabBarHandler=function(t){var a=t.animation,n=t.successHandler;r.status=a?2:1,n({"errMsg":"hideTabBar:ok"})};var a=this.conf.list,i=this.conf.customRoutes;if("[object Array]"!==Object.prototype.toString.call(a)||a.length<2||a.length>5)throw new Error("tabBar 配置错误");for(var b in this.homePage=d(this.conf.homePage),i)this.customRoutes.push([b,i[b]]);a.forEach((function(t){0!==t.pagePath.indexOf("/")&&(t.pagePath="/"+t.pagePath)})),this.list=a}return e.prototype.getCurrentUrl=function(){var t,r=this.conf.mode,a=this.conf.basename||"/";if("hash"===r){var n=window.location.href,i=n.indexOf("#");t=-1===i?"":n.substring(i+1)}else t=location.pathname;var s=d(h(t,a));return"/"===s?this.homePage:s},e.prototype.bindEvent=function(){l.eventCenter.on("__taroRouterChange",this.routerChangeHandler),l.eventCenter.on("__taroSwitchTab",this.switchTabHandler),l.eventCenter.on("__taroSetTabBarBadge",this.setTabBarBadgeHandler),l.eventCenter.on("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),l.eventCenter.on("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),l.eventCenter.on("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),l.eventCenter.on("__taroShowTabBar",this.showTabBarHandler),l.eventCenter.on("__taroHideTabBar",this.hideTabBarHandler)},e.prototype.removeEvent=function(){l.eventCenter.off("__taroRouterChange",this.routerChangeHandler),l.eventCenter.off("__taroSwitchTab",this.switchTabHandler),l.eventCenter.off("__taroSetTabBarBadge",this.setTabBarBadgeHandler),l.eventCenter.off("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),l.eventCenter.off("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),l.eventCenter.off("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),l.eventCenter.off("__taroShowTabBar",this.showTabBarHandler),l.eventCenter.off("__taroHideTabBar",this.hideTabBarHandler)},e.prototype.componentDidLoad=function(){this.tabbarPos=this.tabbar.nextElementSibling?"top":"bottom",this.bindEvent(),this.routerChangeHandler()},e.prototype.disconnectedCallback=function(){this.removeEvent()},e.prototype.render=function(){var t,r,a=this,s=this.conf,l=this.tabbarPos,d=void 0===l?"bottom":l,h=this.status,c=Object(i.a)("weui-tabbar",((t={})["taro-tabbar__border-"+(s.borderStyle||"black")]=!0,t)),u=-1===this.selectedIndex||1===h,f=2===h;return Object(n.e)(n.a,{"class":Object(i.a)("taro-tabbar__tabbar","taro-tabbar__tabbar-"+d,(r={},r["taro-tabbar__tabbar-hide"]=u,r["taro-tabbar__tabbar-slideout"]=f,r))},Object(n.e)("div",{"class":c,"style":{"backgroundColor":s.backgroundColor||""}},this.list.map((function(t,r){var i,l,d=a.selectedIndex===r;return d?(i=s.selectedColor,l=t.selectedIconPath):(i=s.color||"",l=t.iconPath),Object(n.e)(b,{"index":r,"onSelect":a.switchTab.bind(a),"isSelected":d,"textColor":i,"iconPath":l,"text":t.text,"badgeText":t.badgeText,"showRedDot":t.showRedDot})}))))},Object.defineProperty(e.prototype,"tabbar",{"get":function get(){return Object(n.d)(this)},"enumerable":!1,"configurable":!0}),e}();c.style="html,body{height:100%}#app{height:100%}.taro-tabbar__border-white::before{border-top-color:#fff !important}.taro-tabbar__container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.taro-tabbar__panel{-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}.taro-tabbar__tabbar{position:relative;height:50px;width:100%;-webkit-transition:bottom 0.2s, top 0.2s;transition:bottom 0.2s, top 0.2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}"},"286":function(t,r,a){"use strict";a.d(r,"a",(function(){return s}));var n=a(7),i=a.n(n);var s=function createCommonjsModule(t,r,a){return t(a={"path":r,"exports":{},"require":function require(t,r){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},a.exports),a.exports}((function(t){!function(){var r={}.hasOwnProperty;function o(){for(var t=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var s=i()(n);if("string"===s||"number"===s)t.push(n);else if(Array.isArray(n)){if(n.length){var b=o.apply(null,n);b&&t.push(b)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&t.push(l);else t.push(n.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):window.classNames=o}()}))}}]);