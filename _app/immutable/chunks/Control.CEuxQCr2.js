import{R as w}from"./entry.ClFOO1ik.js";import{s as E,q as S,e as p,a as C,c as k,b as g,g as q,f as _,o as f,r as d,i as v,h as y,u as m,v as h,w as A,x as R,y as j,z,t as D,d as I,j as N,A as P}from"./scheduler.DGJk2a0k.js";import{S as T,i as V,t as B,a as F}from"./index.BZ3GWsIc.js";function M(i,e){throw new w(i,e.toString())}new TextEncoder;function b(i){let e,o;return{c(){e=p("span"),o=D(i[1]),this.h()},l(a){e=k(a,"SPAN",{class:!0});var r=g(e);o=I(r,i[1]),r.forEach(_),this.h()},h(){f(e,"class","material-symbols-rounded")},m(a,r){v(a,e,r),y(e,o)},p(a,r){r&2&&N(o,a[1])},d(a){a&&_(e)}}}function G(i){let e,o,a,r,u,s=i[1]&&b(i);const c=i[5].default,n=S(c,i,i[4],null);return{c(){e=p("div"),s&&s.c(),o=C(),n&&n.c(),this.h()},l(l){e=k(l,"DIV",{class:!0,title:!0,tabindex:!0,role:!0});var t=g(e);s&&s.l(t),o=q(t),n&&n.l(t),t.forEach(_),this.h()},h(){f(e,"class","control svelte-1n1iox0"),f(e,"title",i[0]),f(e,"tabindex","0"),f(e,"role","button"),d(e,"--color",i[2])},m(l,t){v(l,e,t),s&&s.m(e,null),y(e,o),n&&n.m(e,null),a=!0,r||(u=[m(e,"click",h(i[6])),m(e,"keypress",h(i[3]))],r=!0)},p(l,[t]){l[1]?s?s.p(l,t):(s=b(l),s.c(),s.m(e,o)):s&&(s.d(1),s=null),n&&n.p&&(!a||t&16)&&A(n,c,l,l[4],a?j(c,l[4],t,null):R(l[4]),null),(!a||t&1)&&f(e,"title",l[0]),t&4&&d(e,"--color",l[2])},i(l){a||(B(n,l),a=!0)},o(l){F(n,l),a=!1},d(l){l&&_(e),s&&s.d(),n&&n.d(l),r=!1,z(u)}}}function H(i,e,o){let{$$slots:a={},$$scope:r}=e,{title:u=""}=e,{icon:s=""}=e,{color:c="red"}=e;const n=t=>t.key==="Enter"&&t.target.click();function l(t){P.call(this,i,t)}return i.$$set=t=>{"title"in t&&o(0,u=t.title),"icon"in t&&o(1,s=t.icon),"color"in t&&o(2,c=t.color),"$$scope"in t&&o(4,r=t.$$scope)},[u,s,c,n,r,a,l]}class O extends T{constructor(e){super(),V(this,e,H,G,E,{title:0,icon:1,color:2})}}export{O as C,M as r};