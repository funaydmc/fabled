import{b as ke,g as ce,a as Me,d as Je}from"../chunks/entry.CEFLSdhT.js";import{M as Yt,p as St,Y as ut,N as At,O as qt,Q as Bt,S as Ht,U as Nt,V as Kt,W as wt,X as Zt,a as tt,b as we,s as zt,Z as xt,_ as rt,$ as st,t as j,a0 as Ue,a1 as Fe,a2 as je,j as qe,T as ze,h as ie,a3 as ge,a4 as Jt,a5 as Qt,a6 as Ze,u as ye,f as q,a7 as at,a8 as pt,q as Ce,I as nt,r as mt,c as te,i as He,a9 as Ge,aa as Et,ab as Xt,d as es,e as ts,ac as ss,P as Qe,ad as as,C as dt,G as Tt,H as Ct,ae as Ft,af as Dt,ag as Pt,ah as It,ai as rs,aj as os,ak as ct,al as ls,am as is,an as ns,ao as vt}from"../chunks/components.svelte.C8WsT825.js";import{d as xe,e as f,a as u,t as S,s as Le,c as I,b as Q,n as ds,i as Ke,j as Xe,l as Be,k as et}from"../chunks/disclose-version.Ca3QTfmr.js";import{n as Ee,a as cs,g as e,s as c,w as i,v as n,q as Te,aa as X,D as v,t as O,au as Re,o as _e,x as Rt,f as Ae,y as vs}from"../chunks/utils.zETNLfH2.js";import{b as pe,a as V,p as De,c as us,o as jt,d as Mt}from"../chunks/index-client.Cq_m8h8c.js";import{c as ps}from"../chunks/svelte-component.WBZUxysB.js";import{M as ot,a as _s,o as Ut,b as Ot,c as fs,m as ms}from"../chunks/squish.DxeluuGU.js";import{i as Lt}from"../chunks/lifecycle.DrC_1UrR.js";import{b as bs}from"../chunks/select.BWYAhR8U.js";const _t="https://paste.travja.dev",gs=o=>{if(typeof o!="string")return Promise.reject(new Error('You cannot send that. Please include a "content" argument that is a valid string.'));if(o==="")return Promise.reject(new Error("You cannot send nothing."));const t={method:"POST",body:o,headers:{"Content-Type":"text/plain"}};return fetch(`${_t}/documents`,t).then(s=>s.json()).then(s=>{if(!s.key)throw new Error("Did not receive hastebin key.");return`${_t}/${s.key}`})},Vt=async o=>(o.url&&(o.url.includes("astebin.com")||o.url.includes("paste.travja.dev"))&&!o.url.includes("raw")&&(o.url=o.url.replace(/(astebin\.com|paste\.travja\.dev)/,"$1/raw")),!o.url&&o.id&&(o.url=`${_t}/raw/${o.id}`),o.url?await(await fetch(o.url)).text():""),ks=!1,ys=["fabled.magemonkey.studio","synthesis.travja.dev"],Ye=`


~~~~~


`,$s=async({url:o})=>{if(Yt(),!o.host.includes("localhost")&&o.searchParams.has("migrationData")){Vt({url:o.searchParams.get("migrationData")||void 0}).then(t=>{const s=t.split(Ye)[0],k=t.split(Ye)[1],m=t.split(Ye)[2],w=t.split(Ye)[3],b=t.split(Ye)[4];St(s).forEach(l=>{localStorage.setItem("sapi.skill."+l.name,ut.stringify(l,{lineWidth:0,aliasDuplicateObjects:!1}))}),St(k).forEach(l=>{localStorage.setItem("sapi.class."+l.name,ut.stringify(l,{lineWidth:0,aliasDuplicateObjects:!1}))}),localStorage.setItem("skillFolders",m),localStorage.setItem("classFolders",w),localStorage.setItem("attribs",b),window.location.href=`https://${ys}${ke}`}).catch(console.error);return}},Ua=Object.freeze(Object.defineProperty({__proto__:null,load:$s,ssr:ks},Symbol.toStringTag,{value:"Module"}));var hs=S('<div class="options svelte-8b3mcy"><div class="option svelte-8b3mcy"><div>Upload File</div> <label for="file-upload" class="button">Select File</label> <input id="file-upload" type="file" class="hidden svelte-8b3mcy" multiple></div> <div class="or svelte-8b3mcy"><span class="svelte-8b3mcy">OR</span></div> <div class="option svelte-8b3mcy"><div>Import from URL</div> <input class="svelte-8b3mcy"> <div class="button" tabindex="0" role="button">Import</div></div></div>');function Ss(o,t){Ee(t,!0);let s=X(void 0),k=X(void 0);const m=()=>{v(s,pe(v(k,void 0))),Nt(!1)},w=()=>{e(s)&&(e(s).startsWith("http")||v(s,"https://"+e(s)),Vt({url:e(s)}).then(b=>{m(),Kt(b)}).catch(console.error))};cs(()=>{if(e(k)&&e(k).length>0)for(const b of e(k))b.name.indexOf(".yml")!=-1&&(At(b),m())}),ot(o,{onclose:m,children:(b,l)=>{var A=hs(),h=c(A),D=i(c(h),4);n(h);var U=i(h,4),y=i(c(U),2);qt(y);var C=i(y,2);C.__click=w,n(U),n(A),Bt(D,()=>e(k),z=>v(k,z)),Ht(y,()=>e(s),z=>v(s,z)),f("keypress",C,z=>z.key==="Enter"&&w()),u(b,A)},$$slots:{default:!0}}),Te()}xe(["click"]);var ws=S('<div class="chip share svelte-374drf" tabindex="0" role="button"> </div>'),xs=S('<div class="nav-wrap svelte-374drf"><nav class="svelte-374drf"><div class="chip hamburger svelte-374drf" role="button" tabindex="0"><span class="material-symbols-rounded">menu</span></div> <div></div> <div class="transfer svelte-374drf"><div class="chip import svelte-374drf" role="button" tabindex="0" title="Import Data">Import</div> <!></div></nav></div>');function Es(o,t){Ee(t,!1);const s=Le(),k=()=>I(Zt,"$activeType",s),m=y=>{y==null||y.stopPropagation();let C=ce(tt);if(!C)return;let z=ut.stringify({[C.name]:C.serializeYaml()},{lineWidth:0,aliasDuplicateObjects:!1});gs(z).then(F=>{var g;(g=navigator==null?void 0:navigator.clipboard)==null||g.writeText(F),window.open(F)}).catch(F=>console.error(F))},w=y=>{y==null||y.stopPropagation(),Nt(!0)};Lt();var b=xs(),l=c(b),A=c(l);A.__click=function(...y){var C;(C=wt)==null||C.apply(this,y)};var h=i(A,4),D=c(h);D.__click=w;var U=i(D,2);V(U,k,y=>{var C=ws();C.__click=m,O(()=>we(C,"title",`Share ${k().substring(0,1).toUpperCase()+k().substring(1)}`));var z=c(C);O(()=>Q(z,`Share ${k().substring(0,1).toUpperCase()+k().substring(1)}`)),n(C),f("keypress",C,F=>{F.key==="Enter"&&m(F)}),u(y,C)}),n(h),n(l),n(b),f("keypress",A,y=>{y.key==="Enter"&&wt(y)}),f("keypress",D,y=>{y.key==="Enter"&&w(y)}),u(o,b),Te()}xe(["click"]);var Ts=ds('<svg viewBox="0 0 30 34" class="logo-3oeRIY svelte-evyltu"><g fill="currentColor"><path d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"></path></g></svg>');function Cs(o){var t=Ts();u(o,t)}var Fs=()=>Me(`${ke}/`),Ds=S('<div id="header" class="svelte-12n421s"><div class="home svelte-12n421s" tabindex="0" role="button"><h1 class="accent svelte-12n421s">Fabled</h1> <h2 class="svelte-12n421s">Dynamic Editor</h2> <div class="copy svelte-12n421s"> </div></div> <div class="socials svelte-12n421s"><a class="social discord svelte-12n421s" href="https://discord.gg/6UzkTe6RvW" title="Join our Discord"><!></a> <a class="social github svelte-12n421s" href="https://github.com/promcteam/proskillapi" title="Check out our GitHub"><img alt="Github" class="svelte-12n421s"></a> <a class="social spigot svelte-12n421s" href="https://www.spigotmc.org/resources/proskillapi-create-custom-races-classes-skills-spells-with-an-easy-online-editor.91913/" title="Check out our resource on Spigot"><img alt="Spigot" class="svelte-12n421s"></a> <a class="social wiki svelte-12n421s" href="https://promcteam.com/wiki/index.php?title=Proskillapi:Proskillapi" title="Wiki"><span class="material-symbols-rounded">help</span></a></div></div>');function Ps(o,t){Ee(t,!1),Lt();var s=Ds(),k=c(s);k.__click=[Fs];var m=i(c(k),4),w=c(m);O(()=>Q(w,`© MageMonkeyStudio ${new Date().getFullYear()??""}`)),n(m),n(k);var b=i(k,2),l=c(b),A=c(l);Cs(A),n(l);var h=i(l,2),D=c(h);we(D,"src",`${ke??""}/github-mark-white.svg`),n(h);var U=i(h,2),y=c(U);we(y,"src",`${ke??""}/spigot.png`),n(U),Re(2),n(b),n(s),f("keypress",k,C=>C.key==="Enter"&&Me(`${ke}/`)),u(o,s),Te()}xe(["click"]);var Is=S('<a class="edit svelte-dvmw09" title="Edit Skill"><span class="material-symbols-rounded">edit</span></a>'),Os=(o,t)=>rt(t(),o),As=(o,t,s)=>t(s(),o),Ns=(o,t,s)=>{if(o.stopPropagation(),o.preventDefault(),o!=null&&o.shiftKey){st(t());return}v(s,!0)},zs=S('<div class="buttons svelte-dvmw09"><!> <div tabindex="0" role="button" class="download svelte-dvmw09"><span class="material-symbols-rounded">save</span></div> <div tabindex="0" role="button" class="clone svelte-dvmw09"><span class="material-symbols-rounded">content_copy</span></div> <div tabindex="0" role="button" class="delete svelte-dvmw09"><span class="material-symbols-rounded">delete</span></div></div>'),Rs=(o,t)=>v(t,!1),js=(o,t)=>st(t()),Ms=S('<h3> </h3> <div class="modal-buttons svelte-dvmw09"><div class="button svelte-dvmw09" role="button" tabindex="0">Cancel</div> <div class="button modal-delete svelte-dvmw09" role="button" tabindex="0">Delete</div></div>',1),Us=S('<div class="sidebar-entry svelte-dvmw09" role="menuitem" tabindex="0"><!> <!></div> <!>',1);function Ne(o,t){Ee(t,!0);const s=Le(),k=()=>I(tt,"$active",s),m=()=>I(at,"$sidebarOpen",s);let w=De(t,"delay",3,0),b=De(t,"direction",3,"left"),l=De(t,"data",3,void 0),A=X(!1),h=X(!1);const D=p=>{if(!l()){p.preventDefault();return}Ue.set(l())},U=p=>{p.stopPropagation(),p.preventDefault();const a=ce(Ue);let d;l()&&(d=Fe.getFolder(l()));const $=Fe.getFolder(a);if($&&$.remove(a),d){d.add(a),v(A,!1),Fe.updateFolders();return}if(a instanceof je){switch(ce(qe)){case ze.CLASSES:{ge.addClassFolder(a);break}case ze.SKILLS:{ie.addSkillFolder(a);break}}a.parent=void 0}v(A,!1)},y=p=>{p.preventDefault();const a=ce(Ue);l()!==a&&v(A,!0)},C=(p,a)=>(ce(pt)||(a.delay=0),a.fn(p,a)),z=(p,a)=>{a==null||a.preventDefault(),a==null||a.stopPropagation(),p&&(p instanceof Jt?ge.cloneClass(p):p instanceof xt?ie.cloneSkill(p):p instanceof Qt&&Ze.cloneAttribute(p))};var F=Us(),g=_e(F);g.__click=function(...p){var a;(a=t.onclick)==null||a.apply(this,p)};const se=Ae(()=>!!Fe.getFolder(l()));var R=c(g);zt(R,()=>t.children??Rt);var K=i(R,2);V(K,l,p=>{var a=zs(),d=c(a);V(d,()=>l()instanceof xt,x=>{var ve=Is();O(()=>we(ve,"href",`${ke??""}/skill/${l().name??""}/edit`)),u(x,ve)});var $=i(d,2);$.__click=[Os,l],O(()=>we($,"title",`Save ${l().dataType.substring(0,1).toUpperCase()+l().dataType.substring(1)}`));var P=i($,2);P.__click=[As,z,l],O(()=>we(P,"title",`Clone ${l().dataType.substring(0,1).toUpperCase()+l().dataType.substring(1)}`));var N=i(P,2);N.__click=[Ns,l,h],O(()=>we(N,"title",`Delete ${l().dataType.substring(0,1).toUpperCase()+l().dataType.substring(1)}`)),n(a),f("keypress",$,x=>{(x==null?void 0:x.key)==="Enter"&&rt(l(),x)}),f("keypress",P,x=>{(x==null?void 0:x.key)==="Enter"&&z(l(),x)}),f("keypress",N,x=>{if((x==null?void 0:x.key)==="Enter"){if(x.stopPropagation(),x.preventDefault(),x!=null&&x.shiftKey){st(l());return}v(h,!0)}}),u(p,a)}),n(g);var G=i(g,2);V(G,()=>e(h),p=>{ot(p,{children:(a,d)=>{var $=Ms(),P=_e($),N=c(P);n(P);var x=i(P,2),ve=c(x);ve.__click=[Rs,h];var be=i(ve,2);be.__click=[js,l],n(x),O(()=>{var E;return Q(N,`Do you really want to delete ${((E=l())==null?void 0:E.name)??""}?`)}),f("keypress",ve,E=>{(E==null?void 0:E.key)==="Enter"&&v(h,!1)}),f("keypress",be,E=>{(E==null?void 0:E.key)==="Enter"&&st(l())}),u(a,$)},$$slots:{default:!0}})}),O(()=>{we(g,"draggable",!!l()),ye(g,"active",l()&&k()===l()),ye(g,"in-folder",e(se)),ye(g,"over",e(A))}),f("dragleave",g,()=>v(A,!1)),f("dragover",g,y),f("dragstart",g,D),f("drop",g,U),f("keypress",g,p=>{var a;p.key==="Enter"&&((a=t.onclick)==null||a.call(t,p))}),j(1,g,()=>C,()=>({fn:q,x:b()==="left"?-100:100,duration:500,delay:m()?0:w()})),j(2,g,()=>q,()=>({x:b()==="left"?-100:100,duration:500})),u(o,F),Te()}xe(["click"]);const Ls=(o,t)=>{var s;o.key=="Enter"&&(o.preventDefault(),o.stopPropagation(),(s=e(t))==null||s.blur())};var Vs=(o,t)=>t(t().open=!t().open,!0),Ws=S('<div class="folder-content svelte-jmliow"></div>'),Gs=S('<div class="folder svelte-jmliow" draggable="true" role="menuitem" tabindex="0"><span class="material-symbols-rounded folder-icon svelte-jmliow">folder</span> <span class="name svelte-jmliow" contenteditable="false" role="textbox" tabindex="0"> </span> <div class="buttons svelte-jmliow"><div class="icon add svelte-jmliow" role="button" tabindex="0" title="Add Folder"><span class="material-symbols-rounded">add</span></div> <div class="icon svelte-jmliow" role="button" tabindex="0" title="Rename"><span class="material-symbols-rounded">edit</span></div> <div class="icon delete svelte-jmliow" role="button" tabindex="0" title="Delete Folder"><span class="material-symbols-rounded">delete</span></div></div></div> <!>',1);function ft(o,t){Ee(t,!0);const s=Le(),k=()=>I(at,"$sidebarOpen",s);let m=De(t,"folder",15),w=X(void 0),b=d=>{d==null||d.stopPropagation(),e(w)&&(e(w).contentEditable="true",e(w).focus(),setTimeout(()=>{if(!e(w))return;const $=document.createRange();$.setStart(e(w),0),$.setEnd(e(w),1);const P=window.getSelection();P==null||P.removeAllRanges(),P==null||P.addRange($)},1))};const l=d=>{d==null||d.stopPropagation(),Fe.deleteFolder(m())},A=d=>{d==null||d.stopPropagation(),m().createFolder(),m(m().open=!0,!0),Fe.updateFolders()};let h=X(!1);const D=()=>{Ue.set(m())},U=d=>{d.stopPropagation(),d.preventDefault(),v(h,!1);const $=ce(Ue);if(!$||m().data.includes($))return;const P=Fe.getFolder($);P&&P.remove($),$ instanceof je&&(Fe.removeFolder($),$.parent=m()),m().add($)},y=d=>{e(w)&&(e(w).contentEditable="false",m(m().name=d.target.textContent||"",!0))},C=d=>{d.preventDefault(),m()!==ce(Ue)&&v(h,!0)};var z=Gs(),F=_e(z);F.__click=[Vs,m];var g=i(c(F),2);us(g,d=>v(w,d),()=>e(w)),g.__keydown=[Ls,w];var se=c(g,!0);n(g);var R=i(g,2),K=c(R);K.__click=A;var G=i(K,2);G.__click=b;var p=i(G,2);p.__click=l,n(R),n(F);var a=i(F,2);V(a,()=>m().open,d=>{var $=Ws();Ce($,21,()=>m().data,P=>P==null?void 0:P.key,(P,N)=>{var x=Ke(),ve=_e(x);V(ve,()=>e(N)instanceof je,be=>{ft(be,{get folder(){return e(N)}})},be=>{Ne(be,{get data(){return e(N)},onclick:()=>Me(`${ke}/${e(N).dataType==="class"?"class":"skill"}/${e(N).name}${e(N).dataType==="class"?"/edit":""}`),children:(E,fe)=>{Re();var Pe=Xe();O(()=>Q(Pe,`${e(N).name??""}${(e(N).location==="server"?"*":"")??""}`)),u(E,Pe)},$$slots:{default:!0}})}),u(P,x)}),n($),j(3,$,()=>nt),u(d,$)}),O(()=>{ye(F,"over",e(h)),ye(g,"server",m().location==="server"),Q(se,m().name)}),f("dragleave",F,()=>v(h,!1)),f("dragover",F,C),f("dragstart",F,D),f("drop",F,U),f("keypress",F,d=>{d.key==="Enter"&&(d.stopPropagation(),m(m().open=!m().open,!0))}),f("blur",g,y),f("keypress",K,d=>{d.key==="Enter"&&(d.stopPropagation(),A())}),f("keypress",G,d=>{d.key==="Enter"&&(d.stopPropagation(),b())}),f("keypress",p,d=>{d.key==="Enter"&&(d.stopPropagation(),l())}),j(1,F,()=>nt,()=>({duration:k()?0:400})),j(2,F,()=>nt),u(o,z),Te()}xe(["click","keydown"]);var Ys=S('<div tabindex="0" role="radio" class="svelte-t61ag2"> </div>'),qs=S('<div class="tabs svelte-t61ag2"></div>');function Bs(o,t){Ee(t,!0);let s=De(t,"selectedTab",15),k=De(t,"data",19,()=>["True","False"]),m=De(t,"color",3,"#222"),w=De(t,"inline",3,!0);var b=qs();Ce(b,21,k,mt,(l,A,h)=>{var D=Ys();D.__click=()=>s(h);var U=c(D,!0);n(D),O(()=>{we(D,"aria-checked",s()==h),Q(U,e(A))}),f("keypress",D,y=>{y.key==="Enter"&&s(h)}),u(l,D)}),n(b),O(()=>{ye(b,"selected",s()),ye(b,"inline",w()),te(b,"--color",m()),te(b,"--count",k().length),te(b,"--selected",s())}),u(o,b),Te()}xe(["click"]);var Hs=()=>ge.addClass(),Ks=()=>ge.addClassFolder(new je),Zs=S('<div class="new svelte-57rsxg"><span tabindex="0" role="button" class="svelte-57rsxg">New Class</span> <span class="new-folder svelte-57rsxg" tabindex="0" role="button">New Folder</span></div>'),Js=S('<div class="items svelte-57rsxg"><!> <!> <!></div>'),Qs=()=>ie.addSkill(),Xs=()=>ie.addSkillFolder(new je),ea=S('<div class="new svelte-57rsxg"><span tabindex="0" role="button" class="svelte-57rsxg">New Skill</span> <span class="new-folder svelte-57rsxg" tabindex="0" role="button">New Folder</span></div>'),ta=S('<div class="items svelte-57rsxg"><!> <!> <!></div>'),sa=()=>Ze.addAttribute(),aa=S('<div class="new svelte-57rsxg"><span tabindex="0" role="button" class="svelte-57rsxg">New Attribute</span></div>'),ra=S('<div class="items svelte-57rsxg"><!> <!></div>'),oa=S('<div id="sidebar" class="svelte-57rsxg"><div class="type-wrap svelte-57rsxg"><!> <hr class="svelte-57rsxg"></div> <!></div>');function la(o,t){Ee(t,!0);const s=Le(),k=()=>I(qe,"$shownTab",s),m=()=>I(a,"$classFolders",s),w=()=>I(p,"$classes",s),b=()=>I(G,"$skillFolders",s),l=()=>I(K,"$skills",s),A=()=>I(d,"$attributes",s);let h=[],D,U,y,C=X(pe([])),z=X(pe([])),F=X(!1),g=X(0),se=X(0),R=X(0);const K=ie.skills,G=ie.skillFolders,p=ge.classes,a=ge.classFolders,d=Ze.attributes,$=E=>{switch(ce(qe)){case ze.CLASSES:{h=E||ce(a),v(C,pe([]));for(let fe of h)e(C).push(...fe.getAllClasses());break}case ze.SKILLS:{h=E||ce(G),v(z,pe([]));for(let fe of h)e(z).push(...fe.getAllSkills());break}}};jt(()=>{D=qe.subscribe(()=>$()),U=a.subscribe($),y=G.subscribe($),$(),v(F,!0)}),Mt(()=>{D&&D(),U&&U(),y&&y()});const P=E=>{e(g)<500&&(E.stopPropagation(),ss())};var N=oa();f("beforeunload",vs,()=>He.disconnect());var x=c(N),ve=c(x);Bs(ve,{get selectedTab(){return et(),k()},set selectedTab(E){Be(qe,pe(E))},color:"#111",data:["Classes","Skills","Attributes"],inline:!1}),Re(2),n(x);var be=i(x,2);V(be,()=>e(F),E=>{var fe=Ke(),Pe=_e(fe);V(Pe,()=>k()===ze.CLASSES,Ve=>{var me=Js(),Ie=c(me);Ce(Ie,1,()=>Ge(m()),B=>B.key,(B,H)=>{ft(B,{get folder(){return e(H)}})});var $e=i(Ie,2);Ce($e,3,()=>Ge(w()).filter(B=>!e(C).includes(B)),B=>B.key,(B,H,de)=>{var L=Ae(()=>200+100*e(de));Ne(B,{get data(){return e(H)},get delay(){return e(L)},onclick:()=>Me(`${ke}/class/${e(H).name}/edit`),children:(Z,Y)=>{Re();var ee=Xe();O(()=>Q(ee,`${e(H).name??""}${(e(H).location==="server"?"*":"")??""}`)),u(Z,ee)},$$slots:{default:!0}})});var ne=i($e,2),he=Ae(()=>200+100*(w().length+1));Ne(ne,{get delay(){return e(he)},children:(B,H)=>{var de=Zs(),L=c(de);L.__click=[Hs];var Z=i(L,2);Z.__click=[Ks],n(de),f("keypress",L,Y=>Y.key==="Enter"&&ge.addClass()),f("keypress",Z,Y=>Y.key==="Enter"&&ge.addClassFolder(new je)),u(B,de)},$$slots:{default:!0}}),n(me),j(1,me,()=>q,()=>({x:-100})),j(2,me,()=>q,()=>({x:-100})),u(Ve,me)},Ve=>{var me=Ke(),Ie=_e(me);V(Ie,()=>k()===ze.SKILLS,$e=>{var ne=ta(),he=c(ne);Ce(he,1,()=>Ge(b()),mt,(L,Z)=>{ft(L,{get folder(){return e(Z)}})});var B=i(he,2);Ce(B,3,()=>Ge(l()).filter(L=>!e(z).includes(L)),L=>L.key,(L,Z,Y)=>{var ee=Ae(()=>200+100*e(Y));Ne(L,{get data(){return e(Z)},direction:"right",get delay(){return e(ee)},onclick:()=>Me(`${ke}/skill/${e(Z).name}`),children:(oe,ae)=>{Re();var ue=Xe();O(()=>Q(ue,`${e(Z).name??""}${(e(Z).location==="server"?"*":"")??""}`)),u(oe,ue)},$$slots:{default:!0}})});var H=i(B,2),de=Ae(()=>200+100*(l().length+1));Ne(H,{get delay(){return e(de)},direction:"right",children:(L,Z)=>{var Y=ea(),ee=c(Y);ee.__click=[Qs];var oe=i(ee,2);oe.__click=[Xs],n(Y),f("keypress",ee,ae=>ae.key==="Enter"&&ie.addSkill()),f("keypress",oe,ae=>ae.key==="Enter"&&ie.addSkillFolder(new je)),u(L,Y)},$$slots:{default:!0}}),n(ne),j(1,ne,()=>q,()=>({x:100})),j(2,ne,()=>q,()=>({x:100})),u($e,ne)},$e=>{var ne=Ke(),he=_e(ne);V(he,()=>k()===ze.ATTRIBUTES,B=>{var H=ra(),de=c(H);Ce(de,3,()=>Ge(A()),Y=>Y.key,(Y,ee,oe)=>{var ae=Ae(()=>200+100*e(oe));Ne(Y,{get data(){return e(ee)},direction:"right",get delay(){return e(ae)},onclick:()=>Me(`${ke}/attribute/${e(ee).name}/edit`),children:(ue,lt)=>{Re();var Oe=Xe();O(()=>Q(Oe,`${e(ee).name??""}${(e(ee).location==="server"?"*":"")??""}`)),u(ue,Oe)},$$slots:{default:!0}})});var L=i(de,2),Z=Ae(()=>200+100*(A().length+1));Ne(L,{get delay(){return e(Z)},direction:"right",children:(Y,ee)=>{var oe=aa(),ae=c(oe);ae.__click=[sa],n(oe),f("keypress",ae,ue=>ue.key==="Enter"&&Ze.addAttribute()),u(Y,oe)},$$slots:{default:!0}}),n(H),j(1,H,()=>q,()=>({x:100})),j(2,H,()=>q,()=>({x:100})),u(B,H)},null,!0),u($e,ne)},!0),u(Ve,me)}),u(E,fe)}),n(N),O(()=>te(N,"--height",`calc(${e(se)??""}px - 6rem + min(3rem, ${e(R)??""}px))`)),Et("innerHeight",E=>v(se,pe(E))),Et("innerWidth",E=>v(g,pe(E))),Xt("y",()=>e(R),E=>v(R,pe(E))),f("introend",N,()=>at.set(!0)),f("outroend",N,()=>at.set(!1)),j(3,N,()=>_s),es(N,(E,fe)=>ts(E,fe),()=>P),u(o,N),Te()}xe(["click"]);const ia=()=>{confirm("Are you sure you want to clear all data?")&&(ge.classes.set([]),ge.classFolders.set([]),ie.skills.set([]),ie.skillFolders.set([]),Ze.attributes.set([]))};var na=S("<option> </option>"),da=S("<select></select>"),ca=S('<h1>Settings</h1> <hr> <div class="settings-container svelte-1wp1eds"><!> <!> <!> <!> <hr class="span svelte-1wp1eds"> <button class="button btn-danger span svelte-1wp1eds">Clear Data</button></div>',1);function Wt(o,t){Ee(t,!0);const s=Le(),k=()=>I(Ft,"$version",s),m=()=>I(Tt,"$useSymbols",s),w=()=>I(Ct,"$showSummaryItems",s),b=()=>I(pt,"$animationEnabled",s);ot(o,{get onclose(){return t.onclose},width:"50rem",children:(l,A)=>{var h=ca(),D=i(_e(h),4),U=c(D);Qe(U,{label:"Server",tooltip:"This should match your target Spigot server version",children:(g,se)=>{var R=da();Ce(R,21,()=>Object.keys(as).sort((K,G)=>Number.parseFloat(G)-Number.parseFloat(K)),mt,(K,G)=>{var p=na(),a={},d=c(p);n(p),O(()=>{a!==(a=e(G))&&(p.value=(p.__value=e(G))==null?"":e(G)),Q(d,`1.${e(G)??""}`)}),u(K,p)}),n(R),bs(R,k,K=>Be(Ft,K)),u(g,R)},$$slots:{default:!0}});var y=i(U,2);Qe(y,{label:"Use Symbols",tooltip:"If skill components should use symbols instead of text",children:(g,se)=>{dt(g,{get data(){return et(),m()},set data(R){Be(Tt,pe(R))},left:"Symbols",right:"Text"})},$$slots:{default:!0}});var C=i(y,2);Qe(C,{label:"Show Summary Items",tooltip:"If skill components should show a simplified summary on the element",children:(g,se)=>{dt(g,{get data(){return et(),w()},set data(R){Be(Ct,pe(R))},left:"True",right:"False"})},$$slots:{default:!0}});var z=i(C,2);Qe(z,{label:"Waterfall Animation",tooltip:"If the waterfall animation should play in the sidebar",children:(g,se)=>{dt(g,{get data(){return et(),b()},set data(R){Be(pt,pe(R))}})},$$slots:{default:!0}});var F=i(z,4);F.__click=[ia],n(D),u(l,h)},$$slots:{default:!0}}),Te()}xe(["click"]);var va=()=>rt(),ua=(o,t)=>t(),pa=S('<span class="material-symbols-rounded svelte-10061vz"> </span>'),_a=S('<span class="material-symbols-rounded svelte-10061vz">upload_file</span>'),fa=(o,t)=>t(),ma=S('<span class="material-symbols-rounded svelte-10061vz"> </span>'),ba=S('<span class="material-symbols-rounded svelte-10061vz">cloud_upload</span>'),ga=(o,t)=>t(),ka=S('<span class="material-symbols-rounded svelte-10061vz"> </span>'),ya=S('<span class="material-symbols-rounded svelte-10061vz">sync</span>'),$a=S('<div class="button socket-upload svelte-10061vz" title="Save to Server" tabindex="0" role="button"><!></div> <div class="button socket-all svelte-10061vz" title="Upload All to Server" tabindex="0" role="button"><!></div> <div class="button socket-reload svelte-10061vz" title="Reload Fabled" tabindex="0" role="button"><!></div>',1),ha=()=>Ut(Wt),Sa=(o,t)=>{t()},wa=S(`<div class="save-error svelte-10061vz"><strong> </strong> <div>We can keep it in memory for you to use, but will be unable to persist it to your browser's storage.</div> <div>Closing/Refreshing the page will cause you to lose this data.</div> <div>You'll need to export it and re-import later if you want to keep working with this.</div> <div class="acknowledge button" tabindex="0" role="button">I Understand</div></div>`),xa=S('<div class="saving svelte-10061vz"> </div>'),Ea=S('<div class="dragging svelte-10061vz" role="form">Drop to Import</div>'),Ta=S('<h3>Untrusted Connection to Server</h3> <div>Server is not trusted. Please run <div class="code svelte-10061vz" role="button" tabindex="0"> </div> from the server</div>',1),Ca=()=>He.ping(),Fa=S('<div class="dc-warning svelte-10061vz"><strong> </strong> <div class="button svelte-10061vz" tabindex="0" role="button">Click to remain connected</div></div>'),Da=S('<!> <!> <div id="body-container" class="svelte-10061vz"><!> <div id="body" class="svelte-10061vz"><!></div></div> <div id="floating-buttons" class="svelte-10061vz"><div class="button backup svelte-10061vz" role="button" tabindex="0" title="Backup All Data"><span class="material-symbols-rounded svelte-10061vz">cloud_download</span></div> <div class="button save svelte-10061vz" role="button" tabindex="0" title="Save"><span class="material-symbols-rounded svelte-10061vz">save</span></div> <!> <div class="button settings svelte-10061vz" role="button" tabindex="0" title="Change Settings"><span class="material-symbols-rounded svelte-10061vz">settings</span></div></div> <!> <!> <!> <!> <!> <!> <!>',1);function La(o,t){Ee(t,!0);const s=Le(),k=()=>I(P,"$passphrase",s),m=()=>I(tt,"$active",s),w=()=>I(rs,"$showSidebar",s),b=()=>I(ve,"$distance",s),l=()=>I(x,"$rotation",s),A=()=>I(Pt,"$socketConnected",s),h=()=>I(os,"$importing",s),D=()=>I(ct,"$saveError",s),U=()=>I(ms,"$modalData",s),y=()=>I(g,"$isSaving",s),C=()=>I(ls,"$socketTrusted",s),z=()=>I(It,"$dcWarning",s),F=()=>I(be,"$dcTime",s),g=ie.isSaving;let se=X(!1),R=X(!1),K,G,p=X(""),a=X("NONE");const d={SAVING:"hourglass_empty",SAVED:"check",ERROR:"error"};let $=X(!1);const P=He.keyphrase;let N=Je(Pt,(r,_)=>_(r?6:3)),x=Je(N,(r,_)=>_(120/((r-1)*2))),ve=Je(N,(r,_)=>_((4.725*(r-1)+1.5)/Math.PI)),be=Je(It,(r,_)=>{let T,re=0;const W=()=>{let le=r-(re+=1);if(le<=0){clearInterval(T);return}_(le)};return _(r),T=window.setInterval(()=>W(),1e3),()=>clearInterval(T)});jt(()=>{document.addEventListener("dragover",E),document.addEventListener("drop",Pe),G=ie.isSaving.subscribe(r=>{if(!r){setTimeout(()=>v(R,!1),1e3);return}K&&clearTimeout(K),K=setTimeout(()=>v(R,!0),1e3)})}),Mt(()=>{document.removeEventListener("dragover",E),document.removeEventListener("drop",Pe),G&&G()});const E=r=>{var _,T;!((_=r==null?void 0:r.dataTransfer)!=null&&_.types)||!(r.dataTransfer.types.length>0&&((T=r.dataTransfer)==null?void 0:T.types[0])=="Files")||(r.dataTransfer.dropEffect="copy",r.stopPropagation(),r.preventDefault(),v(se,!0))},fe=()=>{setTimeout(()=>v(se,!1),50)},Pe=r=>{var _;if(!(!((_=r==null?void 0:r.dataTransfer)!=null&&_.files)||r.dataTransfer.files.length==0)){v(se,!1);for(let T=0;T<r.dataTransfer.files.length;(T+=1)-1){const re=r.dataTransfer.files[T];re.name.indexOf(".yml")!=-1&&At(re)}r.stopPropagation(),r.preventDefault()}},Ve=()=>{var r;ie.skills.set([...ce(ie.skills)]),(r=ce(tt))==null||r.save()},me=()=>{const r=ce(ct);r&&(r.acknowledged=!0),ct.set(void 0)},Ie=async()=>{if(e(a)==="SAVING")return;v(p,"save"),v(a,"SAVING"),await is()?v(a,"SAVED"):v(a,"ERROR"),setTimeout(()=>v(a,"NONE"),2e3)},$e=async()=>{if(e(a)==="SAVING")return;v(p,"export"),v(a,"SAVING"),await ns()?v(a,"SAVED"):v(a,"ERROR"),setTimeout(()=>v(a,"NONE"),2e3)},ne=async()=>{if(e(a)==="SAVING")return;v(p,"reload"),v(a,"SAVING"),await He.reloadSapi()?v(a,"SAVED"):v(a,"ERROR"),setTimeout(()=>v(a,"NONE"),2e3)},he=()=>{navigator.clipboard.writeText("/synth trust "+k()),v($,!0),setTimeout(()=>v($,!1),2e3)};var B=Da(),H=_e(B);Ps(H,{});var de=i(H,2);Es(de,{});var L=i(de,2),Z=c(L);V(Z,w,r=>{la(r,{})});var Y=i(Z,2),ee=c(Y);zt(ee,()=>t.children??Rt),n(Y),n(L);var oe=i(L,2),ae=c(oe);ae.__click=function(...r){var _;(_=Dt)==null||_.apply(this,r)};var ue=i(ae,2);ue.__click=[va];var lt=i(ue,2);V(lt,A,r=>{var _=$a(),T=_e(_);T.__click=[ua,Ie];var re=c(T);V(re,()=>e(p)==="save"&&e(a)!=="NONE",J=>{var M=pa(),We=c(M,!0);n(M),O(()=>Q(We,d[e(a)])),j(3,M,()=>q,()=>({y:-20})),u(J,M)},J=>{var M=_a();j(3,M,()=>q,()=>({y:20})),u(J,M)}),n(T);var W=i(T,2);W.__click=[fa,$e];var le=c(W);V(le,()=>e(p)==="export"&&e(a)!=="NONE",J=>{var M=ma(),We=c(M,!0);n(M),O(()=>Q(We,d[e(a)])),j(3,M,()=>q,()=>({y:-20})),u(J,M)},J=>{var M=ba();j(3,M,()=>q,()=>({y:20})),u(J,M)}),n(W);var Se=i(W,2);Se.__click=[ga,ne];var it=c(Se);V(it,()=>e(p)==="reload"&&e(a)!=="NONE",J=>{var M=ka(),We=c(M,!0);n(M),O(()=>Q(We,d[e(a)])),j(3,M,()=>q,()=>({y:-20})),u(J,M)},J=>{var M=ya();j(3,M,()=>q,()=>({y:20})),u(J,M)}),n(Se),O(()=>{te(T,"--rotation",`${l()*5}deg`),te(T,"--distance",`${b()??""}rem`),te(W,"--rotation",`${l()*7}deg`),te(W,"--distance",`${b()??""}rem`),te(Se,"--rotation",`${l()*9}deg`),te(Se,"--distance",`${b()??""}rem`)}),f("keypress",T,J=>{J.key==="Enter"&&Ie()}),j(3,T,()=>q,()=>({x:100,easing:vt})),f("keypress",W,J=>{J.key==="Enter"&&$e()}),j(3,W,()=>q,()=>({x:100,easing:vt})),f("keypress",Se,J=>{J.key==="Enter"&&ne()}),j(3,Se,()=>q,()=>({x:100,easing:vt})),u(r,_)});var Oe=i(lt,2);Oe.__click=[ha],te(Oe,"--distance","1rem"),te(Oe,"--rotation","60deg"),n(oe);var bt=i(oe,2);V(bt,h,r=>{Ss(r,{})});var gt=i(bt,2);V(gt,D,r=>{var _=wa(),T=c(_),re=c(T);n(T);var W=i(T,8);W.__click=[Sa,me],n(_),O(()=>Q(re,`Failed to save ${D().name??""} - Data is too large.`)),f("keypress",W,le=>{le.key==="Enter"&&me()}),j(3,_,()=>q,()=>({y:-20})),u(r,_)});var kt=i(gt,2);V(kt,()=>Ot.activeModal,r=>{var _=Ke(),T=_e(_);ps(T,()=>Ot.activeModal,(re,W)=>{W(re,{get data(){return U()},onclose:fs,onsave:Ve})}),u(r,_)});var yt=i(kt,2);V(yt,()=>e(R),r=>{var _=xa(),T=c(_,!0);n(_),O(()=>Q(T,y()?"Saving...":"Saved!")),j(3,_,()=>q,()=>({y:-20})),u(r,_)});var $t=i(yt,2);V($t,()=>e(se),r=>{var _=Ea();f("dragleave",_,fe),u(r,_)});var ht=i($t,2);V(ht,()=>!!k()&&!C(),r=>{ot(r,{children:(_,T)=>{var re=Ta(),W=i(_e(re),2),le=i(c(W));le.__click=he;var Se=c(le);n(le),Re(),n(W),O(()=>{ye(le,"copied",e($)),Q(Se,`/synth trust ${k()??""}`)}),f("keypress",le,it=>{it.key==="Enter"&&he()}),u(_,re)},$$slots:{default:!0}})});var Gt=i(ht,2);V(Gt,()=>z()>0,r=>{var _=Fa(),T=c(_),re=c(T);n(T);var W=i(T,2);W.__click=[Ca],n(_),O(()=>Q(re,`You will lose connection in ${F()??""} seconds`)),f("keypress",W,le=>{le.key==="Enter"&&He.ping()}),j(3,_,()=>q,()=>({y:-20})),u(r,_)}),O(()=>{ye(L,"empty",!m()),ye(Y,"centered",!m()),te(ae,"--distance",`${b()??""}rem`),te(ae,"--rotation",`${l()??""}deg`),te(ue,"--distance",`${b()??""}rem`),te(ue,"--rotation",`${l()*3}deg`)}),f("keypress",ae,r=>r.key==="Enter"&&Dt()),f("keypress",ue,r=>{r.key==="Enter"&&rt()}),f("keypress",Oe,r=>r.key==="Enter"&&Ut(Wt)),u(o,B),Te()}xe(["click"]);export{La as component,Ua as universal};
