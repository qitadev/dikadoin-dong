(self.webpackChunkdikadoin_dong=self.webpackChunkdikadoin_dong||[]).push([[678],{8142:function(e,t,n){var r=n(5301).w_;e.exports.F=function(e){return r({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}},1941:function(e,t,n){var r=n(5301).w_;e.exports.l=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}},5301:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),o(e.child))}))}function s(e){return function(t){return r.createElement(u,c({attr:c({},e.attr)},t),o(e.child))}}function u(e){var t=function(t){var n,a=e.attr,l=e.size,o=e.title,s=i(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function l(e,c){if(e===c)return!0;if(e&&c&&"object"==typeof e&&"object"==typeof c){if(e.constructor!==c.constructor)return!1;var i,o,s,u;if(Array.isArray(e)){if((i=e.length)!=c.length)return!1;for(o=i;0!=o--;)if(!l(e[o],c[o]))return!1;return!0}if(n&&e instanceof Map&&c instanceof Map){if(e.size!==c.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!c.has(o.value[0]))return!1;for(u=e.entries();!(o=u.next()).done;)if(!l(o.value[1],c.get(o.value[0])))return!1;return!0}if(r&&e instanceof Set&&c instanceof Set){if(e.size!==c.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!c.has(o.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(c)){if((i=e.length)!=c.length)return!1;for(o=i;0!=o--;)if(e[o]!==c[o])return!1;return!0}if(e.constructor===RegExp)return e.source===c.source&&e.flags===c.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===c.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===c.toString();if((i=(s=Object.keys(e)).length)!==Object.keys(c).length)return!1;for(o=i;0!=o--;)if(!Object.prototype.hasOwnProperty.call(c,s[o]))return!1;if(t&&e instanceof Element)return!1;for(o=i;0!=o--;)if(("_owner"!==s[o]&&"__v"!==s[o]&&"__o"!==s[o]||!e.$$typeof)&&!l(e[s[o]],c[s[o]]))return!1;return!0}return e!=e&&c!=c}e.exports=function(e,t){try{return l(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),l=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var o,s=[];function u(){o=e(s.map((function(e){return e.props}))),m.canUseDOM?t(o):n&&(o=n(o))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return o},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,s=[],e};var c=a.prototype;return c.UNSAFE_componentWillMount=function(){s.push(this),u()},c.componentDidUpdate=function(){u()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},c.render=function(){return l.createElement(r,this.props)},a}(a.PureComponent);return c(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(m,"canUseDOM",i),m}}},2301:function(e,t,n){"use strict";n.d(t,{vx:function(){return r},Al:function(){return a},KR:function(){return l}});var r="bouquet",a="hampers",l="all"},4009:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ve}});var r=n(5861),a=n(7757),l=n.n(a),c=n(7294);function i(){return c.createElement("section",{className:"px-5 py-8 bg-brand-brown text-brand-yellow"},c.createElement("div",{className:"max-w-5xl mx-auto flex items-center"},c.createElement("div",{className:"flex-1 flex justify-center"},c.createElement("p",null,c.createElement("span",{className:"text-4xl"},"15+"),c.createElement("br",null),"Variasi Produk")),c.createElement("hr",{className:"bg-brand-yellow h-14 w-1 rounded-full"}),c.createElement("div",{className:"flex-1 flex justify-center"},c.createElement("p",null,c.createElement("span",{className:"text-4xl"},"96+"),c.createElement("br",null),"Produk Terjual")),c.createElement("hr",{className:"bg-brand-yellow h-14 w-1 rounded-full"}),c.createElement("div",{className:"flex-1 flex justify-center"},c.createElement("p",null,c.createElement("span",{className:"text-4xl"},"80+"),c.createElement("br",null),"Pelanggan"))))}var o=n(9339),s=n(2301),u=n(9604),m=n(5444),d=n(3645),f=n(6142);function p(e){var t=e.product,n=(0,c.useRef)();return c.createElement("article",{className:"bg-white rounded-lg overflow-hidden border border-brand-brown"},c.createElement("div",{className:"aspect-w-4 aspect-h-3"},c.createElement("img",{src:t.img_url,alt:t.name,className:"object-cover"})),c.createElement("div",{className:"p-4"},c.createElement("h2",{className:"font-bold"},t.type," (",t.name,")"),c.createElement("p",null,t.price),c.createElement("button",{className:"mt-2 px-4 py-2 bg-brand-primary rounded w-full text-sm font-medium",onClick:function(){return n.current.openModal()}},"Beli Sekarang"),c.createElement(d.Z,{ref:n,title:"Beli Produk"},c.createElement(f.Z,{items:[{name:t.type+" - "+t.name,price:t.price}]})),c.createElement(m.rU,{to:"/products/"+t.id,className:"mt-2 px-4 py-2 block text-center rounded w-full text-sm font-medium"},"Lihat Detail")))}function g(){return c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-1/2 h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-1/3 h-4 bg-gray-300 animate-pulse"})))}function h(){return c.createElement("div",{className:"mt-8 grid grid-cols-2 md:grid-cols-3 gap-6"},c.createElement(g,null),c.createElement(g,null),c.createElement(g,null),c.createElement(g,null),c.createElement(g,null),c.createElement(g,null))}function b(){var e=(0,c.useState)([]),t=e[0],n=e[1],a=(0,c.useState)(!1),i=a[0],o=a[1],s=function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,(0,u.Tu)();case 3:t=e.sent,n(t),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){s()}),[]),c.createElement("div",null,i?c.createElement(h,null):c.createElement("div",{className:"mt-8 grid grid-cols-2 md:grid-cols-3 gap-6"},t.map((function(e){return c.createElement(p,{key:e.id,product:e})}))))}var y=n(5785),v=n(1941);function A(e){var t=e.hampersItem,n=e.isChecked,r=e.onClick;return c.createElement("label",{htmlFor:"item"+t.id,className:"relative bg-white rounded-lg overflow-hidden border border-brand-brown transition cursor-pointer "+(n?"ring ring-brand-brown":"ring-0")},c.createElement("div",{className:"aspect-w-4 aspect-h-3"},c.createElement("img",{src:t.img_url,alt:t.name,className:"object-cover"})),c.createElement("div",{className:"p-3"},c.createElement("h3",{className:"text-brand-brown font-bold"},t.name),c.createElement("p",{className:"mt-1 text-sm"},t.price)),c.createElement("input",{id:"item"+t.id,type:"checkbox",className:"hidden",defaultChecked:n,onClick:r}),n&&c.createElement("div",{className:"absolute w-full h-full inset-0 flex items-center justify-center"},c.createElement("div",{className:"bg-white rounded-full p-4 shadow"},c.createElement(v.l,{size:"1.5rem"}))))}function E(e){var t=e.hampersBox,n=e.isChecked,r=e.onClick;return c.createElement("label",{htmlFor:"box"+t.id,className:"relative bg-white rounded-lg overflow-hidden border border-brand-brown transition cursor-pointer "+(n?"ring ring-brand-brown":"ring-0")},c.createElement("div",{className:"aspect-w-4 aspect-h-3"},c.createElement("img",{src:t.img_url,alt:t.name,className:"object-cover"})),c.createElement("div",{className:"p-3"},c.createElement("h3",{className:"text-brand-brown font-bold"},t.name),c.createElement("p",{className:"mt-1 text-sm"},t.price)),c.createElement("input",{id:"box"+t.id,type:"checkbox",className:"hidden",defaultChecked:n,onClick:r}),n&&c.createElement("div",{className:"absolute w-full h-full inset-0 flex items-center justify-center"},c.createElement("div",{className:"bg-white rounded-full p-4 shadow"},c.createElement(v.l,{size:"1.5rem"}))))}function w(){return c.createElement("div",{className:"mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"},c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),c.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},c.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"p-4"},c.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),c.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))))}function x(){var e=(0,c.useState)([]),t=e[0],n=e[1],a=(0,c.useState)([]),i=a[0],o=a[1],s=(0,c.useState)(!1),m=s[0],p=s[1],g=(0,c.useState)([]),h=g[0],b=g[1],v=(0,c.useState)(null),x=v[0],N=v[1],k=(0,c.useRef)(),O=function(){var e=(0,r.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,(0,u.mj)();case 3:return t=e.sent,e.next=6,(0,u.Qt)();case 6:r=e.sent,n(t),o(r),p(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){O()}),[]),c.createElement("div",null,m?c.createElement(w,null):c.createElement("div",null,c.createElement("h2",{className:"mt-8 text-xl font-bold"},"Pilih Item"),c.createElement("div",{className:"mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"},t.map((function(e){return c.createElement(A,{key:e.id,hampersItem:e,isChecked:!!h.find((function(t){return t.id===e.id})),onClick:function(){return function(e){h.find((function(t){return t.id===e.id}))?b(h.filter((function(t){return t.id!==e.id}))):b([].concat((0,y.Z)(h),[e]))}(e)}})}))),c.createElement("h2",{className:"mt-8 text-xl font-bold"},"Pilih Box"),c.createElement("div",{className:"mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"},i.map((function(e){return c.createElement(E,{key:e.id,hampersBox:e,isChecked:x&&x.id===e.id,onClick:function(){return function(e){x&&x.id===e.id?N(null):N(e)}(e)}})}))),c.createElement("button",{className:"mt-8 bg-brand-primary font-medium px-5 py-3 rounded-lg",onClick:function(){return k.current.openModal()}},"Pesan Sekarang"),c.createElement(d.Z,{ref:k,title:"Beli Produk"},c.createElement(f.Z,{items:function(){var e=h.map((function(e){return{name:e.name,price:e.price}}));return x&&e.push({name:x.name,price:x.price}),e}()}))))}function N(){var e=(0,c.useState)([]),t=e[0],n=e[1],a=(0,c.useState)(!1),i=a[0],o=a[1],s=function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,(0,u.Dg)();case 3:t=e.sent,n(t),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){s()}),[]),c.createElement("div",null,i?c.createElement(h,null):c.createElement("div",{className:"mt-8 grid grid-cols-2 md:grid-cols-3 gap-6"},t.map((function(e){return c.createElement(p,{key:e.id,product:e})}))))}var k=c.lazy((function(){return n.e(309).then(n.bind(n,8309))})),O=c.forwardRef((function(e,t){var n=(0,o.Wd)("type",o.Zp),r=n[0],a=n[1],l=(0,c.useState)(null),i=l[0],u=l[1],m="undefined"==typeof window;(0,c.useEffect)((function(){[s.KR,void 0].includes(r)?u(c.createElement(b,null)):r===s.vx?u(c.createElement(N,null)):r===s.Al&&u(c.createElement(x,null))}),[r]);return c.createElement("section",{ref:t,className:"bg-brand-yellow py-12 px-5"},c.createElement("div",{className:"max-w-5xl mx-auto"},c.createElement("h2",{className:"font-bold text-2xl text-center"},"Katalog Produk"),c.createElement("p",{className:"mt-2 text-center"},"Kami menyediakan beberapa pilihan produk"),!m&&c.createElement(c.Suspense,{fallback:c.createElement("div",null)},c.createElement(k,{type:r,changeType:function(e){a(e)}})),i))})),T=n(2359),C=n(8142),D="product",S="about us",P="contact";function j(e){var t=e.goToComponent,r=(0,c.useState)(!1),a=r[0],l=r[1],i=function(e){e.target===e.currentTarget&&l(!1)};return c.createElement("header",{className:"bg-brand-yellow py-3 px-5"},c.createElement("div",{className:"max-w-5xl mx-auto flex justify-between"},c.createElement(m.rU,{to:"/",className:"flex items-center font-medium"},c.createElement(T.S,{src:"../images/dikadoin-dong-logo.webp",alt:"Dikadoin Logo",placeholder:"none",layout:"fixed",width:40,__imageData:n(7332)}),c.createElement("span",{className:"ml-4"},"Dikadoin.dong")),c.createElement("nav",{className:"hidden md:flex justify-between items-center font-medium"},c.createElement("button",{onClick:function(){return t(D)},className:"mx-4"},"Produk"),c.createElement("button",{onClick:function(){return t(S)},className:"mx-4"},"Tentang Kami"),c.createElement("button",{onClick:function(){return t(P)},className:"mx-4"},"Kontak"),c.createElement("button",{onClick:function(){return t(D)},className:"block bg-yellow-200 ml-4 px-5 py-2 rounded-3xl"},"Yuk Belanja")),c.createElement("button",{"aria-label":"Buka Menu",className:"md:hidden",onClick:function(){return l(!a)}},c.createElement(C.F,{size:"1.5rem"})),c.createElement("nav",{onKeyDown:i,onClick:i,role:"presentation",className:"md:hidden fixed w-full top-0 bg-black bg-opacity-20 z-40 shadow-xl "+(a?"min-h-screen":"h-0")},c.createElement("div",{className:"fixed bg-brand-brown w-80 min-h-screen flex flex-col transition-all "+(a?"left-0":"-left-full")},c.createElement(m.rU,{to:"/",className:"flex items-center font-medium px-8 py-4"},c.createElement(T.S,{src:"../images/dikadoin-dong-logo.webp",alt:"Dikadoin Logo",placeholder:"none",layout:"fixed",width:40,__imageData:n(7332)}),c.createElement("span",{className:"ml-2 text-brand-yellow"},"Dikadoin.dong")),c.createElement("button",{onClick:function(){return t(D)},className:"mt-8 px-8 py-4 text-left text-brand-yellow"},"Produk"),c.createElement("button",{onClick:function(){return t(S)},className:"px-8 py-4 text-left text-brand-yellow"},"Tentang Kami"),c.createElement("button",{onClick:function(){return t(P)},className:"px-8 py-4 text-left text-brand-yellow"},"Kontak"),c.createElement("button",{onClick:function(){return t(D)},className:"mt-4 ml-8 mr-auto bg-yellow-200 px-5 py-2 rounded-3xl"},"Yuk Belanja")))))}function Y(e){var t=e.onCTAClick;return c.createElement("section",{className:"bg-brand-yellow px-5 py-20"},c.createElement("div",{className:"max-w-5xl mx-auto flex flex-col md:flex-row items-center"},c.createElement("div",{className:"flex-1"},c.createElement("h1",{className:"font-bold text-4xl"},"Bagikan kebahagiaan dengan berbagi kisah bersama orang spesial"),c.createElement("p",{className:"mt-6"},"Visualisasikan rasa sayangmu dengan berbagi kisah bersama orang spesial"),c.createElement("button",{className:"mt-4 px-8 py-3 bg-brand-primary rounded-lg font-medium",onClick:t},"Yuk Belanja")),c.createElement("div",{className:"mt-8 md:mt-0 md:ml-8"},c.createElement(T.S,{src:"../images/hero-image-1.webp",alt:"Hero 1",placeholder:"none",width:400,layout:"constrained",__imageData:n(3533)}))))}var F,U,G,Q,B=c.forwardRef((function(e,t){return c.createElement("section",{ref:t,className:"bg-brand-yellow px-5 py-20"},c.createElement("div",{className:"max-w-5xl flex sm:flex-row flex-col justify-between items-center mx-auto"},c.createElement("div",{className:"w-full sm:w-1/2 flex flex-col justify-start"},c.createElement("h1",{className:"text-3xl font-bold"},"Tentang Kami"),c.createElement("p",{className:"mt-4"},'Dikadoin.dong merupakan bisnis industri kreatif yang menghasilkan produk berupa custom gift dan variasi buket yang berlokasi di Yogyakarta. Konsep yang ditawarkan adalah berupa kesederhanaan yang bernilai estetika. Dengan Tagline "Berbagi Kisah" membantu untuk memvisualisasikan rasa sayang dengan produk kami.')),c.createElement("div",{className:"w-full sm:w-1/2 mt-8 flex justify-center sm:mt-0"},c.createElement(T.S,{src:"../images/about-us.webp",alt:"dikadoin logo",width:300,placeholder:"none",layout:"constrained",__imageData:n(8162)}))))})),I=n(5610),L=n(5697),R=n.n(L),M=n(4839),z=n.n(M),_=n(2993),K=n.n(_),H=n(6494),Z=n.n(H),q="bodyAttributes",V="htmlAttributes",X="titleAttributes",W={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},J=(Object.keys(W).map((function(e){return W[e]})),"charset"),$="cssText",ee="href",te="http-equiv",ne="innerHTML",re="itemprop",ae="name",le="property",ce="rel",ie="src",oe="target",se={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ue="defaultTitle",me="defer",de="encodeSpecialCharacters",fe="onChangeClientState",pe="titleTemplate",ge=Object.keys(se).reduce((function(e,t){return e[se[t]]=t,e}),{}),he=[W.NOSCRIPT,W.SCRIPT,W.STYLE],be="data-react-helmet",ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ve=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Ae=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},xe=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Ne=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ke=function(e){var t=Se(e,W.TITLE),n=Se(e,pe);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Se(e,ue);return t||r||void 0},Oe=function(e){return Se(e,fe)||function(){}},Te=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Ee({},e,t)}),{})},Ce=function(e,t){return t.filter((function(e){return void 0!==e[W.BASE]})).map((function(e){return e[W.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var l=r[a].toLowerCase();if(-1!==e.indexOf(l)&&n[l])return t.concat(n)}return t}),[])},De=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Ue("Helmet: "+e+' should be of type "Array". Instead found type "'+ye(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,l=Object.keys(e),c=0;c<l.length;c++){var i=l[c],o=i.toLowerCase();-1===t.indexOf(o)||n===ce&&"canonical"===e[n].toLowerCase()||o===ce&&"stylesheet"===e[o].toLowerCase()||(n=o),-1===t.indexOf(i)||i!==ne&&i!==$&&i!==re||(n=i)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var l=Object.keys(a),c=0;c<l.length;c++){var i=l[c],o=Z()({},r[i],a[i]);r[i]=o}return e}),[]).reverse()},Se=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Pe=(F=Date.now(),function(e){var t=Date.now();t-F>16?(F=t,e(t)):setTimeout((function(){Pe(e)}),0)}),je=function(e){return clearTimeout(e)},Ye="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Pe:n.g.requestAnimationFrame||Pe,Fe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||je:n.g.cancelAnimationFrame||je,Ue=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Ge=null,Qe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,c=e.metaTags,i=e.noscriptTags,o=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,d=e.titleAttributes;Le(W.BODY,r),Le(W.HTML,a),Ie(m,d);var f={baseTag:Re(W.BASE,n),linkTags:Re(W.LINK,l),metaTags:Re(W.META,c),noscriptTags:Re(W.NOSCRIPT,i),scriptTags:Re(W.SCRIPT,s),styleTags:Re(W.STYLE,u)},p={},g={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(g[e]=f[e].oldTags)})),t&&t(),o(e,p,g)},Be=function(e){return Array.isArray(e)?e.join(""):e},Ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=Be(e)),Le(W.TITLE,t)},Le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(be),a=r?r.split(","):[],l=[].concat(a),c=Object.keys(t),i=0;i<c.length;i++){var o=c[i],s=t[o]||"";n.getAttribute(o)!==s&&n.setAttribute(o,s),-1===a.indexOf(o)&&a.push(o);var u=l.indexOf(o);-1!==u&&l.splice(u,1)}for(var m=l.length-1;m>=0;m--)n.removeAttribute(l[m]);a.length===l.length?n.removeAttribute(be):n.getAttribute(be)!==c.join(",")&&n.setAttribute(be,c.join(","))}},Re=function(e,t){var n=document.head||document.querySelector(W.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),l=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===ne)n.innerHTML=t.innerHTML;else if(r===$)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i=void 0===t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute(be,"true"),a.some((function(e,t){return c=t,n.isEqualNode(e)}))?a.splice(c,1):l.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),l.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:l}},Me=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ze=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[se[n]||n]=e[n],t}),t)},_e=function(e,t,n){switch(e){case W.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[be]=!0,a=ze(n,r),[c.createElement(W.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=Me(n),l=Be(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Ne(l,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Ne(l,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case q:case V:return{toComponent:function(){return ze(t)},toString:function(){return Me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[be]=!0,r);return Object.keys(t).forEach((function(e){var n=se[e]||e;if(n===ne||n===$){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===ne||e===$)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Ne(r[t],n)+'"';return e?e+" "+a:a}),""),l=r.innerHTML||r.cssText||"",c=-1===he.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(c?"/>":">"+l+"</"+e+">")}),"")}(e,t,n)}}}},Ke=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,l=e.linkTags,c=e.metaTags,i=e.noscriptTags,o=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,d=e.titleAttributes;return{base:_e(W.BASE,t,r),bodyAttributes:_e(q,n,r),htmlAttributes:_e(V,a,r),link:_e(W.LINK,l,r),meta:_e(W.META,c,r),noscript:_e(W.NOSCRIPT,i,r),script:_e(W.SCRIPT,o,r),style:_e(W.STYLE,s,r),title:_e(W.TITLE,{title:m,titleAttributes:d},r)}},He=z()((function(e){return{baseTag:Ce([ee,oe],e),bodyAttributes:Te(q,e),defer:Se(e,me),encode:Se(e,de),htmlAttributes:Te(V,e),linkTags:De(W.LINK,[ce,ee],e),metaTags:De(W.META,[ae,J,te,le,re],e),noscriptTags:De(W.NOSCRIPT,[ne],e),onChangeClientState:Oe(e),scriptTags:De(W.SCRIPT,[ie,ne],e),styleTags:De(W.STYLE,[$],e),title:ke(e),titleAttributes:Te(X,e)}}),(function(e){Ge&&Fe(Ge),e.defer?Ge=Ye((function(){Qe(e,(function(){Ge=null}))})):(Qe(e),Ge=null)}),Ke)((function(){return null})),Ze=(U=He,Q=G=function(e){function t(){return ve(this,t),xe(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!K()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case W.SCRIPT:case W.NOSCRIPT:return{innerHTML:t};case W.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,l=e.nestedChildren;return Ee({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Ee({},a,this.mapNestedChildrenToProps(n,l))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,l=e.newChildProps,c=e.nestedChildren;switch(r.type){case W.TITLE:return Ee({},a,((t={})[r.type]=c,t.titleAttributes=Ee({},l),t));case W.BODY:return Ee({},a,{bodyAttributes:Ee({},l)});case W.HTML:return Ee({},a,{htmlAttributes:Ee({},l)})}return Ee({},a,((n={})[r.type]=Ee({},l),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Ee({},t);return Object.keys(e).forEach((function(t){var r;n=Ee({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,l=a.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[ge[n]||n]=e[n],t}),t)}(we(a,["children"]));switch(n.warnOnInvalidChildren(e,l),e.type){case W.LINK:case W.META:case W.NOSCRIPT:case W.SCRIPT:case W.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:l});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:l})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=we(e,["children"]),r=Ee({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(U,r)},Ae(t,null,[{key:"canUseDOM",set:function(e){U.canUseDOM=e}}]),t}(c.Component),G.propTypes={base:R().object,bodyAttributes:R().object,children:R().oneOfType([R().arrayOf(R().node),R().node]),defaultTitle:R().string,defer:R().bool,encodeSpecialCharacters:R().bool,htmlAttributes:R().object,link:R().arrayOf(R().object),meta:R().arrayOf(R().object),noscript:R().arrayOf(R().object),onChangeClientState:R().func,script:R().arrayOf(R().object),style:R().arrayOf(R().object),title:R().string,titleAttributes:R().object,titleTemplate:R().string},G.defaultProps={defer:!0,encodeSpecialCharacters:!0},G.peek=U.peek,G.rewind=function(){var e=U.rewind();return e||(e=Ke({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},Q);Ze.renderStatic=Ze.rewind;function qe(e){var t=e.children;return c.createElement("main",null,c.createElement(Ze,null,c.createElement("html",{lang:"id"}),c.createElement("title",null,"Dikadoin.dong"),c.createElement("meta",{name:"description",content:"Bagikan kebahagiaan dengan berbagi kisah bersama orang spesial"}),c.createElement("link",{rel:"shortcut icon",href:"data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAABQ4YAAUOGAHFDhgSRQ4YKgUOGDkFDhg+xQ4YPsUOGDkFDhgqBQ4YEkUOGAHFDhgAAAAAAAAAAAAFDhgABQ4YAAUOGAYFDhgkhQ4YO8UOGD/FDhg/xQ4YP8UOGD/FDhg/xQ4YP8UOGDvFDhgkhQ4YBgUOGAAFDhgABQ4YAAUOGAYFDhgsRQ4YP8UOGD/Fjph/x5AZv8dQGb/Gz5k/x1AZv8ZPWT/Ezhg/xQ4YP8UOGCxFDhgGBQ4YAAUOGAGFDhgkhQ4YP8TN2D/I0Rq/ydIbP85WHf/N1Z2/y1Ocf83Vnf/LExw/xo9ZP8UOGD/FDhg/xQ4YJIUOGAGFDhgSRQ4YO0UOGD/Ezdf/zFQc/8mSG7/HkZ5/yhPhP8vWJT/LFOJ/yBDaf8wUHP/Ezdf/xQ4YP8UOGDtFDhgSRQ4YKcUOGD/FDhg/xM3X/8wUHL/K0x0/z9no/9PdrD/WYG7/1R7sP8nSXD/MVFz/xM3X/8UOGD/FDhg/xQ4YKcUOGDjFDhg/xQ4YP8TN1//MFBy/ytNcf9cfqr/fZ/I/3KZx/9MdKn/KEty/zFRc/8TN1//FDhg/xQ4YP8UOGDjFDhg+xQ4YP8UOGD/Ezdf/y5Ocf8+Xnz/aYik/5Oao/+Biqj/NlqZ/yRGbv8yUXT/Ezdf/xQ4YP8UOGD/FDhg+xQ4YPsUOGD/FDhg/xM3YP82VXf/VHGN/5Wtwf+Ppdn/cYTJ/zRLhv8fQmj/LU5x/xM3X/8UOGD/FDhg/xQ4YPsUOGDjFDhg/xQ4YP8UOGD/WXKO/0dkg/8uT3n/bX+5/5Obv/9PZ4n/SGSC/0lmhP8SNl//FDhg/xQ4YP8UOGDjFDhgpxQ4YP8UOGD/Ezdf/zFQc/89W3z/HUBm/1Rsi/9ieZP/KElt/1Rui/8xUXT/Ezdf/xQ4YP8UOGD/FDhgpxQ4YEkUOGDtFDhg/xQ4YP8VOWH/WXKN/1Nui/8zUnX/MVBz/112kf9RbYr/Fzti/xQ4YP8UOGD/FDhg7RQ4YEkUOGAGFDhgkhQ4YP8UOGD/FDhg/yRGa/84Vnj/VG+L/2iAmP8/XX3/I0Vq/xM3X/8UOGD/FDhg/xQ4YJIUOGAGFDhgABQ4YBgUOGCxFDhg/xQ4YP8TN1//FDhg/xQ4YP8bPmT/Ezdg/xM3X/8UOGD/FDhg/xQ4YLEUOGAYFDhgABQ4YAAUOGAAFDhgGBQ4YJIUOGDvFDhg/xQ4YP8UOGD/FDhg/xQ4YP8UOGD/FDhg7xQ4YJIUOGAYFDhgABQ4YAAAAAAAAAAAABQ4YAAUOGAHFDhgSRQ4YKgUOGDkFDhg+xQ4YPsUOGDkFDhgqBQ4YEkUOGAHFDhgAAAAAAAAAAAA4AcAAMADAACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAADAAwAA4AcAAA==",type:"image/x-icon"})),t)}function Ve(){var e=(0,c.useState)([]),t=e[0],n=e[1],a=(0,c.useState)(!1),o=a[0],s=a[1],m=(0,c.useRef)(null),d=(0,c.useRef)(null),f=(0,c.useRef)(null),p=function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,(0,u.Dg)();case 3:t=e.sent,s(!1),n(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){switch(e){default:m.current.scrollIntoView({behavior:"smooth"});break;case S:d.current.scrollIntoView({behavior:"smooth"});break;case P:f.current.scrollIntoView({behavior:"smooth"})}};return(0,c.useEffect)((function(){p()}),[]),c.createElement(qe,null,c.createElement(j,{goToComponent:g}),c.createElement(Y,{onCTAClick:function(){return g(D)}}),c.createElement(i,null),c.createElement(O,{ref:m,products:t,isLoading:o}),c.createElement(B,{ref:d}),c.createElement(I.Z,{ref:f}))}},3533:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/eb8788b0e7b4ee4fd85409d2d4a6b451/9c120/hero-image-1.webp","srcSet":"/static/eb8788b0e7b4ee4fd85409d2d4a6b451/e83e8/hero-image-1.webp 100w,\\n/static/eb8788b0e7b4ee4fd85409d2d4a6b451/2c60e/hero-image-1.webp 200w,\\n/static/eb8788b0e7b4ee4fd85409d2d4a6b451/9c120/hero-image-1.webp 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[]},"width":400,"height":330}')},8162:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/23dd254144c670bb1edeff568f998105/c1fb2/about-us.webp","srcSet":"/static/23dd254144c670bb1edeff568f998105/0987d/about-us.webp 75w,\\n/static/23dd254144c670bb1edeff568f998105/74f8c/about-us.webp 150w,\\n/static/23dd254144c670bb1edeff568f998105/c1fb2/about-us.webp 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[]},"width":300,"height":198}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5d72d4f51c7d2837df78.js.map