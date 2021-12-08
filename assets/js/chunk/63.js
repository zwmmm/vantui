(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"296":function(e,t,n){"use strict";n.d(t,"e",(function(){return isPlainObject})),n.d(t,"f",(function(){return isPromise})),n.d(t,"b",(function(){return isDef})),n.d(t,"d",(function(){return isObj})),n.d(t,"a",(function(){return isBoolean})),n.d(t,"c",(function(){return isImageUrl})),n.d(t,"g",(function(){return isVideoUrl}));var i=n(402),a=n.n(i);function isFunction(e){return"function"==typeof e}function isPlainObject(e){return null!==e&&"object"===a()(e)&&!Array.isArray(e)}function isPromise(e){return isPlainObject(e)&&isFunction(e.then)&&isFunction(e.catch)}function isDef(e){return null!=e}function isObj(e){var t=a()(e);return null!==e&&("object"===t||"function"===t)}function isBoolean(e){return"boolean"==typeof e}var c=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,l=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;function isImageUrl(e){return c.test(e)}function isVideoUrl(e){return l.test(e)}},"300":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(3),a=n.n(i),c=n(6),l=n.n(c),r=n(16),o=n.n(r),s=n(17),u=n.n(s),d=n(280),f=n(27),p=(n(302),n(44)),b=function(e){o()(Index,e);var t=u()(Index);function Index(){return a()(this,Index),t.call(this)}return l()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,i=e.card;return Object(p.jsxs)(d.n,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(p.jsx)(d.n,{"className":"demo-block__title","children":n}),i?Object(p.jsx)(d.n,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(f.Component)},"302":function(e,t,n){},"318":function(e,t,n){},"320":function(e,t,n){"use strict";n.d(t,"a",(function(){return Loading}));var i=n(286),a=n.n(i),c=n(295),l=n.n(c),r=n(287),o=n.n(r),s=n(321),u=n.n(s),d=n(316),f=n.n(d),p=n(282),b=n.n(p),m=n(288),j=n.n(m),v=n(285),h=n.n(v),g=n(289),O=n.n(g),x=n(284),y=n.n(x),w=n(290),k=n.n(w),_=n(280),S=n(27),P=n(281),C=n(306);function textStyle(e){return Object(P.c)({"font-size":Object(C.a)(e.textSize)})}var z=n(44),I=["vertical","type","color","size","textSize","className","children","style"];function ownKeys(e,t){var n=b()(e);if(j.a){var i=j()(e);t&&(i=h()(i).call(i,(function(t){return O()(e,t).enumerable}))),n.push.apply(n,i)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,i=null!=arguments[t]?arguments[t]:{};if(t%2)y()(n=ownKeys(Object(i),!0)).call(n,(function(t){a()(e,t,i[t])}));else if(k.a)Object.defineProperties(e,k()(i));else{var c;y()(c=ownKeys(Object(i))).call(c,(function(t){Object.defineProperty(e,t,O()(i,t))}))}}return e}function Loading(e){var t,n=e.vertical,i=e.type,a=void 0===i?"circular":i,c=e.color,r=e.size,s=e.textSize,d=e.className,p=e.children,b=e.style,m=o()(e,I),j=Object(S.useState)(u()({"length":12})),v=l()(j,1)[0];return Object(z.jsxs)(_.n,_objectSpread(_objectSpread({"className":" "+P.b("loading",{"vertical":n})+" "+d,"style":P.c([b])},m),{},{"children":[Object(z.jsx)(_.n,{"className":"van-loading__spinner van-loading__spinner--"+a,"style":(t={"color":c,"size":r},Object(P.c)({"color":t.color,"width":Object(C.a)(t.size),"height":Object(C.a)(t.size)})),"children":"spinner"===a&&Object(z.jsx)(_.a,{"children":f()(v).call(v,(function(e,t){return Object(z.jsx)(_.n,{"className":"van-loading__dot"},"van-loading__dot_".concat(t))}))})}),Object(z.jsx)(_.n,{"className":"van-loading__text","style":textStyle({"textSize":s}),"children":p})]}))}t.b=Loading},"327":function(e,t,n){"use strict";n.d(t,"g",(function(){return range})),n.d(t,"d",(function(){return getSystemInfoSync})),n.d(t,"a",(function(){return addUnit})),n.d(t,"h",(function(){return requestAnimationFrame})),n.d(t,"f",(function(){return pickExclude})),n.d(t,"c",(function(){return getRect})),n.d(t,"b",(function(){return getAllRect})),n.d(t,"i",(function(){return toPromise}));n(76);var i,a=n(324),c=n.n(a),l=n(282),r=n.n(l),o=n(339),s=n.n(o),u=n(325),d=n.n(u),f=n(31),p=n(296);n(356);function range(e,t,n){return Math.min(Math.max(e,t),n)}function getSystemInfoSync(){return null==i&&(i=Object(f.getSystemInfoSync)()),i}function addUnit(e){if(Object(p.b)(e))return/^-?\d+(\.\d+)?$/.test(""+e)?f.default.pxTransform(e):e}function requestAnimationFrame(e){return"devtools"===getSystemInfoSync().platform?setTimeout((function(){e()}),33.333333333333336):Object(f.createSelectorQuery)().selectViewport().boundingClientRect().exec((function(){e()}))}function pickExclude(e,t){var n;return Object(p.e)(e)?c()(n=r()(e)).call(n,(function(n,i){return s()(t).call(t,i)||(n[i]=e[i]),n}),{}):{}}function getRect(e,t){return new d.a((function(n){var i=Object(f.createSelectorQuery)();e&&(i=i.in(e)),i.select(t).boundingClientRect().exec((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n(e[0])}))}))}function getAllRect(e,t){return new d.a((function(n){var i=Object(f.createSelectorQuery)();e&&(i=i.in(e)),i.selectAll(t).boundingClientRect().exec((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n(e[0])}))}))}function toPromise(e){return Object(p.f)(e)?e:d.a.resolve(e)}n.d(t,"e",(function(){return p.b}))},"356":function(e,t,n){"use strict";n.d(t,"a",(function(){return canIUseModel})),n.d(t,"b",(function(){return canIUseNextTick}));n(76),n(409);var i,a=n(337),c=n.n(a),l=n(31);function gte(e){return function compareVersion(e,t){e=e.split("."),t=t.split(".");for(var n=Math.max(e.length,t.length);e.length<n;)e.push("0");for(;t.length<n;)t.push("0");for(var i=0;i<n;i++){var a=c()(e[i],10),l=c()(t[i],10);if(a>l)return 1;if(a<l)return-1}return 0}(function getSystemInfoSync(){return null==i&&(i=Object(l.getSystemInfoSync)()),i}().SDKVersion,e)>=0}function canIUseModel(){return gte("2.9.3")}function canIUseNextTick(){return Object(l.canIUse)("nextTick")}},"368":function(e,t,n){},"399":function(e,t,n){"use strict";n.d(t,"a",(function(){return Button}));var i=n(282),a=n.n(i),c=n(288),l=n.n(c),r=n(285),o=n.n(r),s=n(289),u=n.n(s),d=n(284),f=n.n(d),p=n(290),b=n.n(p),m=n(286),j=n.n(m),v=n(287),h=n.n(v),g=n(31),O=n(280),x=n(281),y=n(303),w=n(320),k=n(422),_=n.n(k),S=n(312);function rootStyle(e){var t;if(!e.color)return"";var n={"color":e.plain?e.color:"#fff","background":e.plain?null:e.color};return-1!==_()(t=e.color).call(t,"gradient")?n.border=0:n["border-color"]=e.color,Object(S.a)([n])}var P=n(44),C=["type","size","block","round","plain","square","loading","disabled","hairline","color","loadingSize","loadingType","loadingText","icon","classPrefix","onClick","children","style","className"];function ownKeys(e,t){var n=a()(e);if(l.a){var i=l()(e);t&&(i=o()(i).call(i,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,i)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,i=null!=arguments[t]?arguments[t]:{};if(t%2)f()(n=ownKeys(Object(i),!0)).call(n,(function(t){j()(e,t,i[t])}));else if(b.a)Object.defineProperties(e,b()(i));else{var a;f()(a=ownKeys(Object(i))).call(a,(function(t){Object.defineProperty(e,t,u()(i,t))}))}}return e}function Button(e){var t,n=e.type,i=void 0===n?"default":n,a=e.size,c=void 0===a?"normal":a,l=e.block,r=e.round,o=e.plain,s=e.square,u=e.loading,d=e.disabled,f=e.hairline,p=e.color,b=e.loadingSize,m=void 0===b?g.default.pxTransform(40):b,j=e.loadingType,v=void 0===j?"circular":j,k=e.loadingText,_=e.icon,S=e.classPrefix,z=void 0===S?"van-icon":S,I=e.onClick,N=e.children,R=e.style,T=e.className,F=h()(e,C);return Object(P.jsx)(O.b,_objectSpread(_objectSpread({"className":" "+x.b("button",[i,c,{"block":l,"round":r,"plain":o,"square":s,"loading":u,"disabled":d,"hairline":f,"unclickable":d||u}])+" "+(f?"van-hairline--surround":"")+" ".concat(T||""),"hoverClass":"van-button--active hover-class","style":x.c([rootStyle({"plain":o,"color":p}),R]),"onClick":d||u?void 0:I},F),{},{"children":u?Object(P.jsxs)(O.n,{"style":"display: flex","children":[Object(P.jsx)(w.a,{"className":"loading-class","size":m,"type":v,"color":(t={"type":i,"color":p,"plain":o},t.plain?t.color?t.color:"#c9c9c9":"default"===t.type?"#c9c9c9":"#fff")}),k&&Object(P.jsx)(O.n,{"className":"van-button__loading-text","children":k})]}):Object(P.jsxs)(O.a,{"children":[_&&Object(P.jsx)(y.a,{"size":"1.2em","name":_,"classPrefix":z,"className":"van-button__icon","style":"line-height: inherit;"}),Object(P.jsx)(O.n,{"className":"van-button__text","children":N})]})}))}t.b=Button},"416":function(e,t,n){"use strict";n(294),n(318),n(305),n(309),n(368)},"470":function(e,t,n){"use strict";function isArray(e){return"[object Array]"===toString.call(e)}function isUndefined(e){return"[object Undefined]"===toString.call(e)}function isObject(e){return"[object Object]"===toString.call(e)}function isEmptyObject(e){if(!isObject(e))return!1;for(var t in e)if(!isUndefined(e[t]))return!1;return!0}n.d(t,"a",(function(){return isArray})),n.d(t,"c",(function(){return isObject})),n.d(t,"b",(function(){return isEmptyObject}))},"803":function(e,t,n){},"804":function(e,t,n){},"905":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ie}));n(416);var i=n(399),a=(n(294),n(318),n(305),n(309),n(803),n(445),n(282)),c=n.n(a),l=n(288),r=n.n(l),o=n(289),s=n.n(o),u=n(284),d=n.n(u),f=n(290),p=n.n(f),b=n(286),m=n.n(b),j=n(287),v=n.n(j),h=n(295),g=n.n(h),O=n(316),x=n.n(O),y=n(398),w=n.n(y),k=n(505),_=n.n(k),S=n(325),P=n.n(S),C=n(285),z=n.n(C),I=n(31),N=n(27),R=n(280),T=n(320),F=n(303),L=n(296),A=n(470),D=n(312),U=n(306);function sizeStyle(e){return Object(D.a)({"width":Object(U.a)(e.previewSize),"height":Object(U.a)(e.previewSize)})}var M=n(327);function isImageFile(e){return null!=e.isImage?e.isImage:e.type?"image"===e.type:!!e.url&&Object(L.c)(e.url)}function isVideoFile(e){return null!=e.isVideo?e.isVideo:e.type?"video"===e.type:!!e.url&&Object(L.g)(e.url)}function chooseFile(e){var t=e.accept,n=e.multiple,i=e.capture,a=e.compressed,c=e.maxDuration,l=e.sizeType,r=e.camera,o=e.maxCount;return new P.a((function(e,s){switch(t){case"image":Object(I.chooseImage)({"count":n?Math.min(o,9):1,"sourceType":i||["album","camera"],"sizeType":l||["original","compressed"],"success":function success(t){return e(function formatImage(e){var t,n;return e.tempFiles?x()(t=e.tempFiles).call(t,(function(e){return w()(w()({},Object(M.f)(e,["path"])),{"type":"image","url":e.path,"thumb":e.path})})):e.tempFilePaths?x()(n=e.tempFilePaths).call(n,(function(e){return{"type":"image","url":e,"thumb":e}})):void 0}(t))},"fail":s});break;case"media":I.default.chooseMedia({"count":n?Math.min(o,9):1,"sourceType":i||["album","camera"],"maxDuration":c,"sizeType":l||["original","compressed"],"camera":r||"back","success":function success(t){return e(function formatMedia(e){var t;return x()(t=e.tempFiles).call(t,(function(t){return w()(w()({},Object(M.f)(t,["fileType","thumbTempFilePath","tempFilePath"])),{"type":e.type,"url":t.tempFilePath,"thumb":"video"===e.type?t.thumbTempFilePath:t.tempFilePath})}))}(t))},"fail":s});break;case"video":Object(I.chooseVideo)({"sourceType":i||["album","camera"],"compressed":a,"maxDuration":c||60,"camera":r||"back","success":function success(t){return e(function formatVideo(e){return[w()(w()({},Object(M.f)(e,["tempFilePath","thumbTempFilePath","errMsg"])),{"type":"video","url":e.tempFilePath,"thumb":e.thumbTempFilePath})]}(t))},"fail":s});break;default:I.default.chooseMessageFile({"count":n?o:1,"type":t,"success":function success(t){return e(function formatFile(e){var t;return x()(t=e.tempFiles).call(t,(function(e){return w()(w()({},Object(M.f)(e,["path"])),{"url":e.path})}))}(t))},"fail":s})}}))}var V=n(44),B=["disabled","multiple","uploadText","useBeforeRead","previewSize","name","accept","maxSize","maxCount","deletable","showUpload","previewImage","previewFullImage","imageFit","uploadIcon","capture","compressed","maxDuration","sizeType","camera","onError","onDelete","onBeforeRead","onAfterRead","onOversize","onClickPreview","style","className","children"];function ownKeys(e,t){var n=c()(e);if(r.a){var i=r()(e);t&&(i=z()(i).call(i,(function(t){return s()(e,t).enumerable}))),n.push.apply(n,i)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,i=null!=arguments[t]?arguments[t]:{};if(t%2)d()(n=ownKeys(Object(i),!0)).call(n,(function(t){m()(e,t,i[t])}));else if(p.a)Object.defineProperties(e,p()(i));else{var a;d()(a=ownKeys(Object(i))).call(a,(function(t){Object.defineProperty(e,t,s()(i,t))}))}}return e}var K=function Uploader(e){var t,n=Object(N.useState)({"lists":[],"isInCount":!0}),i=g()(n,2),a=i[0],c=i[1],l=e.disabled,r=e.multiple,o=e.uploadText,s=e.useBeforeRead,u=e.previewSize,d=void 0===u?160:u,f=e.name,p=void 0===f?"":f,b=e.accept,m=void 0===b?"image":b,j=e.maxSize,h=void 0===j?Number.MAX_VALUE:j,O=e.maxCount,y=void 0===O?100:O,k=e.deletable,S=void 0===k||k,C=e.showUpload,D=void 0===C||C,U=e.previewImage,M=void 0===U||U,K=e.previewFullImage,E=void 0===K||K,q=e.imageFit,J=void 0===q?"scaleToFill":q,Q=e.uploadIcon,X=void 0===Q?"photograph":Q,$=e.capture,G=e.compressed,H=e.maxDuration,W=e.sizeType,Y=e.camera,Z=e.onError,ee=e.onDelete,te=e.onBeforeRead,ne=e.onAfterRead,ie=e.onOversize,ae=e.onClickPreview,ce=e.style,le=e.className,re=e.children,oe=v()(e,B),se=Object(N.useMemo)((function(){return Object(A.a)(e.fileList)?e.fileList:[]}),[e.fileList]),ue=Object(N.useCallback)((function(e){var t=x()(e).call(e,(function(e){return w()(w()({},e),{"isImage":isImageFile(e),"isVideo":isVideoFile(e),"deletable":!Object(L.a)(e.deletable)||e.deletable})}));c((function(e){return _objectSpread(_objectSpread({},e),{},{"lists":t,"isInCount":t.length<y})}))}),[y]),de=Object(N.useCallback)((function(e){return{"name":p,"index":null==e?null==se?void 0:se.length:e}}),[null==se?void 0:se.length,p]),fe=Object(N.useCallback)((function(e){var t=e.detail.file;if(Array.isArray(t)?_()(t).call(t,(function(e){return e.size>h})):t.size>h)return e.detail=w()({"file":t},de()),void(null==ie||ie(e));e.detail=w()({"file":t},de()),null==ne||ne(e)}),[de,h,ne,ie]),pe=Object(N.useCallback)((function(e){var t=e.detail.file,n=!0;s&&(n=new P.a((function(n,i){var a=w()(w()({"file":t},de()),{"callback":function callback(e){e?n():i()}});e.detail=a,null==te||te(e)})).catch((function(e){console.log("err: ",e)}))),n&&(Object(L.f)(n)?n.then((function(n){return e.detail={"file":n||t},fe(e)})):(e.detail={"file":t},fe(e)))}),[fe,de,te,s]),be=Object(N.useCallback)((function(e){l||chooseFile({"accept":m,"multiple":r,"capture":$,"compressed":G,"maxDuration":H,"sizeType":W,"camera":Y,"maxCount":y-a.lists.length}).then((function(t){Object.defineProperty(e,"detail",{"value":{"file":r?t:t[0]},"writable":!0}),pe(e)})).catch((function(e){null==Z||Z(e)}))}),[pe,l,y,r,Z,a.lists.length,m,Y,$,G,H,W]),me=Object(N.useCallback)((function(e){var t=e.currentTarget.dataset.index,n=w()(w()({},de(t)),{"file":null==se?void 0:se[t]});Object.defineProperty(e,"detail",{"value":n,"writable":!0}),null==ee||ee(e)}),[se,de,ee]),je=Object(N.useCallback)((function(e){var t,n;if(E){var i=e.currentTarget.dataset.index,c=a.lists[i];Object(I.previewImage)({"urls":x()(t=z()(n=a.lists).call(n,(function(e){return isImageFile(e)}))).call(t,(function(e){return e.url})),"current":c.url,"fail":function fail(){Object(I.showToast)({"title":"预览图片失败","icon":"none"})}})}}),[E,a.lists]),ve=Object(N.useCallback)((function(){if(E);}),[E,a.lists]),he=Object(N.useCallback)((function(e){var t=e.currentTarget.dataset.index;Object(I.openDocument)({"filePath":a.lists[t].url,"showMenu":!0})}),[a.lists]),ge=Object(N.useCallback)((function(e){var t=e.currentTarget.dataset.index,n=a.lists[t];Object.defineProperty(e,"detail",{"value":w()(w()({},n),de(t)),"writable":!0}),null==ae||ae(e)}),[de,ae,a.lists]);return Object(N.useEffect)((function(){ue(se)}),[se]),Object(V.jsx)(R.n,_objectSpread(_objectSpread({"className":"van-uploader ".concat(le),"style":ce},oe),{},{"children":Object(V.jsxs)(R.n,{"className":"van-uploader__wrapper","children":[M&&x()(t=a.lists).call(t,(function(e,t){return Object(V.jsxs)(R.n,{"className":"van-uploader__preview","data-index":t,"onClick":ge,"children":[e.isImage?Object(V.jsx)(R.f,{"mode":J,"src":e.thumb||e.url,"alt":e.name||"图片"+t,"className":"van-uploader__preview-image","style":sizeStyle({"previewSize":d}),"data-index":t,"onClick":je}):e.isVideo?Object(V.jsx)(R.m,{"src":e.url,"title":e.name||"视频"+t,"poster":e.thumb,"autoplay":e.autoplay,"className":"van-uploader__preview-image","style":sizeStyle({"previewSize":d}),"data-index":t,"onClick":ve}):Object(V.jsxs)(R.n,{"className":"van-uploader__file","style":sizeStyle({"previewSize":d}),"data-index":t,"onClick":he,"children":[Object(V.jsx)(F.b,{"name":"description","className":"van-uploader__file-icon"}),Object(V.jsx)(R.n,{"className":"van-uploader__file-name van-ellipsis","children":e.name||e.url})]}),("uploading"===e.status||"failed"===e.status)&&Object(V.jsxs)(R.n,{"className":"van-uploader__mask","children":["failed"===e.status?Object(V.jsx)(F.b,{"name":"close","className":"van-uploader__mask-icon"}):Object(V.jsx)(T.b,{"className":"van-uploader__loading"}),e.message&&Object(V.jsx)(R.k,{"className":"van-uploader__mask-message","children":e.message})]}),S&&e.deletable&&Object(V.jsx)(R.n,{"data-index":t,"className":"van-uploader__preview-delete","onClick":me,"children":Object(V.jsx)(F.b,{"name":"cross","className":"van-uploader__preview-delete-icon"})})]},e.index||t)})),a.isInCount&&Object(V.jsxs)(R.a,{"children":[Object(V.jsx)(R.n,{"className":"van-uploader__slot","onClick":be,"children":re}),D&&Object(V.jsxs)(R.n,{"className":"van-uploader__upload "+(l?"van-uploader__upload--disabled":""),"style":sizeStyle({"previewSize":d}),"onClick":be,"children":[Object(V.jsx)(F.b,{"name":X,"className":"van-uploader__upload-icon"}),o&&Object(V.jsx)(R.k,{"className":"van-uploader__upload-text","children":o})]})]})]})}))},E=n(3),q=n.n(E),J=n(6),Q=n.n(J),X=n(24),$=n.n(X),G=n(16),H=n.n(G),W=n(17),Y=n.n(W),Z=n(9),ee=n.n(Z),te=(n(603),n(460),n(604),n(424),n(90),n(126),n(129),n(136),n(130),n(326)),ne=n(300),ie=(n(804),function(e){H()(Index,e);var t=Y()(Index);function Index(){var e;return q()(this,Index),e=t.call(this),ee()($()(e),"state",{"fileList1":[],"fileList2":[{"url":"https://img.yzcdn.cn/vant/leaf.jpg"},{"url":"https://img.yzcdn.cn/vant/tree.jpg"}],"fileList3":[{"url":"https://img.yzcdn.cn/vant/sand.jpg"}],"fileList4":[],"fileList5":[],"fileList6":[],"cloudPath":[],"fileList7":[],"fileList8":[{"url":"https://img.yzcdn.cn/vant/leaf.jpg","status":"uploading","message":"上传中"},{"url":"https://img.yzcdn.cn/vant/tree.jpg","status":"failed","message":"上传失败"}]}),ee()($()(e),"beforeRead",(function(e){var t=e.detail,n=t.file,i=t.callback,a=void 0===i?function(){}:i;if(n&&n.url&&n.url.indexOf("jpeg")<0)return Object(I.showToast)({"title":"请选择jpg图片上传","icon":"none"}),void a(!1);a(!0)})),ee()($()(e),"afterRead",(function(t){var n=t.detail,i=n.file,a=n.name;console.log("...",i,a);var c=e.state["fileList".concat(a)];e.setState(ee()({},"fileList".concat(a),c.concat(i)))})),ee()($()(e),"oversize",(function(){Object(I.showToast)({"title":"文件超出大小限制","icon":"none"})})),ee()($()(e),"delete",(function(t){console.log("....",t);var n=t.detail,i=n.index,a=n.name,c=e.state["fileList".concat(a)],l=JSON.parse(JSON.stringify(c));l.splice(i,1),e.setState(ee()({},"fileList".concat(a),l))})),ee()($()(e),"clickPreview",(function(){})),ee()($()(e),"uploadToCloud",(function(){I.default.cloud.init();var t=e.state.fileList6,n=void 0===t?[]:t;if(n.length){var i=n.map((function(t,n){return e.uploadFilePromise("my-photo".concat(n,".png"),t)}));Promise.all(i).then((function(t){Object(I.showToast)({"title":"上传成功","icon":"none"});var n=t.map((function(e){return{"url":e.fileID}}));e.setState({"cloudPath":t,"fileList6":n})})).catch((function(e){Object(I.showToast)({"title":"上传失败","icon":"none"}),console.log(e)}))}else Object(I.showToast)({"title":"请选择图片","icon":"none"})})),ee()($()(e),"uploadFilePromise",(function(e,t){return I.default.cloud.uploadFile({"cloudPath":e,"filePath":t.path})})),e}return Q()(Index,[{"key":"render","value":function render(){var e=this.state,t=e.fileList1,n=e.fileList7,a=e.fileList2,c=e.fileList8,l=e.fileList3,r=e.fileList4,o=e.fileList5,s=e.fileList6;return Object(V.jsx)(te.a,{"title":"Uploader 文件上传","className":"page-uploader","children":Object(V.jsxs)(V.Fragment,{"children":[Object(V.jsx)(ne.a,{"title":"基础用法","padding":!0,"children":Object(V.jsx)(K,{"name":"1","fileList":t,"onAfterRead":this.afterRead,"onDelete":this.delete,"onClickPreview":this.clickPreview})}),Object(V.jsx)(ne.a,{"title":"上传视频","padding":!0,"children":Object(V.jsx)(K,{"name":"7","accept":"video","fileList":n,"onAfterRead":this.afterRead,"onDelete":this.delete})}),Object(V.jsx)(ne.a,{"title":"文件预览","padding":!0,"children":Object(V.jsx)(K,{"name":"2","fileList":a,"multiple":!0,"onAfterRead":this.afterRead,"onDelete":this.delete,"onClickPreview":this.clickPreview})}),Object(V.jsx)(ne.a,{"title":"隐藏上传按钮","padding":!0,"children":Object(V.jsx)(K,{"name":"2","fileList":a,"multiple":!0,"showUpload":!1,"onAfterRead":this.afterRead,"onDelete":this.delete,"onClickPreview":this.clickPreview})}),Object(V.jsx)(ne.a,{"title":"上传状态","padding":!0,"children":Object(V.jsx)(K,{"name":"8","fileList":c,"multiple":!0,"maxCount":2,"onAfterRead":this.afterRead,"onDelete":this.delete,"onClickPreview":this.clickPreview})}),Object(V.jsx)(ne.a,{"title":"限制上传数量","padding":!0,"children":Object(V.jsx)(K,{"name":"3","fileList":l,"multiple":!0,"maxCount":2,"onAfterRead":this.afterRead,"onDelete":this.delete,"onClickPreview":this.clickPreview})}),Object(V.jsx)(ne.a,{"title":"自定义上传样式","padding":!0,"children":Object(V.jsx)(K,{"name":"4","fileList":r,"maxCount":2,"onAfterRead":this.afterRead,"onDelete":this.delete,"onClickPreview":this.clickPreview,"children":Object(V.jsx)(i.b,{"icon":"photo","type":"primary","children":"上传图片"})})}),Object(V.jsx)(ne.a,{"title":"上传前校验","padding":!0,"children":Object(V.jsx)(K,{"name":"5","fileList":o,"onBeforeRead":this.beforeRead,"onAfterRead":this.afterRead,"onDelete":this.delete,"onClickPreview":this.clickPreview,"useBeforeRead":!0})}),Object(V.jsxs)(ne.a,{"title":"云存储上传","padding":!0,"children":[Object(V.jsx)(K,{"name":"6","fileList":s,"onBeforeRead":this.beforeRead,"onAfterRead":this.afterRead,"onDelete":this.delete,"onClickPreview":this.clickPreview,"useBeforeRead":!0}),Object(V.jsx)(R.n,{"className":"demo-margin-bottom","children":Object(V.jsx)(i.b,{"type":"primary","onClick":this.uploadToCloud,"children":"上传至云存储"})})]})]})})}}]),Index}(N.Component))}}]);