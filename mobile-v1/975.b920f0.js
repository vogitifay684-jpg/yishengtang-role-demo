"use strict";(window.mor_modules=window.mor_modules||[]).push([[975],{ATgN:function(k,E,e){e.r(E),e.d(E,{$templates:function(){return t},defaultRender:function(){return s},isComplexComponents:function(){return c}});var a=e("mXGw"),n=e("20uZ"),j=e("P2AI"),A=e("HRO2"),h=e("hmPl"),G=e("aMrw"),Y=e("eMCs"),J=e.n(Y),M=e("vRpg"),Z=e.n(M),L=e("rRSO"),B=e.n(L),m=e("v1RS"),S=e.n(m),N=e("Me5i"),W=e.n(N),K=e("54ue"),V=e.n(K),R=e("aq+9"),T={};T.styleTagTransform=V(),T.setAttributes=S(),T.insert=B().bind(null,"head"),T.domAPI=Z(),T.insertStyleElement=W();var ee=J()(R.Z,T),o=R.Z&&R.Z.locals?R.Z.locals:void 0,t={};function s(i){var d=i.scope,r=i.counts,w=i.busy,C=i.message,u=i.tab,x=i.$id,z=i.key,F=i.groups,v=i.row;return a.createElement("tiga-page",null,a.createElement("tiga-view",{class:"page ui-page book-page"},a.createElement("tiga-view",{class:"hero book-hero"},a.createElement("tiga-text",{class:"eyebrow"},n.Z.getString(d==="self"?"\u6211\u7684\u5BA2\u4EBA":"\u672C\u5E97\u5BA2\u4EBA")+" \xB7 \u7BA1\u5BB6\u7C3F"),a.createElement("tiga-text",{class:"title"},n.Z.getString((r==null?void 0:r.today)+(r==null?void 0:r.revisit))+" \u4F4D\u8981\u7167\u987E"),a.createElement("tiga-text",{class:"subtitle"},"\u4ECA\u5929 "+n.Z.getString(r==null?void 0:r.today)+" \u4F4D \xB7 \u8BE5\u56DE\u8BBF "+n.Z.getString(r==null?void 0:r.revisit)+" \xB7 \u8FD1\u751F\u65E5 "+n.Z.getString(r==null?void 0:r.birthday)+" \xB7 \u65AD\u6863 "+n.Z.getString(r==null?void 0:r.gap))),w?a.createElement("tiga-view",{class:"notice"},"\u6B63\u5728\u8BFB\u53D6\u7BA1\u5BB6\u7C3F\u2026"):C?a.createElement("tiga-view",{class:"notice"},n.Z.getString(C)):!1,a.createElement("tiga-view",{class:"book-tabs"},a.createElement("tiga-button",{class:"book-tab "+(u==="today"?"on":"")+(" 0611ee6024bb42278483ce1ec3e9b7fa"+(typeof index!="undefined"?index:"")+(" comp-id-"+x)),"data-tab":"today"},"\u4ECA\u5929 "+n.Z.getString(r==null?void 0:r.today),n.Z.registEvents([{name:"tap",event:"pickTab",catch:!1}],i,"0611ee6024bb42278483ce1ec3e9b7fa"+(typeof index!="undefined"?index:""))),a.createElement("tiga-button",{class:"book-tab "+(u==="revisit"?"on":"")+(" 8516540018184a31900a203078ee7cf5"+(typeof index!="undefined"?index:"")+(" comp-id-"+x)),"data-tab":"revisit"},"\u8BE5\u56DE\u8BBF "+n.Z.getString(r==null?void 0:r.revisit),n.Z.registEvents([{name:"tap",event:"pickTab",catch:!1}],i,"8516540018184a31900a203078ee7cf5"+(typeof index!="undefined"?index:""))),a.createElement("tiga-button",{class:"book-tab "+(u==="birthday"?"on":"")+(" 433e8e5a44fc4d6fb6b7b5c9b7beae53"+(typeof index!="undefined"?index:"")+(" comp-id-"+x)),"data-tab":"birthday"},"\u8FD1\u751F\u65E5 "+n.Z.getString(r==null?void 0:r.birthday),n.Z.registEvents([{name:"tap",event:"pickTab",catch:!1}],i,"433e8e5a44fc4d6fb6b7b5c9b7beae53"+(typeof index!="undefined"?index:""))),a.createElement("tiga-button",{class:"book-tab "+(u==="gap"?"on":"")+(" f45a86a9695d4e85bd4d34cbfc784464"+(typeof index!="undefined"?index:"")+(" comp-id-"+x)),"data-tab":"gap"},"\u65AD\u6863 "+n.Z.getString(r==null?void 0:r.gap),n.Z.registEvents([{name:"tap",event:"pickTab",catch:!1}],i,"f45a86a9695d4e85bd4d34cbfc784464"+(typeof index!="undefined"?index:"")))),n.Z.getForValue(["today","revisit","birthday","gap"]).map(function(p,te){var U;return a.createElement(n.Z.Block,{key:n.Z.toJsonString(p==null?void 0:p.key,!1)},u===p?a.createElement("tiga-view",{class:"book-list"},!w&&!C&&!(F!=null&&(U=F[p])!==null&&U!==void 0&&U.length)?a.createElement("tiga-view",{class:"empty"},n.Z.getString(p==="today"?"\u4ECA\u5929\u6CA1\u6709\u5F85\u670D\u52A1\u7684\u5BA2\u4EBA":p==="revisit"?"\u6682\u65F6\u6CA1\u6709\u8BE5\u56DE\u8BBF\u7684\u5BA2\u4EBA":p==="birthday"?"\u6682\u65E0\u4F60\u53EF\u67E5\u770B\u7684\u8FD1 7 \u5929\u751F\u65E5\u63D0\u9192":"\u6CA1\u6709\u8D85\u8FC7 60 \u5929\u672A\u5230\u7684\u5BA2\u4EBA")):!1,n.Z.getForValue(F==null?void 0:F[p]).map(function(l,$){return a.createElement("tiga-view",{class:"book-row card",key:n.Z.toJsonString(l==null?void 0:l.customer_id,!1)},a.createElement("tiga-view",{class:"book-row-main"},a.createElement("tiga-text",{class:"book-name"},n.Z.getString(l==null?void 0:l.name)),p!=="birthday"||l!=null&&l.last_at?a.createElement("tiga-text",{class:"muted"},n.Z.getString(l==null?void 0:l.gapLabel)):!1),l!=null&&l.birthdayLabel?a.createElement("tiga-text",{class:"book-badge"},n.Z.getString(l==null?void 0:l.birthdayLabel)):!1)})):!1)}),a.createElement("tiga-view",{class:"book-note"},a.createElement("tiga-text",{class:"muted"},"\u8FD9\u91CC\u53EA\u663E\u793A\u670D\u52A1\u4E8B\u5B9E\u4E0E\u56DE\u8BBF\u8282\u5F8B\uFF1B\u5BA2\u6237\u504F\u597D\u4E0E\u539F\u6587\u4E0D\u5728\u6B64\u5C55\u793A\u3002"))))}var c=!0},x5QQ:function(k,E,e){e.r(E),e.d(E,{default:function(){return ee}});var a=e("6Ydh"),n=e("DajF"),j=e("MM43"),A=e("4kMG"),h=e("8mQb"),G=e("bmIf"),Y=e("tTth"),J=e("8j+p"),M=e("mXGw"),Z=e("20uZ"),L=e("MMlp").ik;function B(){var o,t,s=typeof Symbol=="function"?Symbol:{},c=s.iterator||"@@iterator",i=s.toStringTag||"@@toStringTag";function d(v,p,te,U){var l=p&&p.prototype instanceof w?p:w,$=Object.create(l.prototype);return m($,"_invoke",function(ne,ae,ie){var D,g,b,X=0,re=ie||[],I=!1,O={p:0,n:0,v:o,a:H,f:H.bind(o,4),d:function(f,P){return D=f,g=0,b=o,O.n=P,r}};function H(_,f){for(g=_,b=f,t=0;!I&&X&&!P&&t<re.length;t++){var P,y=re[t],q=O.p,Q=y[2];_>3?(P=Q===f)&&(b=y[(g=y[4])?5:(g=3,3)],y[4]=y[5]=o):y[0]<=q&&((P=_<2&&q<y[1])?(g=0,O.v=f,O.n=y[1]):q<Q&&(P=_<3||y[0]>f||f>Q)&&(y[4]=_,y[5]=f,O.n=Q,g=0))}if(P||_>1)return r;throw I=!0,f}return function(_,f,P){if(X>1)throw TypeError("Generator is already running");for(I&&f===1&&H(f,P),g=f,b=P;(t=g<2?o:b)||!I;){D||(g?(g>1&&(O.n=g<3?-1:b),H(g,b)):O.v=b);try{if(X=2,D){if(g||(_="next"),t=D[_]){if(!(t=t.call(D,b)))throw TypeError("iterator result is not an object");if(!t.done)return t;b=t.value,g<2&&(g=0)}else g===1&&(t=D.return)&&t.call(D),g<2&&(b=TypeError("The iterator does not provide a '"+_+"' method"),g=1);D=o}else if((t=(I=O.n<0)?b:ne.call(ae,O))!==r)break}catch(y){D=o,g=1,b=y}finally{X=1}}return{value:t,done:I}}}(v,te,U),!0),$}var r={};function w(){}function C(){}function u(){}t=Object.getPrototypeOf;var x=[][c]?t(t([][c]())):(m(t={},c,function(){return this}),t),z=u.prototype=w.prototype=Object.create(x);function F(v){return Object.setPrototypeOf?Object.setPrototypeOf(v,u):(v.__proto__=u,m(v,i,"GeneratorFunction")),v.prototype=Object.create(z),v}return C.prototype=u,m(z,"constructor",u),m(u,"constructor",C),C.displayName="GeneratorFunction",m(u,i,"GeneratorFunction"),m(z),m(z,i,"Generator"),m(z,c,function(){return this}),m(z,"toString",function(){return"[object Generator]"}),(B=function(){return{w:d,m:F}})()}function m(o,t,s,c){var i=Object.defineProperty;try{i({},"",{})}catch(d){i=0}m=function(r,w,C,u){function x(z,F){m(r,z,function(v){return this._invoke(z,F,v)})}w?i?i(r,w,{value:C,enumerable:!u,configurable:!u,writable:!u}):r[w]=C:(x("next",0),x("throw",1),x("return",2))},m(o,t,s,c)}var S=e("ATgN"),N=e("2GZr"),W=e("2CFj"),K={counts:{today:0,revisit:0,birthday:0,gap:0},groups:{today:[],revisit:[],birthday:[],gap:[]}};Page({data:Object.assign(Object.assign({busy:!0,message:"",scope:"self"},K),{tab:"today"}),onShow:function(){return this.load()},onHide:function(){this.loadSeq=(this.loadSeq||0)+1,this.setData(Object.assign(Object.assign({},K),{busy:!0,message:""}))},load:function(){return(0,N.__awaiter)(this,void 0,void 0,B().m(function t(){var s,c,i;return B().w(function(d){for(;;)switch(d.p=d.n){case 0:return s=this.loadSeq=(this.loadSeq||0)+1,this.setData(Object.assign(Object.assign({},K),{busy:!0,message:""})),d.p=1,d.n=2,W.ready();case 2:if(s===this.loadSeq){d.n=3;break}return d.a(2);case 3:return d.n=4,W.request("/api/staff/customer-book");case 4:if(c=d.v,s===this.loadSeq){d.n=5;break}return d.a(2);case 5:this.setData({busy:!1,scope:c.scope,counts:c.counts,groups:{today:(c.today||[]).map(this.decorate),revisit:(c.revisit||[]).map(this.decorate),birthday:(c.birthday||[]).map(this.decorate),gap:(c.gap||[]).map(this.decorate)}}),d.n=7;break;case 6:d.p=6,i=d.v,s===this.loadSeq&&this.setData({busy:!1,message:i&&i.message||"\u8BFB\u53D6\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"});case 7:return d.a(2)}},t,this,[[1,6]])}))},decorate:function(t){var s=t.gap_days;return Object.assign(Object.assign({},t),{gapLabel:typeof s=="number"?s+" \u5929\u6CA1\u6765":"\u8FD8\u6CA1\u6709\u5B8C\u6210\u7684\u8BB0\u5F55",birthdayLabel:t.days_to_birthday===0?"\u4ECA\u5929\u751F\u65E5":typeof t.days_to_birthday=="number"?t.days_to_birthday+" \u5929\u540E\u751F\u65E5":""})},pickTab:function(t){var s=t.currentTarget.dataset.tab;if(this.setData({tab:s}),s==="birthday")return this.load()},onPullDownRefresh:function(){return this.load().finally(function(){return L.stopPullDownRefresh()})}});var V=Z.Z.Page(S,Z.Z.mergeConfig(e("v9Xe"),e("J8lZ")));function R(o,t,s){return t=(0,h.Z)(t),(0,j.Z)(o,(0,A.Z)()?Reflect.construct(t,s||[],(0,h.Z)(o).constructor):t.apply(o,s))}var T=function(o){function t(){return(0,a.Z)(this,t),R(this,t,arguments)}return(0,G.Z)(t,o),(0,n.Z)(t,[{key:"render",value:function(){return M.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},M.createElement(V,null))}}])}(M.Component),ee=T},yYJO:function(k,E,e){var a=e("Ba9y"),n=e.n(a),j=e("Ai0b"),A=e.n(j),h=A()(n());h.push([k.id,`tiga-page{min-height:100vh;background:var(--yst-canvas);color:var(--yst-ink);font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}tiga-view,tiga-text,tiga-button{box-sizing:border-box}tiga-button{margin:0;padding:0;line-height:1;background:transparent;border:0}tiga-button::after{border:0}.page{min-height:100vh;padding:1.0625rem 0.875rem 4.6875rem}.hero{background:var(--yst-pine);color:var(--yst-white);border-radius:0.75rem;padding:1.1875rem 1rem;margin-bottom:0.75rem}.eyebrow{font-size:0.71875rem;opacity:.78;letter-spacing:0.09375rem}.title{display:block;font-size:1.4375rem;font-weight:700;margin:0.4375rem 0}.subtitle{font-size:0.8125rem;line-height:1.7;opacity:.9}.section-title{display:block;font-weight:700;font-size:1rem;margin:0.9375rem 0 0.5rem}.card{background:var(--yst-white);border-radius:0.625rem;padding:0.8125rem;margin-bottom:0.5625rem;box-shadow:0 0.25rem 0.75rem rgba(32,53,46,.06)}.muted{color:var(--yst-muted);font-size:0.75rem;line-height:1.6}.primary-btn{height:2.3125rem;padding:0 0.9375rem;border-radius:31.21875rem;background:var(--yst-pine);color:var(--yst-white);font-size:0.8125rem;font-weight:600}.outline-btn{height:2.125rem;padding:0 0.875rem;border:0.03125rem solid var(--yst-line-strong);border-radius:31.21875rem;color:var(--yst-pine);font-size:0.78125rem}.row{display:flex;align-items:center;justify-content:space-between}.badge{display:inline-block;background:var(--yst-soft);color:var(--yst-pine);border-radius:31.21875rem;padding:0.25rem 0.5rem;font-size:0.6875rem}.metric{font-size:1.3125rem;font-weight:700;color:var(--yst-pine)}.bottom-space{height:0.625rem}

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
`,""]),E.Z=h},"aq+9":function(k,E,e){var a=e("Ba9y"),n=e.n(a),j=e("Ai0b"),A=e.n(j),h=A()(n());h.push([k.id,`.book-page{padding-top:0.875rem}
.book-hero{margin-bottom:0.75rem}
.book-tabs{display:flex;gap:0.375rem;margin:0.25rem 0 0.625rem;flex-wrap:wrap}
.book-tab{padding:0.375rem 0.6875rem;border-radius:31.21875rem;background:var(--yst-white);border:0.03125rem solid rgba(22,60,49,.12);font-size:0.75rem;color:var(--yst-muted)}
.book-tab.on{background:var(--yst-pine);color:var(--yst-canvas);border-color:transparent}
.book-row{display:flex;align-items:center;gap:0.5rem;padding:0.8125rem 0.875rem;margin-bottom:0.4375rem}
.book-row-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:0.1875rem}
.book-name{font-family:"YS Serif","Songti SC",serif;font-size:1rem;font-weight:600}
.book-badge{font-size:0.625rem;color:var(--yst-red);border:0.03125rem solid rgba(166,76,56,.32);border-radius:0.1875rem;padding:0.09375rem 0.25rem}
.book-note{margin-top:0.75rem}

.book-tabs .book-tab{min-height:2.75rem;flex:1 1 42%;margin:0;padding:0.5rem 0.5625rem;line-height:1.4;text-align:center;font-size:0.78125rem}.book-row-main .muted{font-size:0.78125rem}.book-hero .title{font-size:1.5625rem}
`,""]),E.Z=h},P2AI:function(k,E,e){var a=e("eMCs"),n=e.n(a),j=e("vRpg"),A=e.n(j),h=e("rRSO"),G=e.n(h),Y=e("v1RS"),J=e.n(Y),M=e("Me5i"),Z=e.n(M),L=e("54ue"),B=e.n(L),m=e("yYJO"),S={};S.styleTagTransform=B(),S.setAttributes=J(),S.insert=G().bind(null,"head"),S.domAPI=A(),S.insertStyleElement=Z();var N=n()(m.Z,S),W=m.Z&&m.Z.locals?m.Z.locals:void 0},v9Xe:function(k){k.exports=JSON.parse('{"pages":["pages/auth/auth","pages/home/home","pages/booking/booking","pages/waitlist/waitlist","pages/rights/rights","pages/profile/profile","pages/member-intake/member-intake","pages/memory/memory","pages/ask/ask","pages/directory/directory","pages/work/work","pages/waitlist-manage/waitlist-manage","pages/service/service","pages/learning/learning","pages/owner/owner","pages/maintenance/maintenance","pages/tasks/tasks","pages/feedback/feedback","pages/recovery/recovery","pages/records/records","pages/management/management","pages/settlement/settlement","pages/daily/daily","pages/feedback-care/feedback-care","pages/reminders/reminders","pages/care/care"],"window":{"backgroundColor":"#F6F1E6","defaultTitle":"\u5F5D\u751F\u5802","titleBarColor":"#F6F1E6"},"style":"v2","lazyCodeLoading":"requiredComponents","tabBar":{"selectedColor":"#163C31","backgroundColor":"#FFFDF8","borderStyle":"white","textColor":"#77846C","items":[{"pagePath":"pages/home/home","name":"\u9996\u9875","icon":"assets/customer-nav/home.png","activeIcon":"assets/customer-nav/home-active.png"},{"pagePath":"pages/booking/booking","name":"\u9884\u7EA6","icon":"assets/customer-nav/calendar.png","activeIcon":"assets/customer-nav/calendar-active.png"},{"pagePath":"pages/rights/rights","name":"\u6743\u76CA","icon":"assets/customer-nav/card.png","activeIcon":"assets/customer-nav/card-active.png"},{"pagePath":"pages/profile/profile","name":"\u6211\u7684","icon":"assets/customer-nav/person.png","activeIcon":"assets/customer-nav/person-active.png"}]},"subPackages":[{"root":"subpackages/staff","name":"staff","pages":["today/today","book/book"]}],"usingComponents":{}}')},J8lZ:function(k){k.exports=JSON.parse('{"usingComponents":{},"backgroundColor":"#F6F1E6","defaultTitle":"\u7BA1\u5BB6\u7C3F","allowsBounceVertical":"YES","pullRefresh":true,"titleBarColor":"#F6F1E6"}')}}]);
