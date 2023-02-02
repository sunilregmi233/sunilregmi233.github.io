import{d as Je,_ as fe,o as be,c as Ye,w as z,r as et,a as d,h as f,g as W,s as ve,e as Le,f as y,i as ke,j as Ie,k as se,l as T,m as ae,n as tt,p as at,q as nt,t as Ae,u as lt,v as ot,x as rt,y as he,z as it,A as J,B as st,C as ut,b as ct}from"./index.43373540.js";import{Q as Pe,c as j,h as ne,u as dt,a as vt,b as ft,d as N,e as bt,R as Me,f as ht,v as Qe}from"./QBtn.45f36ec4.js";import{u as me,a as ge,Q as mt}from"./QResizeObserver.cdcc4604.js";const gt=Je({name:"BaseButton",props:{label:{name:String,required:!0,default:"Button"},route:{type:String,required:!1},textColor:{type:String,required:!1},size:{type:String,required:!1},color:{type:String,required:!1}},setup(){function e(){console.log("Button clicked")}return{handleClick:e}}});function _t(e,i,n,l,o,R){return be(),Ye(Pe,{class:"button",to:e.route,"text-color":e.textColor,label:e.label,size:e.size,color:e.color},{default:z(()=>[et(e.$slots,"default")]),_:3},8,["to","text-color","label","size","color"])}var qt=fe(gt,[["render",_t]]),Y=j({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:i}){const n=d(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>f(e.tag,{class:n.value},ne(i.default))}});const yt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},ue={xs:2,sm:4,md:8,lg:16,xl:24};var wt=j({name:"QSeparator",props:{...me,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const i=W(),n=ge(e,i.proxy.$q),l=d(()=>e.vertical===!0?"vertical":"horizontal"),o=d(()=>` q-separator--${l.value}`),R=d(()=>e.inset!==!1?`${o.value}-${yt[e.inset]}`:""),x=d(()=>`q-separator${o.value}${R.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),D=d(()=>{const B={};if(e.size!==void 0&&(B[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const P=e.spaced===!0?`${ue.md}px`:e.spaced in ue?`${ue[e.spaced]}px`:e.spaced,k=e.vertical===!0?["Left","Right"]:["Top","Bottom"];B[`margin${k[0]}`]=B[`margin${k[1]}`]=P}return B});return()=>f("hr",{class:x.value,style:D.value,"aria-orientation":l.value})}});const Ct={xs:8,sm:10,md:14,lg:20,xl:24};var Tt=j({name:"QChip",props:{...me,...dt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:i,emit:n}){const{proxy:{$q:l}}=W(),o=ge(e,l),R=vt(e,Ct),x=d(()=>e.selected===!0||e.icon!==void 0),D=d(()=>e.selected===!0?e.iconSelected||l.iconSet.chip.selected:e.icon),B=d(()=>e.iconRemove||l.iconSet.chip.remove),P=d(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),k=d(()=>{const c=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(c?` text-${c} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(P.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(o.value===!0?" q-chip--dark q-dark":"")}),O=d(()=>{const c=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},I={...c,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||l.lang.label.remove};return{chip:c,remove:I}});function M(c){c.keyCode===13&&g(c)}function g(c){e.disable||(n("update:selected",!e.selected),n("click",c))}function w(c){(c.keyCode===void 0||c.keyCode===13)&&(ve(c),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function L(){const c=[];P.value===!0&&c.push(f("div",{class:"q-focus-helper"})),x.value===!0&&c.push(f(N,{class:"q-chip__icon q-chip__icon--left",name:D.value}));const I=e.label!==void 0?[f("div",{class:"ellipsis"},[e.label])]:void 0;return c.push(f("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},bt(i.default,I))),e.iconRight&&c.push(f(N,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&c.push(f(N,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:B.value,...O.value.remove,onClick:w,onKeyup:w})),c}return()=>{if(e.modelValue===!1)return;const c={class:k.value,style:R.value};return P.value===!0&&Object.assign(c,O.value.chip,{onClick:g,onKeyup:M}),ft("div",c,L(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Me,e.ripple]])}}}),St=j({name:"QCard",props:{...me,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:i}){const{proxy:{$q:n}}=W(),l=ge(e,n),o=d(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>f(e.tag,{class:o.value},ne(i.default))}});const xt={name:"BaseCard",props:{}},Bt={class:"my-card absolute"},kt=Ie("div",{class:"text-h6"},"Want to learn",-1),$t=Ie("div",{class:"text-h1 text-weight-bolder"},"Machine Learning",-1);function Rt(e,i,n,l,o,R){return be(),Le("div",Bt,[y(St,{flat:"",class:"no-border transparent text-white"},{default:z(()=>[y(Y,null,{default:z(()=>[kt]),_:1}),y(Y,null,{default:z(()=>[$t]),_:1}),y(Y,{class:"q-pt-none text-h4"},{default:z(()=>[ke(" Get Overview of ML and AI ")]),_:1}),y(wt,{inset:""}),y(Y,{class:"q-pt-none text-body1"},{default:z(()=>[y(Tt,{size:"18px",icon:"directions"},{default:z(()=>[ke(" Take a Look ")]),_:1})]),_:1})]),_:1})])}var Lt=fe(xt,[["render",Rt]]);const It=f("div",{class:"q-space"});var At=j({name:"QSpace",setup(){return()=>It}});let ce,ee=0;const m=new Array(256);for(let e=0;e<256;e++)m[e]=(e+256).toString(16).substring(1);const Pt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return i=>{const n=new Uint8Array(i);return e.getRandomValues(n),n}}return i=>{const n=[];for(let l=i;l>0;l--)n.push(Math.floor(Math.random()*256));return n}})(),$e=4096;function Mt(){(ce===void 0||ee+16>$e)&&(ee=0,ce=Pt($e));const e=Array.prototype.slice.call(ce,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,m[e[0]]+m[e[1]]+m[e[2]]+m[e[3]]+"-"+m[e[4]]+m[e[5]]+"-"+m[e[6]]+m[e[7]]+"-"+m[e[8]]+m[e[9]]+"-"+m[e[10]]+m[e[11]]+m[e[12]]+m[e[13]]+m[e[14]]+m[e[15]]}let Qt=0;const zt=["click","keydown"],Dt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Qt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Vt(e,i,n,l){const o=at(Ae,se);if(o===se)return console.error("QTab/QRouteTab component needs to be child of QTabs"),se;const{proxy:R}=W(),x=T(null),D=T(null),B=T(null),P=d(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),k=d(()=>o.currentModel.value===e.name),O=d(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(k.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),M=d(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=d(()=>e.disable===!0||o.hasFocus.value===!0||k.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function w(s,C){if(C!==!0&&x.value!==null&&x.value.focus(),e.disable===!0){l!==void 0&&l.hasRouterLink.value===!0&&ve(s);return}if(l===void 0){o.updateModel({name:e.name}),n("click",s);return}if(l.hasRouterLink.value===!0){const S=(_={})=>{let $;const A=_.to===void 0||rt(_.to,e.to)===!0?o.avoidRouteWatcher=Mt():null;return l.navigateToRouterLink(s,{..._,returnRouterError:!0}).catch(F=>{$=F}).then(F=>{if(A===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,$===void 0&&(F===void 0||F.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),_.returnRouterError===!0)return $!==void 0?Promise.reject($):F})};n("click",s,S),s.defaultPrevented!==!0&&S();return}n("click",s)}function L(s){lt(s,[13,32])?w(s,!0):ot(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&o.onKbdNavigate(s.keyCode,R.$el)===!0&&ve(s),n("keydown",s)}function c(){const s=o.tabProps.value.narrowIndicator,C=[],S=f("div",{ref:B,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&C.push(f(N,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&C.push(f("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&C.push(e.alertIcon!==void 0?f(N,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):f("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&C.push(S);const _=[f("div",{class:"q-focus-helper",tabindex:-1,ref:x}),f("div",{class:M.value},ht(i.default,C))];return s===!1&&_.push(S),_}const I={name:d(()=>e.name),rootRef:D,tabIndicatorRef:B,routeData:l};ae(()=>{o.unregisterTab(I)}),tt(()=>{o.registerTab(I)});function p(s,C){const S={ref:D,class:O.value,tabindex:g.value,role:"tab","aria-selected":k.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:w,onKeydown:L,...C};return nt(f(s,S,c()),[[Me,P.value]])}return{renderTab:p,$tabs:o}}var te=j({name:"QTab",props:Dt,emits:zt,setup(e,{slots:i,emit:n}){const{renderTab:l}=Vt(e,i,n);return()=>l("div")}});function de(){let e;const i=W();function n(){e=void 0}return he(n),ae(n),{removeTick:n,registerTick(l){e=l,it(()=>{e===l&&(Qe(i)===!1&&e(),e=void 0)})}}}function Re(){let e=null;const i=W();function n(){e!==null&&(clearTimeout(e),e=null)}return he(n),ae(n),{removeTimeout:n,registerTimeout(l,o){n(),Qe(i)===!1&&(e=setTimeout(l,o))}}}let ze=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const i=document.createElement("div");Object.assign(i.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(i),e.scrollLeft=-1e3,ze=e.scrollLeft>=0,e.remove()}function Et(e,i,n){const l=n===!0?["left","right"]:["top","bottom"];return`absolute-${i===!0?l[0]:l[1]}${e?` text-${e}`:""}`}const jt=["left","center","right","justify"];var Ft=j({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>jt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:i,emit:n}){const{proxy:l}=W(),{$q:o}=l,{registerTick:R}=de(),{registerTick:x}=de(),{registerTick:D}=de(),{registerTimeout:B,removeTimeout:P}=Re(),{registerTimeout:k,removeTimeout:O}=Re(),M=T(null),g=T(null),w=T(e.modelValue),L=T(!1),c=T(!0),I=T(!1),p=T(!1),s=[],C=T(0),S=T(!1);let _=null,$=null,A;const F=d(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Et(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),De=d(()=>{const t=C.value,a=w.value;for(let r=0;r<t;r++)if(s[r].name.value===a)return!0;return!1}),Ve=d(()=>`q-tabs__content--align-${L.value===!0?"left":p.value===!0?"justify":e.align}`),Ee=d(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),je=d(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ve.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),H=d(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),G=d(()=>e.vertical!==!0&&o.lang.rtl===!0),le=d(()=>ze===!1&&G.value===!0);J(G,U),J(()=>e.modelValue,t=>{oe({name:t,setCurrent:!0,skipEmit:!0})}),J(()=>e.outsideArrows,X);function oe({name:t,setCurrent:a,skipEmit:r}){w.value!==t&&(r!==!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(Fe(w.value,t),w.value=t))}function X(){R(()=>{_e({width:M.value.offsetWidth,height:M.value.offsetHeight})})}function _e(t){if(H.value===void 0||g.value===null)return;const a=t[H.value.container],r=Math.min(g.value[H.value.scroll],Array.prototype.reduce.call(g.value.children,(h,v)=>h+(v[H.value.content]||0),0)),b=a>0&&r>a;L.value=b,b===!0&&x(U),p.value=a<parseInt(e.breakpoint,10)}function Fe(t,a){const r=t!=null&&t!==""?s.find(h=>h.name.value===t):null,b=a!=null&&a!==""?s.find(h=>h.name.value===a):null;if(r&&b){const h=r.tabIndicatorRef.value,v=b.tabIndicatorRef.value;_!==null&&(clearTimeout(_),_=null),h.style.transition="none",h.style.transform="none",v.style.transition="none",v.style.transform="none";const u=h.getBoundingClientRect(),q=v.getBoundingClientRect();v.style.transform=e.vertical===!0?`translate3d(0,${u.top-q.top}px,0) scale3d(1,${q.height?u.height/q.height:1},1)`:`translate3d(${u.left-q.left}px,0,0) scale3d(${q.width?u.width/q.width:1},1,1)`,D(()=>{_=setTimeout(()=>{_=null,v.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",v.style.transform="none"},70)})}b&&L.value===!0&&K(b.rootRef.value)}function K(t){const{left:a,width:r,top:b,height:h}=g.value.getBoundingClientRect(),v=t.getBoundingClientRect();let u=e.vertical===!0?v.top-b:v.left-a;if(u<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(u),U();return}u+=e.vertical===!0?v.height-h:v.width-r,u>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(u),U())}function U(){const t=g.value;if(t===null)return;const a=t.getBoundingClientRect(),r=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);G.value===!0?(c.value=Math.ceil(r+a.width)<t.scrollWidth-1,I.value=r>0):(c.value=r>0,I.value=e.vertical===!0?Math.ceil(r+a.height)<t.scrollHeight:Math.ceil(r+a.width)<t.scrollWidth)}function qe(t){$!==null&&clearInterval($),$=setInterval(()=>{Oe(t)===!0&&V()},5)}function ye(){qe(le.value===!0?Number.MAX_SAFE_INTEGER:0)}function we(){qe(le.value===!0?0:Number.MAX_SAFE_INTEGER)}function V(){$!==null&&(clearInterval($),$=null)}function Ne(t,a){const r=Array.prototype.filter.call(g.value.children,q=>q===a||q.matches&&q.matches(".q-tab.q-focusable")===!0),b=r.length;if(b===0)return;if(t===36)return K(r[0]),r[0].focus(),!0;if(t===35)return K(r[b-1]),r[b-1].focus(),!0;const h=t===(e.vertical===!0?38:37),v=t===(e.vertical===!0?40:39),u=h===!0?-1:v===!0?1:void 0;if(u!==void 0){const q=G.value===!0?-1:1,Q=r.indexOf(a)+u*q;return Q>=0&&Q<b&&(K(r[Q]),r[Q].focus({preventScroll:!0})),!0}}const We=d(()=>le.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Oe(t){const a=g.value,{get:r,set:b}=We.value;let h=!1,v=r(a);const u=t<v?-1:1;return v+=u*5,v<0?(h=!0,v=0):(u===-1&&v<=t||u===1&&v>=t)&&(h=!0,v=t),b(a,v),U(),h}function Ce(t,a){for(const r in t)if(t[r]!==a[r])return!1;return!0}function Ke(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const r=s.filter(u=>u.routeData!==void 0&&u.routeData.hasRouterLink.value===!0),{hash:b,query:h}=l.$route,v=Object.keys(h).length;for(const u of r){const q=u.routeData.exact.value===!0;if(u.routeData[q===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:Q,query:re,matched:Xe,href:Ze}=u.routeData.resolvedLink.value,ie=Object.keys(re).length;if(q===!0){if(Q!==b||ie!==v||Ce(h,re)===!1)continue;t=u.name.value;break}if(Q!==""&&Q!==b||ie!==0&&Ce(re,h)===!1)continue;const E={matchedLen:Xe.length,queryDiff:v-ie,hrefLen:Ze.length-Q.length};if(E.matchedLen>a.matchedLen){t=u.name.value,a=E;continue}else if(E.matchedLen!==a.matchedLen)continue;if(E.queryDiff<a.queryDiff)t=u.name.value,a=E;else if(E.queryDiff!==a.queryDiff)continue;E.hrefLen>a.hrefLen&&(t=u.name.value,a=E)}t===null&&s.some(u=>u.routeData===void 0&&u.name.value===w.value)===!0||oe({name:t,setCurrent:!0})}function Ue(t){if(P(),S.value!==!0&&M.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&M.value.contains(a)===!0&&(S.value=!0,L.value===!0&&K(a))}}function pe(){B(()=>{S.value=!1},30)}function Z(){Se.avoidRouteWatcher===!1?k(Ke):O()}function Te(){if(A===void 0){const t=J(()=>l.$route.fullPath,Z);A=()=>{t(),A=void 0}}}function He(t){s.push(t),C.value++,X(),t.routeData===void 0||l.$route===void 0?k(()=>{if(L.value===!0){const a=w.value,r=a!=null&&a!==""?s.find(b=>b.name.value===a):null;r&&K(r.rootRef.value)}}):(Te(),t.routeData.hasRouterLink.value===!0&&Z())}function Ge(t){s.splice(s.indexOf(t),1),C.value--,X(),A!==void 0&&t.routeData!==void 0&&(s.every(a=>a.routeData===void 0)===!0&&A(),Z())}const Se={currentModel:w,tabProps:F,hasFocus:S,hasActiveTab:De,registerTab:He,unregisterTab:Ge,verifyRouteModel:Z,updateModel:oe,onKbdNavigate:Ne,avoidRouteWatcher:!1};ut(Ae,Se);function xe(){_!==null&&clearTimeout(_),V(),A!==void 0&&A()}let Be;return ae(xe),he(()=>{Be=A!==void 0,xe()}),st(()=>{Be===!0&&Te(),X()}),()=>f("div",{ref:M,class:Ee.value,role:"tablist",onFocusin:Ue,onFocusout:pe},[f(mt,{onResize:_e}),f("div",{ref:g,class:je.value,onScroll:U},ne(i.default)),f(N,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(c.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ye,onTouchstartPassive:ye,onMouseupPassive:V,onMouseleavePassive:V,onTouchendPassive:V}),f(N,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:we,onTouchstartPassive:we,onMouseupPassive:V,onMouseleavePassive:V,onTouchendPassive:V})])}}),Nt=j({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const n=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>f("div",{class:n.value,role:"toolbar"},ne(i.default))}});const Wt={setup(){return{tab:T("")}}},Ot={class:"q-pa-md"};function Kt(e,i,n,l,o,R){return be(),Le("div",Ot,[y(Nt,{class:"text-white"},{default:z(()=>[y(Pe,{flat:"",label:"LML",class:"text-h5 text-weight-bold"}),y(At),y(Ft,{modelValue:l.tab,"onUpdate:modelValue":i[0]||(i[0]=x=>l.tab=x),shrink:"",stretch:"",class:"flex"},{default:z(()=>[y(te,{name:"tab1",label:"About"}),y(te,{name:"tab2",label:"Services"}),y(te,{name:"tab4",label:"Blog"}),y(te,{name:"tab3",label:"Contact"})]),_:1},8,["modelValue"])]),_:1})])}var Ut=fe(Wt,[["render",Kt]]),Xt=ct(async({app:e,router:i})=>{e.component("BaseButton",qt),e.component("BaseCard",Lt),e.component("BaseNav",Ut)});export{Xt as default};
