"use strict";exports.id=2234,exports.ids=[2234],exports.modules={70818:(e,t)=>{t.M=void 0;let o="https://sdk.mercadopago.com/js/v2",n=/^https:\/\/sdk\.mercadopago\.com\/js\/v2\/?(\?.*)?$/,r="MercadoPago has already been initialized in your window, please remove the duplicate import",a=()=>{for(var e=document.querySelectorAll(`script[src^="${o}"`),t=0;t<e.length;t++){var r=e[t];if(n.test(r.src))return r}return null},c=()=>{let e=document.createElement("script");e.src=o;let t=document.head||document.body;if(!t)throw Error("Expected document.body or document.head not to be null. MercadoPago requires a <body> or a <head> element, please add on your project.");return t.appendChild(e),e},i=null;t.M=()=>null!==i?i:i=new Promise((e,t)=>{if("undefined"==typeof window){e(null);return}if(window.MercadoPago){console.warn(r),e(window.MercadoPago);return}try{let o=a();o?console.warn(r):o||(o=c()),o.addEventListener("load",()=>{window.MercadoPago?e(window.MercadoPago):t(Error("MercadoPago.js not available"))}),o.addEventListener("error",()=>{t(Error("Failed to load MercadoPago.js"))})}catch(e){t(e);return}})},72234:(e,t,o)=>{o.r(t),o.d(t,{BACK_URL:()=>v,BACK_URL_ERROR:()=>h,default:()=>p});var n=o(19510),r=o(70818);class a{static getInstance(){var e,t,o,n;return e=this,t=void 0,o=void 0,n=function*(){if(this.publicKey)return this.loadedInstanceMercadoPago||(yield(0,r.M)(),this.loadedInstanceMercadoPago=!0),this.instanceMercadoPago||(this.instanceMercadoPago=new window.MercadoPago(this.publicKey,this.options)),this.instanceMercadoPago;console.error("Expected the PUBLIC_KEY to render the MercadoPago SDK React")},new(o||(o=Promise))(function(r,a){function c(e){try{d(n.next(e))}catch(e){a(e)}}function i(e){try{d(n.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?r(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(c,i)}d((n=n.apply(e,t||[])).next())})}}a.publicKey=null,a.options={},a.instanceMercadoPago=void 0,a.loadedInstanceMercadoPago=!1;var c=o(71159),i=o.n(c);let d=()=>{},s=e=>{console.error(e)},l=({settings:e,name:t,divId:o,controller:n})=>(function(e,t,o,n){return new(o||(o=Promise))(function(r,a){function c(e){try{d(n.next(e))}catch(e){a(e)}}function i(e){try{d(n.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?r(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(c,i)}d((n=n.apply(e,t||[])).next())})})(void 0,void 0,void 0,function*(){let r=yield a.getInstance(),c=null==r?void 0:r.bricks();window[n]=yield null==c?void 0:c.create(t,o,e)}),u=({onReady:e=d,onError:t=s,customization:o,initialization:n,locale:r})=>((0,c.useEffect)(()=>{let a;let c={settings:{initialization:n,customization:o,locale:r,callbacks:{onReady:e,onError:t}},name:"statusScreen",divId:"statusScreenBrick_container",controller:"statusScreenBrickController"};return a=setTimeout(()=>{l(c)},200),()=>{var e;clearTimeout(a),null===(e=window.statusScreenBrickController)||void 0===e||e.unmount()}},[n,o,e,t]),i().createElement("div",{id:"statusScreenBrick_container"})),v=process.env.NEXT_PUBLIC_API_URL_BACK_URL,h=process.env.NEXT_PUBLIC_API_URL_BACK_URL_ERROR,p=({paymentId:e})=>{let t={visual:{showExternalReference:!0,hideStatusDetails:!1,hideTransactionDate:!1,texts:{ctaReturnLabel:"Volver a inicio"}},backUrls:{error:`${h}`,return:`${v}`}};return n.jsx("div",{id:"statusScreenBrick_container",children:n.jsx(u,{initialization:{paymentId:e},customization:t,onReady:()=>{console.log("Status Screen Brick est\xe1 listo.")},onError:e=>{console.error("Error en Status Screen Brick:",e)},locale:"es-AR"})})}}};