(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"300":function(e,n,r){"use strict";r.d(n,"a",(function(){return h}));var a=r(3),t=r.n(a),c=r(6),s=r.n(c),i=r(16),l=r.n(i),d=r(17),o=r.n(d),m=r(280),b=r(27),j=(r(302),r(44)),h=function(e){l()(Index,e);var n=o()(Index);function Index(){return t()(this,Index),n.call(this)}return s()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,r=e.title,a=e.card;return Object(j.jsxs)(m.n,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[r&&Object(j.jsx)(m.n,{"className":"demo-block__title","children":r}),a?Object(j.jsx)(m.n,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(b.Component)},"302":function(e,n,r){},"474":function(e,n,r){},"475":function(e,n,r){"use strict";r.d(n,"a",(function(){return Tag}));var a=r(282),t=r.n(a),c=r(288),s=r.n(c),i=r(285),l=r.n(i),d=r(289),o=r.n(d),m=r(284),b=r.n(m),j=r(290),h=r.n(j),g=r(286),p=r.n(g),u=r(287),x=r.n(u),O=r(280),y=r(281),f=r(303),N=r(312);var v=r(44),k=["type","size","mark","plain","round","color","textColor","closeable","children","onClose","style","className"];function ownKeys(e,n){var r=t()(e);if(s.a){var a=s()(e);n&&(a=l()(a).call(a,(function(n){return o()(e,n).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var r,a=null!=arguments[n]?arguments[n]:{};if(n%2)b()(r=ownKeys(Object(a),!0)).call(r,(function(n){p()(e,n,a[n])}));else if(h.a)Object.defineProperties(e,h()(a));else{var t;b()(t=ownKeys(Object(a))).call(t,(function(n){Object.defineProperty(e,n,o()(a,n))}))}}return e}function Tag(e){var n,r=e.type,a=void 0===r?"default":r,t=e.size,c=e.mark,s=e.plain,i=e.round,l=e.color,d=e.textColor,o=e.closeable,m=e.children,b=e.onClose,j=e.style,h=e.className,g=x()(e,k);return Object(v.jsxs)(O.n,_objectSpread(_objectSpread({"className":" "+y.b("tag",[a,t,{"mark":c,"plain":s,"round":i}])+" ".concat(h||""),"style":y.c([(n={"plain":s,"color":l,"textColor":d},Object(N.a)({"background-color":n.plain?"":n.color,"color":n.textColor||n.plain?n.textColor||n.color:""})),j])},g),{},{"children":[m,o&&Object(v.jsx)(f.a,{"name":"cross","className":"van-tag__close","onClick":b})]}))}n.b=Tag},"478":function(e,n,r){"use strict";r(294),r(305),r(309),r(474)},"785":function(e,n,r){},"891":function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return N}));r(478);var a=r(475),t=r(5),c=r.n(t),s=r(3),i=r.n(s),l=r(6),d=r.n(l),o=r(24),m=r.n(o),b=r(16),j=r.n(b),h=r(17),g=r.n(h),p=r(9),u=r.n(p),x=r(27),O=r(326),y=r(300),f=(r(785),r(44)),N=function(e){j()(Index,e);var n=g()(Index);function Index(){var e;return i()(this,Index),e=n.call(this),u()(m()(e),"state",{"show":{"success":!0,"primary":!0}}),u()(m()(e),"onClose",(function(n){e.setState({"show":c()(c()({},e.state.show),{},u()({},n.target.id,!1))})})),e}return d()(Index,[{"key":"render","value":function render(){var e=this.state.show;return Object(f.jsx)(O.a,{"title":"Tag 标记","children":Object(f.jsxs)(f.Fragment,{"children":[Object(f.jsxs)(y.a,{"title":"基础用法","padding":!0,"children":[Object(f.jsx)(a.b,{"className":"demo-margin-right","type":"primary","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","type":"success","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","type":"danger","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","type":"warning","children":"标签"})]}),Object(f.jsxs)(y.a,{"title":"圆角样式","padding":!0,"children":[Object(f.jsx)(a.b,{"className":"demo-margin-right","round":!0,"type":"primary","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","round":!0,"type":"success","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","round":!0,"type":"danger","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","round":!0,"type":"warning","children":"标签"})]}),Object(f.jsxs)(y.a,{"title":"标记样式","padding":!0,"children":[Object(f.jsx)(a.b,{"className":"demo-margin-right","mark":!0,"type":"primary","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","mark":!0,"type":"success","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","mark":!0,"type":"danger","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","mark":!0,"type":"warning","children":"标签"})]}),Object(f.jsxs)(y.a,{"title":"空心样式","padding":!0,"children":[Object(f.jsx)(a.b,{"className":"demo-margin-right","plain":!0,"type":"primary","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","plain":!0,"type":"success","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","plain":!0,"type":"danger","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","plain":!0,"type":"warning","children":"标签"})]}),Object(f.jsxs)(y.a,{"title":"自定义颜色","padding":!0,"children":[Object(f.jsx)(a.b,{"className":"demo-margin-right","color":"#f2826a","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","color":"#7232dd","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","color":"#7232dd","plain":!0,"children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","color":"#ffe1e1","textColor":"#ad0000","children":"标签"})]}),Object(f.jsxs)(y.a,{"title":"标签大小","padding":!0,"children":[Object(f.jsx)(a.b,{"className":"demo-margin-right","type":"danger","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","type":"danger","size":"medium","children":"标签"}),Object(f.jsx)(a.b,{"className":"demo-margin-right","type":"danger","size":"large","children":"标签"})]}),Object(f.jsxs)(y.a,{"title":"可关闭标签","padding":!0,"children":[e.primary&&Object(f.jsx)(a.b,{"className":"demo-margin-right","type":"primary","size":"medium","closeable":!0,"id":"primary","onClose":this.onClose,"children":"标签"}),e.success&&Object(f.jsx)(a.b,{"className":"demo-margin-right","type":"success","size":"medium","closeable":!0,"id":"success","onClose":this.onClose,"children":"标签"})]})]})})}}]),Index}(x.Component)}}]);