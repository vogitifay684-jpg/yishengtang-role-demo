"use strict";(window.mor_modules=window.mor_modules||[]).push([[323],{"+E5L":function(F,x,t){t.r(x),t.d(x,{$templates:function(){return ne},defaultRender:function(){return ae},isComplexComponents:function(){return s}});var n=t("mXGw"),a=t("20uZ"),j=t("P2AI"),M=t("HRO2"),S=t("hmPl"),N=t("aMrw"),X=t("eMCs"),V=t.n(X),T=t("vRpg"),U=t.n(T),I=t("rRSO"),W=t.n(I),z=t("v1RS"),l=t.n(z),H=t("Me5i"),Q=t.n(H),K=t("54ue"),re=t.n(K),B=t("zvrz"),O={};O.styleTagTransform=re(),O.setAttributes=l(),O.insert=W().bind(null,"head"),O.domAPI=U(),O.insertStyleElement=Q();var se=V()(B.Z,O),oe=B.Z&&B.Z.locals?B.Z.locals:void 0,ne={};function ae(r){var i=r.busy,c=r.message,m=r.$id,Z=r.ready,u=r.rights,p=r.entitlements,D=r.item,g=r.rightsTotal,f=r.rightsLimit,h=r.rightsOffset,w=r.services;return n.createElement("tiga-page",null,n.createElement("tiga-view",{class:"customer-page rights-page"},n.createElement("tiga-view",{class:"rights-head"},n.createElement("tiga-text",{class:"rights-kicker"},"\u5F5D\u751F\u5802 \xB7 \u4F1A\u5458"),n.createElement("tiga-text",{class:"rights-title"},"\u6211\u7684\u6743\u76CA")),i?n.createElement("tiga-view",{class:"customer-state"},"\u6B63\u5728\u8BFB\u53D6\u4F1A\u5458\u5361\u4E0E\u670D\u52A1\u8BB0\u5F55\u2026"):c?n.createElement("tiga-view",{class:"customer-state",role:"alert"},n.createElement("tiga-text",null,a.Z.getString(c)),n.createElement("tiga-button",{class:"customer-link"+(" 567ccede72494455834107b78b261705"+(typeof index!="undefined"?index:"")+(" comp-id-"+m))},"\u91CD\u65B0\u8BFB\u53D6",a.Z.registEvents([{name:"tap",event:"load",catch:!1}],r,"567ccede72494455834107b78b261705"+(typeof index!="undefined"?index:"")))):!1,Z?n.createElement(a.Z.Block,null,!(u!=null&&u.length)&&!(p!=null&&p.length)?n.createElement("tiga-view",{class:"rights-empty"},n.createElement("tiga-text",{class:"rights-empty-title"},"\u8FD8\u6CA1\u6709\u4F1A\u5458\u5361"),n.createElement("tiga-text",{class:"rights-empty-sub"},"\u5F00\u901A\u6B21\u5361\u6216\u50A8\u503C\u540E\uFF0C\u4F59\u989D\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002")):!1,n.createElement("tiga-view",{class:"rights-cards"},a.Z.getForValue(p).map(function(e,y){return n.createElement("tiga-view",{class:"rights-card rights-card-dark",key:a.Z.toJsonString(e==null?void 0:e.orderId,!1)},n.createElement("tiga-view",{class:"rights-card-top"},n.createElement("tiga-text",{class:"rights-card-label"},"\u670D\u52A1\u6B21\u6570\u5361"),n.createElement("tiga-text",{class:"rights-card-status"},a.Z.getString(e==null?void 0:e.statusLabel))),e!=null&&e.opened?n.createElement("tiga-view",{class:"rights-card-value"},a.Z.getString(e==null?void 0:e.availableUnits),n.createElement("tiga-text",{class:"rights-card-unit"},"\u6B21")):!1,e!=null&&e.opened?n.createElement("tiga-text",{class:"rights-card-meta"},"\u5269\u4F59 "+a.Z.getString(e==null?void 0:e.remainingUnits)+" \u6B21 \xB7 \u5230\u671F "+a.Z.getString(e==null?void 0:e.expiresLabel)):n.createElement("tiga-text",{class:"rights-card-meta"},"\u5F00\u901A\u540E\u53EF\u67E5\u53EF\u7528\u6B21\u6570\u3002"))}),a.Z.getForValue(u).map(function(e,y){return n.createElement("tiga-view",{class:"rights-card",key:a.Z.toJsonString(e==null?void 0:e.orderId,!1)},n.createElement("tiga-view",{class:"rights-card-top"},n.createElement("tiga-text",{class:"rights-card-label"},"\u50A8\u503C\u5361"),n.createElement("tiga-text",{class:"rights-card-status"},a.Z.getString(e==null?void 0:e.valueStatus))),n.createElement("tiga-view",{class:"rights-card-value"},"\xA5"+a.Z.getString((e==null?void 0:e.availableCents)/100)),n.createElement("tiga-text",{class:"rights-card-meta"},"\u672C\u91D1 \xA5"+a.Z.getString((e==null?void 0:e.principalCents)/100)+" \xB7 \u8D60\u91D1 \xA5"+a.Z.getString((e==null?void 0:e.giftCents)/100)),n.createElement("tiga-text",{class:"rights-card-meta rights-card-quiet"},"\u4F59\u989D\u53D8\u52A8 "+a.Z.getString(e==null?void 0:e.historyCount)+" \u6761 \xB7 \u9000\u6B3E\u8BF7\u8054\u7CFB\u95E8\u5E97"))})),g>f?n.createElement("tiga-view",{class:"rights-pager"},n.createElement("tiga-button",{class:"customer-link"+(" 8ec390b5c89849ccaa93adb66494f929"+(typeof index!="undefined"?index:"")+(" comp-id-"+m)),"data-direction":"-1",disabled:a.Z.toJsonString(h===0,!1)},"\u4E0A\u4E00\u9875",a.Z.registEvents([{name:"tap",event:"moveCards",catch:!1}],r,"8ec390b5c89849ccaa93adb66494f929"+(typeof index!="undefined"?index:""))),n.createElement("tiga-button",{class:"customer-link"+(" d420f018b25f42a49493706a525f3b37"+(typeof index!="undefined"?index:"")+(" comp-id-"+m)),"data-direction":"1",disabled:a.Z.toJsonString(h+f>=g,!1)},"\u4E0B\u4E00\u9875",a.Z.registEvents([{name:"tap",event:"moveCards",catch:!1}],r,"d420f018b25f42a49493706a525f3b37"+(typeof index!="undefined"?index:"")))):!1,n.createElement("tiga-view",{class:"rights-section-head"},n.createElement("tiga-text",{class:"rights-section-title"},"\u670D\u52A1\u8BB0\u5F55"),n.createElement("tiga-text",{class:"rights-section-note"},a.Z.getString(w==null?void 0:w.length)+" \u6761")),w.length?!1:n.createElement("tiga-view",{class:"rights-empty rights-empty-small"},n.createElement("tiga-text",{class:"rights-empty-title"},"\u8FD8\u6CA1\u6709\u670D\u52A1\u8BB0\u5F55"),n.createElement("tiga-text",{class:"rights-empty-sub"},"\u5230\u5E97\u5B8C\u6210\u670D\u52A1\u540E\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u8BC4\u4EF7\u3002")),a.Z.getForValue(w).map(function(e,y){return n.createElement("tiga-view",{class:"rights-record",key:a.Z.toJsonString(e==null?void 0:e.id,!1)},n.createElement("tiga-view",{class:"rights-record-main"},n.createElement("tiga-text",{class:"rights-record-title"},a.Z.getString(e==null?void 0:e.project_name)),n.createElement("tiga-text",{class:"rights-record-meta"},a.Z.getString(e==null?void 0:e.dateLabel))),n.createElement("tiga-view",{class:"rights-record-end"},n.createElement("tiga-text",{class:"rights-record-status"},a.Z.getString(e==null?void 0:e.statusLabel)),e!=null&&e.canFeedback?n.createElement("tiga-button",{class:"customer-link rights-record-link"+(" a3e5beaaa52c48c2a99570de1028ba99"+(typeof y!="undefined"?y:"")+(" comp-id-"+m)),"data-id":a.Z.toJsonString(e==null?void 0:e.id,!0)},a.Z.getString(e!=null&&e.feedback_id?"\u67E5\u770B\u8BC4\u4EF7":"\u8BC4\u4EF7")+" \u203A",a.Z.registEvents([{name:"tap",event:"openFeedback",catch:!1}],r,"a3e5beaaa52c48c2a99570de1028ba99"+(typeof y!="undefined"?y:""))):!1))})):!1))}var s=!0},"m+ez":function(F,x,t){t.r(x),t.d(x,{default:function(){return ae}});var n=t("6Ydh"),a=t("DajF"),j=t("MM43"),M=t("4kMG"),S=t("8mQb"),N=t("bmIf"),X=t("tTth"),V=t("8j+p"),T=t("mXGw"),U=t("jQro"),I=t("20uZ"),W=t("MMlp").ik;function z(){var s,r,i=typeof Symbol=="function"?Symbol:{},c=i.iterator||"@@iterator",m=i.toStringTag||"@@toStringTag";function Z(e,y,$,v){var d=y&&y.prototype instanceof p?y:p,L=Object.create(d.prototype);return l(L,"_invoke",function(G,Y,J){var b,o,_,q=0,le=J||[],R=!1,A={p:0,n:0,v:s,a:ee,f:ee.bind(s,4),d:function(E,P){return b=E,o=0,_=s,A.n=P,u}};function ee(C,E){for(o=C,_=E,r=0;!R&&q&&!P&&r<le.length;r++){var P,k=le[r],ie=A.p,te=k[2];C>3?(P=te===E)&&(_=k[(o=k[4])?5:(o=3,3)],k[4]=k[5]=s):k[0]<=ie&&((P=C<2&&ie<k[1])?(o=0,A.v=E,A.n=k[1]):ie<te&&(P=C<3||k[0]>E||E>te)&&(k[4]=C,k[5]=E,A.n=te,o=0))}if(P||C>1)return u;throw R=!0,E}return function(C,E,P){if(q>1)throw TypeError("Generator is already running");for(R&&E===1&&ee(E,P),o=E,_=P;(r=o<2?s:_)||!R;){b||(o?(o>1&&(A.n=o<3?-1:_),ee(o,_)):A.v=_);try{if(q=2,b){if(o||(C="next"),r=b[C]){if(!(r=r.call(b,_)))throw TypeError("iterator result is not an object");if(!r.done)return r;_=r.value,o<2&&(o=0)}else o===1&&(r=b.return)&&r.call(b),o<2&&(_=TypeError("The iterator does not provide a '"+C+"' method"),o=1);b=s}else if((r=(R=A.n<0)?_:G.call(Y,A))!==u)break}catch(k){b=s,o=1,_=k}finally{q=1}}return{value:r,done:R}}}(e,$,v),!0),L}var u={};function p(){}function D(){}function g(){}r=Object.getPrototypeOf;var f=[][c]?r(r([][c]())):(l(r={},c,function(){return this}),r),h=g.prototype=p.prototype=Object.create(f);function w(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,m,"GeneratorFunction")),e.prototype=Object.create(h),e}return D.prototype=g,l(h,"constructor",g),l(g,"constructor",D),D.displayName="GeneratorFunction",l(g,m,"GeneratorFunction"),l(h),l(h,m,"Generator"),l(h,c,function(){return this}),l(h,"toString",function(){return"[object Generator]"}),(z=function(){return{w:Z,m:w}})()}function l(s,r,i,c){var m=Object.defineProperty;try{m({},"",{})}catch(Z){m=0}l=function(u,p,D,g){function f(h,w){l(u,h,function(e){return this._invoke(h,w,e)})}p?m?m(u,p,{value:D,enumerable:!g,configurable:!g,writable:!g}):u[p]=D:(f("next",0),f("throw",1),f("return",2))},l(s,r,i,c)}var H=t("+E5L"),Q=t("2GZr"),K=t("2CFj"),re={completed:"\u5DF2\u5B8C\u6210",active:"\u670D\u52A1\u4E2D",stopped:"\u5DF2\u6682\u505C",cancelled:"\u5DF2\u53D6\u6D88"},B=function(r){var i=Date.parse(r);return Number.isFinite(i)?new Date(i+288e5).toISOString().slice(0,10):r||"\u957F\u671F\u6709\u6548"},O={rights:[],entitlements:[],services:[],rightsOffset:0,rightsLimit:25,rightsTotal:0,ready:!1,busy:!1,message:""};Page({data:Object.assign({},O),onShow:function(){return this.load()},onHide:function(){this.sequence=(this.sequence||0)+1,this.setData(O)},load:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,i,c,m;return(0,Q.__awaiter)(this,void 0,void 0,z().m(function Z(){var u,p,D,g,f,h,w,e,y,$;return z().w(function(v){for(;;)switch(v.p=v.n){case 0:return u=Number.isSafeInteger(r)&&r>=0?r:0,p=this.sequence=(this.sequence||0)+1,this.setData(Object.assign(Object.assign({},O),{busy:!0})),v.p=1,v.n=2,K.ready();case 2:return v.n=3,Promise.all([K.assets(u),K.portal()]);case 3:if(D=v.v,g=(0,U.Z)(D,2),f=g[0],h=g[1],p===this.sequence){v.n=4;break}return v.a(2);case 4:w=(f.rows||[]).map(function(d){var L,G,Y,J,b,o;return Object.assign(Object.assign({},d),{valueStatus:d.closed?"\u5DF2\u7ED3\u6E05":d.frozen?"\u6682\u505C\u4F7F\u7528":"\u6709\u6548",principalCents:(Y=(L=d.principalCents)!==null&&L!==void 0?L:(G=d.balance)===null||G===void 0?void 0:G.principalCents)!==null&&Y!==void 0?Y:0,giftCents:(o=(J=d.giftCents)!==null&&J!==void 0?J:(b=d.balance)===null||b===void 0?void 0:b.giftCents)!==null&&o!==void 0?o:0,historyCount:(d.history||[]).length})}),e=(f.entitlements||[]).map(function(d){return Object.assign(Object.assign({},d),{statusLabel:d.opened?d.frozen?"\u6682\u505C\u4F7F\u7528":d.expired?"\u5DF2\u8FC7\u671F":"\u5DF2\u5F00\u901A":"\u5C1A\u672A\u5F00\u901A",expiresLabel:B(d.expiresAt)})}),y=(h.services||[]).map(function(d){return Object.assign(Object.assign({},d),{statusLabel:re[d.status]||"\u5F85\u786E\u8BA4",dateLabel:d.started_at?B(d.started_at):"",canFeedback:["completed","stopped"].includes(d.status)})}),this.setData({rights:w,entitlements:e,services:y,rightsOffset:u,rightsLimit:((i=f.page)===null||i===void 0?void 0:i.limit)||25,rightsTotal:Math.max(((c=f.page)===null||c===void 0?void 0:c.total)||0,((m=f.entitlementPage)===null||m===void 0?void 0:m.total)||0),ready:!0,busy:!1}),v.n=6;break;case 5:v.p=5,$=v.v,p===this.sequence&&this.setData({message:$.message,busy:!1});case 6:return v.a(2)}},Z,this,[[1,5]])}))},moveCards:function(r){if(!this.data.busy){var i=this.data.rightsOffset+this.data.rightsLimit*Number(r.currentTarget.dataset.direction);if(i>=0&&i<this.data.rightsTotal)return this.load(i)}},openFeedback:function(r){var i=r.currentTarget.dataset.id,c=this.data.services.find(function(m){return m.id===i&&m.canFeedback});c&&W.navigateTo({url:"/pages/feedback/feedback?serviceId="+encodeURIComponent(i)+"&feedbackId="+encodeURIComponent(c.feedback_id||"")+"&mode="+(c.feedback_id?"full":"rating")})}});var se=I.Z.Page(H,I.Z.mergeConfig(t("v9Xe"),t("VzcJ")));function oe(s,r,i){return r=(0,S.Z)(r),(0,j.Z)(s,(0,M.Z)()?Reflect.construct(r,i||[],(0,S.Z)(s).constructor):r.apply(s,i))}var ne=function(s){function r(){return(0,n.Z)(this,r),oe(this,r,arguments)}return(0,N.Z)(r,s),(0,a.Z)(r,[{key:"render",value:function(){return T.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},T.createElement(se,null))}}])}(T.Component),ae=ne},yYJO:function(F,x,t){var n=t("Ba9y"),a=t.n(n),j=t("Ai0b"),M=t.n(j),S=M()(a());S.push([F.id,`tiga-page{min-height:100vh;background:var(--yst-canvas);color:var(--yst-ink);font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}tiga-view,tiga-text,tiga-button{box-sizing:border-box}tiga-button{margin:0;padding:0;line-height:1;background:transparent;border:0}tiga-button::after{border:0}.page{min-height:100vh;padding:1.0625rem 0.875rem 4.6875rem}.hero{background:var(--yst-pine);color:var(--yst-white);border-radius:0.75rem;padding:1.1875rem 1rem;margin-bottom:0.75rem}.eyebrow{font-size:0.71875rem;opacity:.78;letter-spacing:0.09375rem}.title{display:block;font-size:1.4375rem;font-weight:700;margin:0.4375rem 0}.subtitle{font-size:0.8125rem;line-height:1.7;opacity:.9}.section-title{display:block;font-weight:700;font-size:1rem;margin:0.9375rem 0 0.5rem}.card{background:var(--yst-white);border-radius:0.625rem;padding:0.8125rem;margin-bottom:0.5625rem;box-shadow:0 0.25rem 0.75rem rgba(32,53,46,.06)}.muted{color:var(--yst-muted);font-size:0.75rem;line-height:1.6}.primary-btn{height:2.3125rem;padding:0 0.9375rem;border-radius:31.21875rem;background:var(--yst-pine);color:var(--yst-white);font-size:0.8125rem;font-weight:600}.outline-btn{height:2.125rem;padding:0 0.875rem;border:0.03125rem solid var(--yst-line-strong);border-radius:31.21875rem;color:var(--yst-pine);font-size:0.78125rem}.row{display:flex;align-items:center;justify-content:space-between}.badge{display:inline-block;background:var(--yst-soft);color:var(--yst-pine);border-radius:31.21875rem;padding:0.25rem 0.5rem;font-size:0.6875rem}.metric{font-size:1.3125rem;font-weight:700;color:var(--yst-pine)}.bottom-space{height:0.625rem}

tiga-button{min-height:2.5rem;line-height:1.4;display:flex;align-items:center;justify-content:center;padding:0.5625rem 0.75rem;margin-top:0.5rem}button[disabled]{opacity:.5}tiga-input,tiga-textarea,.picker{box-sizing:border-box;width:100%;min-height:2.6875rem;padding:0.625rem;border:0.03125rem solid var(--yst-line);border-radius:0.375rem;background:var(--yst-paper-2);margin:0.5rem 0;font-size:0.875rem}tiga-textarea{height:5.625rem}.card>text{display:block}.row{gap:0.5rem;flex-wrap:wrap}.notice{background:var(--yst-amber-bg);color:var(--yst-copper-deep);padding:0.75rem;border-radius:0.4375rem;margin:0.5625rem 0}.error{color:var(--yst-red)}.section-title{line-height:1.5}
.customer-page{min-height:100vh;padding:0.6875rem 0.9375rem 1.125rem;background:var(--yst-canvas);color:var(--yst-ink);box-sizing:border-box}
.customer-line{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;min-width:0}
.customer-grow{flex:1;min-width:0;overflow-wrap:anywhere}
.customer-heading{font-size:1.09375rem;font-weight:750;line-height:1.35}
.customer-item-title{display:block;font-size:0.90625rem;font-weight:700;line-height:1.42;overflow-wrap:anywhere}
.customer-meta{font-size:0.78125rem;color:var(--yst-muted);line-height:1.5}
.customer-kicker{display:block;color:var(--yst-muted);font-size:0.6875rem;line-height:1.55}
.customer-status{flex:none;font-size:0.6875rem;font-weight:600;color:var(--yst-pine);border-radius:0.25rem;background:var(--yst-soft);padding:0.15625rem 0.34375rem}
.customer-surface{background:var(--yst-white);border:0.03125rem solid var(--yst-line);border-radius:0.6875rem}
.customer-state{margin:0.375rem 0;padding:0.625rem 0.6875rem;background:var(--yst-soft);border-radius:0.5rem;color:var(--yst-ink);font-size:0.84375rem;line-height:1.5}
.customer-primary,.customer-link{min-height:2.75rem;margin:0;line-height:1.25;font-weight:650}
.customer-primary{padding:0.375rem 0.75rem;border-radius:0.5rem;background:var(--yst-pine);color:var(--yst-white);font-size:0.875rem}
.customer-link{padding:0.1875rem 0.0625rem;color:var(--yst-pine);font-size:0.8125rem;text-align:left}
.customer-primary:active,.customer-link:active{opacity:.78}
.customer-page tiga-button{max-width:none;margin-left:0;margin-right:0}
.customer-page .customer-primary,.customer-page .customer-link{width:auto}

.customer-visit-theme{--yst-copper:var(--yst-copper-deep)}
tiga-page{
  background:#F6F1E6;color:#12211C;
  font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Noto Sans SC",sans-serif;
  font-size:0.875rem;line-height:1.6;
}
.page{padding:1.25rem 1rem 5.25rem}
.serif,.title,.section-title,.metric,.amount,.code{font-family:"YS Serif","Songti SC","STSong",serif}
.eyebrow{font-size:0.625rem;letter-spacing:0.15625rem;opacity:.72;text-transform:uppercase}
.title{display:block;font-size:2rem;line-height:1.22;font-weight:600;letter-spacing:0.03125rem;margin:0.4375rem 0}
.subtitle{font-size:0.75rem;line-height:1.75;opacity:.74}
.section-title{display:block;font-size:1.125rem;line-height:1.35;font-weight:600;letter-spacing:0.01563rem;margin:1.25rem 0 0.5625rem}
.muted{color:#77846C;font-size:0.75rem;line-height:1.6}
.card{
  background:#FFFDF8;border:0.03125rem solid rgba(22,60,49,.08);border-radius:1rem;
  padding:1rem;margin-bottom:0.625rem;box-shadow:none;
}
.hero{
  position:relative;background:#163C31;color:#F6F1E6;border-radius:1.125rem;
  padding:1.5rem 1.125rem;margin-bottom:0.875rem;overflow:hidden;
}
tiga-button{min-height:2.75rem;line-height:1.3;font-size:0.875rem}
.primary-btn{
  height:3.125rem;padding:0 1.25rem;border-radius:31.21875rem;background:#163C31;color:#F6F1E6;
  font-size:0.875rem;font-weight:600;letter-spacing:0.0625rem;
}
.outline-btn{
  height:2.75rem;padding:0 1rem;border:0.03125rem solid rgba(22,60,49,.25);border-radius:31.21875rem;
  color:#163C31;background:transparent;font-size:0.8125rem;letter-spacing:0.01563rem;
}
.primary-btn:active,.outline-btn:active{opacity:.82}
button[disabled]{opacity:.42}
tiga-input,tiga-textarea,.picker{
  min-height:2.875rem;padding:0.75rem;border:0.03125rem solid rgba(22,60,49,.14);border-radius:0.625rem;
  background:#FFFDF8;font-size:0.875rem;color:#12211C;
}
tiga-textarea{height:6.25rem}
.badge{
  display:inline-block;background:rgba(119,132,108,.14);color:#163C31;
  border-radius:0.25rem;padding:0.1875rem 0.4375rem;font-size:0.6875rem;letter-spacing:0.00938rem;
}
.notice{
  background:rgba(179,147,89,.10);border:0.03125rem solid rgba(179,147,89,.28);color:var(--yst-copper-deep);
  padding:0.75rem;border-radius:0.625rem;margin:0.5625rem 0;font-size:0.75rem;line-height:1.65;
}
.error{color:#A64C38;font-size:0.75rem}
.metric{font-size:1.625rem;font-weight:600;color:#163C31;letter-spacing:0.01563rem}
.kicker{font-size:0.625rem;letter-spacing:0.125rem;color:#77846C}
.divider{height:0.03125rem;background:rgba(22,60,49,.08);margin:0.75rem 0}
.chip{
  display:inline-flex;align-items:center;height:1.875rem;padding:0 0.75rem;margin:0 0.375rem 0.375rem 0;
  border-radius:31.21875rem;border:0.03125rem solid rgba(22,60,49,.14);background:#FFFDF8;
  font-size:0.75rem;color:var(--yst-muted);
}
.chip.on{background:#163C31;color:#F6F1E6;border-color:transparent}
.tagline{display:flex;flex-wrap:wrap;gap:0.3125rem}
.hairline{height:0.03125rem;background:rgba(22,60,49,.08)}
.empty{padding:2rem 0;text-align:center;color:#77846C;font-size:0.8125rem}
.customer-page{
  
  
  
}
.customer-page{padding:1rem 1rem 1.25rem}
.customer-heading{font-family:"YS Serif","Songti SC",serif;font-size:1.5rem;font-weight:600;line-height:1.25}
.customer-item-title{font-size:0.9375rem;font-weight:600;line-height:1.4}
.customer-meta{font-size:0.75rem;color:var(--yst-muted);line-height:1.55}
.customer-kicker{font-size:0.625rem;letter-spacing:0.09375rem;color:var(--yst-muted)}
.customer-surface{border-radius:0.875rem;border:0.03125rem solid var(--yst-line);background:var(--yst-white)}
.customer-primary{min-height:2.875rem;border-radius:31.21875rem;background:var(--yst-pine);color:#FFFDF8;font-size:0.875rem;font-weight:600;letter-spacing:0.03125rem}
.customer-link{font-size:0.78125rem;color:var(--yst-pine)}
.customer-status{border-radius:0.25rem;background:var(--yst-soft);color:var(--yst-pine);font-size:0.6875rem;font-weight:600;padding:0.15625rem 0.375rem}
.customer-state{border-radius:0.625rem;background:var(--yst-soft);color:var(--yst-ink);font-size:0.8125rem;padding:0.625rem 0.75rem}
.page{padding:1.25rem 1rem 5.625rem;background:#F6F1E6}
.page .card{background:#FFFDF8;border:0.03125rem solid rgba(22,60,49,.08);border-radius:0.875rem;padding:0.875rem;box-shadow:none}
.page .section-title{font-family:"YS Serif","Songti SC",serif;font-size:1.0625rem;letter-spacing:0.0125rem}
.page .title{font-family:"YS Serif","Songti SC",serif;font-size:1.75rem;letter-spacing:0.03125rem}
.page .metric{font-family:"YS Serif","Songti SC",serif;font-size:1.4375rem;color:#163C31}
.page .primary-btn{height:3rem;border-radius:31.21875rem;font-size:0.875rem;letter-spacing:0.04688rem;background:#163C31;color:#F6F1E6}
.page .outline-btn{height:2.625rem;border-radius:31.21875rem;border-color:rgba(22,60,49,.24);color:#163C31;background:transparent;font-size:0.78125rem}
.page .picker{min-height:2.75rem;border-radius:0.5rem;background:#FBF8F1;border:0.03125rem solid rgba(22,60,49,.10);color:#163C31}
.page .notice{border-radius:0.625rem}
.page .badge{border-radius:0.1875rem}
.page .step{border-top:0.03125rem solid rgba(22,60,49,.06);padding:0.75rem 0}
tiga-page{
  --yst-pine:#163C31;--yst-pine-2:#234E3C;--yst-ink:#12211C;
  --yst-muted:#77846C;--yst-muted-2:#9AA294;
  --yst-canvas:#F6F1E6;--yst-white:#FFFDF8;--yst-paper-2:#FBF8F1;
  --yst-line:rgba(22,60,49,.12);--yst-line-soft:rgba(22,60,49,.08);--yst-line-strong:rgba(22,60,49,.24);
  --yst-soft:rgba(119,132,108,.14);
  --yst-copper:#B39359;--yst-copper-deep:#8A6A2E;--yst-amber-bg:#F7ECD6;
  --yst-red:#A64C38;--yst-red-bg:#F6E4E1;
  background:var(--yst-canvas);color:var(--yst-ink);
}
.page .segments{display:flex;gap:0.25rem;background:var(--yst-soft);border-radius:31.21875rem;padding:0.1875rem;margin:0.5625rem 0}
.page .segments tiga-button{flex:1;min-height:2.25rem;border-radius:31.21875rem;background:transparent;color:var(--yst-muted);font-size:0.75rem;margin:0;padding:0 0.3125rem}
.page .segments .selected{background:var(--yst-white);color:var(--yst-pine);font-weight:600;box-shadow:0 0.03125rem 0.09375rem rgba(18,33,28,.08)}
.page .hero{border-radius:0.875rem;padding:1.0625rem 0.9375rem}
.page .hero .title{font-size:1.625rem}
.page .notice{background:var(--yst-amber-bg);color:var(--yst-copper-deep);border-radius:0.625rem;padding:0.6875rem 0.75rem;line-height:1.6;font-size:0.75rem}
.ui-page{padding:0.875rem 1rem calc(1.5rem + env(safe-area-inset-bottom));overflow-wrap:anywhere}
.ui-page .hero{padding:0.375rem 0 0.75rem;background:transparent;border:0;border-radius:0;color:var(--yst-ink);margin:0}
.ui-page .hero .title{font-size:1.625rem;line-height:1.25;margin:0.25rem 0 0.4375rem;color:var(--yst-pine)}
.ui-page .hero .eyebrow{display:block;color:var(--yst-copper-deep);opacity:1;letter-spacing:0.09375rem;font-size:0.6875rem}
.ui-page .hero .subtitle,.ui-page .hero .sub{display:block;color:var(--yst-muted);font-size:0.78125rem;line-height:1.6;opacity:1}
.ui-page .card{padding:0.8125rem;border-radius:0.75rem;box-shadow:none;border:0.03125rem solid var(--yst-line-soft)}
.ui-page .card .section-title{margin:0 0 0.4375rem;font-size:1rem;line-height:1.4}
.ui-page .primary-btn,.ui-page .outline-btn{height:auto;min-height:2.75rem;padding:0.5625rem 0.8125rem;margin-top:0.5rem;white-space:normal;line-height:1.45;flex-shrink:0}
.ui-link{min-height:2.75rem;padding:0.4375rem 0;margin:0;background:transparent;font-size:0.8125rem;color:var(--yst-pine);line-height:1.45;text-align:left;justify-content:flex-start}
.ui-section-head{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;min-width:0}
.ui-section-head>.section-title{margin:0.625rem 0;font-size:1rem;flex:1;min-width:0}
.ui-section-head>.muted,.ui-section-head>.ui-tag{flex-shrink:0}
.ui-tag{display:inline-block;padding:0.15625rem 0.375rem;border-radius:0.25rem;background:var(--yst-soft);color:var(--yst-pine);font-size:0.6875rem;line-height:1.5}
.ui-actions{display:flex;flex-wrap:wrap;gap:0.375rem;align-items:stretch}
.ui-actions>button{flex:1;min-width:5.625rem}
.ui-menu-row{display:flex;width:100%;gap:0.625rem;align-items:center;justify-content:space-between;text-align:left;min-height:3.125rem;margin:0;padding:0.75rem 0;line-height:1.5;color:var(--yst-ink);font-size:0.875rem;border-radius:0}
.ui-menu-row>view{flex:1;min-width:0}.ui-menu-row .muted{display:block;font-size:0.75rem;margin-top:0.125rem}
.ui-menu-row+.ui-menu-row{border-top:0.03125rem solid var(--yst-line-soft)}
.ui-empty{display:block;padding:0.9375rem 0;color:var(--yst-muted);font-size:0.8125rem;line-height:1.6}
.ui-reference{display:block;font-size:0.6875rem;line-height:1.6;color:var(--yst-muted);word-break:break-all;margin:0.4375rem 0}
.ui-logout{margin:0.875rem auto 0;color:var(--yst-muted)}
.work-heading{display:flex;justify-content:space-between;gap:0.5625rem;align-items:flex-start;margin-bottom:0.75rem}
.work-heading .title{font-size:1.625rem;margin:0.25rem 0}.work-heading .muted{display:block}
.work-counts{display:flex;border-top:0.03125rem solid var(--yst-line);border-bottom:0.03125rem solid var(--yst-line);padding:0.6875rem 0;margin:0.625rem 0 0.8125rem;gap:0.375rem}
.work-counts>view{flex:1;min-width:0;font-size:0.71875rem;color:var(--yst-muted)}
.work-number{display:block;font-size:1.5625rem;font-family:"YS Serif","Songti SC",serif;color:var(--yst-pine);font-variant-numeric:tabular-nums;line-height:1.2;margin-bottom:0.25rem}
.work-list{background:var(--yst-white);border:0.03125rem solid var(--yst-line);border-radius:0.75rem;padding:0 0.75rem;margin:0.6875rem 0}
.work-item{padding:0.75rem 0;border-top:0.03125rem solid var(--yst-line-soft)}
.work-item-title{font-size:0.90625rem;font-weight:600;line-height:1.45;display:block}
.work-subject{font-size:0.84375rem;display:block;margin:0.375rem 0 0.1875rem;line-height:1.5}
.work-primary-action{border-left:0.125rem solid var(--yst-copper);padding:0.25rem 0 0.25rem 0.75rem;margin:0.875rem 0}
.work-primary-action .muted{display:block;margin-top:0.25rem}
.task-group{margin-top:0.75rem}.task-row .section-title{font-family:inherit;font-size:0.9375rem;margin-top:0.5625rem!important}.task-result{display:block;margin-top:0.5rem;padding:0.5625rem;background:var(--yst-soft);border-radius:0.375rem;font-size:0.78125rem}
.management-page .segments{border-radius:0.5625rem;display:flex;flex-wrap:wrap;gap:0.1875rem;padding:0.1875rem}
.management-page .segments tiga-button{flex:1 1 28%;min-height:2.5rem;font-size:0.78125rem;border-radius:0.4375rem;white-space:normal}
.management-overview{margin:0.75rem 0 0.3125rem}.management-overview .section-title{margin:0 0 0.125rem}.management-overview .muted{display:block}
.management-page .actions{margin:0.5625rem 0 0.8125rem;display:flex;flex-wrap:wrap;gap:0.375rem}
.management-page .actions tiga-button{flex:1 1 40%;min-width:5.625rem;margin:0;min-height:2.75rem;padding:0.5625rem;border-radius:0.5rem;font-size:0.78125rem}
.management-page .card>view>text{display:block;margin:0.25rem 0;line-height:1.6;font-size:0.84375rem}
.management-page .editor{border-color:var(--yst-copper)}
.ui-page tiga-button:active{opacity:.78}.ui-page button[disabled]{opacity:.5}
@media (prefers-reduced-motion:no-preference){.ui-page tiga-button{transition:background-color .15s ease,opacity .15s ease}.ui-page .segments .selected{transition:background-color .18s ease}}
tiga-page{--yst-muted:#606E5F;--yst-muted-2:#667461;--yst-copper:#8A6A2E}
.ui-page .muted,.customer-page .customer-meta{font-size:0.78125rem}
.customer-page .customer-link{min-height:2.75rem}
.ui-page .ui-link,.ui-page .ui-menu-row{max-width:100%;overflow-wrap:anywhere}
@media (prefers-reduced-motion:reduce){tiga-button,tiga-view{transition:none!important;animation:none!important}}
`,""]),x.Z=S},zvrz:function(F,x,t){var n=t("Ba9y"),a=t.n(n),j=t("Ai0b"),M=t.n(j),S=M()(a());S.push([F.id,`.rights-page{padding:0.875rem 1rem 1.875rem}
.rights-head{display:flex;flex-direction:column;gap:0.25rem;margin-top:0.25rem}
.rights-kicker{font-size:0.59375rem;letter-spacing:0.125rem;color:var(--yst-muted)}
.rights-title{font-family:"YS Serif","Songti SC",serif;font-size:1.9375rem;line-height:1.2;font-weight:600;letter-spacing:0.03125rem}

.rights-cards{display:flex;flex-direction:column;gap:0.5625rem;margin-top:0.875rem}
.rights-card{background:var(--yst-white);border:0.03125rem solid var(--yst-line);border-radius:0.875rem;padding:0.875rem;display:flex;flex-direction:column;gap:0.25rem}
.rights-card-dark{background:var(--yst-pine);border-color:transparent;color:#F6F1E6}
.rights-card-top{display:flex;align-items:center;justify-content:space-between}
.rights-card-label{font-size:0.625rem;letter-spacing:0.09375rem;color:var(--yst-muted)}
.rights-card-dark .rights-card-label{color:rgba(246,241,230,.7)}
.rights-card-status{font-size:0.625rem;color:var(--yst-pine);background:var(--yst-soft);border-radius:0.1875rem;padding:0.125rem 0.3125rem}
.rights-card-dark .rights-card-status{color:#F6F1E6;background:rgba(246,241,230,.14)}
.rights-card-value{font-family:"YS Serif","Songti SC",serif;font-size:2rem;line-height:1.15;font-weight:600;letter-spacing:0.03125rem;margin-top:0.1875rem}
.rights-card-unit{font-size:0.75rem;margin-left:0.1875rem;letter-spacing:0;opacity:.7}
.rights-card-meta{font-size:0.6875rem;color:var(--yst-muted);line-height:1.6}
.rights-card-dark .rights-card-meta{color:rgba(246,241,230,.68)}
.rights-card-quiet{color:var(--yst-muted-2)}

.rights-empty{background:var(--yst-white);border:0.03125rem dashed var(--yst-line-strong);border-radius:0.75rem;padding:1.125rem 0.875rem;display:flex;flex-direction:column;gap:0.25rem;margin-top:0.75rem}
.rights-empty-small{padding:0.875rem}
.rights-empty-title{font-family:"YS Serif","Songti SC",serif;font-size:0.9375rem;font-weight:600}
.rights-empty-sub{font-size:0.6875rem;color:var(--yst-muted)}

.rights-pager{display:flex;justify-content:flex-end;gap:0.75rem;margin-top:0.375rem}

.rights-section-head{display:flex;align-items:baseline;justify-content:space-between;margin-top:1.125rem}
.rights-section-title{font-family:"YS Serif","Songti SC",serif;font-size:1.0625rem;font-weight:600;letter-spacing:0.01563rem}
.rights-section-note{font-size:0.625rem;color:var(--yst-muted-2);letter-spacing:0.03125rem}

.rights-record{display:flex;align-items:center;gap:0.5rem;padding:0.75rem 0;border-top:0.03125rem solid var(--yst-line-soft)}
.rights-record-main{flex:1;min-width:0}
.rights-record-title{display:block;font-size:0.84375rem;font-weight:600;line-height:1.4}
.rights-record-meta{display:block;font-size:0.65625rem;color:var(--yst-muted);margin-top:0.125rem}
.rights-record-end{display:flex;flex-direction:column;align-items:flex-end;gap:0.1875rem;flex:none}
.rights-record-status{font-size:0.625rem;color:var(--yst-muted-2)}
.rights-record-link{font-size:0.6875rem;padding:0}
`,""]),x.Z=S},P2AI:function(F,x,t){var n=t("eMCs"),a=t.n(n),j=t("vRpg"),M=t.n(j),S=t("rRSO"),N=t.n(S),X=t("v1RS"),V=t.n(X),T=t("Me5i"),U=t.n(T),I=t("54ue"),W=t.n(I),z=t("yYJO"),l={};l.styleTagTransform=W(),l.setAttributes=V(),l.insert=N().bind(null,"head"),l.domAPI=M(),l.insertStyleElement=U();var H=a()(z.Z,l),Q=z.Z&&z.Z.locals?z.Z.locals:void 0},v9Xe:function(F){F.exports=JSON.parse('{"pages":["pages/auth/auth","pages/home/home","pages/booking/booking","pages/waitlist/waitlist","pages/rights/rights","pages/profile/profile","pages/member-intake/member-intake","pages/memory/memory","pages/ask/ask","pages/directory/directory","pages/work/work","pages/waitlist-manage/waitlist-manage","pages/service/service","pages/learning/learning","pages/owner/owner","pages/maintenance/maintenance","pages/tasks/tasks","pages/feedback/feedback","pages/recovery/recovery","pages/records/records","pages/management/management","pages/settlement/settlement","pages/daily/daily","pages/feedback-care/feedback-care","pages/reminders/reminders","pages/care/care"],"window":{"backgroundColor":"#F6F1E6","defaultTitle":"\u5F5D\u751F\u5802","titleBarColor":"#F6F1E6"},"style":"v2","lazyCodeLoading":"requiredComponents","tabBar":{"selectedColor":"#163C31","backgroundColor":"#FFFDF8","borderStyle":"white","textColor":"#77846C","items":[{"pagePath":"pages/home/home","name":"\u9996\u9875","icon":"assets/customer-nav/home.png","activeIcon":"assets/customer-nav/home-active.png"},{"pagePath":"pages/booking/booking","name":"\u9884\u7EA6","icon":"assets/customer-nav/calendar.png","activeIcon":"assets/customer-nav/calendar-active.png"},{"pagePath":"pages/rights/rights","name":"\u6743\u76CA","icon":"assets/customer-nav/card.png","activeIcon":"assets/customer-nav/card-active.png"},{"pagePath":"pages/profile/profile","name":"\u6211\u7684","icon":"assets/customer-nav/person.png","activeIcon":"assets/customer-nav/person-active.png"}]},"subPackages":[{"root":"subpackages/staff","name":"staff","pages":["today/today","book/book"]}],"usingComponents":{}}')},VzcJ:function(F){F.exports=JSON.parse('{"backgroundColor":"#F6F1E6","titleBarColor":"#F6F1E6"}')}}]);
