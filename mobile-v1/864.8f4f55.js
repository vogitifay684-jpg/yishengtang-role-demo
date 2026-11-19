"use strict";(window.mor_modules=window.mor_modules||[]).push([[864],{iRt4:function(w,D,e){e.r(D),e.d(D,{$templates:function(){return s},defaultRender:function(){return a},isComplexComponents:function(){return l}});var t=e("mXGw"),n=e("20uZ"),O=e("P2AI"),P=e("z0S6"),F=e("HRO2"),Y=e("hmPl"),$=e("aMrw"),N=e("eMCs"),Z=e.n(N),R=e("vRpg"),T=e.n(R),x=e("rRSO"),u=e.n(x),C=e("v1RS"),U=e.n(C),I=e("Me5i"),J=e.n(I),G=e("54ue"),V=e.n(G),L=e("WuL6"),j={};j.styleTagTransform=V(),j.setAttributes=U(),j.insert=u().bind(null,"head"),j.domAPI=T(),j.insertStyleElement=J();var ee=Z()(L.Z,j),te=L.Z&&L.Z.locals?L.Z.locals:void 0,s={};function a(r){var m=r.busy,f=r.enabled,o=r.message,i=r.$id,p=r.preferences,b=r.adding,W=r.item,S=r.editingId,M=r.draft,h=r.error,y=r.lastVisit;return t.createElement("tiga-page",null,t.createElement("tiga-view",{class:"customer-page memory-page"},t.createElement("tiga-view",{class:"memory-head"},t.createElement("tiga-text",{class:"customer-kicker"},"MEMORY \xB7 \u672C\u5E97\u63A5\u5F85\u504F\u597D"),t.createElement("tiga-text",{class:"memory-title"},"\u5802\u91CC\u8BB0\u5F97\u4F60"),t.createElement("tiga-text",{class:"customer-meta"},"\u4F60\u586B\u5199\u7684\u504F\u597D\u548C\u95E8\u5E97\u8BB0\u4E0B\u7684\u63A5\u5F85\u4E8B\u9879\uFF0C\u90FD\u53EF\u4EE5\u5728\u8FD9\u91CC\u66F4\u6B63\u3002")),m&&!f?t.createElement("tiga-view",{class:"customer-state"},"\u6B63\u5728\u8BFB\u53D6\u63A5\u5F85\u504F\u597D\u2026"):!1,o?t.createElement("tiga-view",{class:"customer-state",role:"alert"},t.createElement("tiga-text",null,n.Z.getString(o)),t.createElement("tiga-button",{class:"customer-link"+(" 9da3f5b06dc844b6a998420a5e69a8fe"+(typeof index!="undefined"?index:"")+(" comp-id-"+i)),disabled:n.Z.toJsonString(m,!1)},"\u91CD\u65B0\u8BFB\u53D6",n.Z.registEvents([{name:"tap",event:"load",catch:!1}],r,"9da3f5b06dc844b6a998420a5e69a8fe"+(typeof index!="undefined"?index:"")))):!1,!m&&!f&&!o?t.createElement("tiga-view",{class:"customer-surface memory-auth"},t.createElement("tiga-text",{class:"memory-auth-title"},"\u9700\u8981\u5F00\u542F\u300C\u57FA\u7840\u670D\u52A1\u300D\u6388\u6743"),t.createElement("tiga-text",{class:"customer-meta"},"\u5F00\u542F\u540E\u624D\u80FD\u67E5\u770B\u548C\u66F4\u6B63\u95E8\u5E97\u4E3A\u4F60\u8BB0\u4E0B\u7684\u504F\u597D\uFF1B\u5173\u95ED\u540E\u8FD9\u4E9B\u5185\u5BB9\u4E0D\u4F1A\u7528\u4E8E\u63A5\u5F85\u3002"),t.createElement("tiga-button",{class:"customer-link"+(" 6a01ba87f7ce4f318139c3474fcb50d2"+(typeof index!="undefined"?index:"")+(" comp-id-"+i))},"\u53BB\u6388\u6743\u7BA1\u7406 \u203A",n.Z.registEvents([{name:"tap",event:"openDirectory",catch:!1}],r,"6a01ba87f7ce4f318139c3474fcb50d2"+(typeof index!="undefined"?index:"")))):!1,f?t.createElement(n.Z.Block,null,t.createElement("tiga-view",{class:"memory-section"},t.createElement("tiga-view",{class:"memory-section-head"},t.createElement("tiga-text",{class:"memory-section-title"},"\u4E60\u60EF"),t.createElement("tiga-text",{class:"customer-kicker"},"PREFERENCES")),!(p!=null&&p.length)&&!b?t.createElement("tiga-view",{class:"customer-meta memory-empty"},"\u8FD8\u6CA1\u6709\u8BB0\u5F55\u3002\u544A\u8BC9\u5E97\u91CC\u4E00\u6B21\uFF0C\u4E0B\u6B21\u5C31\u4E0D\u7528\u518D\u8BF4\u3002"):!1,n.Z.getForValue(p).map(function(d,g){return t.createElement("tiga-view",{class:"memory-item customer-surface",key:n.Z.toJsonString(d==null?void 0:d.id,!1)},S!==(d==null?void 0:d.id)?t.createElement(n.Z.Block,null,t.createElement("tiga-text",{class:"memory-value"},n.Z.getString(d==null?void 0:d.value)),t.createElement("tiga-view",{class:"memory-meta-row"},t.createElement("tiga-text",{class:"customer-meta"},n.Z.getString(d==null?void 0:d.source)),d!=null&&d.at?t.createElement("tiga-text",{class:"customer-meta"},"\xB7 "+n.Z.getString(d==null?void 0:d.at)):!1,d!=null&&d.visitNote?t.createElement("tiga-text",{class:"memory-flag"},"\u7559\u7ED9\u4E0B\u6B21\u63A5\u5F85"):!1),t.createElement("tiga-view",{class:"memory-actions"},t.createElement("tiga-button",{class:"customer-link"+(" fae5a73d21034819babf7e86ab9dac37"+(typeof g!="undefined"?g:"")+(" comp-id-"+i)),"data-id":n.Z.toJsonString(d==null?void 0:d.id,!0),disabled:n.Z.toJsonString(m,!1)},"\u66F4\u6B63",n.Z.registEvents([{name:"tap",event:"startEdit",catch:!1}],r,"fae5a73d21034819babf7e86ab9dac37"+(typeof g!="undefined"?g:""))))):t.createElement(n.Z.Block,null,t.createElement("tiga-textarea",{value:n.Z.toJsonString(M,!1),maxlength:"120",disabled:n.Z.toJsonString(m,!1),"auto-height":!0,class:" 5b65fc0082f34d5b905484f5b7cc4a51"+(typeof g!="undefined"?g:"")+(" comp-id-"+i)},n.Z.registEvents([{name:"input",event:"onInput",catch:!1}],r,"5b65fc0082f34d5b905484f5b7cc4a51"+(typeof g!="undefined"?g:""))),h?t.createElement("tiga-text",{class:"error"},n.Z.getString(h)):!1,t.createElement("tiga-view",{class:"memory-actions"},t.createElement("tiga-button",{class:"customer-link"+(" 2e06c2938ac54448b1839dcf8d3819d3"+(typeof g!="undefined"?g:"")+(" comp-id-"+i)),disabled:n.Z.toJsonString(m,!1)},"\u53D6\u6D88",n.Z.registEvents([{name:"tap",event:"cancelEdit",catch:!1}],r,"2e06c2938ac54448b1839dcf8d3819d3"+(typeof g!="undefined"?g:""))),t.createElement("tiga-button",{class:"customer-primary memory-save"+(" a4b5bd122516406ea6e03a0eb46ddd35"+(typeof g!="undefined"?g:"")+(" comp-id-"+i)),disabled:n.Z.toJsonString(m||!M,!1)},"\u4FDD\u5B58\u66F4\u6B63",n.Z.registEvents([{name:"tap",event:"save",catch:!1}],r,"a4b5bd122516406ea6e03a0eb46ddd35"+(typeof g!="undefined"?g:""))))))}),b?t.createElement("tiga-view",{class:"memory-item customer-surface"},t.createElement("tiga-textarea",{value:n.Z.toJsonString(M,!1),maxlength:"120",disabled:n.Z.toJsonString(m,!1),"auto-height":!0,placeholder:"\u6BD4\u5982\uFF1A\u5E0C\u671B\u5B89\u9759\u4E00\u4E9B\uFF0C\u5F00\u59CB\u524D\u5148\u8BF4\u660E\u6D41\u7A0B",class:" 7c548a88ed0648758fd057aaa395d082"+(typeof index!="undefined"?index:"")+(" comp-id-"+i)},n.Z.registEvents([{name:"input",event:"onInput",catch:!1}],r,"7c548a88ed0648758fd057aaa395d082"+(typeof index!="undefined"?index:""))),h?t.createElement("tiga-text",{class:"error"},n.Z.getString(h)):!1,t.createElement("tiga-view",{class:"memory-actions"},t.createElement("tiga-button",{class:"customer-link"+(" 1115d6a112e242d681a1d95d3d3a7992"+(typeof index!="undefined"?index:"")+(" comp-id-"+i)),disabled:n.Z.toJsonString(m,!1)},"\u53D6\u6D88",n.Z.registEvents([{name:"tap",event:"cancelEdit",catch:!1}],r,"1115d6a112e242d681a1d95d3d3a7992"+(typeof index!="undefined"?index:""))),t.createElement("tiga-button",{class:"customer-primary memory-save"+(" bb691cb1ee5c4696ba8f71163eb63da5"+(typeof index!="undefined"?index:"")+(" comp-id-"+i)),disabled:n.Z.toJsonString(m||!M,!1)},"\u8BB0\u4F4F\u8FD9\u6761",n.Z.registEvents([{name:"tap",event:"save",catch:!1}],r,"bb691cb1ee5c4696ba8f71163eb63da5"+(typeof index!="undefined"?index:""))))):!1,b?!1:t.createElement("tiga-button",{class:"outline-btn memory-add"+(" 39f2b845462c4fbd93ad5a4b3e0b215b"+(typeof index!="undefined"?index:"")+(" comp-id-"+i)),disabled:n.Z.toJsonString(m,!1)},"\u518D\u52A0\u4E00\u6761",n.Z.registEvents([{name:"tap",event:"startAdd",catch:!1}],r,"39f2b845462c4fbd93ad5a4b3e0b215b"+(typeof index!="undefined"?index:"")))),y?t.createElement("tiga-view",{class:"memory-section"},t.createElement("tiga-view",{class:"memory-section-head"},t.createElement("tiga-text",{class:"memory-section-title"},"\u4E0A\u6B21"),t.createElement("tiga-text",{class:"customer-kicker"},"LAST VISIT")),t.createElement("tiga-view",{class:"customer-surface memory-last"},t.createElement("tiga-text",{class:"memory-value"},n.Z.getString(y==null?void 0:y.project)),t.createElement("tiga-text",{class:"customer-meta"},n.Z.getString(y==null?void 0:y.at)+n.Z.getString(y!=null&&y.technician?" \xB7 "+(y==null?void 0:y.technician):"")),t.createElement("tiga-button",{class:"customer-link"+(" 33249421c98846a8b88dc012e92ed229"+(typeof index!="undefined"?index:"")+(" comp-id-"+i))},"\u6309\u4E0A\u6B21\u518D\u7EA6\u4E00\u6B21 \u203A",n.Z.registEvents([{name:"tap",event:"openBooking",catch:!1}],r,"33249421c98846a8b88dc012e92ed229"+(typeof index!="undefined"?index:""))))):!1,t.createElement("tiga-view",{class:"memory-note"},t.createElement("tiga-text",{class:"memory-note-title"},"\u8C01\u80FD\u770B\u5230\u8FD9\u4E9B\u8BB0\u5F55"),t.createElement("tiga-text",{class:"customer-meta"},"\xB7 \u6BCF\u6B21\u5230\u5E97\u4E34\u65F6\u8BF4\u7684\u504F\u597D\uFF0C\u53EA\u5BF9\u8FD9\u4E00\u5355\u6709\u6548\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u53D8\u6210\u957F\u671F\u8BB0\u5F55\u3002"),t.createElement("tiga-text",{class:"customer-meta"},"\xB7 \u8FD9\u4E9B\u504F\u597D\u4F9B\u672C\u5E97\u6709\u6743\u9650\u7684\u63A5\u5F85\u4EBA\u5458\u53C2\u8003\u3002")),t.createElement("tiga-button",{class:"outline-btn"+(" ba539ebfcf7a4c52b61708b33ec0dcec"+(typeof index!="undefined"?index:"")+(" comp-id-"+i)),style:n.Z.createStyle("margin-top:0.5rem")},"\u6709\u60F3\u95EE\u7684\uFF1F\u95EE\u5802\u91CC \u203A",n.Z.registEvents([{name:"tap",event:"openAsk",catch:!1}],r,"ba539ebfcf7a4c52b61708b33ec0dcec"+(typeof index!="undefined"?index:"")))):!1))}var l=!0},e7wb:function(w,D,e){e.r(D),e.d(D,{default:function(){return te}});var t=e("6Ydh"),n=e("DajF"),O=e("MM43"),P=e("4kMG"),F=e("8mQb"),Y=e("bmIf"),$=e("tTth"),N=e("8j+p"),Z=e("mXGw"),R=e("20uZ"),T=e("MMlp").ik;function x(){var s,a,l=typeof Symbol=="function"?Symbol:{},r=l.iterator||"@@iterator",m=l.toStringTag||"@@toStringTag";function f(h,y,d,g){var ae=y&&y.prototype instanceof i?y:i,re=Object.create(ae.prototype);return u(re,"_invoke",function(ie,oe,se){var A,c,v,X=0,ne=se||[],K=!1,z={p:0,n:0,v:s,a:H,f:H.bind(s,4),d:function(E,B){return A=E,c=0,v=s,z.n=B,o}};function H(k,E){for(c=k,v=E,a=0;!K&&X&&!B&&a<ne.length;a++){var B,_=ne[a],q=z.p,Q=_[2];k>3?(B=Q===E)&&(v=_[(c=_[4])?5:(c=3,3)],_[4]=_[5]=s):_[0]<=q&&((B=k<2&&q<_[1])?(c=0,z.v=E,z.n=_[1]):q<Q&&(B=k<3||_[0]>E||E>Q)&&(_[4]=k,_[5]=E,z.n=Q,c=0))}if(B||k>1)return o;throw K=!0,E}return function(k,E,B){if(X>1)throw TypeError("Generator is already running");for(K&&E===1&&H(E,B),c=E,v=B;(a=c<2?s:v)||!K;){A||(c?(c>1&&(z.n=c<3?-1:v),H(c,v)):z.v=v);try{if(X=2,A){if(c||(k="next"),a=A[k]){if(!(a=a.call(A,v)))throw TypeError("iterator result is not an object");if(!a.done)return a;v=a.value,c<2&&(c=0)}else c===1&&(a=A.return)&&a.call(A),c<2&&(v=TypeError("The iterator does not provide a '"+k+"' method"),c=1);A=s}else if((a=(K=z.n<0)?v:ie.call(oe,z))!==o)break}catch(_){A=s,c=1,v=_}finally{X=1}}return{value:a,done:K}}}(h,d,g),!0),re}var o={};function i(){}function p(){}function b(){}a=Object.getPrototypeOf;var W=[][r]?a(a([][r]())):(u(a={},r,function(){return this}),a),S=b.prototype=i.prototype=Object.create(W);function M(h){return Object.setPrototypeOf?Object.setPrototypeOf(h,b):(h.__proto__=b,u(h,m,"GeneratorFunction")),h.prototype=Object.create(S),h}return p.prototype=b,u(S,"constructor",b),u(b,"constructor",p),p.displayName="GeneratorFunction",u(b,m,"GeneratorFunction"),u(S),u(S,m,"Generator"),u(S,r,function(){return this}),u(S,"toString",function(){return"[object Generator]"}),(x=function(){return{w:f,m:M}})()}function u(s,a,l,r){var m=Object.defineProperty;try{m({},"",{})}catch(f){m=0}u=function(o,i,p,b){function W(S,M){u(o,S,function(h){return this._invoke(S,M,h)})}i?m?m(o,i,{value:p,enumerable:!b,configurable:!b,writable:!b}):o[i]=p:(W("next",0),W("throw",1),W("return",2))},u(s,a,l,r)}var C=e("iRt4"),U=e("2GZr"),I=e("2CFj"),J={name:"",enabled:!1,total:0,preferences:[],lastVisit:null},G={editingId:"",draft:"",adding:!1,error:""};function V(s){if(!s)return"";var a=new Date(s);if(isNaN(a.getTime()))return"";var l=a.getMonth()+1,r=a.getDate();return l+" \u6708 "+r+" \u65E5"}Page({data:Object.assign(Object.assign(Object.assign({busy:!0},J),G),{message:""}),onShow:function(){return this.load()},onHide:function(){this.loadSeq=(this.loadSeq||0)+1,this.setData(Object.assign(Object.assign(Object.assign({},J),G),{busy:!0,message:""}))},load:function(){return(0,U.__awaiter)(this,void 0,void 0,x().m(function a(){var l,r,m,f,o;return x().w(function(i){for(;;)switch(i.p=i.n){case 0:return l=this.loadSeq=(this.loadSeq||0)+1,this.setData(Object.assign(Object.assign(Object.assign({},J),G),{busy:!0,message:""})),i.p=1,i.n=2,I.ready();case 2:if(l===this.loadSeq){i.n=3;break}return i.a(2);case 3:return i.n=4,I.portal();case 4:if(r=i.v,l===this.loadSeq){i.n=5;break}return i.a(2);case 5:m=(r.preferences||[]).map(function(p){return{id:p.id,value:p.value,source:p.source,at:V(p.at),visitNote:p.visitNote}}),f=r.lastVisit||null,this.setData({busy:!1,name:r.profile&&r.profile.name||"",enabled:!!r.preferenceEditingEnabled,total:r.servicePage&&r.servicePage.total||0,preferences:m,lastVisit:f?{project:f.project_name,technician:f.technician_name,at:V(f.finished_at)}:null}),i.n=7;break;case 6:i.p=6,o=i.v,l===this.loadSeq&&this.setData({busy:!1,message:o&&o.message?o.message:"\u8BFB\u53D6\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"});case 7:return i.a(2)}},a,this,[[1,6]])}))},startEdit:function(a){var l=a.currentTarget.dataset.id,r=this.data.preferences.find(function(m){return m.id===l});r&&this.setData({editingId:l,draft:r.value,adding:!1,error:""})},startAdd:function(){this.setData({editingId:"",draft:"",adding:!0,error:""})},cancelEdit:function(){this.setData({editingId:"",draft:"",adding:!1,error:""})},onInput:function(a){this.setData({draft:a.detail.value})},save:function(){return(0,U.__awaiter)(this,void 0,void 0,x().m(function a(){var l,r,m,f;return x().w(function(o){for(;;)switch(o.p=o.n){case 0:if(!(this.data.busy||!this.data.enabled)){o.n=1;break}return o.a(2);case 1:if(l=(this.data.draft||"").trim(),l){o.n=2;break}return this.setData({error:"\u5199\u4E00\u53E5\u5C31\u597D\uFF0C\u6BD4\u5982\u201C\u5F00\u59CB\u524D\u5148\u8BF4\u660E\u6D41\u7A0B\u201D"}),o.a(2);case 2:return r=this.loadSeq,m=this.data.editingId,this.setData({busy:!0,error:""}),o.p=3,o.n=4,I.ready();case 4:if(r===this.loadSeq){o.n=5;break}return o.a(2);case 5:return o.n=6,I.reviseOwnPreference(Object.assign({value:l},m?{preference_id:m}:{}));case 6:if(r!==this.loadSeq){o.n=7;break}return o.n=7,this.load();case 7:o.n=9;break;case 8:o.p=8,f=o.v,r===this.loadSeq&&this.setData({busy:!1,error:f&&f.message||"\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"});case 9:return o.a(2)}},a,this,[[3,8]])}))},openAsk:function(){T.navigateTo({url:"/pages/ask/ask"})},openDirectory:function(){T.navigateTo({url:"/pages/directory/directory"})},openBooking:function(){T.switchTab({url:"/pages/booking/booking"})}});var L=R.Z.Page(C,R.Z.mergeConfig(e("v9Xe"),e("wjaq")));function j(s,a,l){return a=(0,F.Z)(a),(0,O.Z)(s,(0,P.Z)()?Reflect.construct(a,l||[],(0,F.Z)(s).constructor):a.apply(s,l))}var ee=function(s){function a(){return(0,t.Z)(this,a),j(this,a,arguments)}return(0,Y.Z)(a,s),(0,n.Z)(a,[{key:"render",value:function(){return Z.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},Z.createElement(L,null))}}])}(Z.Component),te=ee},yYJO:function(w,D,e){var t=e("Ba9y"),n=e.n(t),O=e("Ai0b"),P=e.n(O),F=P()(n());F.push([w.id,`tiga-page{min-height:100vh;background:var(--yst-canvas);color:var(--yst-ink);font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}tiga-view,tiga-text,tiga-button{box-sizing:border-box}tiga-button{margin:0;padding:0;line-height:1;background:transparent;border:0}tiga-button::after{border:0}.page{min-height:100vh;padding:1.0625rem 0.875rem 4.6875rem}.hero{background:var(--yst-pine);color:var(--yst-white);border-radius:0.75rem;padding:1.1875rem 1rem;margin-bottom:0.75rem}.eyebrow{font-size:0.71875rem;opacity:.78;letter-spacing:0.09375rem}.title{display:block;font-size:1.4375rem;font-weight:700;margin:0.4375rem 0}.subtitle{font-size:0.8125rem;line-height:1.7;opacity:.9}.section-title{display:block;font-weight:700;font-size:1rem;margin:0.9375rem 0 0.5rem}.card{background:var(--yst-white);border-radius:0.625rem;padding:0.8125rem;margin-bottom:0.5625rem;box-shadow:0 0.25rem 0.75rem rgba(32,53,46,.06)}.muted{color:var(--yst-muted);font-size:0.75rem;line-height:1.6}.primary-btn{height:2.3125rem;padding:0 0.9375rem;border-radius:31.21875rem;background:var(--yst-pine);color:var(--yst-white);font-size:0.8125rem;font-weight:600}.outline-btn{height:2.125rem;padding:0 0.875rem;border:0.03125rem solid var(--yst-line-strong);border-radius:31.21875rem;color:var(--yst-pine);font-size:0.78125rem}.row{display:flex;align-items:center;justify-content:space-between}.badge{display:inline-block;background:var(--yst-soft);color:var(--yst-pine);border-radius:31.21875rem;padding:0.25rem 0.5rem;font-size:0.6875rem}.metric{font-size:1.3125rem;font-weight:700;color:var(--yst-pine)}.bottom-space{height:0.625rem}

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
`,""]),D.Z=F},WuL6:function(w,D,e){var t=e("Ba9y"),n=e.n(t),O=e("Ai0b"),P=e.n(O),F=P()(n());F.push([w.id,`.memory-page{padding-bottom:1.875rem}

.memory-head{display:flex;flex-direction:column;gap:0.375rem;margin:0.25rem 0 1rem}
.memory-title{
  font-family:"YS Serif","Songti SC",serif;
  font-size:1.875rem;line-height:1.24;font-weight:600;letter-spacing:0.03125rem;color:var(--yst-ink);
}

.memory-auth{padding:1rem;display:flex;flex-direction:column;gap:0.4375rem;align-items:flex-start}
.memory-auth-title{font-family:"YS Serif","Songti SC",serif;font-size:1rem;font-weight:600}

.memory-section{margin-bottom:1.25rem}
.memory-section-head{display:flex;align-items:baseline;gap:0.5rem;margin-bottom:0.5625rem}
.memory-section-title{
  font-family:"YS Serif","Songti SC",serif;font-size:1.125rem;font-weight:600;letter-spacing:0.01563rem;
}
.memory-empty{padding:0.875rem 0.25rem}

.memory-item{padding:0.875rem 0.9375rem;margin-bottom:0.5rem;display:flex;flex-direction:column;gap:0.3125rem}
.memory-value{font-size:0.9375rem;line-height:1.6;color:var(--yst-ink);letter-spacing:0.00938rem}
.memory-meta-row{display:flex;align-items:center;gap:0.3125rem;flex-wrap:wrap}
.memory-flag{
  font-size:0.625rem;color:var(--yst-copper-deep);background:rgba(179,147,89,.14);
  border:0.03125rem solid rgba(179,147,89,.3);border-radius:0.1875rem;padding:0.0625rem 0.25rem;
}
.memory-actions{display:flex;justify-content:flex-end;gap:0.625rem;align-items:center;margin-top:0.1875rem}
.memory-save{min-height:2.25rem;padding:0 0.875rem;font-size:0.78125rem;width:auto}
.memory-add{width:100%;margin-top:0.125rem}

.memory-last{padding:0.875rem 0.9375rem;display:flex;flex-direction:column;gap:0.3125rem;align-items:flex-start}

.memory-note{
  margin-top:0.25rem;padding:0.875rem 0.9375rem;border-radius:0.875rem;
  background:rgba(119,132,108,.08);border:0.03125rem solid rgba(22,60,49,.06);
  display:flex;flex-direction:column;gap:0.25rem;
}
.memory-note-title{font-family:"YS Serif","Songti SC",serif;font-size:0.875rem;font-weight:600;color:var(--yst-pine)}
`,""]),D.Z=F},P2AI:function(w,D,e){var t=e("eMCs"),n=e.n(t),O=e("vRpg"),P=e.n(O),F=e("rRSO"),Y=e.n(F),$=e("v1RS"),N=e.n($),Z=e("Me5i"),R=e.n(Z),T=e("54ue"),x=e.n(T),u=e("yYJO"),C={};C.styleTagTransform=x(),C.setAttributes=N(),C.insert=Y().bind(null,"head"),C.domAPI=P(),C.insertStyleElement=R();var U=n()(u.Z,C),I=u.Z&&u.Z.locals?u.Z.locals:void 0},v9Xe:function(w){w.exports=JSON.parse('{"pages":["pages/auth/auth","pages/home/home","pages/booking/booking","pages/waitlist/waitlist","pages/rights/rights","pages/profile/profile","pages/member-intake/member-intake","pages/memory/memory","pages/ask/ask","pages/directory/directory","pages/work/work","pages/waitlist-manage/waitlist-manage","pages/service/service","pages/learning/learning","pages/owner/owner","pages/maintenance/maintenance","pages/tasks/tasks","pages/feedback/feedback","pages/recovery/recovery","pages/records/records","pages/management/management","pages/settlement/settlement","pages/daily/daily","pages/feedback-care/feedback-care","pages/reminders/reminders","pages/care/care"],"window":{"backgroundColor":"#F6F1E6","defaultTitle":"\u5F5D\u751F\u5802","titleBarColor":"#F6F1E6"},"style":"v2","lazyCodeLoading":"requiredComponents","tabBar":{"selectedColor":"#163C31","backgroundColor":"#FFFDF8","borderStyle":"white","textColor":"#77846C","items":[{"pagePath":"pages/home/home","name":"\u9996\u9875","icon":"assets/customer-nav/home.png","activeIcon":"assets/customer-nav/home-active.png"},{"pagePath":"pages/booking/booking","name":"\u9884\u7EA6","icon":"assets/customer-nav/calendar.png","activeIcon":"assets/customer-nav/calendar-active.png"},{"pagePath":"pages/rights/rights","name":"\u6743\u76CA","icon":"assets/customer-nav/card.png","activeIcon":"assets/customer-nav/card-active.png"},{"pagePath":"pages/profile/profile","name":"\u6211\u7684","icon":"assets/customer-nav/person.png","activeIcon":"assets/customer-nav/person-active.png"}]},"subPackages":[{"root":"subpackages/staff","name":"staff","pages":["today/today","book/book"]}],"usingComponents":{}}')},wjaq:function(w){w.exports=JSON.parse('{"usingComponents":{},"backgroundColor":"#F6F1E6","defaultTitle":"\u5802\u91CC\u8BB0\u5F97\u4F60","titleBarColor":"#F6F1E6"}')}}]);
