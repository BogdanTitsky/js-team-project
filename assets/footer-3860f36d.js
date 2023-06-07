(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");document.querySelector(".page-overlay"),e&&t&&(e.addEventListener("click",()=>{const n=e.getAttribute("aria-expanded")==="true"||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")}),document.addEventListener("click",n=>{const r=n.target;t.contains(r)||e.contains(r)||(e.classList.remove("is-open"),e.setAttribute("aria-expanded","false"),t.classList.remove("is-open"))}))})();(function(){const e=location.href;document.querySelectorAll(".nav-link, .nav-link--mobile").forEach(n=>{n.classList.remove("link-current"),n.href===e&&n.classList.add("link-current")})})();function Ee(e,t){return function(){return e.apply(t,arguments)}}const{toString:He}=Object.prototype,{getPrototypeOf:re}=Object,j=(e=>t=>{const n=He.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>j(t)===e),I=e=>t=>typeof t===e,{isArray:x}=Array,v=I("undefined");function $e(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ge=R("ArrayBuffer");function ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ge(e.buffer),t}const Je=I("string"),E=I("function"),Se=I("number"),q=e=>e!==null&&typeof e=="object",Ve=e=>e===!0||e===!1,B=e=>{if(j(e)!=="object")return!1;const t=re(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},We=R("Date"),Ke=R("File"),Ge=R("Blob"),Xe=R("FileList"),Qe=e=>q(e)&&E(e.pipe),Ye=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=j(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},Ze=R("URLSearchParams"),et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function C(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),x(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function Re(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Oe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ae=e=>!v(e)&&e!==Oe;function Z(){const{caseless:e}=Ae(this)&&this||{},t={},n=(r,o)=>{const s=e&&Re(t,o)||o;B(t[s])&&B(r)?t[s]=Z(t[s],r):B(r)?t[s]=Z({},r):x(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&C(arguments[r],n);return t}const tt=(e,t,n,{allOwnKeys:r}={})=>(C(t,(o,s)=>{n&&E(o)?e[s]=Ee(o,n):e[s]=o},{allOwnKeys:r}),e),nt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ot=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&re(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},st=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},it=e=>{if(!e)return null;if(x(e))return e;let t=e.length;if(!Se(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},at=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&re(Uint8Array)),ct=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},lt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ut=R("HTMLFormElement"),dt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),le=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ft=R("RegExp"),Te=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};C(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},pt=e=>{Te(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(E(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ht=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return x(e)?r(e):r(String(e).split(t)),n},mt=()=>{},yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),W="abcdefghijklmnopqrstuvwxyz",ue="0123456789",Le={DIGIT:ue,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+ue},bt=(e=16,t=Le.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function wt(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Et=e=>{const t=new Array(10),n=(r,o)=>{if(q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=x(r)?[]:{};return C(r,(i,l)=>{const f=n(i,o+1);!v(f)&&(s[l]=f)}),t[o]=void 0,s}}return r};return n(e,0)},gt=R("AsyncFunction"),St=e=>e&&(q(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:x,isArrayBuffer:ge,isBuffer:$e,isFormData:Ye,isArrayBufferView:ze,isString:Je,isNumber:Se,isBoolean:Ve,isObject:q,isPlainObject:B,isUndefined:v,isDate:We,isFile:Ke,isBlob:Ge,isRegExp:ft,isFunction:E,isStream:Qe,isURLSearchParams:Ze,isTypedArray:at,isFileList:Xe,forEach:C,merge:Z,extend:tt,trim:et,stripBOM:nt,inherits:rt,toFlatObject:ot,kindOf:j,kindOfTest:R,endsWith:st,toArray:it,forEachEntry:ct,matchAll:lt,isHTMLForm:ut,hasOwnProperty:le,hasOwnProp:le,reduceDescriptors:Te,freezeMethods:pt,toObjectSet:ht,toCamelCase:dt,noop:mt,toFiniteNumber:yt,findKey:Re,global:Oe,isContextDefined:Ae,ALPHABET:Le,generateString:bt,isSpecCompliantForm:wt,toJSONObject:Et,isAsyncFn:gt,isThenable:St};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Pe=m.prototype,xe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{xe[e]={value:e}});Object.defineProperties(m,xe);Object.defineProperty(Pe,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(Pe);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Rt=null;function ee(e){return a.isPlainObject(e)||a.isArray(e)}function Ne(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function de(e,t,n){return e?e.concat(t).map(function(o,s){return o=Ne(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Ot(e){return a.isArray(e)&&!e.some(ee)}const At=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function H(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,O){return!a.isUndefined(O[h])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,h,O){let g=d;if(d&&!O&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Ot(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(g=a.toArray(d)))return h=Ne(h),g.forEach(function(_,qe){!(a.isUndefined(_)||_===null)&&t.append(i===!0?de([h],qe,s):i===null?h:h+"[]",c(_))}),!1}return ee(d)?!0:(t.append(de(O,h,s),c(d)),!1)}const p=[],w=Object.assign(At,{defaultVisitor:u,convertValue:c,isVisitable:ee});function y(d,h){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(d),a.forEach(d,function(g,L){(!(a.isUndefined(g)||g===null)&&o.call(t,g,a.isString(L)?L.trim():L,h,w))===!0&&y(g,h?h.concat(L):[L])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function oe(e,t){this._pairs=[],e&&H(e,this,t)}const ve=oe.prototype;ve.append=function(t,n){this._pairs.push([t,n])};ve.toString=function(t){const n=t?function(r){return t.call(this,r,fe)}:fe;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Tt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ce(e,t,n){if(!t)return e;const r=n&&n.encode||Tt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new oe(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Lt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const pe=Lt,Fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pt=typeof URLSearchParams<"u"?URLSearchParams:oe,xt=typeof FormData<"u"?FormData:null,Nt=typeof Blob<"u"?Blob:null,vt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ct=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Pt,FormData:xt,Blob:Nt},isStandardBrowserEnv:vt,isStandardBrowserWebWorkerEnv:Ct,protocols:["http","https","file","blob","url","data"]};function Ft(e,t){return H(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function _t(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Bt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function _e(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),f=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,f?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Bt(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(_t(r),o,n,0)}),n}return null}const Ut={"Content-Type":void 0};function kt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const $={transitional:Fe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(_e(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ft(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return H(l?{"files[]":t}:t,f&&new f,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),kt(t)):t}],transformResponse:[function(t){const n=this.transitional||$.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){$.headers[t]={}});a.forEach(["post","put","patch"],function(t){$.headers[t]=a.merge(Ut)});const se=$,Dt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mt=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Dt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},he=Symbol("internals");function N(e){return e&&String(e).trim().toLowerCase()}function U(e){return e===!1||e==null?e:a.isArray(e)?e.map(U):String(e)}function jt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const It=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function K(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function qt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ht(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,f,c){const u=N(f);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(o,u);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||f]=U(l))}const i=(l,f)=>a.forEach(l,(c,u)=>s(c,u,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!It(t)?i(Mt(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=N(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return jt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=N(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||K(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=N(i),i){const l=a.findKey(r,i);l&&(!n||K(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||K(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=U(o),delete n[s];return}const l=t?qt(s):String(s).trim();l!==s&&delete n[s],n[l]=U(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[he]=this[he]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=N(i);r[l]||(Ht(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(z.prototype);a.freezeMethods(z);const A=z;function G(e,t){const n=this||se,r=t||n,o=A.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Be(e){return!!(e&&e.__CANCEL__)}function F(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(F,m,{__CANCEL__:!0});function $t(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const zt=S.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&f.push("expires="+new Date(o).toGMTString()),a.isString(s)&&f.push("path="+s),a.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Jt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Vt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ue(e,t){return e&&!Jt(t)?Vt(e,t):t}const Wt=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Kt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Gt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(f){const c=Date.now(),u=r[s];i||(i=c),n[o]=f,r[o]=c;let p=s,w=0;for(;p!==o;)w+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(w*1e3/y):void 0}}function me(e,t){let n=0;const r=Gt(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,f=r(l),c=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&c?(i-s)/f:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Xt=typeof XMLHttpRequest<"u",Qt=Xt&&function(e){return new Promise(function(n,r){let o=e.data;const s=A.from(e.headers).normalize(),i=e.responseType;let l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(o)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+d))}const u=Ue(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ce(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};$t(function(g){n(g),f()},function(g){r(g),f()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Fe;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||Wt(u))&&e.xsrfCookieName&&zt.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(d,h){c.setRequestHeader(h,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",me(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",me(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new F(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const w=Kt(u);if(w&&S.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})},k={http:Rt,xhr:Qt};a.forEach(k,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Yt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?k[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(k,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:k};function X(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new F(null,e)}function ye(e){return X(e),e.headers=A.from(e.headers),e.data=G.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Yt.getAdapter(e.adapter||se.adapter)(e).then(function(r){return X(e),r.data=G.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Be(r)||(X(e),r&&r.response&&(r.response.data=G.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const be=e=>e instanceof A?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function s(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const f={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>o(be(c),be(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=f[u]||o,w=p(e[u],t[u],u);a.isUndefined(w)&&p!==l||(n[u]=w)}),n}const ke="1.4.0",ie={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ie[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const we={};ie.transitional=function(t,n,r){function o(s,i){return"[Axios v"+ke+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!we[i]&&(we[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function Zt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],f=l===void 0||i(l,s,e);if(f!==!0)throw new m("option "+s+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const te={assertOptions:Zt,validators:ie},T=te.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new pe,response:new pe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&te.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:te.assertOptions(o,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete s[d]}),n.headers=A.concat(i,s);const l=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,w;if(!f){const d=[ye.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),w=d.length,u=Promise.resolve(n);p<w;)u=u.then(d[p++],d[p++]);return u}w=l.length;let y=n;for(p=0;p<w;){const d=l[p++],h=l[p++];try{y=d(y)}catch(O){h.call(this,O);break}}try{u=ye.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,w=c.length;p<w;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=P(this.defaults,t);const n=Ue(t.baseURL,t.url);return Ce(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(P(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const D=M;class ae{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new F(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ae(function(o){t=o}),cancel:t}}}const en=ae;function tn(e){return function(n){return e.apply(null,n)}}function nn(e){return a.isObject(e)&&e.isAxiosError===!0}const ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ne).forEach(([e,t])=>{ne[t]=e});const rn=ne;function De(e){const t=new D(e),n=Ee(D.prototype.request,t);return a.extend(n,D.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return De(P(e,o))},n}const b=De(se);b.Axios=D;b.CanceledError=F;b.CancelToken=en;b.isCancel=Be;b.VERSION=ke;b.toFormData=H;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=tn;b.isAxiosError=nn;b.mergeConfig=P;b.AxiosHeaders=A;b.formToJSON=e=>_e(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=rn;b.default=b;const J=b,on="183c3cacc9c38c09c14d38798ccfe9d7",sn=document.querySelector(".hero-PopUp-closeSvg"),Me=document.querySelector(".hero-PopUp"),ce=document.querySelector(".trailer-modal"),V=document.querySelector(".overlay"),an=document.querySelector(".trailer-modal-closeSvg");sn.addEventListener("click",hn);an.addEventListener("click",fn);async function cn(){document.querySelector(".watch-trailer").addEventListener("click",async t=>{const n=t.target.dataset.id;try{const{key:r}=await ln(n),o=`https://www.youtube.com/embed/${r}`;ce.insertAdjacentHTML("beforeend",un(o)),dn()}catch{pn()}})}async function ln(e){try{const t=await J.get(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=${on}&language=en-US`);return console.log(t.data.results[0]),t.data.results[0]}catch(t){console.log(t)}}function un(e){return`<div>
<div>
  <iframe
    id='trailer-video'
    class='trailer-modal-iframe'
    src='${e}'
    frameborder='0'
    allowfullscreen
  ></iframe>
</div>
</div>`}function dn(){V.classList.add("overlay-active"),ce.classList.add("trailer-modal-active"),document.body.style.overflow="hidden",btn.disabled=!1}function fn(){V.classList.remove("overlay-active"),ce.classList.remove("trailer-modal-active"),document.body.style.overflow=""}function pn(){V.classList.add("overlay-active"),Me.classList.add("active"),document.body.style.overflow="hidden"}function hn(){V.classList.remove("overlay-active"),Me.classList.remove("active"),document.body.style.overflow=""}function mn(e){return`
    <div class="rating">
      <div class="rating-body">
        <div class="rating-active"></div>
      </div>
      <div class="rating-value">${e}</div>
    </div>
    `}function yn(e){const t=e.querySelectorAll(".rating");t.length===0?console.log("rating error"):bn(t)}function bn(e){for(let t=0;t<e.length;t+=1){const n=e[t],r=n.querySelector(".rating-value").innerHTML,o=n.querySelector(".rating-active");wn(r,o)}}function wn(e,t){const n=e*10;t.style.width=`${n}%`}const En="183c3cacc9c38c09c14d38798ccfe9d7",Q=document.querySelector(".hero-content");async function gn(){try{return(await J.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${En}&language=en-US`)).data.results}catch(e){console.log("Помилка при рендерингу списку фільмів:",e)}}function Sn(e){const t=e[Math.floor(Math.random()*e.length)],n=`
  <div>
           <h1 class="hero-title">${t.title}</h1>
          <div class="rating">
          ${mn(t.vote_average)}
          </div>
           <p class="hero-text">${t.overview}</p>
           <button type="button" class="button watch-trailer" data-id=${t.id}>Watch trailer</button>
           <button type="button" class="button-more-details">More details</button>
           </div>
           `;Q.innerHTML="",Q.insertAdjacentHTML("beforeend",n),yn(Q),cn()}async function Rn(){const e=await gn();console.log(e[0]),Sn(e)}Rn();const je="183c3cacc9c38c09c14d38798ccfe9d7",Ie="https://api.themoviedb.org/3";async function An(e="week",t=3){const n=`${Ie}/trending/movie/${e}?api_key=${je}`;try{const s=(await(await J.get(n)).data).results;return console.log(s),s.slice(0,t)}catch(r){console.log(r)}}async function On(){const e=`${Ie}/genre/movie/list?api_key=${je}`;try{const r=(await(await J.get(e)).data).genres;return console.log(r),r}catch(t){console.log(t)}}let Y;async function Tn(){if(Y===void 0)try{Y=(await On()).reduce((t,{id:n,name:r})=>(t[n]=r,t),{})}catch(e){console.error(e)}return Y}document.getElementById("open-modal-btn").addEventListener("click",function(){document.getElementById("footer-modal").classList.add("open")});document.getElementById("close-modal-btn").addEventListener("click",function(){document.getElementById("footer-modal").classList.remove("open")});window.addEventListener("keydown",e=>{e.key==="Escape"&&document.getElementById("footer-modal").classList.remove("open")});document.querySelector("#footer-modal, .modal__box").addEventListener("click",e=>{e.currentTarget.classList.remove("open")});console.log("FOOTER");export{J as a,An as b,Tn as c,yn as f,On as g,mn as m};
