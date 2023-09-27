/*! For license information please see 53.d28f6d8b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[53],{53:function(t,r,e){e.r(r),e.d(r,{default:function(){return p}});var n,o=e(439),i=e(271),a=e(791),c=e(689),u=e(517),s=e(168),h=e(867).zo.ul(n||(n=(0,s.Z)(["\n  display: flex;\n  list-style-type: none;\n  flex-wrap: wrap;\n  gap: 20px;\n  li {\n    width: 150px;\n  }\n  p {\n    margin: 0;\n  }\n  span {\n    font-style: italic;\n  }\n"]))),f=e(294),l=e(184),p=function(){var t=(0,c.UO)().movieId,r=(0,a.useState)([]),e=(0,o.Z)(r,2),n=e[0],s=e[1],p=(0,a.useState)(!1),v=(0,o.Z)(p,2),d=v[0],y=v[1];return(0,a.useEffect)((function(){y(!0),(0,u.zv)(t).then((function(t){s(t.data.cast)})).catch((function(t){return console.log(t)})).finally((function(){y(!1)}))}),[t]),console.log(n),d?(0,l.jsx)(i.g,{}):(0,l.jsx)("div",{children:(0,l.jsx)(h,{children:n.length?n.map((function(t){return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{width:150,src:(0,f.B)(t.profile_path),alt:t.name}),(0,l.jsxs)("p",{children:["Name: ",(0,l.jsx)("span",{children:t.name})]}),(0,l.jsxs)("p",{children:["Character: ",(0,l.jsx)("span",{children:t.character})]})]},t.id)})):(0,l.jsx)("p",{children:"We don't have any information about cast of this movie \ud83d\ude12 "})})})}},294:function(t,r,e){e.d(r,{B:function(){return n}});var n=function(t){return t?"https://image.tmdb.org/t/p/w300/".concat(t):"https://placehold.co/300x450/jpg?text=NO+PHOTO"}},517:function(t,r,e){e.d(r,{TP:function(){return u},V0:function(){return c},rj:function(){return a},tx:function(){return h},zv:function(){return s}});var n=e(861);function o(){o=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof g?r:g,a=Object.create(o.prototype),c=new Z(n||[]);return i(a,"_invoke",{value:O(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",v="executing",d="completed",y={};function g(){}function m(){}function w(){}var x={};h(x,c,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(G([])));j&&j!==e&&n.call(j,c)&&(x=j);var L=w.prototype=g.prototype=Object.create(x);function E(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function O(r,e,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=l(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=l(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function I(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,i(L,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:m,configurable:!0}),m.displayName=h(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},E(_.prototype),h(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),h(L,s,"Generator"),h(L,c,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,Z.prototype={constructor:Z,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var i=e(243).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDg0ZDQ5Zjg5YmQ3NDRjNWUwMTY3MzgwY2FlMjFmZCIsInN1YiI6IjY1MGRhNWI5NGRhM2Q0MDBlYWUzMTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M4_cfwbulJAeuSyJDeI2tC5CtlbwpQRIT4sWdrQ9OdE"},method:"get",params:{language:"en-US"}}),a=function(){var t=(0,n.Z)(o().mark((function t(){var r,e,n=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:"day",t.next=3,i.get("/trending/movie/".concat(r));case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(o().mark((function t(){var r,e,n,a,c=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:1,n={params:{query:r,include_adult:!1,page:e}},t.next=5,i.get("/search/movie",n);case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(o().mark((function t(){var r,e,n=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:736074,t.next=3,i.get("/movie/".concat(r));case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(o().mark((function t(){var r,e,n=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:736074,t.next=3,i.get("/movie/".concat(r,"/credits"));case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(o().mark((function t(){var r,e,n,a,c=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:736074,e=c.length>1&&void 0!==c[1]?c[1]:1,n={params:{page:e}},t.next=5,i.get("/movie/".concat(r,"/reviews"),n);case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=53.d28f6d8b.chunk.js.map