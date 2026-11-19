"use strict";(window.mor_modules=window.mor_modules||[]).push([[983],{leON:function(_,w,e){e.r(w),e.d(w,{$templates:function(){return y},defaultRender:function(){return c},isComplexComponents:function(){return k}});var r=e("mXGw"),a=e("20uZ"),P=e("P2AI"),A=e("RAy4"),v=e("HRO2"),G=e("KbjF"),$=e("hmPl"),q=e("aMrw"),O=e("eMCs"),B=e.n(O),I=e("vRpg"),M=e.n(I),d=e("rRSO"),S=e.n(d),J=e("v1RS"),Y=e.n(J),N=e("Me5i"),ee=e.n(N),te=e("54ue"),re=e.n(te),Z=e("iC23"),o={};o.styleTagTransform=re(),o.setAttributes=Y(),o.insert=S().bind(null,"head"),o.domAPI=M(),o.insertStyleElement=ee();var t=B()(Z.Z,o),l=Z.Z&&Z.Z.locals?Z.Z.locals:void 0,y={};function c(s){var m=s.messages,T=s.item,n=s.index,R=s.ev,x=s.act,C=s.$id,p=s.busy,L=s.error,X=s.question;return r.createElement("tiga-page",null,r.createElement("tiga-view",{class:"customer-page ask-page"},r.createElement("tiga-view",{class:"ask-head"},r.createElement("tiga-text",{class:"customer-kicker"},"\u672C\u5E97\u9879\u76EE\u4E0E\u4E2A\u4EBA\u8BB0\u5F55"),r.createElement("tiga-text",{class:"ask-title"},"\u95EE\u5802\u91CC")),r.createElement("tiga-scroll-view",{class:"ask-list","scroll-y":!0,"scroll-into-view":"bottom","scroll-with-animation":!0},a.Z.getForValue(m).map(function(i,ne){var W,U;return r.createElement("tiga-view",{class:"ask-row "+(i==null?void 0:i.role),key:a.Z.toJsonString(ne,!1)},r.createElement("tiga-view",{class:"ask-bubble "+(i==null?void 0:i.role)},r.createElement("tiga-text",{class:"ask-text"},a.Z.getString(i==null?void 0:i.text)),i!=null&&(W=i.evidence)!==null&&W!==void 0&&W.length?r.createElement("tiga-view",{class:"ask-evidence"},r.createElement("tiga-text",{class:"ask-evidence-label"},"\u4F9D\u636E"),a.Z.getForValue(i==null?void 0:i.evidence).map(function(u,j){return r.createElement("tiga-text",{class:"ask-evidence-item",key:a.Z.toJsonString(u==null?void 0:u.ref,!1)},"\xB7 "+a.Z.getString(u==null?void 0:u.label))})):!1,i!=null&&(U=i.actions)!==null&&U!==void 0&&U.length?r.createElement("tiga-view",{class:"ask-actions"},a.Z.getForValue(i==null?void 0:i.actions).map(function(u,j){return r.createElement("tiga-button",{class:"ask-action"+(" 8489e695d2454713b28c969419ebd8d8"+(typeof j!="undefined"?j:"")+(" comp-id-"+C)),"data-route":a.Z.toJsonString(u==null?void 0:u.route,!0),key:a.Z.toJsonString(u==null?void 0:u.route,!1)},a.Z.getString(u==null?void 0:u.label),a.Z.registEvents([{name:"tap",event:"openAction",catch:!1}],s,"8489e695d2454713b28c969419ebd8d8"+(typeof j!="undefined"?j:"")))})):!1,i!=null&&i.disclaimer?r.createElement("tiga-text",{class:"ask-disclaimer"},a.Z.getString(i==null?void 0:i.disclaimer)):!1))}),p?r.createElement("tiga-view",{class:"ask-row ai"},r.createElement("tiga-view",{class:"ask-bubble ai"},r.createElement("tiga-text",{class:"ask-text"},"\u6B63\u5728\u6838\u5BF9\u8D44\u6599\u2026"))):!1,L?r.createElement("tiga-view",{class:"ask-row ai"},r.createElement("tiga-view",{class:"ask-bubble ai"},r.createElement("tiga-text",{class:"ask-text error"},a.Z.getString(L)))):!1,r.createElement("tiga-view",{id:"bottom",style:a.Z.createStyle("height:0.625rem")})),(m==null?void 0:m.length)<2?r.createElement("tiga-view",{class:"ask-examples"},r.createElement("tiga-text",{class:"customer-meta"},"\u8BD5\u8BD5\uFF1A"),r.createElement("tiga-button",{class:"ask-chip"+(" f51cb6c571024c35a9e40b02112da511"+(typeof n!="undefined"?n:"")+(" comp-id-"+C)),"data-q":"\u672C\u5E97\u6709\u54EA\u4E9B\u9879\u76EE"},"\u6709\u54EA\u4E9B\u9879\u76EE",a.Z.registEvents([{name:"tap",event:"askExample",catch:!1}],s,"f51cb6c571024c35a9e40b02112da511"+(typeof n!="undefined"?n:""))),r.createElement("tiga-button",{class:"ask-chip"+(" b558e78001334f91a3f1527e273e66a9"+(typeof n!="undefined"?n:"")+(" comp-id-"+C)),"data-q":"\u6211\u4E0A\u6B21\u505A\u4E86\u4EC0\u4E48"},"\u4E0A\u6B21\u505A\u4E86\u4EC0\u4E48",a.Z.registEvents([{name:"tap",event:"askExample",catch:!1}],s,"b558e78001334f91a3f1527e273e66a9"+(typeof n!="undefined"?n:""))),r.createElement("tiga-button",{class:"ask-chip"+(" ec5c22c2b27b4661938971e9c42315dc"+(typeof n!="undefined"?n:"")+(" comp-id-"+C)),"data-q":"\u6211\u7684\u63A5\u5F85\u504F\u597D"},"\u6211\u7684\u63A5\u5F85\u504F\u597D",a.Z.registEvents([{name:"tap",event:"askExample",catch:!1}],s,"ec5c22c2b27b4661938971e9c42315dc"+(typeof n!="undefined"?n:"")))):!1,r.createElement("tiga-view",{class:"ask-bar"},r.createElement("tiga-input",{value:a.Z.toJsonString(X,!1),maxlength:"120",placeholder:"\u4F8B\u5982\uFF1A\u672C\u5E97\u9879\u76EE\u548C\u4EF7\u683C","confirm-type":"send",disabled:a.Z.toJsonString(p,!1),class:" 87a321d027c143559edbf429c9a3a25e"+(typeof n!="undefined"?n:"")+(" comp-id-"+C)},a.Z.registEvents([{name:"input",event:"onInput",catch:!1},{name:"confirm",event:"ask",catch:!1}],s,"87a321d027c143559edbf429c9a3a25e"+(typeof n!="undefined"?n:""))),r.createElement("tiga-button",{class:"customer-primary ask-send"+(" 7a2e5ac7612a4cb2900e32edfbff202e"+(typeof n!="undefined"?n:"")+(" comp-id-"+C)),disabled:a.Z.toJsonString(p||!X,!1)},"\u53D1\u9001",a.Z.registEvents([{name:"tap",event:"ask",catch:!1}],s,"7a2e5ac7612a4cb2900e32edfbff202e"+(typeof n!="undefined"?n:""))))))}var k=!0},l1Ti:function(_,w,e){e.r(w),e.d(w,{default:function(){return Z}});var r=e("6Ydh"),a=e("DajF"),P=e("MM43"),A=e("4kMG"),v=e("8mQb"),G=e("bmIf"),$=e("tTth"),q=e("8j+p"),O=e("mXGw"),B=e("20uZ"),I=e("MMlp").ik;function M(){var o,t,l=typeof Symbol=="function"?Symbol:{},y=l.iterator||"@@iterator",c=l.toStringTag||"@@toStringTag";function k(p,L,X,i){var ne=L&&L.prototype instanceof m?L:m,W=Object.create(ne.prototype);return d(W,"_invoke",function(U,u,j){var z,g,f,H=0,ie=j||[],K=!1,D={p:0,n:0,v:o,a:V,f:V.bind(o,4),d:function(b,F){return z=b,g=0,f=o,D.n=F,s}};function V(E,b){for(g=E,f=b,t=0;!K&&H&&!F&&t<ie.length;t++){var F,h=ie[t],ae=D.p,Q=h[2];E>3?(F=Q===b)&&(f=h[(g=h[4])?5:(g=3,3)],h[4]=h[5]=o):h[0]<=ae&&((F=E<2&&ae<h[1])?(g=0,D.v=b,D.n=h[1]):ae<Q&&(F=E<3||h[0]>b||b>Q)&&(h[4]=E,h[5]=b,D.n=Q,g=0))}if(F||E>1)return s;throw K=!0,b}return function(E,b,F){if(H>1)throw TypeError("Generator is already running");for(K&&b===1&&V(b,F),g=b,f=F;(t=g<2?o:f)||!K;){z||(g?(g>1&&(D.n=g<3?-1:f),V(g,f)):D.v=f);try{if(H=2,z){if(g||(E="next"),t=z[E]){if(!(t=t.call(z,f)))throw TypeError("iterator result is not an object");if(!t.done)return t;f=t.value,g<2&&(g=0)}else g===1&&(t=z.return)&&t.call(z),g<2&&(f=TypeError("The iterator does not provide a '"+E+"' method"),g=1);z=o}else if((t=(K=D.n<0)?f:U.call(u,D))!==s)break}catch(h){z=o,g=1,f=h}finally{H=1}}return{value:t,done:K}}}(p,X,i),!0),W}var s={};function m(){}function T(){}function n(){}t=Object.getPrototypeOf;var R=[][y]?t(t([][y]())):(d(t={},y,function(){return this}),t),x=n.prototype=m.prototype=Object.create(R);function C(p){return Object.setPrototypeOf?Object.setPrototypeOf(p,n):(p.__proto__=n,d(p,c,"GeneratorFunction")),p.prototype=Object.create(x),p}return T.prototype=n,d(x,"constructor",n),d(n,"constructor",T),T.displayName="GeneratorFunction",d(n,c,"GeneratorFunction"),d(x),d(x,c,"Generator"),d(x,y,function(){return this}),d(x,"toString",function(){return"[object Generator]"}),(M=function(){return{w:k,m:C}})()}function d(o,t,l,y){var c=Object.defineProperty;try{c({},"",{})}catch(k){c=0}d=function(s,m,T,n){function R(x,C){d(s,x,function(p){return this._invoke(x,C,p)})}m?c?c(s,m,{value:T,enumerable:!n,configurable:!n,writable:!n}):s[m]=T:(R("next",0),R("throw",1),R("return",2))},d(o,t,l,y)}var S=e("leON"),J=e("2GZr"),Y=e("2CFj"),N={role:"ai",text:"\u53EF\u4EE5\u67E5\u672C\u5E97\u5F00\u653E\u7684\u9879\u76EE\u3001\u6807\u4EF7\uFF0C\u4E5F\u80FD\u67E5\u770B\u4F60\u6388\u6743\u7684\u63A5\u5F85\u504F\u597D\u548C\u4E0A\u6B21\u670D\u52A1\u3002",evidence:[],actions:[]};Page({data:{question:"",busy:!1,messages:[N],error:""},onInput:function(t){this.setData({question:t.detail.value})},onHide:function(){this.askSeq=(this.askSeq||0)+1,this.setData({question:"",messages:[N],busy:!1,error:""})},ask:function(){return(0,J.__awaiter)(this,void 0,void 0,M().m(function t(){var l,y,c,k,s;return M().w(function(m){for(;;)switch(m.p=m.n){case 0:if(l=(this.data.question||"").trim(),!(!l||this.data.busy)){m.n=1;break}return m.a(2);case 1:return y=this.askSeq=(this.askSeq||0)+1,c=[{role:"me",text:l,evidence:[],actions:[]}],this.setData({messages:c,question:"",busy:!0,error:""}),m.p=2,m.n=3,Y.request("/api/customer/assistant?q="+encodeURIComponent(l));case 3:if(k=m.v,y===this.askSeq){m.n=4;break}return m.a(2);case 4:this.setData({busy:!1,messages:c.concat([{role:"ai",text:k.conclusion,evidence:k.evidence||[],actions:k.actions||[],disclaimer:k.disclaimer}])}),m.n=6;break;case 5:m.p=5,s=m.v,y===this.askSeq&&this.setData({busy:!1,error:s&&s.message||"\u6CA1\u7B54\u4E0A\u6765\uFF0C\u7A0D\u540E\u518D\u8BD5"});case 6:return m.a(2)}},t,this,[[2,5]])}))},openAction:function(t){var l=t.currentTarget.dataset.route;l&&(l.indexOf("/pages/booking/")===0?I.switchTab({url:l}):I.navigateTo({url:l}))},askExample:function(t){var l=this;this.setData({question:t.currentTarget.dataset.q||""},function(){return l.ask()})}});var ee=B.Z.Page(S,B.Z.mergeConfig(e("v9Xe"),e("hFTs")));function te(o,t,l){return t=(0,v.Z)(t),(0,P.Z)(o,(0,A.Z)()?Reflect.construct(t,l||[],(0,v.Z)(o).constructor):t.apply(o,l))}var re=function(o){function t(){return(0,r.Z)(this,t),te(this,t,arguments)}return(0,G.Z)(t,o),(0,a.Z)(t,[{key:"render",value:function(){return O.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},O.createElement(ee,null))}}])}(O.Component),Z=re},yYJO:function(_,w,e){var r=e("Ba9y"),a=e.n(r),P=e("Ai0b"),A=e.n(P),v=A()(a());v.push([_.id,`tiga-page{min-height:100vh;background:var(--yst-canvas);color:var(--yst-ink);font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}tiga-view,tiga-text,tiga-button{box-sizing:border-box}tiga-button{margin:0;padding:0;line-height:1;background:transparent;border:0}tiga-button::after{border:0}.page{min-height:100vh;padding:1.0625rem 0.875rem 4.6875rem}.hero{background:var(--yst-pine);color:var(--yst-white);border-radius:0.75rem;padding:1.1875rem 1rem;margin-bottom:0.75rem}.eyebrow{font-size:0.71875rem;opacity:.78;letter-spacing:0.09375rem}.title{display:block;font-size:1.4375rem;font-weight:700;margin:0.4375rem 0}.subtitle{font-size:0.8125rem;line-height:1.7;opacity:.9}.section-title{display:block;font-weight:700;font-size:1rem;margin:0.9375rem 0 0.5rem}.card{background:var(--yst-white);border-radius:0.625rem;padding:0.8125rem;margin-bottom:0.5625rem;box-shadow:0 0.25rem 0.75rem rgba(32,53,46,.06)}.muted{color:var(--yst-muted);font-size:0.75rem;line-height:1.6}.primary-btn{height:2.3125rem;padding:0 0.9375rem;border-radius:31.21875rem;background:var(--yst-pine);color:var(--yst-white);font-size:0.8125rem;font-weight:600}.outline-btn{height:2.125rem;padding:0 0.875rem;border:0.03125rem solid var(--yst-line-strong);border-radius:31.21875rem;color:var(--yst-pine);font-size:0.78125rem}.row{display:flex;align-items:center;justify-content:space-between}.badge{display:inline-block;background:var(--yst-soft);color:var(--yst-pine);border-radius:31.21875rem;padding:0.25rem 0.5rem;font-size:0.6875rem}.metric{font-size:1.3125rem;font-weight:700;color:var(--yst-pine)}.bottom-space{height:0.625rem}

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
`,""]),w.Z=v},iC23:function(_,w,e){var r=e("Ba9y"),a=e.n(r),P=e("Ai0b"),A=e.n(P),v=A()(a());v.push([_.id,`.ask-page{display:flex;flex-direction:column;height:100vh;padding-bottom:0}
.ask-head{padding:0.25rem 0.125rem 0.625rem;display:flex;flex-direction:column;gap:0.25rem}
.ask-title{font-family:"YS Serif","Songti SC",serif;font-size:1.75rem;font-weight:600;letter-spacing:0.03125rem}

.ask-list{flex:1;min-height:0;padding:0 0.125rem}
.ask-row{display:flex;margin-bottom:0.75rem}
.ask-row.me{justify-content:flex-end}
.ask-bubble{max-width:17.5rem;padding:0.75rem 0.8125rem;border-radius:0.875rem;display:flex;flex-direction:column;gap:0.375rem}
.ask-bubble.me{background:var(--yst-pine);border-bottom-right-radius:0.25rem}
.ask-bubble.me .ask-text{color:var(--yst-canvas)}
.ask-bubble.ai{background:var(--yst-white);border:0.03125rem solid rgba(22,60,49,.08);border-bottom-left-radius:0.25rem}
.ask-text{font-size:0.875rem;line-height:1.65;color:var(--yst-ink)}

.ask-evidence{border-top:0.03125rem dashed rgba(22,60,49,.16);padding-top:0.375rem;display:flex;flex-direction:column;gap:0.1875rem}
.ask-evidence-label{font-size:0.625rem;letter-spacing:0.09375rem;color:var(--yst-muted)}
.ask-evidence-item{font-size:0.6875rem;color:var(--yst-muted-2);line-height:1.5}

.ask-actions{display:flex;gap:0.375rem;flex-wrap:wrap;margin-top:0.125rem}
.ask-action{min-height:2rem;padding:0 0.6875rem;border-radius:31.21875rem;background:rgba(22,60,49,.06);
  border:0.03125rem solid rgba(22,60,49,.14);color:var(--yst-pine);font-size:0.75rem}
.ask-disclaimer{font-size:0.625rem;color:var(--yst-muted-2);line-height:1.5}

.ask-examples{display:flex;flex-wrap:wrap;gap:0.375rem;align-items:center;padding:0.5rem 0.125rem}
.ask-chip{min-height:1.875rem;padding:0 0.6875rem;border-radius:31.21875rem;border:0.03125rem dashed rgba(22,60,49,.2);
  background:transparent;color:var(--yst-muted);font-size:0.71875rem}

.ask-bar{display:flex;gap:0.375rem;align-items:center;padding:0.5rem 0.125rem calc(0.75rem + env(safe-area-inset-bottom))}
.ask-bar tiga-input{flex:1}
.ask-send{width:auto;min-width:4.375rem;padding:0 0.9375rem;font-size:0.8125rem}
`,""]),w.Z=v},P2AI:function(_,w,e){var r=e("eMCs"),a=e.n(r),P=e("vRpg"),A=e.n(P),v=e("rRSO"),G=e.n(v),$=e("v1RS"),q=e.n($),O=e("Me5i"),B=e.n(O),I=e("54ue"),M=e.n(I),d=e("yYJO"),S={};S.styleTagTransform=M(),S.setAttributes=q(),S.insert=G().bind(null,"head"),S.domAPI=A(),S.insertStyleElement=B();var J=a()(d.Z,S),Y=d.Z&&d.Z.locals?d.Z.locals:void 0},v9Xe:function(_){_.exports=JSON.parse('{"pages":["pages/auth/auth","pages/home/home","pages/booking/booking","pages/waitlist/waitlist","pages/rights/rights","pages/profile/profile","pages/member-intake/member-intake","pages/memory/memory","pages/ask/ask","pages/directory/directory","pages/work/work","pages/waitlist-manage/waitlist-manage","pages/service/service","pages/learning/learning","pages/owner/owner","pages/maintenance/maintenance","pages/tasks/tasks","pages/feedback/feedback","pages/recovery/recovery","pages/records/records","pages/management/management","pages/settlement/settlement","pages/daily/daily","pages/feedback-care/feedback-care","pages/reminders/reminders","pages/care/care"],"window":{"backgroundColor":"#F6F1E6","defaultTitle":"\u5F5D\u751F\u5802","titleBarColor":"#F6F1E6"},"style":"v2","lazyCodeLoading":"requiredComponents","tabBar":{"selectedColor":"#163C31","backgroundColor":"#FFFDF8","borderStyle":"white","textColor":"#77846C","items":[{"pagePath":"pages/home/home","name":"\u9996\u9875","icon":"assets/customer-nav/home.png","activeIcon":"assets/customer-nav/home-active.png"},{"pagePath":"pages/booking/booking","name":"\u9884\u7EA6","icon":"assets/customer-nav/calendar.png","activeIcon":"assets/customer-nav/calendar-active.png"},{"pagePath":"pages/rights/rights","name":"\u6743\u76CA","icon":"assets/customer-nav/card.png","activeIcon":"assets/customer-nav/card-active.png"},{"pagePath":"pages/profile/profile","name":"\u6211\u7684","icon":"assets/customer-nav/person.png","activeIcon":"assets/customer-nav/person-active.png"}]},"subPackages":[{"root":"subpackages/staff","name":"staff","pages":["today/today","book/book"]}],"usingComponents":{}}')},hFTs:function(_){_.exports=JSON.parse('{"usingComponents":{},"backgroundColor":"#F6F1E6","defaultTitle":"\u95EE\u5802\u91CC","titleBarColor":"#F6F1E6"}')}}]);
