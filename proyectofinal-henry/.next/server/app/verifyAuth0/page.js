(()=>{var e={};e.id=421,e.ids=[421],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},69115:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>f,tree:()=>u}),r(8317),r(34357),r(7629),r(86190);var s=r(23191),o=r(88716),n=r(37922),i=r.n(n),a=r(95231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["verifyAuth0",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8317)),"C:\\Users\\colivera\\Desktop\\PROYECTOS\\PM-PROYECTO FINAL\\frontend\\proyectofinal-henry\\src\\app\\verifyAuth0\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,34357)),"C:\\Users\\colivera\\Desktop\\PROYECTOS\\PM-PROYECTO FINAL\\frontend\\proyectofinal-henry\\src\\app\\layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,7629)),"C:\\Users\\colivera\\Desktop\\PROYECTOS\\PM-PROYECTO FINAL\\frontend\\proyectofinal-henry\\src\\app\\error.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,86190)),"C:\\Users\\colivera\\Desktop\\PROYECTOS\\PM-PROYECTO FINAL\\frontend\\proyectofinal-henry\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\colivera\\Desktop\\PROYECTOS\\PM-PROYECTO FINAL\\frontend\\proyectofinal-henry\\src\\app\\verifyAuth0\\page.tsx"],d="/verifyAuth0/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/verifyAuth0/page",pathname:"/verifyAuth0",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},93116:(e,t,r)=>{Promise.resolve().then(r.bind(r,933)),Promise.resolve().then(r.bind(r,46618)),Promise.resolve().then(r.bind(r,56446))},933:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let s=r(94129);function o(e){let{reason:t,children:r}=e;throw new s.BailoutToCSRError(t)}},46618:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return n}});let s=r(10326),o=r(55403);function n(e){let{moduleIds:t}=e,r=(0,o.getExpectedRequestStore)("next/dynamic css"),n=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));n.push(...t)}}return 0===n.length?null:(0,s.jsx)(s.Fragment,{children:n.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},56446:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(10326),o=r(17577),n=r(93186),i=r(91007),a=r.n(i),l=r(46226);let u=()=>s.jsx(s.Fragment,{children:s.jsx(l.default,{src:n.default,className:a().iconoImage,alt:"Logo"})});var c=r(74690),d=r(5225),p=r(35047),f=r(88736),m=r.n(f);let x=()=>{let{login:e}=(0,c.useAuth)(),t=(0,p.useSearchParams)(),r=(0,p.useRouter)(),n=t.get("verify"),i=t.get("token"),a=t.get("issuedAt"),l=t.get("expiresAt"),f=t.get("agente"),x=t.get("userId"),g=t.get("userEmail"),h=t.get("userNombre"),y=t.get("userRole");return(0,o.useEffect)(()=>{(async()=>{if("true"===n){if(i&&a&&l&&x&&g&&h&&y&&f)try{let t=await (0,d.pH)(x,i);t&&(e({tokenData:{succes:"ok",token:i,issuedAt:a,expiresAt:l,agente:f,user:{id:x,email:g,nombre:h,roles:[y]},keyProperty:null},userData:t}),m().fire({title:"\xa1Acceso exitoso!",html:`<h1 style="color:gray; font-size:25px; font-weight: 500;">Bienvenido(a):</h1>
                                   <p style="margin-top:10px">${t.email}</p> 
                                   <p style="font-size:20px">${t.nombre}</p>`,icon:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"Ok"}))}catch(t){let e=t.message;m().fire({icon:"error",title:"Oops...",text:e,showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"Ok"})}}else r.push("/"),m().fire({icon:"error",title:"Oops...",text:"Usuario no reconocido en el sistema, porfavor pongase en contacto con el administrador",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"Ok"})})()},[f,l,a,e,r,i,g,x,h,y,n]),(0,s.jsxs)(s.Fragment,{children:[s.jsx(u,{}),s.jsx("h1",{className:"text-gray-500 font-medium text-2xl text-center mt-[30%]",children:"Verificando credenciales..."})]})}},91007:e=>{e.exports={iconoImage:"Loading_iconoImage__RtjfI","iconoImage-spin":"Loading_iconoImage-spin__Q_Y42"}},34567:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let s=r(53370);r(19510),r(71159);let o=s._(r(26155));function n(e,t){var r;let s={loading:e=>{let{error:t,isLoading:r,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e);let n={...s,...t};return(0,o.default)({...n,modules:null==(r=n.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},13689:(e,t,r)=>{"use strict";let{createProxy:s}=r(68570);e.exports=s("C:\\Users\\colivera\\Desktop\\PROYECTOS\\PM-PROYECTO FINAL\\frontend\\proyectofinal-henry\\node_modules\\next\\dist\\shared\\lib\\lazy-dynamic\\dynamic-bailout-to-csr.js")},26155:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let s=r(19510),o=r(71159),n=r(13689),i=r(44459);function a(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},u=function(e){let t={...l,...e},r=(0,o.lazy)(()=>t.loader().then(a)),u=t.loading;function c(e){let a=u?(0,s.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.PreloadCss,{moduleIds:t.modules}),(0,s.jsx)(r,{...e})]}):(0,s.jsx)(n.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(r,{...e})});return(0,s.jsx)(o.Suspense,{fallback:a,children:l})}return c.displayName="LoadableComponent",c}},44459:(e,t,r)=>{"use strict";let{createProxy:s}=r(68570);e.exports=s("C:\\Users\\colivera\\Desktop\\PROYECTOS\\PM-PROYECTO FINAL\\frontend\\proyectofinal-henry\\node_modules\\next\\dist\\shared\\lib\\lazy-dynamic\\preload-css.js")},8317:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(19510),o=r(34567),n=r.n(o);r(71159);let i=n()(()=>r.e(7487).then(r.bind(r,67487)),{loadableGenerated:{modules:["app\\verifyAuth0\\page.tsx -> @/Components/Login/VerifyAuth0/VerifyAuth0"]},ssr:!1}),a=()=>s.jsx(s.Fragment,{children:s.jsx(i,{})})},93186:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s={src:"/_next/static/media/Logo01.530fe2b7.png",height:853,width:1050,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAvklEQVR42mM4ffoEIwMQPHlw1/38hQtdW3btmTJz1UYpkNjmXfuZGUBgy/YdcZMXr7wydeWGxoWbdhyfv3bTsdv3H6kwwMCylatPTFi47HH9rNU7epdsuTZp8er/W3ftnc4AAy09U5auWLXye/3MZcv6lm+93Tpv+e3t+w43MCABsa7Js3at3rCxZfu+/d2HTp2t+vX/PycDCGzYtMn70OFDNus3brJes3Zd3u5dO/P37NoeuXXr5vwzZ067AABVeGDvqgIvGgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[8948,9558,6226,8736,8536],()=>r(69115));module.exports=s})();