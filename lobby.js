const groups=[
 {id:'store',title:'门店服务',roles:[
 ['customer','顾客','填写会员资料、选技师预约，服务结束后评分。','会员资料'],
 ['technician','头疗技师','查看下一位顾客的接待资料，签到、服务并记录结果。','接待资料'],
 ['receptionist','前台','按日期看待到店顾客，核对预约并登记到店。','当日接待'],
 ['manager','店长','看总部派来的待办，安排门店工作并填写结果。','服务交付']]},
 {id:'business',title:'品牌经营',roles:[
 ['founder','总部老板','看各店收款与客流，查看建议，决定交给谁跟进。','今日工作'],
 ['franchise','加盟店老板','看自己门店的经营日报，跟进总部交办事项。','总部核查'],
 ['prospect','意向合伙人','查看自己获准了解的合作进度与资料。','合作进度']]},
 {id:'support',title:'支持与维护',roles:[
 ['trainer','培训老师','进入学习安排与课程，在授权范围内查看培训记录。','学习安排'],
 ['finance','财务','核对服务结算、储值扣款和次卡记录。','服务结算'],
 ['maintenance','维护负责人','查看运行状态、异常和修复交接记录。','维护状态']]}];
const $=s=>document.querySelector(s),roles=groups.flatMap(g=>g.roles),ids=new Set(roles.map(r=>r[0]));
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n;}
function preview(id,title,detail){const path='./screens/'+id+(detail==='web'?'-web':detail?'-action':'')+'.webp';$('#viewer').classList.toggle('wide',detail==='web');$('#image-title').textContent=title;$('#large').src=path;$('#large').alt=title+'实际界面';$('#viewer').showModal();}
const showRole=r=>{
 const [id,title,desc,second]=r,article=el('article','role'),body=el('div'),actions=el('div','buttons');article.id='role-'+id;
 const open=el('button','open','进入工作台'),secondary=el('button','secondary','看'+second),thumb=el('button','thumb'),image=el('img');
 open.onclick=()=>enter(id);secondary.onclick=()=>preview(id,title+' · '+second,true);thumb.onclick=()=>preview(id,title+' · 首页',false);thumb.setAttribute('aria-label','放大'+title+'首页');image.src='./screens/'+id+'.webp';image.alt=title+'首页';image.loading='lazy';thumb.append(image);
 const web=el('button','secondary','看网页端');web.onclick=()=>preview(id,title+' · 网页端','web');actions.append(open,secondary,web);body.append(el('h3','',title),el('p','',desc),actions);article.append(body,thumb);return article;
};
for(const id of ['founder','franchise','manager','technician','customer','receptionist','trainer','finance','prospect','maintenance']){const r=roles.find(r=>r[0]===id),b=el('button','quick-role',r[1]);b.onclick=()=>enter(id);$('#quick').append(b);}
for(const group of groups){const section=el('section','group'),list=el('div','list');section.id=group.id;section.append(el('h2','',group.title));group.roles.forEach(r=>list.append(showRole(r)));section.append(list);$('#directory').append(section);}
$('#close').onclick=()=>$('#viewer').close();$('#dismiss').onclick=()=>$('#launch').close();
let attempt=0;$('#launch').addEventListener('close',()=>attempt++);
const json=async(url,headers={},timeout=6500)=>{const a=new AbortController(),timer=setTimeout(()=>a.abort(),timeout);try{const r=await fetch(url,{headers,cache:'no-store',signal:a.signal,credentials:'omit'});if(!r.ok)throw Error('offline');return await r.json();}finally{clearTimeout(timer);}};
async function enter(id){if(!ids.has(id))return;const serial=++attempt,dlg=$('#launch');$('#notice').textContent='正在连接合成门店…';$('#retry').hidden=true;if(!dlg.open)dlg.showModal();$('#retry').onclick=()=>enter(id);
 try{const source=['./session.json?t='+Date.now(),'https://api.github.com/repos/vogitifay684-jpg/yishengtang-role-demo/contents/session.json?ref=main&t='+Date.now()];let expired=false;
 for(const url of source){try{const data=await json(url,url.includes('api.github')?{Accept:'application/vnd.github.raw+json'}:{});if(Date.now()>data.expiresAt){expired=true;continue;}if(!/^https:\/\/[a-f0-9]+\.app\.lhr\.life$/.test(data.host)||!/^\/enter\/[a-f0-9]{32}$/.test(data.path))continue;const h=await json(data.host+'/preview-status');if(h.ready&&serial===attempt){location.assign(data.host+data.path+'?role='+id);return;}}catch{}}
 if(serial===attempt){$('#notice').textContent=expired?'本轮在线体验已结束。各岗位的实际界面仍可点开查看。':'暂时连不上演示门店。可以稍后重试，也可以关闭此窗口，先查看岗位首页和操作页原图。';$('#retry').hidden=false;}
 }catch{if(serial===attempt){$('#notice').textContent='连接失败，请重试。';$('#retry').hidden=false;}}}
const hash=location.hash.replace(/^#\/?/,'');if(ids.has(hash))requestAnimationFrame(()=>document.getElementById('role-'+hash)?.scrollIntoView());
const requested=new URLSearchParams(location.search).get('enter');if(ids.has(requested))enter(requested);
