import{y as p,_ as S,x as I,s as N,O}from"./scheduler.ProQAdXO.js";const f=[];function U(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let s;const o=new Set;function r(n){if(N(e,n)&&(e=n,s)){const i=!f.length;for(const l of o)l[1](),f.push(l,e);if(i){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function c(n){r(n(e))}function a(n,i=p){const l=[n,i];return o.add(l),o.size===1&&(s=t(r,c)||p),n(e),()=>{o.delete(l),o.size===0&&s&&(s(),s=null)}}return{set:r,update:c,subscribe:a}}function K(e,t,s){const o=!Array.isArray(e),r=o?[e]:e;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const c=t.length<2;return U(s,(a,n)=>{let i=!1;const l=[];let _=0,h=p;const v=()=>{if(_)return;h();const u=t(o?l[0]:l,a,n);c?a(u):h=O(u)?u:p},R=r.map((u,g)=>S(u,T=>{l[g]=T,_&=~(1<<g),i&&v()},()=>{_|=1<<g}));return i=!0,v(),function(){I(R),h(),i=!1}})}const L=globalThis.__sveltekit_dufhfb?.base??"/proskillapi",x=globalThis.__sveltekit_dufhfb?.assets??L,Y="1704568685374",j="sveltekit:snapshot",q="sveltekit:scroll",D="sveltekit:states",H="sveltekit:pageurl",X="sveltekit:history",$="sveltekit:navigation",k={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},A=location.origin;function z(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const s=document.getElementsByTagName("base");t=s.length?s[0].href:document.URL}return new URL(e,t)}function B(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...k,"":k.hover};function E(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function C(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=E(e)}}function W(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!s||!!o||V(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=s?.origin===A&&e.hasAttribute("download");return{url:s,external:r,target:o,download:c}}function F(e){let t=null,s=null,o=null,r=null,c=null,a=null,n=e;for(;n&&n!==document.documentElement;)o===null&&(o=d(n,"preload-code")),r===null&&(r=d(n,"preload-data")),t===null&&(t=d(n,"keepfocus")),s===null&&(s=d(n,"noscroll")),c===null&&(c=d(n,"reload")),a===null&&(a=d(n,"replacestate")),n=E(n);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:y[o??"off"],preload_data:y[r??"off"],keepfocus:i(t),noscroll:i(s),reload:i(c),replace_state:i(a)}}function m(e){const t=b(e);let s=!0;function o(){s=!0,t.update(a=>a)}function r(a){s=!1,t.set(a)}function c(a){let n;return t.subscribe(i=>{(n===void 0||s&&i!==n)&&a(n=i)})}return{notify:o,set:r,subscribe:c}}function P(){const{set:e,subscribe:t}=b(!1);let s;async function o(){clearTimeout(s);try{const r=await fetch(`${x}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==Y;return a&&(e(!0),clearTimeout(s)),a}catch{return!1}}return{subscribe:t,check:o}}function V(e,t){return e.origin!==A||!e.pathname.startsWith(t)}let w;function J(e){w=e.client}function M(e){return(...t)=>w[e](...t)}const Q={url:m({}),page:m({}),navigating:b(null),updated:P()};export{X as H,$ as N,H as P,q as S,D as a,j as b,F as c,Q as d,L as e,C as f,W as g,k as h,V as i,J as j,K as k,M as l,A as o,z as r,B as s,b as w};
