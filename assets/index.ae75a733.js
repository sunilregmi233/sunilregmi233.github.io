import{a as u,Q as v}from"./QCard.b0ed721b.js";import{I as f}from"./Intersection.6d770f7c.js";import{_ as h,a as I,F as _,o as s,A as i,b as o,f as n,a7 as g,ae as x,e as y,w as c,c as B,B as w,af as C,T as V,I as b,J as k}from"./index.840e6237.js";import"./render.e5536ea7.js";import"./use-dark.19f7ff78.js";const q={setup(){const e=I(Array.apply(null,Array(20)).map(t=>!1));return{inView:e,onIntersection(t){const d=parseInt(t.target.dataset.id,10);setTimeout(()=>{e.value.splice(d,1,t.isIntersecting)},50)}}}},l=e=>(b("data-v-06b4130e"),e=e(),k(),e),N={class:"q-pa"},S={class:"row justify-center q-gutter-sm"},F=["data-id"],A=l(()=>n("img",{src:"https://cdn.quasar.dev/img/mountains.jpg"},null,-1)),D={class:"text-h6"},Q=l(()=>n("div",{class:"text-subtitle2"},"by John Doe",-1));function T(e,t,d,r,j,J){const p=_("BaseNav"),m=_("BaseFooter");return s(),i("div",N,[o(p,{class:"nav"}),n("div",S,[(s(!0),i(g,null,x(r.inView.length,a=>y((s(),i("div",{key:a,"data-id":a-1,class:"example-item q-pa-sm flex flex-center relative-position"},[o(V,{name:"q-transition--scale"},{default:c(()=>[r.inView[a-1]?(s(),B(v,{key:0},{default:c(()=>[A,o(u,null,{default:c(()=>[n("div",D,"Card #"+w(a),1),Q]),_:2},1024)]),_:2},1024)):C("",!0)]),_:2},1024)],8,F)),[[f,r.onIntersection]])),128))]),o(m)])}var H=h(q,[["render",T],["__scopeId","data-v-06b4130e"]]);export{H as default};
