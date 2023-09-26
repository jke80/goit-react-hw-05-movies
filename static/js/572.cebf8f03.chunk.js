/*! For license information please see 572.cebf8f03.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[572],{572:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var n,o,i,a=r(439),c=r(791),u=r(168),s=r(867),l=s.ZP.form(n||(n=(0,u.Z)(["\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n\n  button {\n    margin-left: 10px;\n    display: inline-block;\n    padding: 4px;\n\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    font: inherit;\n  }\n\n  button:hover {\n    opacity: 1;\n    color: orange;\n  }\n\n  input {\n    display: inline-block;\n    width: 30ch;\n    font: inherit;\n    padding: 4px;\n  }\n"]))),f=r(87),h=r(184),p=function(){var t=(0,f.lr)("")[1],e=(0,c.useState)(""),r=(0,a.Z)(e,2),n=r[0],o=r[1];return(0,h.jsxs)(l,{onSubmit:function(e){e.preventDefault(),n.length&&(t({query:n}),o(""),e.currentTarget.reset())},children:[(0,h.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",onChange:function(t){return o(t.target.value)},value:n}),(0,h.jsx)("button",{type:"submit",children:(0,h.jsx)("span",{children:"Search"})})]})},v=r(689),d=s.ZP.ul(o||(o=(0,u.Z)(["\n  list-style-type: none;\n"]))),y=(0,s.ZP)(f.rU)(i||(i=(0,u.Z)(["\n  color: black;\n  text-decoration: none;\n\n  &.active {\n    color: orange;\n  }\n  &:hover,\n  &:focus {\n    color: orange;\n  }\n"]))),g=r(517),m=r(271),w=function(){var t=(0,v.TH)(),e=(0,f.lr)(),r=(0,a.Z)(e,1)[0],n=(0,c.useState)([]),o=(0,a.Z)(n,2),i=o[0],u=o[1],s=(0,c.useState)(""),l=(0,a.Z)(s,2),w=l[0],x=l[1],b=(0,c.useState)(!1),j=(0,a.Z)(b,2),L=j[0],E=j[1];return(0,c.useEffect)((function(){var t;x(null!==(t=r.get("query"))&&void 0!==t?t:"")}),[r]),(0,c.useEffect)((function(){w?(E(!0),(0,g.V0)(w).then((function(t){u(t.data.results)})).catch((function(t){return console.log(t)})).finally((function(){E(!1)}))):u([])}),[w]),(0,h.jsxs)("div",{children:[(0,h.jsx)(p,{}),L?(0,h.jsx)(m.g,{}):(0,h.jsx)(d,{children:i.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(y,{to:"".concat(e.id),state:{from:t},children:e.title})},e.id)}))})]})}},517:function(t,e,r){r.d(e,{TP:function(){return u},V0:function(){return c},rj:function(){return a},tx:function(){return l},zv:function(){return s}});var n=r(861);function o(){o=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),c=new N(n||[]);return i(a,"_invoke",{value:k(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",v="executing",d="completed",y={};function g(){}function m(){}function w(){}var x={};l(x,c,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(S([])));j&&j!==r&&n.call(j,c)&&(x=j);var L=w.prototype=g.prototype=Object.create(x);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function Z(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function k(e,r,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function S(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=w,i(L,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:m,configurable:!0}),m.displayName=l(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(Z.prototype),l(Z.prototype,u,(function(){return this})),e.AsyncIterator=Z,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new Z(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),l(L,s,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}var i=r(243).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDg0ZDQ5Zjg5YmQ3NDRjNWUwMTY3MzgwY2FlMjFmZCIsInN1YiI6IjY1MGRhNWI5NGRhM2Q0MDBlYWUzMTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M4_cfwbulJAeuSyJDeI2tC5CtlbwpQRIT4sWdrQ9OdE"},method:"get",params:{language:"en-US"}}),a=function(){var t=(0,n.Z)(o().mark((function t(){var e,r,n=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"day",t.next=3,i.get("/trending/movie/".concat(e));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(o().mark((function t(){var e,r,n,a,c=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",r=c.length>1&&void 0!==c[1]?c[1]:1,n={params:{query:e,include_adult:!1,page:r}},t.next=5,i.get("/search/movie",n);case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(o().mark((function t(){var e,r,n=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:736074,t.next=3,i.get("/movie/".concat(e));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(o().mark((function t(){var e,r,n=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:736074,t.next=3,i.get("/movie/".concat(e,"/credits"));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(o().mark((function t(){var e,r,n,a,c=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:736074,r=c.length>1&&void 0!==c[1]?c[1]:1,n={params:{page:r}},t.next=5,i.get("/movie/".concat(e,"/reviews"),n);case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=572.cebf8f03.chunk.js.map