(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{315:function(t,e,n){"use strict";var strong=n(318),r=n(316);t.exports=n(319)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},316:function(t,e,n){var r=n(26);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},318:function(t,e,n){"use strict";var r=n(32).f,o=n(87),c=n(190),l=n(55),f=n(188),d=n(189),v=n(132),h=n(192),y=n(133),O=n(27),j=n(129).fastKey,w=n(316),_=O?"_s":"size",m=function(t,e){var n,r=j(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[_]=0,null!=r&&d(r,n,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=w(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[_]=0},delete:function(t){var n=w(this,e),r=m(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[_]--}return!!r},forEach:function(t){w(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(w(this,e),t)}}),O&&r(h.prototype,"size",{get:function(){return w(this,e)[_]}}),h},def:function(t,e,n){var r,o,c=m(t,e);return c?c.v=n:(t._l=c={i:o=j(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[_]++,"F"!==o&&(t._i[o]=c)),t},getEntry:m,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=w(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))}),n?"entries":"values",!n,!0),y(e)}}},319:function(t,e,n){"use strict";var r=n(20),o=n(14),c=n(33),l=n(190),meta=n(129),f=n(189),d=n(188),v=n(26),h=n(28),y=n(131),O=n(86),j=n(134);t.exports=function(t,e,n,w,_,m){var S=r[t],k=S,P=_?"set":"add",C=k&&k.prototype,E={},x=function(t){var e=C[t];c(C,t,"delete"==t||"has"==t?function(a){return!(m&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return m&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof k&&(m||C.forEach&&!h((function(){(new k).entries().next()})))){var D=new k,N=D[P](m?{}:-0,1)!=D,F=h((function(){D.has(1)})),M=y((function(t){new k(t)})),B=!m&&h((function(){for(var t=new k,e=5;e--;)t[P](e,e);return!t.has(-0)}));M||((k=e((function(e,n){d(e,k,t);var r=j(new S,e,k);return null!=n&&f(n,_,r[P],r),r}))).prototype=C,C.constructor=k),(F||B)&&(x("delete"),x("has"),_&&x("get")),(B||N)&&x(P),m&&C.clear&&delete C.clear}else k=w.getConstructor(e,t,_,P),l(k.prototype,n),meta.NEED=!0;return O(k,t),E[t]=k,o(o.G+o.W+o.F*(k!=S),E),m||w.setStrong(k,t,_),k}},327:function(t,e,n){"use strict";n(10),n(8),n(54),n(35),n(36);var r=n(2),o=(n(39),n(315),n(53),n(5),n(4),n(9),n(19),n(191),n(1)),c=n(52),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(O)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var _=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=_.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=w(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),_.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},328:function(t,e,n){"use strict";n(10),n(8);var r=n(2),o=(n(39),n(315),n(53),n(5),n(4),n(9),n(35),n(36),n(191),n(1)),c=n(52),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.F)(r)]=e(),n}),{})}var O=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:O}})),w=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=y("justify",(function(){return{type:String,default:null,validator:w}})),m=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:m}})),k={align:Object.keys(j),justify:Object.keys(_),alignContent:Object.keys(S)},P={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=P[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var E=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},j),{},{justify:{type:String,default:null,validator:w}},_),{},{alignContent:{type:String,default:null,validator:m}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=E.get(l);return d||function(){var t,e;for(e in d=[],k)k[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),E.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},461:function(t,e,n){"use strict";n.r(e);n(69);var r=n(22),o={data:function(){return{orders:[]}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/orders").then((function(t){return t.json()})).then((function(data){console.log(data),t.orders=data.orders})).catch((function(t){return console.log(t)}));case 1:case"end":return e.stop()}}),e)})))()}}},c=n(61),l=n(84),f=n.n(l),d=n(327),v=n(308),h=n(328),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-row",[e("v-col",[this._v("\n      Welcome to the orders page\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:d.a,VContainer:v.a,VRow:h.a})}}]);