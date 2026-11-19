"use strict";(window.mor_modules=window.mor_modules||[]).push([[931],{kikT:function(g,f,a){a.r(f),a.d(f,{$templates:function(){return O},defaultRender:function(){return j},isComplexComponents:function(){return R}});var t=a("mXGw"),r=a("20uZ"),p=a("P2AI"),h=a("HRO2"),c=a("RAy4"),C=a("hmPl"),B=a("2pVW"),A=a("aMrw"),y=a("eMCs"),_=a.n(y),x=a("vRpg"),w=a.n(x),b=a("rRSO"),d=a.n(b),D=a("v1RS"),F=a.n(D),z=a("Me5i"),P=a.n(z),o=a("54ue"),e=a.n(o),n=a("8ZQw"),i={};i.styleTagTransform=e(),i.setAttributes=F(),i.insert=d().bind(null,"head"),i.domAPI=w(),i.insertStyleElement=P();var v=_()(n.Z,i),Y=n.Z&&n.Z.locals?n.Z.locals:void 0,O={};function j(s){var M=s.message,E=s.phase,I=s.username,u=s.$id,Z=s.password,m=s.busy,T=s.otp,L=s.recoveryCode,J=s.activationTicket,W=s.secret,K=s.recoveryCodes,N=s.item,U=s.newPassword,q=s.evidence,k=s.roles;return t.createElement("tiga-page",null,t.createElement("tiga-view",{class:"auth-page"},t.createElement("tiga-view",{class:"auth-head"},t.createElement("tiga-image",{class:"auth-mark",src:"./assets/brand/wordmark-ink.png",mode:"widthFix"}),t.createElement("tiga-text",{class:"auth-kicker"},"YI SHENG TANG \xB7 \u8349\u672C\u5934\u7597"),t.createElement("tiga-text",{class:"auth-title"},"\u56DE\u5230\u5802\u91CC"),t.createElement("tiga-text",{class:"auth-sub"},"\u4E00\u65B9\u4E91\u5357\u672C\u8349\uFF0C\u4E00\u4EFD\u6258\u4E3E\u5B88\u62A4")),M?t.createElement("tiga-view",{class:"auth-notice"},r.Z.getString(M)):!1,E=="login"?t.createElement("tiga-view",{class:"auth-card"},t.createElement("tiga-view",{class:"auth-field"},t.createElement("tiga-text",{class:"auth-label"},"\u8D26\u53F7"),t.createElement("tiga-input",{class:"auth-input"+(" 59d14ab6175948148ed9d6399f3c3ec3"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),placeholder:"\u5458\u5DE5\u5DE5\u53F7\u6216\u987E\u5BA2\u8D26\u53F7","data-field":"username",value:r.Z.toJsonString(I,!1)},r.Z.registEvents([{name:"input",event:"input",catch:!1}],s,"59d14ab6175948148ed9d6399f3c3ec3"+(typeof index!="undefined"?index:"")))),t.createElement("tiga-view",{class:"auth-field"},t.createElement("tiga-text",{class:"auth-label"},"\u5BC6\u7801"),t.createElement("tiga-input",{class:"auth-input"+(" bcc76e3f4f9c4df08aab6ba4d2102cb6"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),password:!0,placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801","data-field":"password",value:r.Z.toJsonString(Z,!1)},r.Z.registEvents([{name:"input",event:"input",catch:!1}],s,"bcc76e3f4f9c4df08aab6ba4d2102cb6"+(typeof index!="undefined"?index:"")))),t.createElement("tiga-button",{class:"auth-submit"+(" 79ae589498d6426c9901119b50e224bb"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),loading:r.Z.toJsonString(m,!1),disabled:r.Z.toJsonString(m,!1)},"\u767B\u5F55",r.Z.registEvents([{name:"tap",event:"login",catch:!1}],s,"79ae589498d6426c9901119b50e224bb"+(typeof index!="undefined"?index:""))),t.createElement("tiga-text",{class:"auth-hint"},"\u8D26\u53F7\u7531\u95E8\u5E97\u53D1\u653E\uFF1B\u5FD8\u8BB0\u5BC6\u7801\u8BF7\u8054\u7CFB\u5E97\u957F")):!1,E=="mfa"?t.createElement("tiga-view",{class:"auth-card"},t.createElement("tiga-text",{class:"auth-card-title"},"\u5B89\u5168\u9A8C\u8BC1"),t.createElement("tiga-text",{class:"auth-card-sub"},"\u8F93\u5165\u9A8C\u8BC1\u5668\u91CC\u7684 6 \u4F4D\u6570\u5B57"),t.createElement("tiga-view",{class:"auth-field"},t.createElement("tiga-text",{class:"auth-label"},"\u9A8C\u8BC1\u7801"),t.createElement("tiga-input",{class:"auth-input auth-otp"+(" 647b7b63df6c46a684f8dc0e1f7deb22"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),type:"number",maxlength:"6",placeholder:"000000","data-field":"otp",value:r.Z.toJsonString(T,!1)},r.Z.registEvents([{name:"input",event:"input",catch:!1}],s,"647b7b63df6c46a684f8dc0e1f7deb22"+(typeof index!="undefined"?index:"")))),t.createElement("tiga-button",{class:"auth-submit"+(" c75586a0ad2a4e64809158e6eea547de"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),loading:r.Z.toJsonString(m,!1),disabled:r.Z.toJsonString(m,!1)},"\u6838\u9A8C\u5E76\u8FDB\u5165",r.Z.registEvents([{name:"tap",event:"verify",catch:!1}],s,"c75586a0ad2a4e64809158e6eea547de"+(typeof index!="undefined"?index:""))),t.createElement("tiga-view",{class:"auth-divider"}),t.createElement("tiga-view",{class:"auth-field"},t.createElement("tiga-text",{class:"auth-label"},"\u6062\u590D\u7801"),t.createElement("tiga-input",{class:"auth-input"+(" fc6c13774aef441a94e3b71e649c6ad0"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),placeholder:"32 \u4F4D\u6062\u590D\u7801","data-field":"recoveryCode",value:r.Z.toJsonString(L,!1)},r.Z.registEvents([{name:"input",event:"input",catch:!1}],s,"fc6c13774aef441a94e3b71e649c6ad0"+(typeof index!="undefined"?index:"")))),t.createElement("tiga-button",{class:"auth-link-btn"+(" f82bf42904d94a52b687c2b64a33d1ad"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),loading:r.Z.toJsonString(m,!1),disabled:r.Z.toJsonString(m,!1)},"\u7528\u6062\u590D\u7801\u91CD\u65B0\u7ED1\u5B9A",r.Z.registEvents([{name:"tap",event:"recover",catch:!1}],s,"f82bf42904d94a52b687c2b64a33d1ad"+(typeof index!="undefined"?index:"")))):!1,E=="enroll-start"?t.createElement("tiga-view",{class:"auth-card"},t.createElement("tiga-text",{class:"auth-card-title"},"\u91CD\u65B0\u7ED1\u5B9A\u9A8C\u8BC1\u5668"),t.createElement("tiga-text",{class:"auth-card-sub"},"\u9700\u8981\u5F53\u524D\u5BC6\u7801\uFF1B\u5982\u6709\u5F00\u901A\u5DE5\u5355\u8BF7\u4E00\u5E76\u586B\u5199"),t.createElement("tiga-view",{class:"auth-field"},t.createElement("tiga-text",{class:"auth-label"},"\u5F53\u524D\u5BC6\u7801"),t.createElement("tiga-input",{class:"auth-input"+(" d0a57903dddd4c269816294a82a4ffdc"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),password:!0,placeholder:"\u5F53\u524D\u5BC6\u7801","data-field":"password",value:r.Z.toJsonString(Z,!1)},r.Z.registEvents([{name:"input",event:"input",catch:!1}],s,"d0a57903dddd4c269816294a82a4ffdc"+(typeof index!="undefined"?index:"")))),t.createElement("tiga-view",{class:"auth-field"},t.createElement("tiga-text",{class:"auth-label"},"\u5F00\u901A\u5DE5\u5355"),t.createElement("tiga-input",{class:"auth-input"+(" 712a41abdbad467eb01e72aca117f232"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),placeholder:"\u9009\u586B","data-field":"activationTicket",value:r.Z.toJsonString(J,!1)},r.Z.registEvents([{name:"input",event:"input",catch:!1}],s,"712a41abdbad467eb01e72aca117f232"+(typeof index!="undefined"?index:"")))),t.createElement("tiga-button",{class:"auth-submit"+(" d244b30147c94def9afb2dcc6251f383"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),loading:r.Z.toJsonString(m,!1),disabled:r.Z.toJsonString(m,!1)},"\u751F\u6210\u4E00\u6B21\u6027\u7ED1\u5B9A\u5BC6\u94A5",r.Z.registEvents([{name:"tap",event:"startEnrollment",catch:!1}],s,"d244b30147c94def9afb2dcc6251f383"+(typeof index!="undefined"?index:"")))):!1,E=="enroll-confirm"?t.createElement("tiga-view",{class:"auth-card"},t.createElement("tiga-text",{class:"auth-card-title"},"\u53EA\u663E\u793A\u8FD9\u4E00\u6B21"),t.createElement("tiga-text",{class:"auth-card-sub"},"\u5F55\u5165\u9A8C\u8BC1\u5668\u540E\uFF0C\u8F93\u5165\u5F53\u524D\u7684 6 \u4F4D\u9A8C\u8BC1\u7801"),t.createElement("tiga-text",{class:"auth-secret"},r.Z.getString(W)),t.createElement("tiga-view",{class:"auth-field"},t.createElement("tiga-text",{class:"auth-label"},"\u9A8C\u8BC1\u7801"),t.createElement("tiga-input",{class:"auth-input auth-otp"+(" 3464f5e5c7a9414ebdfc8ff48312f017"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),type:"number",maxlength:"6",placeholder:"000000","data-field":"otp",value:r.Z.toJsonString(T,!1)},r.Z.registEvents([{name:"input",event:"input",catch:!1}],s,"3464f5e5c7a9414ebdfc8ff48312f017"+(typeof index!="undefined"?index:"")))),t.createElement("tiga-button",{class:"auth-submit"+(" 176e0a85e1994f5e9e947b7fb72138ca"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),loading:r.Z.toJsonString(m,!1),disabled:r.Z.toJsonString(m,!1)},"\u786E\u8BA4\u7ED1\u5B9A",r.Z.registEvents([{name:"tap",event:"confirmEnrollment",catch:!1}],s,"176e0a85e1994f5e9e947b7fb72138ca"+(typeof index!="undefined"?index:"")))):!1,E=="recovery-codes"?t.createElement("tiga-view",{class:"auth-card"},t.createElement("tiga-text",{class:"auth-card-title"},"\u4FDD\u5B58\u6062\u590D\u7801"),t.createElement("tiga-text",{class:"auth-card-sub"},"\u4E0D\u4F1A\u518D\u6B21\u5B8C\u6574\u663E\u793A\uFF0C\u8BF7\u79BB\u7EBF\u4FDD\u5B58"),t.createElement("tiga-view",{class:"auth-codes"},r.Z.getForValue(K).map(function(l,S){return t.createElement("tiga-text",{class:"auth-code",key:r.Z.toJsonString(l,!1)},r.Z.getString(l))})),t.createElement("tiga-button",{class:"auth-submit"+(" dc5bc6324491411aaed181acb6788975"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),loading:r.Z.toJsonString(m,!1),disabled:r.Z.toJsonString(m,!1)},"\u6211\u5DF2\u5B89\u5168\u4FDD\u5B58",r.Z.registEvents([{name:"tap",event:"acknowledgeRecoveryCodes",catch:!1}],s,"dc5bc6324491411aaed181acb6788975"+(typeof index!="undefined"?index:"")))):!1,E=="password"?t.createElement("tiga-view",{class:"auth-card"},t.createElement("tiga-text",{class:"auth-card-title"},"\u9996\u6B21\u767B\u5F55\u8BF7\u6539\u5BC6\u7801"),t.createElement("tiga-text",{class:"auth-card-sub"},"\u65B0\u5BC6\u7801\u81F3\u5C11 16 \u4F4D"),t.createElement("tiga-view",{class:"auth-field"},t.createElement("tiga-text",{class:"auth-label"},"\u4E34\u65F6\u5BC6\u7801"),t.createElement("tiga-input",{class:"auth-input"+(" 32d57ac8ed024a989240f0f65d6fbb2f"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),password:!0,placeholder:"\u5F53\u524D\u4E34\u65F6\u5BC6\u7801","data-field":"password",value:r.Z.toJsonString(Z,!1)},r.Z.registEvents([{name:"input",event:"input",catch:!1}],s,"32d57ac8ed024a989240f0f65d6fbb2f"+(typeof index!="undefined"?index:"")))),t.createElement("tiga-view",{class:"auth-field"},t.createElement("tiga-text",{class:"auth-label"},"\u65B0\u5BC6\u7801"),t.createElement("tiga-input",{class:"auth-input"+(" 6d81ee87bed9416bb567adc052a0b39e"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),password:!0,placeholder:"\u81F3\u5C11 16 \u4F4D","data-field":"newPassword",value:r.Z.toJsonString(U,!1)},r.Z.registEvents([{name:"input",event:"input",catch:!1}],s,"6d81ee87bed9416bb567adc052a0b39e"+(typeof index!="undefined"?index:"")))),t.createElement("tiga-view",{class:"auth-field"},t.createElement("tiga-text",{class:"auth-label"},"\u6539\u5BC6\u4F9D\u636E"),t.createElement("tiga-input",{class:"auth-input"+(" 7eefc48c668c4b49aaeaa29e0718adee"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),placeholder:"\u9009\u586B","data-field":"evidence",value:r.Z.toJsonString(q,!1)},r.Z.registEvents([{name:"input",event:"input",catch:!1}],s,"7eefc48c668c4b49aaeaa29e0718adee"+(typeof index!="undefined"?index:"")))),t.createElement("tiga-button",{class:"auth-submit"+(" 678f6dbc6cc743e7b1d13924f7fb09ab"+(typeof index!="undefined"?index:"")+(" comp-id-"+u)),loading:r.Z.toJsonString(m,!1),disabled:r.Z.toJsonString(m,!1)},"\u4FEE\u6539\u5E76\u9000\u51FA",r.Z.registEvents([{name:"tap",event:"changePassword",catch:!1}],s,"678f6dbc6cc743e7b1d13924f7fb09ab"+(typeof index!="undefined"?index:"")))):!1,E=="login"&&k!==null&&k!==void 0&&k.length?t.createElement("tiga-view",{class:"auth-demo"},t.createElement("tiga-text",{class:"auth-demo-title"},"\u5408\u6210\u6F14\u793A\u5165\u53E3"),t.createElement("tiga-text",{class:"auth-demo-sub"},"\u4EC5\u670D\u52A1\u7AEF\u6F14\u793A\u914D\u7F6E\u5F00\u542F\u65F6\u53EF\u7528\uFF0C\u4E0D\u4EE3\u8868\u771F\u5B9E\u5FAE\u4FE1\u767B\u5F55\u3002"),t.createElement("tiga-view",{class:"auth-demo-list"},r.Z.getForValue(k).map(function(l,S){return t.createElement("tiga-button",{class:"auth-demo-btn"+(" 22d45e9619754c898c06cfd8946fcff0"+(typeof S!="undefined"?S:"")+(" comp-id-"+u)),"data-role":r.Z.toJsonString(l==null?void 0:l.id,!0),key:r.Z.toJsonString(l==null?void 0:l.id,!1)},r.Z.getString(l==null?void 0:l.title),r.Z.registEvents([{name:"tap",event:"demo",catch:!1}],s,"22d45e9619754c898c06cfd8946fcff0"+(typeof S!="undefined"?S:"")))}))):!1,t.createElement("tiga-view",{class:"auth-foot"},"\u5B89\u5168\u767B\u5F55 \xB7 \u8EAB\u4EFD\u7531\u670D\u52A1\u7AEF\u786E\u8BA4")))}var R=!0},uSzZ:function(g,f,a){a.r(f),a.d(f,{default:function(){return P}});var t=a("6Ydh"),r=a("DajF"),p=a("MM43"),h=a("4kMG"),c=a("8mQb"),C=a("bmIf"),B=a("tTth"),A=a("8j+p"),y=a("mXGw"),_=a("kvBl"),x=a("20uZ"),w=a("MMlp").ik,b=a("kikT"),d=a("2CFj");Page({data:{phase:"login",username:"",password:"",otp:"",recoveryCode:"",newPassword:"",evidence:"",activationTicket:"",secret:"",recoveryCodes:[],roles:[],message:"",busy:!1},requestSeq:0,onLoad:function(){var e=this;this.restore().finally(function(){return e.loadDemoRoles()})},onHide:function(){this.requestSeq++,this.setData({password:"",newPassword:"",otp:"",secret:"",recoveryCode:"",recoveryCodes:[],activationTicket:""})},input:function(e){this.setData((0,_.Z)({},e.currentTarget.dataset.field,e.detail.value))},loadDemoRoles:function(){var e=this;d.request("/api/presentation/config").then(function(n){n.synthetic===!0&&Array.isArray(n.roles)&&e.setData({roles:n.roles})}).catch(function(){})},restore:function(){var e=this,n=++this.requestSeq;return d.restoreSession().then(function(i){n===e.requestSeq&&e.afterAuth(i)}).catch(function(i){n===e.requestSeq&&i.code!=="STALE_RESPONSE"&&e.setData({phase:"login"})})},afterAuth:function(e){if(!e||!e.actor)return this.setData({phase:"login",message:"\u670D\u52A1\u5668\u6CA1\u6709\u5EFA\u7ACB\u6709\u6548\u8EAB\u4EFD"});if(e.forcePasswordChange||e.actor.mustChangePassword)return this.setData({phase:"password",message:"\u8FD9\u662F\u4E34\u65F6\u5BC6\u7801\uFF0C\u8BF7\u5148\u8BBE\u7F6E\u53EA\u6709\u672C\u4EBA\u77E5\u9053\u7684\u65B0\u5BC6\u7801"});this.enter(e.actor)},demo:function(e){var n=this;if(!this.data.busy){var i=++this.requestSeq;this.setData({busy:!0,message:"\u6B63\u5728\u8FDB\u5165\u5408\u6210\u6F14\u793A\u2026"}),d.loginDemo(e.currentTarget.dataset.role).then(function(v){i===n.requestSeq&&n.afterAuth(v)}).catch(function(v){i===n.requestSeq&&n.setData({message:v.message})}).finally(function(){i===n.requestSeq&&n.setData({busy:!1})})}},login:function(){var e=this;if(!this.data.busy){if(!this.data.username||!this.data.password)return this.setData({message:"\u8BF7\u8F93\u5165\u8D26\u53F7\u548C\u5BC6\u7801"});var n=++this.requestSeq;this.setData({busy:!0,message:"\u6B63\u5728\u767B\u5F55\u2026"}),d.login(this.data.username.trim(),this.data.password).then(function(i){n===e.requestSeq&&(i.mfaRequired?e.setData({phase:i.next==="enroll"?"enroll-start":"mfa",message:"\u8D26\u53F7\u9700\u8981\u5B89\u5168\u9A8C\u8BC1\uFF0C\u8BF7\u8F93\u5165\u9A8C\u8BC1\u5668\u4E2D\u76846\u4F4D\u9A8C\u8BC1\u7801"}):e.afterAuth(i))}).catch(function(i){n===e.requestSeq&&e.setData({message:i.message})}).finally(function(){n===e.requestSeq&&e.setData({busy:!1})})}},verify:function(){var e=this;if(!/^\d{6}$/.test(this.data.otp))return this.setData({message:"\u8BF7\u8F93\u51656\u4F4D\u9A8C\u8BC1\u7801"});var n=++this.requestSeq;this.setData({busy:!0,message:"\u6B63\u5728\u6838\u9A8C\u5B89\u5168\u9A8C\u8BC1\u2026"}),d.verifyMfa(this.data.otp).then(function(i){n===e.requestSeq&&(e.setData({otp:""}),e.afterAuth(i))}).catch(function(i){n===e.requestSeq&&e.setData({message:i.message})}).finally(function(){n===e.requestSeq&&e.setData({busy:!1})})},recover:function(){var e=this;if(!this.data.password||!/^[a-f0-9]{32}$/.test(this.data.recoveryCode))return this.setData({message:"\u8BF7\u8F93\u5165\u5F53\u524D\u5BC6\u7801\u548C32\u4F4D\u6062\u590D\u7801"});var n=++this.requestSeq;this.setData({busy:!0,message:"\u6B63\u5728\u6838\u9A8C\u6062\u590D\u7801\u2026"}),d.recoverMfa({password:this.data.password,recovery_code:this.data.recoveryCode}).then(function(){n===e.requestSeq&&e.setData({recoveryCode:"",phase:"enroll-start",message:"\u6062\u590D\u7801\u5DF2\u4F7F\u7528\uFF0C\u8BF7\u7ACB\u5373\u91CD\u65B0\u7ED1\u5B9A\u9A8C\u8BC1\u5668"})}).catch(function(i){n===e.requestSeq&&e.setData({message:i.message})}).finally(function(){n===e.requestSeq&&e.setData({busy:!1})})},startEnrollment:function(){var e=this;if(!this.data.password)return this.setData({message:"\u8BF7\u8F93\u5165\u5F53\u524D\u5BC6\u7801"});var n=++this.requestSeq;this.setData({busy:!0,message:"\u6B63\u5728\u51C6\u5907\u65B0\u7684\u9A8C\u8BC1\u5668\u2026"}),d.startEnrollment(Object.assign({password:this.data.password},this.data.activationTicket?{activation_ticket:this.data.activationTicket}:{})).then(function(i){n===e.requestSeq&&e.setData({phase:"enroll-confirm",secret:i.secret,message:"\u4EC5\u5728\u5F53\u524D\u9875\u9762\u663E\u793A\u4E00\u6B21\u5BC6\u94A5\uFF0C\u8BF7\u5F55\u5165\u9A8C\u8BC1\u5668\u540E\u8F93\u5165\u9A8C\u8BC1\u7801"})}).catch(function(i){n===e.requestSeq&&e.setData({message:i.message})}).finally(function(){n===e.requestSeq&&e.setData({busy:!1})})},confirmEnrollment:function(){var e=this;if(!/^\d{6}$/.test(this.data.otp))return this.setData({message:"\u8BF7\u8F93\u51656\u4F4D\u9A8C\u8BC1\u7801"});var n=++this.requestSeq;return this.setData({busy:!0,message:"\u6B63\u5728\u786E\u8BA4\u9A8C\u8BC1\u5668\u2026"}),d.confirmEnrollment(this.data.otp).then(function(i){if(n===e.requestSeq){var v=Array.isArray(i.recovery_codes)?i.recovery_codes:[];e.setData({secret:"",otp:"",recoveryCodes:v,phase:"recovery-codes",message:v.length?"\u6062\u590D\u7801\u53EA\u663E\u793A\u8FD9\u4E00\u6B21\uFF0C\u8BF7\u79BB\u7EBF\u4FDD\u5B58\u540E\u786E\u8BA4":"\u9A8C\u8BC1\u5668\u5DF2\u7ED1\u5B9A\uFF0C\u8BF7\u786E\u8BA4\u540E\u91CD\u65B0\u767B\u5F55"})}}).catch(function(i){n===e.requestSeq&&e.setData({message:i.message})}).finally(function(){n===e.requestSeq&&e.setData({busy:!1})})},acknowledgeRecoveryCodes:function(){var e=Array.isArray(this.data.recoveryCodes)&&this.data.recoveryCodes.length>0;d.clearLocalState(),this.setData({recoveryCodes:[],password:"",newPassword:"",recoveryCode:"",activationTicket:"",secret:"",otp:"",phase:"login",message:e?"\u6062\u590D\u7801\u5DF2\u786E\u8BA4\u4FDD\u5B58\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55":"\u672A\u6536\u5230\u6062\u590D\u7801\uFF0C\u5F53\u524D\u4F1A\u8BDD\u5DF2\u9000\u51FA\uFF0C\u8BF7\u8054\u7CFB\u7EF4\u62A4\u4EBA\u5458"})},changePassword:function(){var e=this;if(this.data.newPassword.length<16)return this.setData({message:"\u65B0\u5BC6\u7801\u81F3\u5C1116\u4F4D"});var n=++this.requestSeq;this.setData({busy:!0,message:"\u6B63\u5728\u4FEE\u6539\u5BC6\u7801\u2026"}),d.changePassword({current_password:this.data.password,new_password:this.data.newPassword,evidence_reference:this.data.evidence||"\u672C\u4EBA\u5728\u539F\u751F\u5165\u53E3\u5B8C\u6210\u9996\u6B21\u767B\u5F55\u6539\u5BC6"}).then(function(){n===e.requestSeq&&e.setData({phase:"login",password:"",newPassword:"",message:"\u5BC6\u7801\u5DF2\u4FEE\u6539\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"})}).catch(function(i){n===e.requestSeq&&e.setData({message:i.message})}).finally(function(){n===e.requestSeq&&e.setData({busy:!1})})},enter:function(e){if(!e||!e.role)return this.setData({phase:"login",message:"\u8EAB\u4EFD\u4FE1\u606F\u4E0D\u5B8C\u6574\uFF0C\u672A\u8FDB\u5165\u4E1A\u52A1\u9875\u9762"});w.reLaunch({url:e.role==="customer"?"/pages/home/home":["founder","franchise"].includes(e.role)?"/pages/owner/owner":"/pages/work/work"})}});var D=x.Z.Page(b,x.Z.mergeConfig(a("v9Xe"),a("dkYm")));function F(o,e,n){return e=(0,c.Z)(e),(0,p.Z)(o,(0,h.Z)()?Reflect.construct(e,n||[],(0,c.Z)(o).constructor):e.apply(o,n))}var z=function(o){function e(){return(0,t.Z)(this,e),F(this,e,arguments)}return(0,C.Z)(e,o),(0,r.Z)(e,[{key:"render",value:function(){return y.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},y.createElement(D,null))}}])}(y.Component),P=z},yYJO:function(g,f,a){var t=a("Ba9y"),r=a.n(t),p=a("Ai0b"),h=a.n(p),c=h()(r());c.push([g.id,`tiga-page{min-height:100vh;background:var(--yst-canvas);color:var(--yst-ink);font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}tiga-view,tiga-text,tiga-button{box-sizing:border-box}tiga-button{margin:0;padding:0;line-height:1;background:transparent;border:0}tiga-button::after{border:0}.page{min-height:100vh;padding:1.0625rem 0.875rem 4.6875rem}.hero{background:var(--yst-pine);color:var(--yst-white);border-radius:0.75rem;padding:1.1875rem 1rem;margin-bottom:0.75rem}.eyebrow{font-size:0.71875rem;opacity:.78;letter-spacing:0.09375rem}.title{display:block;font-size:1.4375rem;font-weight:700;margin:0.4375rem 0}.subtitle{font-size:0.8125rem;line-height:1.7;opacity:.9}.section-title{display:block;font-weight:700;font-size:1rem;margin:0.9375rem 0 0.5rem}.card{background:var(--yst-white);border-radius:0.625rem;padding:0.8125rem;margin-bottom:0.5625rem;box-shadow:0 0.25rem 0.75rem rgba(32,53,46,.06)}.muted{color:var(--yst-muted);font-size:0.75rem;line-height:1.6}.primary-btn{height:2.3125rem;padding:0 0.9375rem;border-radius:31.21875rem;background:var(--yst-pine);color:var(--yst-white);font-size:0.8125rem;font-weight:600}.outline-btn{height:2.125rem;padding:0 0.875rem;border:0.03125rem solid var(--yst-line-strong);border-radius:31.21875rem;color:var(--yst-pine);font-size:0.78125rem}.row{display:flex;align-items:center;justify-content:space-between}.badge{display:inline-block;background:var(--yst-soft);color:var(--yst-pine);border-radius:31.21875rem;padding:0.25rem 0.5rem;font-size:0.6875rem}.metric{font-size:1.3125rem;font-weight:700;color:var(--yst-pine)}.bottom-space{height:0.625rem}

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
`,""]),f.Z=c},"8ZQw":function(g,f,a){var t=a("Ba9y"),r=a.n(t),p=a("Ai0b"),h=a.n(p),c=h()(r());c.push([g.id,`.auth-page{
  min-height:100vh;background:var(--yst-canvas);padding:3.75rem 1.375rem 1.875rem;
  display:flex;flex-direction:column;box-sizing:border-box;
}
.auth-head{display:flex;flex-direction:column;gap:0.4375rem}
.auth-mark{width:4.6875rem;margin-bottom:0.5625rem}
.auth-kicker{font-size:0.59375rem;letter-spacing:0.15625rem;color:var(--yst-muted)}
.auth-title{
  font-family:"YS Serif","Songti SC",serif;font-size:2.375rem;line-height:1.2;
  font-weight:600;letter-spacing:0.0625rem;color:var(--yst-ink);margin-top:0.125rem;
}
.auth-sub{font-size:0.75rem;color:var(--yst-muted);letter-spacing:0.03125rem}

.auth-notice{
  margin-top:1.125rem;padding:0.625rem 0.75rem;border-radius:0.5rem;
  background:rgba(179,147,89,.10);border:0.03125rem solid rgba(179,147,89,.28);
  color:var(--yst-copper-deep);font-size:0.75rem;line-height:1.6;
}

.auth-card{
  margin-top:1.375rem;background:var(--yst-white);border:0.03125rem solid rgba(22,60,49,.08);
  border-radius:1rem;padding:1.125rem 1rem 1rem;display:flex;flex-direction:column;
}
.auth-card-title{font-family:"YS Serif","Songti SC",serif;font-size:1.1875rem;font-weight:600;letter-spacing:0.01563rem}
.auth-card-sub{font-size:0.71875rem;color:var(--yst-muted);margin-top:0.25rem;line-height:1.6}

.auth-field{margin-top:0.9375rem;display:flex;flex-direction:column;gap:0.375rem}
.auth-label{font-size:0.65625rem;letter-spacing:0.09375rem;color:var(--yst-muted)}
.auth-input{
  height:3rem;line-height:3rem;padding:0 0.8125rem;border-radius:0.5625rem;
  background:var(--yst-paper-2);border:0.03125rem solid rgba(22,60,49,.12);
  font-size:0.9375rem;color:var(--yst-ink);
}
.auth-otp{font-family:"YS Serif","Songti SC",serif;font-size:1.25rem;letter-spacing:0.375rem;text-align:center}

.auth-submit{
  margin-top:1.1875rem;height:3.125rem;border-radius:31.21875rem;background:var(--yst-pine);color:var(--yst-canvas);
  font-size:0.9375rem;font-weight:600;letter-spacing:0.09375rem;display:flex;align-items:center;justify-content:center;
}
.auth-submit:active{opacity:.86}
.auth-hint{font-size:0.65625rem;color:var(--yst-muted-2);text-align:center;margin-top:0.6875rem;letter-spacing:0.01563rem}

.auth-divider{height:0.03125rem;background:rgba(22,60,49,.08);margin:1.0625rem 0 0.1875rem}
.auth-link-btn{
  margin-top:0.8125rem;height:2.625rem;border-radius:31.21875rem;background:transparent;
  border:0.03125rem solid rgba(22,60,49,.24);color:var(--yst-pine);font-size:0.78125rem;
  display:flex;align-items:center;justify-content:center;
}

.auth-secret{
  display:block;margin-top:0.8125rem;padding:0.75rem;background:var(--yst-paper-2);border:0.03125rem dashed rgba(179,147,89,.5);
  border-radius:0.5rem;color:var(--yst-copper-deep);font-family:monospace;font-size:0.8125rem;word-break:break-all;line-height:1.7;
}
.auth-codes{display:flex;flex-wrap:wrap;gap:0.4375rem;margin-top:0.8125rem}
.auth-code{
  padding:0.4375rem 0.5625rem;background:var(--yst-paper-2);border:0.03125rem solid rgba(22,60,49,.12);
  border-radius:0.375rem;color:var(--yst-pine);font-family:monospace;font-size:0.78125rem;letter-spacing:0.03125rem;
}

.auth-demo{margin-top:1.75rem}
.auth-demo-title{font-size:0.625rem;letter-spacing:0.09375rem;color:var(--yst-muted);display:block}
.auth-demo-sub{display:block;font-size:0.65625rem;color:var(--yst-muted-2);margin-top:0.25rem;line-height:1.6}
.auth-demo-list{display:flex;flex-wrap:wrap;gap:0.4375rem;margin-top:0.625rem}
.auth-demo-btn{
  min-height:2rem;padding:0 0.8125rem;border-radius:31.21875rem;background:transparent;
  border:0.03125rem dashed rgba(22,60,49,.22);color:var(--yst-muted);font-size:0.71875rem;
  display:flex;align-items:center;justify-content:center;
}

.auth-foot{margin-top:auto;padding-top:1.75rem;text-align:center;font-size:0.625rem;color:var(--yst-muted-2);letter-spacing:0.0625rem}
`,""]),f.Z=c},P2AI:function(g,f,a){var t=a("eMCs"),r=a.n(t),p=a("vRpg"),h=a.n(p),c=a("rRSO"),C=a.n(c),B=a("v1RS"),A=a.n(B),y=a("Me5i"),_=a.n(y),x=a("54ue"),w=a.n(x),b=a("yYJO"),d={};d.styleTagTransform=w(),d.setAttributes=A(),d.insert=C().bind(null,"head"),d.domAPI=h(),d.insertStyleElement=_();var D=r()(b.Z,d),F=b.Z&&b.Z.locals?b.Z.locals:void 0},v9Xe:function(g){g.exports=JSON.parse('{"pages":["pages/auth/auth","pages/home/home","pages/booking/booking","pages/waitlist/waitlist","pages/rights/rights","pages/profile/profile","pages/member-intake/member-intake","pages/memory/memory","pages/ask/ask","pages/directory/directory","pages/work/work","pages/waitlist-manage/waitlist-manage","pages/service/service","pages/learning/learning","pages/owner/owner","pages/maintenance/maintenance","pages/tasks/tasks","pages/feedback/feedback","pages/recovery/recovery","pages/records/records","pages/management/management","pages/settlement/settlement","pages/daily/daily","pages/feedback-care/feedback-care","pages/reminders/reminders","pages/care/care"],"window":{"backgroundColor":"#F6F1E6","defaultTitle":"\u5F5D\u751F\u5802","titleBarColor":"#F6F1E6"},"style":"v2","lazyCodeLoading":"requiredComponents","tabBar":{"selectedColor":"#163C31","backgroundColor":"#FFFDF8","borderStyle":"white","textColor":"#77846C","items":[{"pagePath":"pages/home/home","name":"\u9996\u9875","icon":"assets/customer-nav/home.png","activeIcon":"assets/customer-nav/home-active.png"},{"pagePath":"pages/booking/booking","name":"\u9884\u7EA6","icon":"assets/customer-nav/calendar.png","activeIcon":"assets/customer-nav/calendar-active.png"},{"pagePath":"pages/rights/rights","name":"\u6743\u76CA","icon":"assets/customer-nav/card.png","activeIcon":"assets/customer-nav/card-active.png"},{"pagePath":"pages/profile/profile","name":"\u6211\u7684","icon":"assets/customer-nav/person.png","activeIcon":"assets/customer-nav/person-active.png"}]},"subPackages":[{"root":"subpackages/staff","name":"staff","pages":["today/today","book/book"]}],"usingComponents":{}}')},dkYm:function(g){g.exports=JSON.parse('{"backgroundColor":"#F6F1E6","defaultTitle":"\u767B\u5F55\u5F5D\u751F\u5802","titleBarColor":"#F6F1E6"}')}}]);
