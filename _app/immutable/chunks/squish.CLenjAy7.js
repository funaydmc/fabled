import{b as f,p as w}from"./index-client.DWdqsBsZ.js";import{w as g}from"./entry.CEZuu8_T.js";import{e as M,a as y,t as b}from"./disclose-version.CxdF3O1R.js";import{f as x,z as N,j as h,y as k,r as l,t as q,i as _}from"./utils.D8-vZWAN.js";import{s as C,d as S,t as v,e as D,c as F,f as P,g as j}from"./components.svelte.Bsx1HrXm.js";const m=f({activeModal:void 0}),u=g(void 0),H=(c,t)=>{m.activeModal=c,t&&u.set(t)},I=()=>{m.activeModal=void 0,u.set(void 0)};var z=b('<div class="backdrop svelte-sv0lqh"><div class="modal-content svelte-sv0lqh"><div class="wrapper svelte-sv0lqh"><!></div></div></div>');function J(c,t){x(t,!0);let n=w(t,"width",3,"auto");const d=i=>{var r;(r=t.onclose)==null||r.call(t),i==null||i.stopPropagation()},e=i=>{i.key==="Escape"&&(i.preventDefault(),i.stopPropagation(),d())};var o=z();M("keyup",N,e);var s=h(o),a=h(s),p=h(a);C(p,()=>t.children??k),l(a),l(s),S(s,(i,r)=>D(i,r),()=>d),l(o),q(()=>F(s,"--width",n())),v(3,s,()=>P,()=>({y:-200})),v(3,o,()=>j),y(c,o),_()}const K=(c,{delay:t=0,duration:n=500}={})=>{const e=getComputedStyle(c).width.match(/([\d.]+)(.*)/);if(!e)return{delay:t,duration:n,css:s=>`max-width: unset; width: ${s*100}%;`};const o=Number.parseFloat(e[1]);return{delay:t,duration:n,css:s=>{let a=s*o;return isNaN(a)&&(a=0),`max-width: unset; width: ${a}${e[2]}; min-width: unset;`}}},L=(c,{delay:t=0,duration:n=500})=>{const e=getComputedStyle(c).height.match(/([\d.]+)(.*)/);if(!e)return{delay:t,duration:n,css:s=>`max-height: unset; height: ${s*100}%;`};const o=Number.parseFloat(e[1]);return{delay:t,duration:n,css:s=>{let a=s*o;return isNaN(a)&&(a=0),`max-height: unset; height: ${a}${e[2]}; min-height: unset;`}}};export{J as M,m as a,L as b,I as c,u as m,H as o,K as s};