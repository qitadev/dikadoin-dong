(self.webpackChunkdikadoin_dong=self.webpackChunkdikadoin_dong||[]).push([[678],{8142:function(e,t,n){var r=n(5301).w_;e.exports.F=function(e){return r({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}},5301:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),o(e.child))}))}function s(e){return function(t){return r.createElement(u,i({attr:i({},e.attr)},t),o(e.child))}}function u(e){var t=function(t){var n,a=e.attr,l=e.size,o=e.title,s=c(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function l(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,o,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(o=c;0!=o--;)if(!l(e[o],i[o]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!i.has(o.value[0]))return!1;for(u=e.entries();!(o=u.next()).done;)if(!l(o.value[1],i.get(o.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!i.has(o.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(o=c;0!=o--;)if(e[o]!==i[o])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(o=c;0!=o--;)if(!Object.prototype.hasOwnProperty.call(i,s[o]))return!1;if(t&&e instanceof Element)return!1;for(o=c;0!=o--;)if(("_owner"!==s[o]&&"__v"!==s[o]&&"__o"!==s[o]||!e.$$typeof)&&!l(e[s[o]],i[s[o]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return l(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),l=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var o,s=[];function u(){o=e(s.map((function(e){return e.props}))),m.canUseDOM?t(o):n&&(o=n(o))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return o},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return l.createElement(r,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",c),m}}},2301:function(e,t,n){"use strict";n.d(t,{vx:function(){return r},Al:function(){return a},KR:function(){return l}});var r="bouquet",a="hampers",l="all"},6013:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ze}});var r=n(5861),a=n(7757),l=n.n(a),i=n(7294);function c(){return i.createElement("section",{className:"px-5 py-8 bg-brand-brown text-brand-yellow"},i.createElement("div",{className:"max-w-5xl mx-auto flex items-center"},i.createElement("div",{className:"flex-1 flex justify-center"},i.createElement("p",null,i.createElement("span",{className:"text-4xl"},"15+"),i.createElement("br",null),"Variasi Produk")),i.createElement("hr",{className:"bg-brand-yellow h-14 w-1 rounded-full"}),i.createElement("div",{className:"flex-1 flex justify-center"},i.createElement("p",null,i.createElement("span",{className:"text-4xl"},"96+"),i.createElement("br",null),"Produk Terjual")),i.createElement("hr",{className:"bg-brand-yellow h-14 w-1 rounded-full"}),i.createElement("div",{className:"flex-1 flex justify-center"},i.createElement("p",null,i.createElement("span",{className:"text-4xl"},"80+"),i.createElement("br",null),"Pelanggan"))))}var o=n(9339),s=n(2301),u=n(5785),m=n(9604);function d(e){var t=e.hampersItem,n=e.isChecked,r=e.onClick;return i.createElement("label",{htmlFor:"item"+t.id,className:"bg-white rounded-lg overflow-hidden border filter border-brand-brown transition cursor-pointer "+(n?"ring ring-brand-brown":"ring-0 grayscale")},i.createElement("div",{className:"aspect-w-4 aspect-h-3"},i.createElement("img",{src:t.img_url,alt:t.name,className:"object-cover"})),i.createElement("div",{className:"p-3"},i.createElement("h3",{className:"text-brand-brown font-bold"},t.name),i.createElement("p",{className:"mt-1 text-sm"},t.price)),i.createElement("input",{id:"item"+t.id,type:"checkbox",className:"hidden",defaultChecked:n,onClick:r}))}function f(e){var t=e.hampersBox,n=e.isChecked,r=e.onClick;return i.createElement("label",{htmlFor:"box"+t.id,className:"bg-white rounded-lg overflow-hidden border filter border-brand-brown transition cursor-pointer "+(n?"ring ring-brand-brown":"ring-0 grayscale")},i.createElement("div",{className:"aspect-w-4 aspect-h-3"},i.createElement("img",{src:t.img_url,alt:t.name,className:"object-cover"})),i.createElement("div",{className:"p-3"},i.createElement("h3",{className:"text-brand-brown font-bold"},t.name),i.createElement("p",{className:"mt-1 text-sm"},t.price)),i.createElement("input",{id:"box"+t.id,type:"checkbox",className:"hidden",defaultChecked:n,onClick:r}))}function p(){return i.createElement("div",{className:"mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"},i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))),i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}))))}var g=n(3645),h=n(6142);function b(){var e=(0,i.useState)([]),t=e[0],n=e[1],a=(0,i.useState)([]),c=a[0],o=a[1],s=(0,i.useState)(!1),b=s[0],y=s[1],A=(0,i.useState)([]),v=A[0],E=A[1],w=(0,i.useState)(null),x=w[0],N=w[1],k=(0,i.useRef)(),O=function(){var e=(0,r.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,(0,m.mj)();case 3:return t=e.sent,e.next=6,(0,m.Qt)();case 6:r=e.sent,n(t),o(r),y(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){O()}),[]),i.createElement("div",null,b?i.createElement(p,null):i.createElement("div",null,i.createElement("h2",{className:"mt-8 text-xl font-bold"},"Pilih Item"),i.createElement("div",{className:"mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"},t.map((function(e){return i.createElement(d,{key:e.id,hampersItem:e,isChecked:!!v.find((function(t){return t.id===e.id})),onClick:function(){return function(e){v.find((function(t){return t.id===e.id}))?E(v.filter((function(t){return t.id!==e.id}))):E([].concat((0,u.Z)(v),[e]))}(e)}})}))),i.createElement("h2",{className:"mt-8 text-xl font-bold"},"Pilih Item"),i.createElement("div",{className:"mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"},c.map((function(e){return i.createElement(f,{key:e.id,hampersBox:e,isChecked:x&&x.id===e.id,onClick:function(){return function(e){x&&x.id===e.id?N(null):N(e)}(e)}})}))),i.createElement("button",{className:"mt-8 bg-brand-primary font-medium px-5 py-3 rounded-lg",onClick:function(){return k.current.openModal()}},"Pesan Sekarang"),i.createElement(g.Z,{ref:k,title:"Beli Produk"},i.createElement(h.Z,{items:function(){var e=v.map((function(e){return{name:e.name,price:e.price}}));return x&&e.push({name:x.name,price:x.price}),e}()}))))}var y=n(5444);function A(e){var t=e.product,n=(0,i.useRef)();return i.createElement("article",{className:"bg-white rounded-lg overflow-hidden border border-brand-brown"},i.createElement("div",{className:"aspect-w-4 aspect-h-3"},i.createElement("img",{src:t.img_url,alt:t.name,className:"object-cover"})),i.createElement("div",{className:"p-4"},i.createElement("h2",{className:"font-bold"},t.type," (",t.name,")"),i.createElement("p",null,t.price),i.createElement("button",{className:"mt-2 px-4 py-2 bg-brand-primary rounded w-full text-sm font-medium",onClick:function(){return n.current.openModal()}},"Beli Sekarang"),i.createElement(g.Z,{ref:n,title:"Beli Produk"},i.createElement(h.Z,{items:[{name:t.type+" - "+t.name,price:t.price}]})),i.createElement(y.rU,{to:"/products/"+t.id,className:"mt-2 px-4 py-2 block text-center rounded w-full text-sm font-medium"},"Lihat Detail")))}function v(){return i.createElement("div",{className:"flex flex-col bg-white rounded-lg overflow-hidden"},i.createElement("div",{className:"aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"p-4"},i.createElement("div",{className:"w-full h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-3/4 h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-1/2 h-4 bg-gray-300 animate-pulse"}),i.createElement("div",{className:"mt-2 w-1/3 h-4 bg-gray-300 animate-pulse"})))}function E(){return i.createElement("div",{className:"mt-8 grid grid-cols-2 md:grid-cols-3 gap-6"},i.createElement(v,null),i.createElement(v,null),i.createElement(v,null),i.createElement(v,null),i.createElement(v,null),i.createElement(v,null))}function w(){var e=(0,i.useState)([]),t=e[0],n=e[1],a=(0,i.useState)(!1),c=a[0],o=a[1],s=function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,(0,m.Dg)();case 3:t=e.sent,n(t),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){s()}),[]),i.createElement("div",null,c?i.createElement(E,null):i.createElement("div",{className:"mt-8 grid grid-cols-2 md:grid-cols-3 gap-6"},t.map((function(e){return i.createElement(A,{key:e.id,product:e})}))))}var x=i.lazy((function(){return n.e(309).then(n.bind(n,8309))})),N=i.forwardRef((function(e,t){var n=(0,o.Wd)("type",o.Zp),r=n[0],a=n[1],l=(0,i.useState)(null),c=l[0],u=l[1],m="undefined"==typeof window;(0,i.useEffect)((function(){[s.KR,void 0].includes(r)||r===s.vx?u(i.createElement(w,null)):r===s.Al&&u(i.createElement(b,null))}),[r]);return i.createElement("section",{ref:t,className:"bg-brand-yellow py-12 px-5"},i.createElement("div",{className:"max-w-5xl mx-auto"},i.createElement("h2",{className:"font-bold text-2xl text-center"},"Katalog Produk"),i.createElement("p",{className:"mt-2 text-center"},"Kami menyediakan beberapa pilihan produk"),!m&&i.createElement(i.Suspense,{fallback:i.createElement("div",null)},i.createElement(x,{type:r,changeType:function(e){a(e)}})),c))})),k=n(2359),O=n(8142),T="product",C="about us",D="contact";function S(e){var t=e.goToComponent,r=(0,i.useState)(!1),a=r[0],l=r[1],c=function(e){e.target===e.currentTarget&&l(!1)};return i.createElement("header",{className:"bg-brand-yellow py-3 px-5"},i.createElement("div",{className:"max-w-5xl mx-auto flex justify-between"},i.createElement(y.rU,{to:"/",className:"flex items-center font-medium"},i.createElement(k.S,{src:"../images/dikadoin-dong-logo.webp",alt:"Dikadoin Logo",placeholder:"none",layout:"fixed",width:40,__imageData:n(7332)}),i.createElement("span",{className:"ml-4"},"Dikadoin.dong")),i.createElement("nav",{className:"hidden md:flex justify-between items-center font-medium"},i.createElement("button",{onClick:function(){return t(T)},className:"mx-4"},"Produk"),i.createElement("button",{onClick:function(){return t(C)},className:"mx-4"},"Tentang Kami"),i.createElement("button",{onClick:function(){return t(D)},className:"mx-4"},"Kontak"),i.createElement("button",{onClick:function(){return t(T)},className:"block bg-yellow-200 ml-4 px-5 py-2 rounded-3xl"},"Yuk Belanja")),i.createElement("button",{"aria-label":"Buka Menu",className:"md:hidden",onClick:function(){return l(!a)}},i.createElement(O.F,{size:"1.5rem"})),i.createElement("nav",{onKeyDown:c,onClick:c,role:"presentation",className:"md:hidden fixed w-full top-0 bg-black bg-opacity-20 z-40 shadow-xl "+(a?"min-h-screen":"h-0")},i.createElement("div",{className:"fixed bg-brand-brown w-80 min-h-screen flex flex-col transition-all "+(a?"left-0":"-left-full")},i.createElement(y.rU,{to:"/",className:"flex items-center font-medium px-8 py-4"},i.createElement(k.S,{src:"../images/dikadoin-dong-logo.webp",alt:"Dikadoin Logo",placeholder:"none",layout:"fixed",width:40,__imageData:n(7332)}),i.createElement("span",{className:"ml-2 text-brand-yellow"},"Dikadoin.dong")),i.createElement("button",{onClick:function(){return t(T)},className:"mt-8 px-8 py-4 text-left text-brand-yellow"},"Produk"),i.createElement("button",{onClick:function(){return t(C)},className:"px-8 py-4 text-left text-brand-yellow"},"Tentang Kami"),i.createElement("button",{onClick:function(){return t(D)},className:"px-8 py-4 text-left text-brand-yellow"},"Kontak"),i.createElement("button",{onClick:function(){return t(T)},className:"mt-4 ml-8 mr-auto bg-yellow-200 px-5 py-2 rounded-3xl"},"Yuk Belanja")))))}function P(e){var t=e.onCTAClick;return i.createElement("section",{className:"bg-brand-yellow px-5 py-20"},i.createElement("div",{className:"max-w-5xl mx-auto flex flex-col md:flex-row items-center"},i.createElement("div",{className:"flex-1"},i.createElement("h1",{className:"font-bold text-4xl"},"Bagikan kebahagiaan dengan berbagi kisah bersama orang spesial"),i.createElement("p",{className:"mt-6"},"Visualisasikan rasa sayangmu dengan berbagi kisah bersama orang spesial"),i.createElement("button",{className:"mt-4 px-8 py-3 bg-brand-primary rounded-lg font-medium",onClick:t},"Yuk Belanja")),i.createElement("div",{className:"mt-8 md:mt-0 md:ml-8"},i.createElement(k.S,{src:"../images/hero-image-1.webp",alt:"Hero 1",placeholder:"none",width:400,layout:"constrained",__imageData:n(3533)}))))}var j,Y,F,U,G=i.forwardRef((function(e,t){return i.createElement("section",{ref:t,className:"bg-brand-yellow px-5 py-20"},i.createElement("div",{className:"max-w-5xl flex sm:flex-row flex-col justify-between items-center mx-auto"},i.createElement("div",{className:"w-full sm:w-1/2 flex flex-col justify-start"},i.createElement("h1",{className:"text-3xl font-bold"},"Tentang Kami"),i.createElement("p",{className:"mt-4"},'Dikadoin.dong merupakan bisnis industri kreatif yang menghasilkan produk berupa custom gift dan variasi buket dan berlokasi di Yogyakarta. Konsep yang ditawarkan adalah berupa kesederhanaan yang bernilai estetika. Dengan Tagline "Berbagi Kisah" membantu untuk memvisualisasikan rasa sayang dengan produk kami.')),i.createElement("div",{className:"w-full sm:w-1/2 mt-8 flex justify-center sm:mt-0"},i.createElement(k.S,{src:"../images/hero-image-1.webp",alt:"dikadoin logo",width:300,placeholder:"none",layout:"constrained",__imageData:n(7895)}))))})),Q=n(5610),I=n(5697),B=n.n(I),L=n(4839),R=n.n(L),M=n(2993),z=n.n(M),_=n(6494),K=n.n(_),H="bodyAttributes",Z="htmlAttributes",q="titleAttributes",V={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},X=(Object.keys(V).map((function(e){return V[e]})),"charset"),W="cssText",J="href",$="http-equiv",ee="innerHTML",te="itemprop",ne="name",re="property",ae="rel",le="src",ie="target",ce={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},oe="defaultTitle",se="defer",ue="encodeSpecialCharacters",me="onChangeClientState",de="titleTemplate",fe=Object.keys(ce).reduce((function(e,t){return e[ce[t]]=t,e}),{}),pe=[V.NOSCRIPT,V.SCRIPT,V.STYLE],ge="data-react-helmet",he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},be=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ye=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Ee=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},we=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},xe=function(e){var t=Ce(e,V.TITLE),n=Ce(e,de);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Ce(e,oe);return t||r||void 0},Ne=function(e){return Ce(e,me)||function(){}},ke=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Ae({},e,t)}),{})},Oe=function(e,t){return t.filter((function(e){return void 0!==e[V.BASE]})).map((function(e){return e[V.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var l=r[a].toLowerCase();if(-1!==e.indexOf(l)&&n[l])return t.concat(n)}return t}),[])},Te=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Ye("Helmet: "+e+' should be of type "Array". Instead found type "'+he(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,l=Object.keys(e),i=0;i<l.length;i++){var c=l[i],o=c.toLowerCase();-1===t.indexOf(o)||n===ae&&"canonical"===e[n].toLowerCase()||o===ae&&"stylesheet"===e[o].toLowerCase()||(n=o),-1===t.indexOf(c)||c!==ee&&c!==W&&c!==te||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var l=Object.keys(a),i=0;i<l.length;i++){var c=l[i],o=K()({},r[c],a[c]);r[c]=o}return e}),[]).reverse()},Ce=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},De=(j=Date.now(),function(e){var t=Date.now();t-j>16?(j=t,e(t)):setTimeout((function(){De(e)}),0)}),Se=function(e){return clearTimeout(e)},Pe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||De:n.g.requestAnimationFrame||De,je="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Se:n.g.cancelAnimationFrame||Se,Ye=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Fe=null,Ue=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,c=e.noscriptTags,o=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,d=e.titleAttributes;Ie(V.BODY,r),Ie(V.HTML,a),Qe(m,d);var f={baseTag:Be(V.BASE,n),linkTags:Be(V.LINK,l),metaTags:Be(V.META,i),noscriptTags:Be(V.NOSCRIPT,c),scriptTags:Be(V.SCRIPT,s),styleTags:Be(V.STYLE,u)},p={},g={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(g[e]=f[e].oldTags)})),t&&t(),o(e,p,g)},Ge=function(e){return Array.isArray(e)?e.join(""):e},Qe=function(e,t){void 0!==e&&document.title!==e&&(document.title=Ge(e)),Ie(V.TITLE,t)},Ie=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(ge),a=r?r.split(","):[],l=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var o=i[c],s=t[o]||"";n.getAttribute(o)!==s&&n.setAttribute(o,s),-1===a.indexOf(o)&&a.push(o);var u=l.indexOf(o);-1!==u&&l.splice(u,1)}for(var m=l.length-1;m>=0;m--)n.removeAttribute(l[m]);a.length===l.length?n.removeAttribute(ge):n.getAttribute(ge)!==i.join(",")&&n.setAttribute(ge,i.join(","))}},Be=function(e,t){var n=document.head||document.querySelector(V.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),l=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===ee)n.innerHTML=t.innerHTML;else if(r===W)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(ge,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):l.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),l.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:l}},Le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[ce[n]||n]=e[n],t}),t)},Me=function(e,t,n){switch(e){case V.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[ge]=!0,a=Re(n,r),[i.createElement(V.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=Le(n),l=Ge(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+we(l,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+we(l,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case H:case Z:return{toComponent:function(){return Re(t)},toString:function(){return Le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[ge]=!0,r);return Object.keys(t).forEach((function(e){var n=ce[e]||e;if(n===ee||n===W){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===ee||e===W)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+we(r[t],n)+'"';return e?e+" "+a:a}),""),l=r.innerHTML||r.cssText||"",i=-1===pe.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+l+"</"+e+">")}),"")}(e,t,n)}}}},ze=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,c=e.noscriptTags,o=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,d=e.titleAttributes;return{base:Me(V.BASE,t,r),bodyAttributes:Me(H,n,r),htmlAttributes:Me(Z,a,r),link:Me(V.LINK,l,r),meta:Me(V.META,i,r),noscript:Me(V.NOSCRIPT,c,r),script:Me(V.SCRIPT,o,r),style:Me(V.STYLE,s,r),title:Me(V.TITLE,{title:m,titleAttributes:d},r)}},_e=R()((function(e){return{baseTag:Oe([J,ie],e),bodyAttributes:ke(H,e),defer:Ce(e,se),encode:Ce(e,ue),htmlAttributes:ke(Z,e),linkTags:Te(V.LINK,[ae,J],e),metaTags:Te(V.META,[ne,X,$,re,te],e),noscriptTags:Te(V.NOSCRIPT,[ee],e),onChangeClientState:Ne(e),scriptTags:Te(V.SCRIPT,[le,ee],e),styleTags:Te(V.STYLE,[W],e),title:xe(e),titleAttributes:ke(q,e)}}),(function(e){Fe&&je(Fe),e.defer?Fe=Pe((function(){Ue(e,(function(){Fe=null}))})):(Ue(e),Fe=null)}),ze)((function(){return null})),Ke=(Y=_e,U=F=function(e){function t(){return be(this,t),Ee(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!z()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case V.SCRIPT:case V.NOSCRIPT:return{innerHTML:t};case V.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,l=e.nestedChildren;return Ae({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Ae({},a,this.mapNestedChildrenToProps(n,l))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,l=e.newChildProps,i=e.nestedChildren;switch(r.type){case V.TITLE:return Ae({},a,((t={})[r.type]=i,t.titleAttributes=Ae({},l),t));case V.BODY:return Ae({},a,{bodyAttributes:Ae({},l)});case V.HTML:return Ae({},a,{htmlAttributes:Ae({},l)})}return Ae({},a,((n={})[r.type]=Ae({},l),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Ae({},t);return Object.keys(e).forEach((function(t){var r;n=Ae({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,l=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[fe[n]||n]=e[n],t}),t)}(ve(a,["children"]));switch(n.warnOnInvalidChildren(e,l),e.type){case V.LINK:case V.META:case V.NOSCRIPT:case V.SCRIPT:case V.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:l});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:l})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=ve(e,["children"]),r=Ae({},n);return t&&(r=this.mapChildrenToProps(t,r)),i.createElement(Y,r)},ye(t,null,[{key:"canUseDOM",set:function(e){Y.canUseDOM=e}}]),t}(i.Component),F.propTypes={base:B().object,bodyAttributes:B().object,children:B().oneOfType([B().arrayOf(B().node),B().node]),defaultTitle:B().string,defer:B().bool,encodeSpecialCharacters:B().bool,htmlAttributes:B().object,link:B().arrayOf(B().object),meta:B().arrayOf(B().object),noscript:B().arrayOf(B().object),onChangeClientState:B().func,script:B().arrayOf(B().object),style:B().arrayOf(B().object),title:B().string,titleAttributes:B().object,titleTemplate:B().string},F.defaultProps={defer:!0,encodeSpecialCharacters:!0},F.peek=Y.peek,F.rewind=function(){var e=Y.rewind();return e||(e=ze({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},U);Ke.renderStatic=Ke.rewind;function He(e){var t=e.children;return i.createElement("main",null,i.createElement(Ke,null,i.createElement("html",{lang:"id"}),i.createElement("title",null,"Dikadoin.dong"),i.createElement("meta",{name:"description",content:"Bagikan kebahagiaan dengan berbagi kisah bersama orang spesial"}),i.createElement("link",{rel:"shortcut icon",href:"data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAABQ4YAAUOGAHFDhgSRQ4YKgUOGDkFDhg+xQ4YPsUOGDkFDhgqBQ4YEkUOGAHFDhgAAAAAAAAAAAAFDhgABQ4YAAUOGAYFDhgkhQ4YO8UOGD/FDhg/xQ4YP8UOGD/FDhg/xQ4YP8UOGDvFDhgkhQ4YBgUOGAAFDhgABQ4YAAUOGAYFDhgsRQ4YP8UOGD/Fjph/x5AZv8dQGb/Gz5k/x1AZv8ZPWT/Ezhg/xQ4YP8UOGCxFDhgGBQ4YAAUOGAGFDhgkhQ4YP8TN2D/I0Rq/ydIbP85WHf/N1Z2/y1Ocf83Vnf/LExw/xo9ZP8UOGD/FDhg/xQ4YJIUOGAGFDhgSRQ4YO0UOGD/Ezdf/zFQc/8mSG7/HkZ5/yhPhP8vWJT/LFOJ/yBDaf8wUHP/Ezdf/xQ4YP8UOGDtFDhgSRQ4YKcUOGD/FDhg/xM3X/8wUHL/K0x0/z9no/9PdrD/WYG7/1R7sP8nSXD/MVFz/xM3X/8UOGD/FDhg/xQ4YKcUOGDjFDhg/xQ4YP8TN1//MFBy/ytNcf9cfqr/fZ/I/3KZx/9MdKn/KEty/zFRc/8TN1//FDhg/xQ4YP8UOGDjFDhg+xQ4YP8UOGD/Ezdf/y5Ocf8+Xnz/aYik/5Oao/+Biqj/NlqZ/yRGbv8yUXT/Ezdf/xQ4YP8UOGD/FDhg+xQ4YPsUOGD/FDhg/xM3YP82VXf/VHGN/5Wtwf+Ppdn/cYTJ/zRLhv8fQmj/LU5x/xM3X/8UOGD/FDhg/xQ4YPsUOGDjFDhg/xQ4YP8UOGD/WXKO/0dkg/8uT3n/bX+5/5Obv/9PZ4n/SGSC/0lmhP8SNl//FDhg/xQ4YP8UOGDjFDhgpxQ4YP8UOGD/Ezdf/zFQc/89W3z/HUBm/1Rsi/9ieZP/KElt/1Rui/8xUXT/Ezdf/xQ4YP8UOGD/FDhgpxQ4YEkUOGDtFDhg/xQ4YP8VOWH/WXKN/1Nui/8zUnX/MVBz/112kf9RbYr/Fzti/xQ4YP8UOGD/FDhg7RQ4YEkUOGAGFDhgkhQ4YP8UOGD/FDhg/yRGa/84Vnj/VG+L/2iAmP8/XX3/I0Vq/xM3X/8UOGD/FDhg/xQ4YJIUOGAGFDhgABQ4YBgUOGCxFDhg/xQ4YP8TN1//FDhg/xQ4YP8bPmT/Ezdg/xM3X/8UOGD/FDhg/xQ4YLEUOGAYFDhgABQ4YAAUOGAAFDhgGBQ4YJIUOGDvFDhg/xQ4YP8UOGD/FDhg/xQ4YP8UOGD/FDhg7xQ4YJIUOGAYFDhgABQ4YAAAAAAAAAAAABQ4YAAUOGAHFDhgSRQ4YKgUOGDkFDhg+xQ4YPsUOGDkFDhgqBQ4YEkUOGAHFDhgAAAAAAAAAAAA4AcAAMADAACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAADAAwAA4AcAAA==",type:"image/x-icon"})),t)}function Ze(){var e=(0,i.useState)([]),t=e[0],n=e[1],a=(0,i.useState)(!1),o=a[0],s=a[1],u=(0,i.useRef)(null),d=(0,i.useRef)(null),f=(0,i.useRef)(null),p=function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,(0,m.Dg)();case 3:t=e.sent,s(!1),n(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){switch(e){default:u.current.scrollIntoView({behavior:"smooth"});break;case C:d.current.scrollIntoView({behavior:"smooth"});break;case D:f.current.scrollIntoView({behavior:"smooth"})}};return(0,i.useEffect)((function(){p()}),[]),i.createElement(He,null,i.createElement(S,{goToComponent:g}),i.createElement(P,{onCTAClick:function(){return g(T)}}),i.createElement(c,null),i.createElement(N,{ref:u,products:t,isLoading:o}),i.createElement(G,{ref:d}),i.createElement(Q.Z,{ref:f}))}},3533:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/dikadoin-dong/static/aa1df61bf73f65dbead2046f6876ed70/9c120/hero-image-1.webp","srcSet":"/dikadoin-dong/static/aa1df61bf73f65dbead2046f6876ed70/e83e8/hero-image-1.webp 100w,\\n/dikadoin-dong/static/aa1df61bf73f65dbead2046f6876ed70/2c60e/hero-image-1.webp 200w,\\n/dikadoin-dong/static/aa1df61bf73f65dbead2046f6876ed70/9c120/hero-image-1.webp 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[]},"width":400,"height":330}')},7895:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/dikadoin-dong/static/aa1df61bf73f65dbead2046f6876ed70/b2568/hero-image-1.webp","srcSet":"/dikadoin-dong/static/aa1df61bf73f65dbead2046f6876ed70/e970b/hero-image-1.webp 75w,\\n/dikadoin-dong/static/aa1df61bf73f65dbead2046f6876ed70/f72cf/hero-image-1.webp 150w,\\n/dikadoin-dong/static/aa1df61bf73f65dbead2046f6876ed70/b2568/hero-image-1.webp 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[]},"width":300,"height":248}')}}]);
//# sourceMappingURL=component---src-pages-index-js-8539d800d61a5a0159b5.js.map