"use strict";(window.mor_modules=window.mor_modules||[]).push([[211],{vwbe:function(F,C,e){e.r(C),e.d(C,{$templates:function(){return g},defaultRender:function(){return y},isComplexComponents:function(){return s}});var a=e("R/MK"),n=e("uUrt"),A=e("+xY1"),O=e("6LZN"),w=e("ztDv"),Y=e("aoKY"),q=e("g30g"),J=e("He40"),M=e.n(J),Z=e("0+gW"),L=e.n(Z),x=e("E4nK"),m=e.n(x),z=e("SXvV"),W=e.n(z),U=e("Hl0A"),ee=e.n(U),te=e("uCbO"),re=e.n(te),I=e("aArm"),B={};B.styleTagTransform=re(),B.setAttributes=W(),B.insert=m().bind(null,"head"),B.domAPI=L(),B.insertStyleElement=ee();var l=M()(I.Z,B),r=I.Z&&I.Z.locals?I.Z.locals:void 0,g={};function y(d){var f=d.title,b=d.message,p=d.role,i=d.on,c=d.$id,v=d.rows,N=d.item,S=d.phase,j=d.busy,V=d.offset,ne=d.total;return a.createElement("tiga-page",null,a.createElement("tiga-view",{class:"page ui-page"},a.createElement("tiga-view",{class:"hero"},a.createElement("tiga-text",{class:"title"},n.Z.getString(f)),a.createElement("tiga-text",{class:"subtitle"},"\u53EA\u663E\u793A\u5F53\u524D\u5C97\u4F4D\u3001\u5F53\u524D\u95E8\u5E97\u6388\u6743\u7684\u539F\u8BB0\u5F55\u3002")),b?a.createElement("tiga-view",{class:"notice"},n.Z.getString(b)):!1,p==="receptionist"?a.createElement("tiga-picker",{mode:"date",value:n.Z.toJsonString(i,!1),class:" 484ffa8ceaa94beb8a3220326bad6220"+(typeof index!="undefined"?index:"")+(" comp-id-"+c)},a.createElement("tiga-view",{class:"picker"},"\u63A5\u5F85\u65E5\u671F "+n.Z.getString(i)),n.Z.registEvents([{name:"change",event:"day",catch:!1}],d,"484ffa8ceaa94beb8a3220326bad6220"+(typeof index!="undefined"?index:""))):!1,n.Z.getForValue(v).map(function(t,T){var K,Q,G;return a.createElement("tiga-view",{class:"card",key:n.Z.toJsonString(t==null?void 0:t.id,!1)},a.createElement("tiga-text",{class:"section-title"},n.Z.getString((t==null?void 0:t.customer_name)||(t==null?void 0:t.name)||(t==null?void 0:t.project_name)||"\u4E1A\u52A1\u8BB0\u5F55")),a.createElement("tiga-text",null,n.Z.getString(t==null?void 0:t.label)),p==="receptionist"?a.createElement("tiga-text",{class:"muted"},n.Z.getString(t==null?void 0:t.start_at)+" \xB7 "+n.Z.getString(t==null?void 0:t.project_name)+" \xB7 "+n.Z.getString(t==null?void 0:t.technician_name)):!1,t!=null&&t.schedule_view?a.createElement("tiga-view",{class:"preparation"},a.createElement("tiga-text",{class:"section-title"},"\u5206\u6BB5\u5B89\u6392 \xB7 "+n.Z.getString(t==null||(K=t.schedule_view)===null||K===void 0?void 0:K.resource_name)),a.createElement("tiga-text",{class:"muted"},"\u5E8A\u4F4D\u4FDD\u7559\u81F3 "+n.Z.getString(t==null||(Q=t.schedule_view)===null||Q===void 0?void 0:Q.occupied_until)),n.Z.getForValue(t==null||(G=t.schedule_view)===null||G===void 0?void 0:G.phases).map(function(o,u){return a.createElement("tiga-view",{key:n.Z.toJsonString(o==null?void 0:o.phase_id,!1)},a.createElement("tiga-text",{class:"muted"},n.Z.getString(o==null?void 0:o.start_at)+" \u2014 "+n.Z.getString(o==null?void 0:o.end_at)),a.createElement("tiga-text",null,n.Z.getString(o!=null&&o.technician_name?"\u6280\u5E08\uFF1A"+(o==null?void 0:o.technician_name):"\u4E3B\u6280\u5E08\u53EF\u5B89\u6392\u5176\u4ED6\u670D\u52A1")+n.Z.getString(o!=null&&o.caregiver_name?" \xB7 \u770B\u62A4\uFF1A"+(o==null?void 0:o.caregiver_name):"")))}),a.createElement("tiga-text",{class:"muted"},"\u73B0\u573A\u6838\u5BF9\u540E\u4EA4\u63A5\uFF0C\u65F6\u95F4\u5230\u4E0D\u4F1A\u81EA\u52A8\u5B8C\u6210\u3002")):!1,p==="finance"?a.createElement("tiga-text",{class:"metric"},n.Z.getString(t==null?void 0:t.amountText)):!1,p==="finance"?a.createElement("tiga-text",{class:"muted"},"\u8BA2\u5355\u91D1\u989D\u4E0D\u4EE3\u8868\u5DF2\u7ECF\u5230\u8D26\uFF1B\u5F00\u5361\u3001\u6263\u5361\u4E0E\u9000\u6B3E\u8BF7\u5728\u539F\u6536\u94F6\u6D41\u6C34\u4E2D\u6838\u5BF9\u3002"):!1,p==="prospect"?a.createElement("tiga-text",{class:"muted"},n.Z.getString(t==null?void 0:t.contact_note)):!1,p==="receptionist"&&!(t!=null&&t.arrived_at)&&((t==null?void 0:t.status)==="booked"||(t==null?void 0:t.status)==="in_service")?a.createElement("tiga-button",{class:"primary-btn"+(" 220c80018de44c9fb9e870d0c59e40b4"+(typeof T!="undefined"?T:"")+(" comp-id-"+c)),"data-id":n.Z.toJsonString(t==null?void 0:t.id,!0),disabled:n.Z.toJsonString(j,!1)},"\u786E\u8BA4\u987E\u5BA2\u5DF2\u5230\u5E97",n.Z.registEvents([{name:"tap",event:"checkin",catch:!1}],d,"220c80018de44c9fb9e870d0c59e40b4"+(typeof T!="undefined"?T:""))):!1)}),!(v!=null&&v.length)&&!j?a.createElement("tiga-text",{class:"muted"},"\u5F53\u524D\u6CA1\u6709\u53EF\u89C1\u8BB0\u5F55\u3002"):!1,a.createElement("tiga-view",{class:"row"},a.createElement("tiga-button",{class:"outline-btn"+(" 57b61ad27c4c451e8ac48e11f3206d80"+(typeof index!="undefined"?index:"")+(" comp-id-"+c)),"data-delta":"-25",disabled:n.Z.toJsonString(j||V===0,!1)},"\u4E0A\u4E00\u9875",n.Z.registEvents([{name:"tap",event:"page",catch:!1}],d,"57b61ad27c4c451e8ac48e11f3206d80"+(typeof index!="undefined"?index:""))),a.createElement("tiga-button",{class:"outline-btn"+(" cf693a493cff452a8063914e2548ae0c"+(typeof index!="undefined"?index:"")+(" comp-id-"+c)),"data-delta":"25",disabled:n.Z.toJsonString(j||V+25>=ne,!1)},"\u4E0B\u4E00\u9875",n.Z.registEvents([{name:"tap",event:"page",catch:!1}],d,"cf693a493cff452a8063914e2548ae0c"+(typeof index!="undefined"?index:"")))),a.createElement("tiga-button",{class:"outline-btn"+(" ccd71ac65d4849b8816ea4a763c49b54"+(typeof index!="undefined"?index:"")+(" comp-id-"+c)),disabled:n.Z.toJsonString(j,!1)},"\u91CD\u65B0\u8BFB\u53D6",n.Z.registEvents([{name:"tap",event:"load",catch:!1}],d,"ccd71ac65d4849b8816ea4a763c49b54"+(typeof index!="undefined"?index:""))),a.createElement("tiga-button",{class:"outline-btn"+(" a74016a99d984cbdb99451804741f6ec"+(typeof index!="undefined"?index:"")+(" comp-id-"+c))},"\u6838\u5BF9\u5F85\u8FD4\u56DE\u64CD\u4F5C",n.Z.registEvents([{name:"tap",event:"recover",catch:!1}],d,"a74016a99d984cbdb99451804741f6ec"+(typeof index!="undefined"?index:"")))))}var s=!0},ibbn:function(F,C,e){e.r(C),e.d(C,{default:function(){return B}});var a=e("Vs+U"),n=e("zzqG"),A=e("oAVc"),O=e("LmR/"),w=e("JQ/t"),Y=e("kvQH"),q=e("gXix"),J=e("OO2q"),M=e("R/MK"),Z=e("uUrt"),L=e("Rk0X").ik;function x(){var l,r,g=typeof Symbol=="function"?Symbol:{},y=g.iterator||"@@iterator",s=g.toStringTag||"@@toStringTag";function d(S,j,V,ne){var t=j&&j.prototype instanceof b?j:b,T=Object.create(t.prototype);return m(T,"_invoke",function(K,Q,G){var o,u,_,H=0,oe=G||[],R=!1,P={p:0,n:0,v:l,a:X,f:X.bind(l,4),d:function(h,D){return o=h,u=0,_=l,P.n=D,f}};function X(k,h){for(u=k,_=h,r=0;!R&&H&&!D&&r<oe.length;r++){var D,E=oe[r],ae=P.p,$=E[2];k>3?(D=$===h)&&(_=E[(u=E[4])?5:(u=3,3)],E[4]=E[5]=l):E[0]<=ae&&((D=k<2&&ae<E[1])?(u=0,P.v=h,P.n=E[1]):ae<$&&(D=k<3||E[0]>h||h>$)&&(E[4]=k,E[5]=h,P.n=$,u=0))}if(D||k>1)return f;throw R=!0,h}return function(k,h,D){if(H>1)throw TypeError("Generator is already running");for(R&&h===1&&X(h,D),u=h,_=D;(r=u<2?l:_)||!R;){o||(u?(u>1&&(P.n=u<3?-1:_),X(u,_)):P.v=_);try{if(H=2,o){if(u||(k="next"),r=o[k]){if(!(r=r.call(o,_)))throw TypeError("iterator result is not an object");if(!r.done)return r;_=r.value,u<2&&(u=0)}else u===1&&(r=o.return)&&r.call(o),u<2&&(_=TypeError("The iterator does not provide a '"+k+"' method"),u=1);o=l}else if((r=(R=P.n<0)?_:K.call(Q,P))!==f)break}catch(E){o=l,u=1,_=E}finally{H=1}}return{value:r,done:R}}}(S,V,ne),!0),T}var f={};function b(){}function p(){}function i(){}r=Object.getPrototypeOf;var c=[][y]?r(r([][y]())):(m(r={},y,function(){return this}),r),v=i.prototype=b.prototype=Object.create(c);function N(S){return Object.setPrototypeOf?Object.setPrototypeOf(S,i):(S.__proto__=i,m(S,s,"GeneratorFunction")),S.prototype=Object.create(v),S}return p.prototype=i,m(v,"constructor",i),m(i,"constructor",p),p.displayName="GeneratorFunction",m(i,s,"GeneratorFunction"),m(v),m(v,s,"Generator"),m(v,y,function(){return this}),m(v,"toString",function(){return"[object Generator]"}),(x=function(){return{w:d,m:N}})()}function m(l,r,g,y){var s=Object.defineProperty;try{s({},"",{})}catch(d){s=0}m=function(f,b,p,i){function c(v,N){m(f,v,function(S){return this._invoke(v,N,S)})}b?s?s(f,b,{value:p,enumerable:!i,configurable:!i,writable:!i}):f[b]=p:(c("next",0),c("throw",1),c("return",2))},m(l,r,g,y)}var z=e("vwbe"),W=e("rA3G"),U=e("L1ly"),ee={intent:"\u5DF2\u767B\u8BB0\u5408\u4F5C\u610F\u5411",contacted:"\u5DF2\u8054\u7CFB",visit_scheduled:"\u5DF2\u5B89\u6392\u8003\u5BDF",review:"\u8D44\u6599\u5BA1\u6838\u4E2D",approved:"\u5DF2\u5BA1\u6838\u901A\u8FC7",booked:"\u5F85\u5230\u5E97",needs_review:"\u5F85\u95E8\u5E97\u786E\u8BA4",in_service:"\u6B63\u5728\u670D\u52A1",completed:"\u5DF2\u5B8C\u6210",cancelled:"\u5DF2\u53D6\u6D88",stopped:"\u5DF2\u4E2D\u6B62",pending:"\u5F85\u5904\u7406",draft:"\u5F85\u5B8C\u5584",qualified:"\u5DF2\u6838\u9A8C",contracted:"\u5DF2\u7B7E\u7EA6",open:"\u5F85\u5904\u7406",paid:"\u5DF2\u6536\u6B3E",refunded:"\u5DF2\u9000\u6B3E",approved_manual:"\u5DF2\u6279\u51C6\uFF0C\u5F85\u6838\u5B9E\u9000\u6B3E"};Page({data:{title:"\u539F\u4E1A\u52A1\u8BB0\u5F55",role:"",rows:[],offset:0,total:0,busy:!1,message:"",on:new Date(Date.now()+8*36e5).toISOString().slice(0,10)},onShow:function(){this.load()},onHide:function(){this.seq=(this.seq||0)+1},load:function(){var r,g;return(0,W.__awaiter)(this,void 0,void 0,x().m(function y(){var s,d,f,b,p;return x().w(function(i){for(;;)switch(i.p=i.n){case 0:return s=this.seq=(this.seq||0)+1,this.setData({busy:!0,rows:[],message:""}),i.p=1,i.n=2,U.ready();case 2:if(d=i.v,f={receptionist:["appointments","\u4ECA\u65E5\u63A5\u5F85"],finance:["orders","\u8D22\u52A1\u6838\u5BF9"],prospect:["franchise","\u6211\u7684\u5408\u4F5C\u8FDB\u5EA6"]}[d.role],f){i.n=3;break}throw Error("\u5F53\u524D\u5C97\u4F4D\u8BF7\u4ECE\u539F\u5DE5\u4F5C\u53F0\u67E5\u770B\u8BB0\u5F55");case 3:return this.kind=f[0],i.n=4,U.request("/api/lists/"+f[0]+"?offset="+this.data.offset+"&limit=25"+(d.role==="receptionist"?"&on="+this.data.on:""));case 4:if(b=i.v,s===this.seq){i.n=5;break}return i.a(2);case 5:this.setData({role:d.role,title:f[1],total:(g=(r=b.page)===null||r===void 0?void 0:r.total)!==null&&g!==void 0?g:0,rows:(b.rows||[]).map(function(c){return Object.assign(Object.assign({},c),{label:ee[c.status||c.stage]||"\u8BF7\u6838\u5BF9\u539F\u8FDB\u5EA6",amountText:Number.isSafeInteger(c.amount_cents)?"\xA5"+(c.amount_cents/100).toFixed(2):"\u91D1\u989D\u5F85\u6838\u5B9E"})}),busy:!1}),i.n=7;break;case 6:i.p=6,p=i.v,s===this.seq&&this.setData({busy:!1,message:p.message});case 7:return i.a(2)}},y,this,[[1,6]])}))},day:function(r){this.setData({on:r.detail.value,offset:0}),this.load()},page:function(r){this.data.busy||(this.setData({offset:Math.max(0,this.data.offset+Number(r.currentTarget.dataset.delta))}),this.load())},checkin:function(r){return(0,W.__awaiter)(this,void 0,void 0,x().m(function g(){var y;return x().w(function(s){for(;;)switch(s.p=s.n){case 0:if(!this.data.busy){s.n=1;break}return s.a(2);case 1:return this.setData({busy:!0}),s.p=2,s.n=3,U.action("appointment.checkin",{id:r.currentTarget.dataset.id,note:"\u524D\u53F0\u5F53\u9762\u786E\u8BA4\u987E\u5BA2\u5DF2\u5230\u5E97"});case 3:return s.n=4,this.load();case 4:s.n=6;break;case 5:s.p=5,y=s.v,this.setData({busy:!1,message:y.message});case 6:return s.a(2)}},g,this,[[2,5]])}))},recover:function(){L.navigateTo({url:"/pages/recovery/recovery"})}});var te=Z.Z.Page(z,Z.Z.mergeConfig(e("nNev"),e("Pr7i")));function re(l,r,g){return r=(0,w.Z)(r),(0,A.Z)(l,(0,O.Z)()?Reflect.construct(r,g||[],(0,w.Z)(l).constructor):r.apply(l,g))}var I=function(l){function r(){return(0,a.Z)(this,r),re(this,r,arguments)}return(0,Y.Z)(r,l),(0,n.Z)(r,[{key:"render",value:function(){return M.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},M.createElement(te,null))}}])}(M.Component),B=I},"6/aM":function(F,C,e){var a=e("eVqf"),n=e.n(a),A=e("B/WF"),O=e.n(A),w=O()(n());w.push([F.id,`tiga-page{min-height:100vh;background:var(--yst-canvas);color:var(--yst-ink);font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}tiga-view,tiga-text,tiga-button{box-sizing:border-box}tiga-button{margin:0;padding:0;line-height:1;background:transparent;border:0}tiga-button::after{border:0}.page{min-height:100vh;padding:1.0625rem 0.875rem 4.6875rem}.hero{background:var(--yst-pine);color:var(--yst-white);border-radius:0.75rem;padding:1.1875rem 1rem;margin-bottom:0.75rem}.eyebrow{font-size:0.71875rem;opacity:.78;letter-spacing:0.09375rem}.title{display:block;font-size:1.4375rem;font-weight:700;margin:0.4375rem 0}.subtitle{font-size:0.8125rem;line-height:1.7;opacity:.9}.section-title{display:block;font-weight:700;font-size:1rem;margin:0.9375rem 0 0.5rem}.card{background:var(--yst-white);border-radius:0.625rem;padding:0.8125rem;margin-bottom:0.5625rem;box-shadow:0 0.25rem 0.75rem rgba(32,53,46,.06)}.muted{color:var(--yst-muted);font-size:0.75rem;line-height:1.6}.primary-btn{height:2.3125rem;padding:0 0.9375rem;border-radius:31.21875rem;background:var(--yst-pine);color:var(--yst-white);font-size:0.8125rem;font-weight:600}.outline-btn{height:2.125rem;padding:0 0.875rem;border:0.03125rem solid var(--yst-line-strong);border-radius:31.21875rem;color:var(--yst-pine);font-size:0.78125rem}.row{display:flex;align-items:center;justify-content:space-between}.badge{display:inline-block;background:var(--yst-soft);color:var(--yst-pine);border-radius:31.21875rem;padding:0.25rem 0.5rem;font-size:0.6875rem}.metric{font-size:1.3125rem;font-weight:700;color:var(--yst-pine)}.bottom-space{height:0.625rem}

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
`,""]),C.Z=w},aArm:function(F,C,e){var a=e("eVqf"),n=e.n(a),A=e("B/WF"),O=e.n(A),w=O()(n());w.push([F.id,`.page{padding-top:0.875rem}
.page>.hero{border-radius:1.125rem;padding:1.375rem 1.0625rem}
.page>.hero .title{font-family:"YS Serif","Songti SC",serif;font-size:1.6875rem;font-weight:600;letter-spacing:0.03125rem}
.page>.hero .eyebrow{font-size:0.625rem;letter-spacing:0.09375rem;opacity:.72}
.page>.hero .subtitle{font-size:0.71875rem;line-height:1.7;opacity:.74}
.page .card{border-radius:0.875rem;padding:0.875rem}
.page .card .section-title{font-family:"YS Serif","Songti SC",serif;font-size:1.0625rem}
.page .metric{font-family:"YS Serif","Songti SC",serif;font-size:1.5rem}
.page .row{gap:0.5rem;flex-wrap:wrap}
.page .card .picker{border-radius:0.5rem;background:var(--yst-paper-2);border:0.03125rem solid rgba(22,60,49,.10)}
.page .card .outline-btn{height:2.625rem;border-radius:31.21875rem;font-size:0.78125rem}
.page .card .primary-btn{height:2.875rem;border-radius:31.21875rem;font-size:0.84375rem}
`,""]),C.Z=w},"+xY1":function(F,C,e){var a=e("He40"),n=e.n(a),A=e("0+gW"),O=e.n(A),w=e("E4nK"),Y=e.n(w),q=e("SXvV"),J=e.n(q),M=e("Hl0A"),Z=e.n(M),L=e("uCbO"),x=e.n(L),m=e("6/aM"),z={};z.styleTagTransform=x(),z.setAttributes=J(),z.insert=Y().bind(null,"head"),z.domAPI=O(),z.insertStyleElement=Z();var W=n()(m.Z,z),U=m.Z&&m.Z.locals?m.Z.locals:void 0},nNev:function(F){F.exports=JSON.parse('{"pages":["pages/auth/auth","pages/home/home","pages/booking/booking","pages/waitlist/waitlist","pages/rights/rights","pages/profile/profile","pages/member-intake/member-intake","pages/memory/memory","pages/ask/ask","pages/directory/directory","pages/work/work","pages/waitlist-manage/waitlist-manage","pages/service/service","pages/learning/learning","pages/owner/owner","pages/maintenance/maintenance","pages/tasks/tasks","pages/feedback/feedback","pages/recovery/recovery","pages/records/records","pages/management/management","pages/settlement/settlement","pages/daily/daily","pages/feedback-care/feedback-care","pages/reminders/reminders","pages/care/care"],"window":{"backgroundColor":"#F6F1E6","defaultTitle":"\u5F5D\u751F\u5802","titleBarColor":"#F6F1E6"},"style":"v2","lazyCodeLoading":"requiredComponents","tabBar":{"selectedColor":"#163C31","backgroundColor":"#FFFDF8","borderStyle":"white","textColor":"#77846C","items":[{"pagePath":"pages/home/home","name":"\u9996\u9875","icon":"assets/customer-nav/home.png","activeIcon":"assets/customer-nav/home-active.png"},{"pagePath":"pages/booking/booking","name":"\u9884\u7EA6","icon":"assets/customer-nav/calendar.png","activeIcon":"assets/customer-nav/calendar-active.png"},{"pagePath":"pages/rights/rights","name":"\u6743\u76CA","icon":"assets/customer-nav/card.png","activeIcon":"assets/customer-nav/card-active.png"},{"pagePath":"pages/profile/profile","name":"\u6211\u7684","icon":"assets/customer-nav/person.png","activeIcon":"assets/customer-nav/person-active.png"}]},"subPackages":[{"root":"subpackages/staff","name":"staff","pages":["today/today","book/book"]}],"usingComponents":{}}')},Pr7i:function(F){F.exports=JSON.parse('{"backgroundColor":"#F6F1E6","titleBarColor":"#F6F1E6"}')}}]);
