/*! For license information please see 296.0799208e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[296],{555:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r,o=n(439),c=n(791),i=n(87),u=n(689),a=n(160),s=n(766),d=n(444).ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),l=n(790);function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var p=function e(t,n){function r(e,r,o){if("undefined"!==typeof document){"number"===typeof(o=f({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var i in o)o[i]&&(c+="; "+i,!0!==o[i]&&(c+="="+o[i].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+c}}return Object.create({set:r,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var c=n[o].split("="),i=c.slice(1).join("=");try{var u=decodeURIComponent(c[0]);if(r[u]=t.read(i,u),e===u)break}catch(a){}}return e?r[e]:r}},remove:function(e,t){r(e,"",f({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,f({},this.attributes,t))},withConverter:function(t){return e(f({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),h=n(184),m=function(){var e=(0,c.useState)([]),t=(0,o.Z)(e,2),n=t[0],r=t[1],s=(0,u.TH)(),f=(0,c.useState)(null),m=(0,o.Z)(f,2),v=m[0],x=m[1],g=(0,l.j)().addToCart;(0,c.useEffect)((function(){(0,a.jw)().then((function(e){var t=e.data,n=t.result,o=t.id;r(n),p.set("guest",o)})).catch((function(e){return x(e)}))}),[]);var C=p.get("guest");console.log(C);return(0,h.jsxs)(h.Fragment,{children:[v&&(0,h.jsx)("h1",{children:v.message}),(0,h.jsx)(d,{children:n.map((function(e){var t=e.name,n=e._id,r=e.color,o=e.price;return(0,h.jsxs)("li",{children:[(0,h.jsx)(i.rU,{to:"/".concat(n),state:{from:s},children:t}),(0,h.jsx)("p",{children:r}),(0,h.jsxs)("p",{children:[o," UAH"]}),(0,h.jsx)("button",{type:"button",onClick:function(){g(n).then(console.log("added to cart")).catch((function(e){return x(e)}))},children:"Add to cart"})]},n)}))})]})}}}]);
//# sourceMappingURL=296.0799208e.chunk.js.map