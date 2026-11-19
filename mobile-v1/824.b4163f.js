(window.mor_modules=window.mor_modules||[]).push([[824],{"9fQv":function(E){var y=288e5;function e(s){var w=Date.parse(s);return Number.isFinite(w)?new Date(w+y).toISOString():""}function r(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return new Date(Date.now()+y+s*864e5).toISOString().slice(0,10)}function a(s){return e(s).slice(11,16)||"\u65F6\u95F4\u5F85\u786E\u8BA4"}function x(s){var w=e(s);return w?Number(w.slice(5,7))+"\u6708"+Number(w.slice(8,10))+"\u65E5 "+w.slice(11,16):"\u65F6\u95F4\u5F85\u786E\u8BA4"}function C(s){return e(s).slice(0,10)}E.exports={beijingDay:r,beijingClock:a,beijingVisitLabel:x,beijingDateOf:C}},tved:function(E,y,e){"use strict";e.r(y),e.d(y,{$templates:function(){return H},defaultRender:function(){return J},isComplexComponents:function(){return i}});var r=e("R/MK"),a=e("uUrt"),x=e("+xY1"),C=e("6LZN"),s=e("aoKY"),w=e("g30g"),R=e("He40"),W=e.n(R),A=e("0+gW"),U=e.n(A),M=e("E4nK"),T=e.n(M),l=e("SXvV"),j=e.n(l),Q=e("Hl0A"),Z=e.n(Q),G=e("uCbO"),K=e.n(G),I=e("5lF7"),z={};z.styleTagTransform=K(),z.setAttributes=j(),z.insert=T().bind(null,"head"),z.domAPI=U(),z.insertStyleElement=Z();var q=W()(I.Z,z),ee=I.Z&&I.Z.locals?I.Z.locals:void 0,H={};function J(t){var o=t.busy,u=t.message,m=t.$id,g=t.total,k=t.lastLabel,f=t.rows,p=t.item,c=t.limit,F=t.offset;return r.createElement("tiga-page",null,r.createElement("tiga-view",{class:"customer-page care-page"},r.createElement("tiga-view",{class:"care-head"},r.createElement("tiga-text",{class:"care-kicker"},"\u5F5D\u751F\u5802 \xB7 \u517B\u62A4\u6863\u6848"),r.createElement("tiga-text",{class:"care-title"},"\u4F60\u5728\u8FD9\u5BB6\u5E97\u7684\u8BB0\u5F55"),r.createElement("tiga-text",{class:"care-sub"},"\u672C\u5E97\u670D\u52A1\u6309\u5B9E\u9645\u72B6\u6001\u8BB0\u5F55\uFF0C\u6362\u5E97\u4E0D\u5408\u5E76\u3002")),o?r.createElement("tiga-view",{class:"customer-state"},"\u6B63\u5728\u8BFB\u53D6\u2026"):u?r.createElement("tiga-view",{class:"customer-state",role:"alert"},r.createElement("tiga-text",null,a.Z.getString(u)),r.createElement("tiga-button",{class:"customer-link"+(" e3b2d70dfc7a4991b0e4af8602b5f45b"+(typeof index!="undefined"?index:"")+(" comp-id-"+m))},"\u91CD\u65B0\u8BFB\u53D6",a.Z.registEvents([{name:"tap",event:"load",catch:!1}],t,"e3b2d70dfc7a4991b0e4af8602b5f45b"+(typeof index!="undefined"?index:"")))):r.createElement(a.Z.Block,null,r.createElement("tiga-view",{class:"care-metrics"},r.createElement("tiga-view",{class:"care-metric"},r.createElement("tiga-text",{class:"care-metric-label"},"\u670D\u52A1\u8BB0\u5F55"),r.createElement("tiga-text",{class:"care-metric-value"},a.Z.getString(g===null?"\u2014":g))),r.createElement("tiga-view",{class:"care-metric"},r.createElement("tiga-text",{class:"care-metric-label"},"\u6700\u8FD1\u4E00\u6B21"),r.createElement("tiga-text",{class:"care-metric-value care-metric-small"},a.Z.getString(k||"\u6682\u65E0")))),r.createElement("tiga-view",{class:"care-links"},r.createElement("tiga-view",{class:"care-link"+(" 30ff52598dde46e9aff7a0595e39f4c8"+(typeof index!="undefined"?index:"")+(" comp-id-"+m))},r.createElement("tiga-text",{class:"care-link-title"},"\u5802\u91CC\u8BB0\u5F97\u4F60"),r.createElement("tiga-text",{class:"care-link-sub"},"\u4E60\u60EF\u4E0E\u8981\u907F\u5F00\u7684\u4E8B"),a.Z.registEvents([{name:"tap",event:"openMemory",catch:!1}],t,"30ff52598dde46e9aff7a0595e39f4c8"+(typeof index!="undefined"?index:""))),r.createElement("tiga-view",{class:"care-link"+(" fdffec84a50f4a65bd72df68a9f0b74b"+(typeof index!="undefined"?index:"")+(" comp-id-"+m))},r.createElement("tiga-text",{class:"care-link-title"},"\u95EE\u5802\u91CC"),r.createElement("tiga-text",{class:"care-link-sub"},"\u6309\u8BB0\u5F55\u56DE\u7B54"),a.Z.registEvents([{name:"tap",event:"openAsk",catch:!1}],t,"fdffec84a50f4a65bd72df68a9f0b74b"+(typeof index!="undefined"?index:"")))),r.createElement("tiga-view",{class:"care-list-head"},r.createElement("tiga-text",{class:"care-list-title"},"\u670D\u52A1\u8BB0\u5F55"),r.createElement("tiga-text",{class:"care-list-note"},a.Z.getString(g===null?"\u5F85\u6838\u5BF9":g)+" \u6761")),f.length?!1:r.createElement("tiga-view",{class:"care-empty"},r.createElement("tiga-text",{class:"care-empty-title"},"\u5F53\u524D\u9875\u6682\u65E0\u670D\u52A1\u8BB0\u5F55"),r.createElement("tiga-text",{class:"care-empty-sub"},"\u670D\u52A1\u5F00\u59CB\u540E\u4F1A\u7559\u4E0B\u8BB0\u5F55\uFF1B\u53EA\u6709\u5DF2\u7ED3\u675F\u7684\u670D\u52A1\u53EF\u4EE5\u8BC4\u4EF7\u3002")),a.Z.getForValue(f).map(function(n,b){return r.createElement("tiga-view",{class:"care-row",key:a.Z.toJsonString(n==null?void 0:n.id,!1)},r.createElement("tiga-view",{class:"care-row-main"},r.createElement("tiga-text",{class:"care-row-title"},a.Z.getString((n==null?void 0:n.project_name)||"\u672C\u6B21\u670D\u52A1")),r.createElement("tiga-text",{class:"care-row-meta"},a.Z.getString(n==null?void 0:n.dateLabel)+" \xB7 "+a.Z.getString((n==null?void 0:n.technician_name)||"\u95E8\u5E97\u5B89\u6392"))),r.createElement("tiga-view",{class:"care-row-end"},r.createElement("tiga-text",{class:"care-row-status"},a.Z.getString(n==null?void 0:n.statusLabel)),n!=null&&n.canFeedback?r.createElement("tiga-button",{class:"customer-link care-row-link"+(" aae337aaf0be4f78b967f0e5d38d1000"+(typeof b!="undefined"?b:"")+(" comp-id-"+m)),"data-id":a.Z.toJsonString(n==null?void 0:n.id,!0)},"\u611F\u53D7 \u203A",a.Z.registEvents([{name:"tap",event:"openFeedback",catch:!1}],t,"aae337aaf0be4f78b967f0e5d38d1000"+(typeof b!="undefined"?b:""))):!1))}),g>c?r.createElement("tiga-view",{class:"customer-line"},r.createElement("tiga-button",{class:"customer-link"+(" 017c8252f4d64c52aaecb9486808cf6c"+(typeof index!="undefined"?index:"")+(" comp-id-"+m)),"data-delta":"-25",disabled:a.Z.toJsonString(o||F===0,!1)},"\u4E0A\u4E00\u9875",a.Z.registEvents([{name:"tap",event:"page",catch:!1}],t,"017c8252f4d64c52aaecb9486808cf6c"+(typeof index!="undefined"?index:""))),r.createElement("tiga-button",{class:"customer-link"+(" 592054019250448998c2cbabcb7c4589"+(typeof index!="undefined"?index:"")+(" comp-id-"+m)),"data-delta":"25",disabled:a.Z.toJsonString(o||F+c>=g,!1)},"\u4E0B\u4E00\u9875",a.Z.registEvents([{name:"tap",event:"page",catch:!1}],t,"592054019250448998c2cbabcb7c4589"+(typeof index!="undefined"?index:"")))):!1)))}var i=!0},gReZ:function(E,y,e){"use strict";e.r(y),e.d(y,{default:function(){return J}});var r=e("Vs+U"),a=e("zzqG"),x=e("oAVc"),C=e("LmR/"),s=e("JQ/t"),w=e("kvQH"),R=e("gXix"),W=e("OO2q"),A=e("R/MK"),U=e("uUrt"),M=e("Rk0X").ik;function T(){var i,t,o=typeof Symbol=="function"?Symbol:{},u=o.iterator||"@@iterator",m=o.toStringTag||"@@toStringTag";function g(D,X,ne,ae){var ie=X&&X.prototype instanceof f?X:f,te=Object.create(ie.prototype);return l(te,"_invoke",function(oe,se,le){var B,d,h,Y=0,re=le||[],L=!1,P={p:0,n:0,v:i,a:N,f:N.bind(i,4),d:function(v,O){return B=v,d=0,h=i,P.n=O,k}};function N(S,v){for(d=S,h=v,t=0;!L&&Y&&!O&&t<re.length;t++){var O,_=re[t],$=P.p,V=_[2];S>3?(O=V===v)&&(h=_[(d=_[4])?5:(d=3,3)],_[4]=_[5]=i):_[0]<=$&&((O=S<2&&$<_[1])?(d=0,P.v=v,P.n=_[1]):$<V&&(O=S<3||_[0]>v||v>V)&&(_[4]=S,_[5]=v,P.n=V,d=0))}if(O||S>1)return k;throw L=!0,v}return function(S,v,O){if(Y>1)throw TypeError("Generator is already running");for(L&&v===1&&N(v,O),d=v,h=O;(t=d<2?i:h)||!L;){B||(d?(d>1&&(P.n=d<3?-1:h),N(d,h)):P.v=h);try{if(Y=2,B){if(d||(S="next"),t=B[S]){if(!(t=t.call(B,h)))throw TypeError("iterator result is not an object");if(!t.done)return t;h=t.value,d<2&&(d=0)}else d===1&&(t=B.return)&&t.call(B),d<2&&(h=TypeError("The iterator does not provide a '"+S+"' method"),d=1);B=i}else if((t=(L=P.n<0)?h:oe.call(se,P))!==k)break}catch(_){B=i,d=1,h=_}finally{Y=1}}return{value:t,done:L}}}(D,ne,ae),!0),te}var k={};function f(){}function p(){}function c(){}t=Object.getPrototypeOf;var F=[][u]?t(t([][u]())):(l(t={},u,function(){return this}),t),n=c.prototype=f.prototype=Object.create(F);function b(D){return Object.setPrototypeOf?Object.setPrototypeOf(D,c):(D.__proto__=c,l(D,m,"GeneratorFunction")),D.prototype=Object.create(n),D}return p.prototype=c,l(n,"constructor",c),l(c,"constructor",p),p.displayName="GeneratorFunction",l(c,m,"GeneratorFunction"),l(n),l(n,m,"Generator"),l(n,u,function(){return this}),l(n,"toString",function(){return"[object Generator]"}),(T=function(){return{w:g,m:b}})()}function l(i,t,o,u){var m=Object.defineProperty;try{m({},"",{})}catch(g){m=0}l=function(k,f,p,c){function F(n,b){l(k,n,function(D){return this._invoke(n,b,D)})}f?m?m(k,f,{value:p,enumerable:!c,configurable:!c,writable:!c}):k[f]=p:(F("next",0),F("throw",1),F("return",2))},l(i,t,o,u)}var j=e("tved"),Q=e("rA3G"),Z=e("L1ly"),G=e("9fQv"),K=G.beijingVisitLabel,I={completed:"\u5DF2\u5B8C\u6210",active:"\u670D\u52A1\u4E2D",stopped:"\u5DF2\u4E2D\u6B62",cancelled:"\u5DF2\u53D6\u6D88"},z={busy:!1,message:"",rows:[],total:null,lastLabel:"",offset:0,limit:25};Page({data:Object.assign(Object.assign({},z),{busy:!0}),onShow:function(){return this.load(0)},onHide:function(){this.sequence=(this.sequence||0)+1,this.setData(Object.assign({},z))},onUnload:function(){this.sequence=(this.sequence||0)+1},load:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,o,u,m,g;return(0,Q.__awaiter)(this,void 0,void 0,T().m(function k(){var f,p,c,F;return T().w(function(n){for(;;)switch(n.p=n.n){case 0:return(!Number.isSafeInteger(t)||t<0)&&(t=0),f=this.sequence=(this.sequence||0)+1,this.setData(Object.assign(Object.assign({},z),{busy:!0,offset:t})),n.p=1,n.n=2,Z.ready();case 2:return n.n=3,Z.portal(0,t);case 3:if(p=n.v,f===this.sequence){n.n=4;break}return n.a(2);case 4:c=(p.services||[]).map(function(b){return Object.assign(Object.assign({},b),{statusLabel:I[b.status]||"\u5F85\u6838\u5BF9",dateLabel:K(b.finished_at||b.started_at),canFeedback:["completed","stopped"].includes(b.status)})}),this.setData({busy:!1,rows:c,total:(u=(o=p.servicePage)===null||o===void 0?void 0:o.total)!==null&&u!==void 0?u:null,limit:((m=p.servicePage)===null||m===void 0?void 0:m.limit)||25,lastLabel:!((g=p.lastVisit)===null||g===void 0)&&g.finished_at?K(p.lastVisit.finished_at):""}),n.n=6;break;case 5:n.p=5,F=n.v,f===this.sequence&&this.setData({busy:!1,message:F.message||"\u8BFB\u53D6\u5931\u8D25"});case 6:return n.a(2)}},k,this,[[1,5]])}))},page:function(t){if(!this.data.busy){var o=this.data.offset+Number(t.currentTarget.dataset.delta);if(o>=0&&this.data.total!==null&&o<this.data.total)return this.load(o)}},openMemory:function(){M.navigateTo({url:"/pages/memory/memory"})},openAsk:function(){M.navigateTo({url:"/pages/ask/ask"})},openFeedback:function(t){var o=this.data.rows.find(function(u){return u.id===t.currentTarget.dataset.id&&u.canFeedback});o&&M.navigateTo({url:"/pages/feedback/feedback?serviceId="+encodeURIComponent(o.id)+"&feedbackId="+encodeURIComponent(o.feedback_id||"")+"&mode=full"})}});var q=U.Z.Page(j,U.Z.mergeConfig(e("nNev"),e("bktz")));function ee(i,t,o){return t=(0,s.Z)(t),(0,x.Z)(i,(0,C.Z)()?Reflect.construct(t,o||[],(0,s.Z)(i).constructor):t.apply(i,o))}var H=function(i){function t(){return(0,r.Z)(this,t),ee(this,t,arguments)}return(0,w.Z)(t,i),(0,a.Z)(t,[{key:"render",value:function(){return A.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},A.createElement(q,null))}}])}(A.Component),J=H},"6/aM":function(E,y,e){"use strict";var r=e("eVqf"),a=e.n(r),x=e("B/WF"),C=e.n(x),s=C()(a());s.push([E.id,`tiga-page{min-height:100vh;background:var(--yst-canvas);color:var(--yst-ink);font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}tiga-view,tiga-text,tiga-button{box-sizing:border-box}tiga-button{margin:0;padding:0;line-height:1;background:transparent;border:0}tiga-button::after{border:0}.page{min-height:100vh;padding:1.0625rem 0.875rem 4.6875rem}.hero{background:var(--yst-pine);color:var(--yst-white);border-radius:0.75rem;padding:1.1875rem 1rem;margin-bottom:0.75rem}.eyebrow{font-size:0.71875rem;opacity:.78;letter-spacing:0.09375rem}.title{display:block;font-size:1.4375rem;font-weight:700;margin:0.4375rem 0}.subtitle{font-size:0.8125rem;line-height:1.7;opacity:.9}.section-title{display:block;font-weight:700;font-size:1rem;margin:0.9375rem 0 0.5rem}.card{background:var(--yst-white);border-radius:0.625rem;padding:0.8125rem;margin-bottom:0.5625rem;box-shadow:0 0.25rem 0.75rem rgba(32,53,46,.06)}.muted{color:var(--yst-muted);font-size:0.75rem;line-height:1.6}.primary-btn{height:2.3125rem;padding:0 0.9375rem;border-radius:31.21875rem;background:var(--yst-pine);color:var(--yst-white);font-size:0.8125rem;font-weight:600}.outline-btn{height:2.125rem;padding:0 0.875rem;border:0.03125rem solid var(--yst-line-strong);border-radius:31.21875rem;color:var(--yst-pine);font-size:0.78125rem}.row{display:flex;align-items:center;justify-content:space-between}.badge{display:inline-block;background:var(--yst-soft);color:var(--yst-pine);border-radius:31.21875rem;padding:0.25rem 0.5rem;font-size:0.6875rem}.metric{font-size:1.3125rem;font-weight:700;color:var(--yst-pine)}.bottom-space{height:0.625rem}

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
`,""]),y.Z=s},"5lF7":function(E,y,e){"use strict";var r=e("eVqf"),a=e.n(r),x=e("B/WF"),C=e.n(x),s=C()(a());s.push([E.id,`.care-page{padding:0.875rem 1rem 1.875rem}
.care-head{display:flex;flex-direction:column;gap:0.25rem;margin-top:0.25rem}
.care-kicker{font-size:0.59375rem;letter-spacing:0.125rem;color:var(--yst-muted)}
.care-title{font-family:"YS Serif","Songti SC",serif;font-size:1.75rem;line-height:1.22;font-weight:600;letter-spacing:0.03125rem}
.care-sub{font-size:0.6875rem;color:var(--yst-muted)}

.care-metrics{display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-top:0.875rem}
.care-metric{background:var(--yst-white);border:0.03125rem solid var(--yst-line);border-radius:0.75rem;padding:0.8125rem;display:flex;flex-direction:column;gap:0.25rem}
.care-metric-label{font-size:0.625rem;letter-spacing:0.09375rem;color:var(--yst-muted)}
.care-metric-value{font-family:"YS Serif","Songti SC",serif;font-size:1.75rem;line-height:1.1;font-weight:600;color:var(--yst-pine)}
.care-metric-small{font-size:1.0625rem}

.care-links{display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-top:0.5625rem}
.care-link{background:var(--yst-pine);border-radius:0.75rem;padding:0.75rem 0.6875rem;display:flex;flex-direction:column;gap:0.1875rem;min-height:4.6875rem}
.care-link:last-child{background:var(--yst-white);border:0.03125rem solid var(--yst-line)}
.care-link-title{font-family:"YS Serif","Songti SC",serif;font-size:0.9375rem;font-weight:600;color:#F6F1E6}
.care-link:last-child .care-link-title{color:var(--yst-ink)}
.care-link-sub{font-size:0.625rem;color:rgba(246,241,230,.68)}
.care-link:last-child .care-link-sub{color:var(--yst-muted)}

.care-list-head{display:flex;align-items:baseline;justify-content:space-between;margin-top:1.125rem}
.care-list-title{font-family:"YS Serif","Songti SC",serif;font-size:1.0625rem;font-weight:600}
.care-list-note{font-size:0.625rem;color:var(--yst-muted-2)}

.care-empty{background:var(--yst-white);border:0.03125rem dashed var(--yst-line-strong);border-radius:0.75rem;padding:1.0625rem 0.875rem;display:flex;flex-direction:column;gap:0.25rem;margin-top:0.375rem}
.care-empty-title{font-family:"YS Serif","Songti SC",serif;font-size:0.9375rem;font-weight:600}
.care-empty-sub{font-size:0.6875rem;color:var(--yst-muted)}

.care-row{display:flex;align-items:center;gap:0.5rem;padding:0.75rem 0;border-top:0.03125rem solid var(--yst-line-soft)}
.care-row-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:0.125rem}
.care-row-title{font-size:0.84375rem;font-weight:600}
.care-row-meta{font-size:0.65625rem;color:var(--yst-muted)}
.care-row-end{display:flex;flex-direction:column;align-items:flex-end;gap:0.1875rem;flex:none}
.care-row-status{font-size:0.625rem;color:var(--yst-muted-2)}
.care-row-link{font-size:0.6875rem}
`,""]),y.Z=s},"+xY1":function(E,y,e){"use strict";var r=e("He40"),a=e.n(r),x=e("0+gW"),C=e.n(x),s=e("E4nK"),w=e.n(s),R=e("SXvV"),W=e.n(R),A=e("Hl0A"),U=e.n(A),M=e("uCbO"),T=e.n(M),l=e("6/aM"),j={};j.styleTagTransform=T(),j.setAttributes=W(),j.insert=w().bind(null,"head"),j.domAPI=C(),j.insertStyleElement=U();var Q=a()(l.Z,j),Z=l.Z&&l.Z.locals?l.Z.locals:void 0},nNev:function(E){"use strict";E.exports=JSON.parse('{"pages":["pages/auth/auth","pages/home/home","pages/booking/booking","pages/waitlist/waitlist","pages/rights/rights","pages/profile/profile","pages/member-intake/member-intake","pages/memory/memory","pages/ask/ask","pages/directory/directory","pages/work/work","pages/waitlist-manage/waitlist-manage","pages/service/service","pages/learning/learning","pages/owner/owner","pages/maintenance/maintenance","pages/tasks/tasks","pages/feedback/feedback","pages/recovery/recovery","pages/records/records","pages/management/management","pages/settlement/settlement","pages/daily/daily","pages/feedback-care/feedback-care","pages/reminders/reminders","pages/care/care"],"window":{"backgroundColor":"#F6F1E6","defaultTitle":"\u5F5D\u751F\u5802","titleBarColor":"#F6F1E6"},"style":"v2","lazyCodeLoading":"requiredComponents","tabBar":{"selectedColor":"#163C31","backgroundColor":"#FFFDF8","borderStyle":"white","textColor":"#77846C","items":[{"pagePath":"pages/home/home","name":"\u9996\u9875","icon":"assets/customer-nav/home.png","activeIcon":"assets/customer-nav/home-active.png"},{"pagePath":"pages/booking/booking","name":"\u9884\u7EA6","icon":"assets/customer-nav/calendar.png","activeIcon":"assets/customer-nav/calendar-active.png"},{"pagePath":"pages/rights/rights","name":"\u6743\u76CA","icon":"assets/customer-nav/card.png","activeIcon":"assets/customer-nav/card-active.png"},{"pagePath":"pages/profile/profile","name":"\u6211\u7684","icon":"assets/customer-nav/person.png","activeIcon":"assets/customer-nav/person-active.png"}]},"subPackages":[{"root":"subpackages/staff","name":"staff","pages":["today/today","book/book"]}],"usingComponents":{}}')},bktz:function(E){"use strict";E.exports=JSON.parse('{"backgroundColor":"#F6F1E6","defaultTitle":"\u517B\u62A4\u6863\u6848","titleBarColor":"#F6F1E6"}')}}]);
