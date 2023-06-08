(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");document.querySelector(".page-overlay"),e&&t&&(e.addEventListener("click",()=>{const n=e.getAttribute("aria-expanded")==="true"||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")}),document.addEventListener("click",n=>{const r=n.target;t.contains(r)||e.contains(r)||(e.classList.remove("is-open"),e.setAttribute("aria-expanded","false"),t.classList.remove("is-open"))}))})();(function(){const e=location.href;document.querySelectorAll(".nav-link, .nav-link--mobile").forEach(n=>{n.classList.remove("link-current"),n.href===e&&n.classList.add("link-current")})})();const Ze=document.querySelector(".theme-switch"),x=document.body,ye=localStorage.getItem("theme");ye?x.classList.add(ye):x.classList.add("dark");Ze.addEventListener("click",()=>{x.classList.toggle("dark"),x.classList.toggle("light");const e=x.classList.contains("dark")?"dark":"light";localStorage.setItem("theme",e)});const et="/js-team-project-12/assets/logo-3fdb2e55.svg",tt=document.querySelector(".logo-svg");tt.src=et;function Le(e,t){return function(){return e.apply(t,arguments)}}const{toString:nt}=Object.prototype,{getPrototypeOf:ae}=Object,q=(e=>t=>{const n=nt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>q(t)===e),I=e=>t=>typeof t===e,{isArray:_}=Array,N=I("undefined");function rt(e){return e!==null&&!N(e)&&e.constructor!==null&&!N(e.constructor)&&w(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _e=R("ArrayBuffer");function st(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_e(e.buffer),t}const ot=I("string"),w=I("function"),Pe=I("number"),H=e=>e!==null&&typeof e=="object",it=e=>e===!0||e===!1,F=e=>{if(q(e)!=="object")return!1;const t=ae(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},at=R("Date"),ct=R("File"),lt=R("Blob"),ut=R("FileList"),dt=e=>H(e)&&w(e.pipe),ft=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||w(e.append)&&((t=q(e))==="formdata"||t==="object"&&w(e.toString)&&e.toString()==="[object FormData]"))},pt=R("URLSearchParams"),mt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function C(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function xe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ne=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ke=e=>!N(e)&&e!==Ne;function te(){const{caseless:e}=ke(this)&&this||{},t={},n=(r,s)=>{const o=e&&xe(t,s)||s;F(t[o])&&F(r)?t[o]=te(t[o],r):F(r)?t[o]=te({},r):_(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&C(arguments[r],n);return t}const ht=(e,t,n,{allOwnKeys:r}={})=>(C(t,(s,o)=>{n&&w(s)?e[o]=Le(s,n):e[o]=s},{allOwnKeys:r}),e),yt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),gt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},bt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ae(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},wt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Et=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!Pe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},St=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ae(Uint8Array)),Rt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ot=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},At=R("HTMLFormElement"),vt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Tt=R("RegExp"),Ce=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};C(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Lt=e=>{Ce(e,(t,n)=>{if(w(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(w(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_t=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return _(e)?r(e):r(String(e).split(t)),n},Pt=()=>{},xt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),G="abcdefghijklmnopqrstuvwxyz",be="0123456789",Be={DIGIT:be,ALPHA:G,ALPHA_DIGIT:G+G.toUpperCase()+be},Nt=(e=16,t=Be.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function kt(e){return!!(e&&w(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ct=e=>{const t=new Array(10),n=(r,s)=>{if(H(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=_(r)?[]:{};return C(r,(i,l)=>{const f=n(i,s+1);!N(f)&&(o[l]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Bt=R("AsyncFunction"),Dt=e=>e&&(H(e)||w(e))&&w(e.then)&&w(e.catch),a={isArray:_,isArrayBuffer:_e,isBuffer:rt,isFormData:ft,isArrayBufferView:st,isString:ot,isNumber:Pe,isBoolean:it,isObject:H,isPlainObject:F,isUndefined:N,isDate:at,isFile:ct,isBlob:lt,isRegExp:Tt,isFunction:w,isStream:dt,isURLSearchParams:pt,isTypedArray:St,isFileList:ut,forEach:C,merge:te,extend:ht,trim:mt,stripBOM:yt,inherits:gt,toFlatObject:bt,kindOf:q,kindOfTest:R,endsWith:wt,toArray:Et,forEachEntry:Rt,matchAll:Ot,isHTMLForm:At,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:Ce,freezeMethods:Lt,toObjectSet:_t,toCamelCase:vt,noop:Pt,toFiniteNumber:xt,findKey:xe,global:Ne,isContextDefined:ke,ALPHABET:Be,generateString:Nt,isSpecCompliantForm:kt,toJSONObject:Ct,isAsyncFn:Bt,isThenable:Dt};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const De=h.prototype,Fe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Fe[e]={value:e}});Object.defineProperties(h,Fe);Object.defineProperty(De,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,o)=>{const i=Object.create(De);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ft=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function Ue(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ue(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Ut(e){return a.isArray(e)&&!e.some(ne)}const Mt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,O){return!a.isUndefined(O[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,m,O){let E=d;if(d&&!O&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Ut(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(E=a.toArray(d)))return m=Ue(m),E.forEach(function(D,Ye){!(a.isUndefined(D)||D===null)&&t.append(i===!0?we([m],Ye,o):i===null?m:m+"[]",c(D))}),!1}return ne(d)?!0:(t.append(we(O,m,o),c(d)),!1)}const p=[],g=Object.assign(Mt,{defaultVisitor:u,convertValue:c,isVisitable:ne});function y(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(E,T){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(T)?T.trim():T,m,g))===!0&&y(E,m?m.concat(T):[T])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ce(e,t){this._pairs=[],e&&z(e,this,t)}const Me=ce.prototype;Me.append=function(t,n){this._pairs.push([t,n])};Me.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function jt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function je(e,t,n){if(!t)return e;const r=n&&n.encode||jt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ce(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class $t{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Se=$t,$e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qt=typeof URLSearchParams<"u"?URLSearchParams:ce,It=typeof FormData<"u"?FormData:null,Ht=typeof Blob<"u"?Blob:null,zt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Jt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:qt,FormData:It,Blob:Ht},isStandardBrowserEnv:zt,isStandardBrowserWebWorkerEnv:Jt,protocols:["http","https","file","blob","url","data"]};function Vt(e,t){return z(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Wt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Kt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function qe(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Kt(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Wt(r),s,n,0)}),n}return null}const Gt={"Content-Type":void 0};function Xt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const J={transitional:$e,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Vt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return z(l?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Xt(t)):t}],transformResponse:[function(t){const n=this.transitional||J.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?h.from(l,h.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){J.headers[t]={}});a.forEach(["post","put","patch"],function(t){J.headers[t]=a.merge(Gt)});const le=J,Qt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Qt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Re=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function U(e){return e===!1||e==null?e:a.isArray(e)?e.map(U):String(e)}function Zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const en=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function X(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function tn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function nn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,f,c){const u=P(f);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||f]=U(l))}const i=(l,f)=>a.forEach(l,(c,u)=>o(c,u,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!en(t)?i(Yt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=P(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Zt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=P(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||X(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=P(i),i){const l=a.findKey(r,i);l&&(!n||X(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||X(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=U(s),delete n[o];return}const l=t?tn(o):String(o).trim();l!==o&&delete n[o],n[l]=U(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Re]=this[Re]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=P(i);r[l]||(nn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(V.prototype);a.freezeMethods(V);const A=V;function Q(e,t){const n=this||le,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ie(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,h,{__CANCEL__:!0});function rn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const sn=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function on(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function an(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function He(e,t){return e&&!on(t)?an(e,t):t}const cn=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function ln(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function un(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const c=Date.now(),u=r[o];i||(i=c),n[s]=f,r[s]=c;let p=o,g=0;for(;p!==s;)g+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(g*1e3/y):void 0}}function Oe(e,t){let n=0;const r=un(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,f=r(l),c=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&c?(i-o)/f:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const dn=typeof XMLHttpRequest<"u",fn=dn&&function(e){return new Promise(function(n,r){let s=e.data;const o=A.from(e.headers).normalize(),i=e.responseType;let l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+d))}const u=He(e.baseURL,e.url);c.open(e.method.toUpperCase(),je(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};rn(function(E){n(E),f()},function(E){r(E),f()},m),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new h("Request aborted",h.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||$e;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new h(d,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||cn(u))&&e.xsrfCookieName&&sn.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(d,m){c.setRequestHeader(m,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Oe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Oe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new B(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=ln(u);if(g&&S.protocols.indexOf(g)===-1){r(new h("Unsupported protocol "+g+":",h.ERR_BAD_REQUEST,e));return}c.send(s||null)})},M={http:Ft,xhr:fn};a.forEach(M,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const pn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?M[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new h(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(M,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:M};function Y(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function Ae(e){return Y(e),e.headers=A.from(e.headers),e.data=Q.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),pn.getAdapter(e.adapter||le.adapter)(e).then(function(r){return Y(e),r.data=Q.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Ie(r)||(Y(e),r&&r.response&&(r.response.data=Q.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const ve=e=>e instanceof A?e.toJSON():e;function L(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function o(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>s(ve(c),ve(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=f[u]||s,g=p(e[u],t[u],u);a.isUndefined(g)&&p!==l||(n[u]=g)}),n}const ze="1.4.0",ue={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ue[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Te={};ue.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ze+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new h(s(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Te[i]&&(Te[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function mn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],f=l===void 0||i(l,o,e);if(f!==!0)throw new h("option "+o+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const re={assertOptions:mn,validators:ue},v=re.validators;class ${constructor(t){this.defaults=t,this.interceptors={request:new Se,response:new Se}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=L(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&re.assertOptions(r,{silentJSONParsing:v.transitional(v.boolean),forcedJSONParsing:v.transitional(v.boolean),clarifyTimeoutError:v.transitional(v.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:re.assertOptions(s,{encode:v.function,serialize:v.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=A.concat(i,o);const l=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let u,p=0,g;if(!f){const d=[Ae.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),g=d.length,u=Promise.resolve(n);p<g;)u=u.then(d[p++],d[p++]);return u}g=l.length;let y=n;for(p=0;p<g;){const d=l[p++],m=l[p++];try{y=d(y)}catch(O){m.call(this,O);break}}try{u=Ae.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,g=c.length;p<g;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=L(this.defaults,t);const n=He(t.baseURL,t.url);return je(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){$.prototype[t]=function(n,r){return this.request(L(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(L(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}$.prototype[t]=n(),$.prototype[t+"Form"]=n(!0)});const j=$;class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new B(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}const hn=de;function yn(e){return function(n){return e.apply(null,n)}}function gn(e){return a.isObject(e)&&e.isAxiosError===!0}const se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([e,t])=>{se[t]=e});const bn=se;function Je(e){const t=new j(e),n=Le(j.prototype.request,t);return a.extend(n,j.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Je(L(e,s))},n}const b=Je(le);b.Axios=j;b.CanceledError=B;b.CancelToken=hn;b.isCancel=Ie;b.VERSION=ze;b.toFormData=z;b.AxiosError=h;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=yn;b.isAxiosError=gn;b.mergeConfig=L;b.AxiosHeaders=A;b.formToJSON=e=>qe(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=bn;b.default=b;const W=b,wn="183c3cacc9c38c09c14d38798ccfe9d7",En=document.querySelector(".hero-PopUp-closeSvg"),Ve=document.querySelector(".hero-PopUp"),fe=document.querySelector(".trailer-modal"),K=document.querySelector(".overlay"),Sn=document.querySelector(".trailer-modal-closeSvg");En.addEventListener("click",_n);Sn.addEventListener("click",Tn);async function Rn(){const e=document.querySelector(".watch-trailer");e.addEventListener("click",async t=>{const n=t.target.dataset.id;try{const{key:r}=await On(n);e.disabled=!0;const s=`https://www.youtube.com/embed/${r}`;fe.insertAdjacentHTML("beforeend",An(s)),console.log(e.disabled),vn(),e.disabled=!1}catch{Ln()}})}async function On(e){try{const t=await W.get(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=${wn}&language=en-US`);return console.log(t.data.results[0]),t.data.results[0]}catch(t){console.log(t)}}function An(e){return`<div class='video'>
<div>
  <iframe
    id='trailer-video'
    class='trailer-modal-iframe'
    src='${e}'
    frameborder='0'
    allowfullscreen
  ></iframe>
</div>
</div>`}function vn(){K.classList.add("overlay-active"),fe.classList.add("trailer-modal-active"),document.body.style.overflow="hidden"}function Tn(){K.classList.remove("overlay-active"),fe.classList.remove("trailer-modal-active"),document.body.style.overflow="";const e=document.querySelector(".video");e&&e.remove()}function Ln(){K.classList.add("overlay-active"),Ve.classList.add("active"),document.body.style.overflow="hidden"}function _n(){K.classList.remove("overlay-active"),Ve.classList.remove("active"),document.body.style.overflow=""}function We(e){return`
    <div class="rating">
      <div class="rating-body">
        <div class="rating-active"></div>
      </div>
      <div class="rating-value">${e}</div>
    </div>
    `}function Pn(e){const t=e.querySelectorAll(".rating");t.length===0?console.log("rating error"):xn(t)}function xn(e){for(let t=0;t<e.length;t+=1){const n=e[t],r=n.querySelector(".rating-value").innerHTML,s=n.querySelector(".rating-active");Nn(r,s)}}function Nn(e,t){const n=e*10;t.style.width=`${n}%`}const pe="183c3cacc9c38c09c14d38798ccfe9d7",me="https://api.themoviedb.org/3";async function kn(e="week",t=3){const n=`${me}/trending/movie/${e}?api_key=${pe}`;try{const o=(await(await W.get(n)).data).results;return console.log(o),o.slice(0,t)}catch(r){console.log(r)}}async function Cn(){const e=`${me}/genre/movie/list?api_key=${pe}`;try{const r=(await(await W.get(e)).data).genres;return console.log(r),r}catch(t){console.log(t)}}async function Bn(e){const t=`${me}/movie/${e}?api_key=${pe}`;try{const r=await(await W.get(t)).data;return console.log(r),r}catch(n){console.log(n)}}let Z;async function Dn(){if(Z===void 0)try{Z=(await Cn()).reduce((t,{id:n,name:r})=>(t[n]=r,t),{})}catch(e){console.error(e)}return Z}const Fn="/js-team-project-12/assets/comingSoon-22be8f72.jpg";function Ke(e){return e?`https://image.tmdb.org/t/p/w300${e}`:Fn}async function Hn(e,t=100){const n=await Dn();return e.map(({id:r,poster_path:s,title:o,genre_ids:i,release_date:l,vote_average:f},c)=>{const u=c>=t?"hide-mobile":"",p=i.slice(0,2).map(y=>n[y]).join(", "),g=l.substring(0,4);return`
<li class="film-card ${u}">
  <a href="#" class="film-card-link" data-id="${r}">
    <img class="film-card-img" src="${Ke(s)}" alt="${o}" loading="lazy" />
    <div class="darkening"></div>
    <div class="info">
        <p class="info-title">
          ${o}
        </p>
      <div class="genre-rating">
        <p class="info-genre">
          ${p!==""?p:"Unknown"} |
          <span class="info-release-date"> ${g!==""?g:"Unknown"}</span>
        </p>

        <div class="rating">
          ${We(f)}
        </div>
      </div>
    </div>
  </a>
</li>`}).join("")}function Un({title:e,poster_path:t,vote_average:n,vote_count:r,popularity:s,genres:o,overview:i}){return`
  <div class="modal-wrap">

      <button class="modal__close" type="button">
        <svg class="modal__svg" width="24" height="24">
          <use href="./img/symbol-defs.svg#icon-close-hero-modal"></use>
        </svg>
      </button>
      <div class="modal-display">
      <img src="${Ke(t)}" alt="${e}" class="modal__img" />
      </div>
      <div class="modal__wrap">
        <h2 class="modal__title">${e}</h2>
        <ul class="modal-list">
          <li class="modal-list__item">
            <p class="modal-list__text">Vote / Votes</p>
            <div class="modal-list__wrap">
              <span class="modal-list__vote">${n}</span> /
              <span class="modal-list__vote">${r}</span>
            </div>
          </li>
          <li class="modal-list__item">
            <span class="modal-list__text">Popularity</span>
            <span class="modal-list__popularity">${s}</span>
          </li>
          <li class="modal-list__item">
            <span class="modal-list__text">Genre</span>
            <span class="modal-list__genres">${o.map(({name:l})=>l).join(", ")}</span>
          </li>
        </ul>
        <p class="modal__about">About</p>
        <p class="modal__text">
          ${i}
        </p>
        <button type="button" class="modal-btn">
          Add to my library
        </button>
      </div>
    </div>`}function Mn(e){return`
  <div class="hero-section-preview" style = "background: linear-gradient(86.47deg,#111111 41.63%,rgba(17,17,17,0) 86.86%), url(https://image.tmdb.org/t/p/original${e.backdrop_path});">
  <div class="container hero-container uplifted">
    <div class ="hero-content">
      <h1 class="hero-title">${e.title}</h1>
        <div class="rating">
          ${We(e.vote_average)}
        </div>
          <p class="hero-text">${e.overview}</p>
          <div class="buttons">
          <button type="button" class="button watch-trailer" data-id=${e.id}>Watch trailer</button>
          <button type="button" class="button more-details film-card-link" data-id=${e.id}>More details</button>
          </div>
    </div>
  <div>
  </div>
           `}const k=document.getElementById("modal-backdrop");let oe,ie;function jn(e){e.querySelectorAll(".film-card-link").forEach(n=>{n.addEventListener("click",$n)})}async function $n(e){e.preventDefault();const t=e.currentTarget.dataset.id,n=await Bn(t);k.innerHTML=Un(n),qn()}function qn(){ie=document.querySelector(".modal-section"),ie.style.display="block",oe=document.querySelector(".modal__close"),oe.addEventListener("click",Ge),document.addEventListener("keydown",Xe),k.addEventListener("click",Qe)}function Ge(){he()}function Xe(e){e.key==="Escape"&&he()}function Qe(e){e.target===k&&he()}function he(){ie.style.display="none",k.innerHTML="",oe.removeEventListener("click",Ge),document.removeEventListener("keydown",Xe),k.removeEventListener("click",Qe)}const ee=document.querySelector(".hero");async function In(){try{const e=await kn("day",20),t=e[Math.floor(Math.random()*e.length)];ee.innerHTML=Mn(t),Pn(ee),Rn(),jn(ee)}catch(e){console.log("Помилка при завантаженні секції:",e)}}In();document.getElementById("open-modal-btn").addEventListener("click",function(){document.getElementById("footer-modal").classList.add("open")});document.getElementById("close-modal-btn").addEventListener("click",function(){document.getElementById("footer-modal").classList.remove("open")});window.addEventListener("keydown",e=>{e.key==="Escape"&&document.getElementById("footer-modal").classList.remove("open")});document.querySelector("#footer-modal, .modal__box").addEventListener("click",e=>{e.currentTarget.classList.remove("open")});console.log("FOOTER");export{jn as a,W as b,Hn as c,kn as d,Dn as e,Pn as f,Cn as g,We as m};
