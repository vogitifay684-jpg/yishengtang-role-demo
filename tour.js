'use strict';
const app=document.getElementById('app');
const groups=[['经营与管理',['founder','franchise','manager']],['服务与成长',['technician','trainer','finance']],['顾客与合作',['customer','prospect']]];
const STORE='yst-eight-roles-v1';
const initial={task:'new',result:'',finance:false,booking:'',reception:false,training:false,visit:''};
const outcomes={corrected:'已补录一笔到店记录，顾客人数已与交班表核对。',unresolved:'已核对交班表，仍有一笔到店记录待确认。'};
const slots=['10:00','11:00'],visits=['周三下午','周六上午'];
let state={...initial},resetOpen=false,noticeTimer;
try{
 const saved=JSON.parse(sessionStorage.getItem(STORE)||'null');
 if(saved){
  if(['sent','started'].includes(saved.task))state.task=saved.task;
  if(saved.task==='done'&&Object.prototype.hasOwnProperty.call(outcomes,saved.result)){state.task='done';state.result=saved.result;}
  for(const field of ['finance','reception','training'])state[field]=saved[field]===true;
  if(slots.includes(saved.booking))state.booking=saved.booking;
  if(visits.includes(saved.visit))state.visit=saved.visit;
 }
}catch{/* The tour also works without browser storage. */}
const link=(id,label)=>'<a class="jump" href="#/'+id+'">'+label+'</a>';
const button=(name,label,disabled=false)=>'<button type="button" class="primary" data-do="'+name+'" '+(disabled?'disabled':'')+'>'+label+'</button>';
const radio=(name,items)=>'<fieldset><legend>'+name+'</legend>'+items.map(([value,label])=>'<label class="option"><input type="radio" name="choice" value="'+value+'">'+label+'</label>').join('')+'</fieldset>';
const stats=items=>'<div class="metric">'+items.map(([l,v])=>'<div><span>'+l+'</span><strong>'+v+'</strong></div>').join('')+'</div>';
const note=s=>'<div class="note">'+s+'</div>';
const result=s=>'<div class="result">'+s+'</div>';
const next=(id,label)=>'<div class="next">'+link(id,label)+'</div>';
const key=()=>location.hash.replace(/^#\/?/,'');
function remember(){try{sessionStorage.setItem(STORE,JSON.stringify(state));}catch{}}
function toast(t){const n=document.getElementById('notice');n.textContent=t;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>{n.textContent='';},1950);}
function foot(){return '<footer class="footnote">全部为合成案例，操作只保存在当前浏览器会话。<br>'+(resetOpen?'<div class="confirm">清除这次体验进度？'+button('reset','确认重新开始')+'<button data-do="keep" class="ghost">保留进度</button></div>':'<button type="button" class="reset" data-do="reset-open">重新开始体验</button>')+'</footer>';}
function home(){
 const lists=groups.map(([label,ids])=>'<section class="group"><h3>'+label+'</h3>'+ids.map(id=>'<a class="role-row" href="#/'+id+'"><span><strong>'+roles[id].title+'</strong><small>'+roles[id].subtitle+'</small></span></a>').join('')+'</section>').join('');
 return '<section class="hero"><div class="hero-copy"><div class="eyebrow">彝生堂 · 云南本草</div><h1>门店的一天</h1><p>从老板的一项安排，看店长怎样接手、核实、反馈。</p><a class="primary" href="#/founder">从总部老板开始</a></div><img src="./care-space.jpg" alt="彝生堂服务空间的品牌用品"></section><div class="section-head"><h2>选一个岗位</h2><span class="sub">8 个体验入口</span></div><div class="directories">'+lists+'</div><a class="jump" href="./qr.png">查看并保存体验二维码</a>'+foot();
}
const scenarios={
 founder(){
  let progress=state.task==='new'?'<label class="option"><input type="checkbox" name="approve">请云岭店长核对到店记录</label><div class="actions">'+button('dispatch','确认安排',true)+'</div>':state.task==='done'?result('云岭店长已反馈：'+outcomes[state.result])+note(state.result==='corrected'?'次日跟进示例：补录已完成，下次日报对照签到表复查一次。':'次日跟进示例：保留待核实，继续核对原签到记录。'):result(state.task==='sent'?'已安排给云岭店长，等待接手。':'云岭店长正在核实。');
  return ['两家加盟店的经营日报',stats([['今天收款','¥560'],['新客 / 老客','3 / 2 人']])+'<p class="sub">昨天同期收款 ¥470，今天多 ¥90。今天退款 ¥200，净收款 ¥360。</p><h3>经营建议 · 核对云岭到店人数</h3><p>交班表记了 3 人，签到表只找到 2 人，差 1 人。原因待核实。</p>'+progress+next('manager','切到店长，看这项安排')];
 },
 franchise(){
  return ['云岭店今天经营得怎样',stats([['本店收款','¥320'],['退款','¥200'],['净收款','¥120']])+'<p>昨天同期收款 ¥210，今天多 ¥110。</p><details><summary>查看本店的收款构成</summary><p>两笔合成收款，现金 ¥120、微信登记 ¥200。另有一笔以往交易退款 ¥200。</p></details>'+note(state.finance?'财务已核对今天的三笔登记。':'日结仍待本店财务核对。')+next('finance','到财务岗位试一次日结核对')];
 },
 manager(){
  const pending=state.task==='new';let work;
  if(pending)work=note('目前没有收到总部这项安排。先到总部老板页勾选并派发，再回来接手。')+next('founder','去总部老板页安排任务');
  else if(state.task==='sent')work='<p>总部安排你核对交班表与签到表相差的 1 人。</p>'+button('start','接手这项任务');
  else if(state.task==='started')work='<p>对照门店原记录后，选择这次核实得到的结果。</p>'+radio('本次核查结果',[['corrected',outcomes.corrected],['unresolved',outcomes.unresolved]])+'<div class="actions">'+button('report','提交给总部',true)+'</div>';
  else work=result('已反馈给总部：'+outcomes[state.result])+next('founder','回总部查看反馈与次日建议');
  return ['总部交办 · 核对到店记录',work+'<details><summary>查看明天的接待安排</summary><p>'+(state.booking?'林女士 · 明天 '+state.booking+' · 云岭店 · 宁技师':'预约簿里还没有这位合成顾客的新预约。')+'</p>'+link('customer','体验顾客预约')+'</details>'];
 },
 technician(){
  return ['接待准备 · 下一位顾客','<p>今天 14:00 · 周女士 · 本草头部养护</p>'+stats([['剩余次卡','3 次'],['沟通偏好','安静休息']])+note('顾客已分享沟通和力度偏好，喜欢轻柔。生日未分享。')+(state.reception?result('接待提示已记下：先确认今天想用的力度，再留出安静休息的时间。'):'<details><summary>看一个开场示例</summary><p>“周女士，您上次喜欢轻柔一些，今天还是这个力度吗？”</p></details>'+button('prepare','记下本次接待提示'))+'<details><summary>查看明天分给我的预约</summary><p>'+(state.booking?'林女士 · '+state.booking+' · 本草头部养护':'暂无林女士的预约。')+'</p>'+link('customer','切到顾客，自选技师预约')+'</details>'];
 },
 trainer(){
  return ['给技师安排一次服务练习','<p>合成案例：顾客想安静休息，技师在等候阶段多次主动聊天。</p><h3>这一轮练什么</h3><p>开场先确认沟通偏好，等候时按约定查看舒适度。</p>'+(state.training?result('已记录本轮练习反馈：开场先问偏好，下一次接待再观察执行情况。'):'<label class="option"><input type="checkbox" name="approve">已观察本轮练习，需继续跟进</label><div class="actions">'+button('coach','保存练习反馈',true)+'</div>')+'<p class="sub">实操资格仍按品牌的正式考核程序认定。</p>'];
 },
 finance(){
  return ['云岭店 · 收款与退款核对',stats([['收款合计','¥320'],['退款','¥200'],['净收款','¥120']])+'<p>将交班单与下面三笔登记逐项对照。</p>'+(state.finance?result('三笔已核对，日结净额 ¥120。加盟店老板可以查看核对状态。'):'<fieldset><legend>本店登记</legend>'+['现金收款　¥120','微信收款登记　¥200','历史交易退款　¥200'].map((s,i)=>'<label class="option"><input name="ledger" type="checkbox" value="'+i+'">'+s+'</label>').join('')+'</fieldset><div class="actions">'+button('reconcile','确认本次核对',true)+'</div>')+next('franchise','回加盟店老板页看核对结果')];
 },
 prospect(){
  return ['了解合作，预约一次门店参观','<details><summary>品牌提供哪些支持</summary><p>门店服务流程、技师培训和开店后的经营跟进。具体支持以双方确认的方案为准。</p></details>'+(state.visit?result('已登记参观意向：'+state.visit+'。当前状态为等待对接。') : radio('选择方便的时间',visits.map(x=>[x,x]))+'<div class="actions">'+button('visit','登记参观意向',true)+'</div>')+'<p class="sub">这里仅演示本人的合作进度。</p>'];
 },
 customer(){
  return ['为自己约一次头疗','<p>云岭店 · 本草头部养护 · 宁技师</p>'+stats([['本人会员卡','3 次'],['本次示例价','¥100']])+(state.booking?result('下次预约：明天 '+state.booking+' · 宁技师。预约成功，会员卡尚未扣次。')+next('technician','到技师页查看明天的预约')+'<details><summary>更改这次行程</summary>'+button('cancel','取消这笔演示预约')+'</details>':radio('明天可约的时间',slots.map(x=>[x,x]))+'<div class="actions">'+button('book','确认预约宁技师',true)+'</div>')];
 }
};
function render(){
 const id=key();
 if(!Object.prototype.hasOwnProperty.call(roles,id)){document.title='彝生堂 · 门店岗位体验';app.innerHTML=home();return;}
 const r=roles[id],[title,body]=scenarios[id]();
 document.title=r.title+' · 彝生堂岗位体验';
 app.innerHTML='<nav class="page-top"><a class="navback" href="#/">‹　全部岗位</a><span class="tag">岗位演练</span></nav><section class="role-intro"><h1>'+r.title+'</h1><p>'+r.subtitle+'。</p></section><div class="columns"><article class="scenario"><div class="eyebrow">操作体验</div><h2>'+title+'</h2>'+body+'</article><aside class="side"><h2>我的职责</h2><ul>'+r.highlights.map(x=>'<li>'+x+'</li>').join('')+'</ul><h3>能看到的范围</h3><p class="sub">'+r.scope+'。'+r.boundary+'</p></aside></div><a class="soft" href="#/">换一个岗位体验</a>'+foot();
}
function readyChoice(){return app.querySelector('input[name="choice"]:checked')?.value||'';}
app.addEventListener('change',()=>{
 const check=app.querySelector('input[name="approve"]'),choices=app.querySelector('input[name="choice"]'),ledger=app.querySelectorAll('input[name="ledger"]');
 const ready=check?check.checked:choices?!!readyChoice():ledger.length>0&&[...ledger].every(x=>x.checked);
 const action=app.querySelector('.scenario button[data-do]');if(action)action.disabled=!ready;
});
app.addEventListener('click',event=>{
 const b=event.target.closest('button[data-do]');if(!b||b.disabled)return;
 const action=b.dataset.do,role=key(),choice=readyChoice(),checked=app.querySelector('input[name="approve"]')?.checked;
 let message='';
 if(action==='reset-open'){resetOpen=true;render();app.querySelector('[data-do="keep"]')?.focus();return;}
 if(action==='keep'){resetOpen=false;render();return;}
 if(action==='reset'){state={...initial};resetOpen=false;message='体验进度已清除';}
 else if(role==='founder'&&action==='dispatch'&&checked&&state.task==='new'){state.task='sent';message='已安排给云岭店长';}
 else if(role==='manager'&&action==='start'&&state.task==='sent'){state.task='started';message='已接手';}
 else if(role==='manager'&&action==='report'&&state.task==='started'&&Object.prototype.hasOwnProperty.call(outcomes,choice)){state.result=choice;state.task='done';message='结果已提交';}
 else if(role==='finance'&&action==='reconcile'&&app.querySelectorAll('[name="ledger"]:checked').length===3){state.finance=true;message='核对完成';}
 else if(role==='trainer'&&action==='coach'&&checked){state.training=true;message='已保存练习反馈';}
 else if(role==='technician'&&action==='prepare'){state.reception=true;message='接待提示已记下';}
 else if(role==='prospect'&&action==='visit'&&visits.includes(choice)){state.visit=choice;message='参观意向已登记';}
 else if(role==='customer'&&action==='book'&&!state.booking&&slots.includes(choice)){state.booking=choice;message='演示预约成功';}
 else if(role==='customer'&&action==='cancel'&&state.booking){state.booking='';message='演示预约已取消';}
 else return;
 remember();render();toast(message);
});
window.addEventListener('hashchange',()=>{resetOpen=false;render();window.scrollTo(0,0);});
render();
