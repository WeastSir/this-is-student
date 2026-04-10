// ===== THIS IS STUDENT — CORE ENGINE v3.0 =====
// ============================================================
// Auth is now handled by users.js (Supabase)
// ============================================================

// Close dropdown when clicking outside
document.addEventListener('click',function(e){
  const menu=document.getElementById('accountMenu');
  const drop=document.getElementById('accountDrop');
  if(menu&&drop&&!menu.contains(e.target)){drop.classList.remove('show');}
});

// ARTICLE MODAL
function showArt(key){
  // Search all course article databases
  let a=null;
  if(window.TIS&&window.TIS.courses){
    for(const cid in window.TIS.courses){
      const c=window.TIS.courses[cid];
      if(c.articles&&c.articles[key]){a=c.articles[key];break;}
    }
  }
  if(!a)return;
  document.getElementById('artTitle').textContent=a[0];
  const fedlex=a[3]||('https://www.fedlex.admin.ch/eli/cc/11/529_488_529/de#a'+key);
  document.getElementById('artRef').innerHTML='<a href="'+fedlex+'" target="_blank">Quelle öffnen →</a>';
  document.getElementById('artText').textContent=a[1];
  document.getElementById('artExplain').innerHTML='<strong>Einfach erklärt:</strong> '+a[2];
  document.getElementById('artModal').style.display='block';
  document.body.style.overflow='hidden';
}
function closeArt(){document.getElementById('artModal').style.display='none';document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeArt();});

// Article badge click handler
document.addEventListener('click',function(e){
  const el=e.target.closest('.b');if(!el)return;
  const txt=el.textContent.trim();
  if(!window.TIS||!window.TIS.courses)return;
  
  // Try SchKG articles
  let m=txt.match(/(?:Artikel|Art\.)\s*(\d+[a-z]?)/);
  if(m){
    for(const cid in window.TIS.courses){
      const c=window.TIS.courses[cid];
      if(c.articles){
        // Try direct key
        if(c.articles[m[1]]){e.preventDefault();e.stopPropagation();showArt(m[1]);return;}
        // Try with prefix
        const prefixes=['or','arg','lgav','glg','dsg'];
        for(const p of prefixes){
          if(c.articles[p+m[1]]){e.preventDefault();e.stopPropagation();showArtPrefixed(p+m[1],c.articles);return;}
        }
      }
    }
  }
  // Try OR/ArG/L-GAV patterns
  const patterns=[
    [/Art(?:ikel)?\.?\s*(\d+[a-z]?)\s*(?:Abs\.?\s*\d+)?\s*OR/,'or'],
    [/Art(?:ikel)?\.?\s*(\d+[a-z]?)\s*(?:Abs\.?\s*\d+)?\s*ArG(?!V)/,'arg'],
    [/Art\.?\s*(\d+)\s*(?:Ziff\.?\s*\d+)?\s*L-GAV/,'lgav'],
    [/Art\.?\s*(\d+)\s*GlG/,'glg'],
    [/Art\.?\s*(\d+)\s*DSG/,'dsg'],
  ];
  for(const [pat,prefix] of patterns){
    m=txt.match(pat);
    if(m){
      for(const cid in window.TIS.courses){
        const c=window.TIS.courses[cid];
        if(c.articles&&c.articles[prefix+m[1]]){
          e.preventDefault();e.stopPropagation();
          showArtPrefixed(prefix+m[1],c.articles);return;
        }
      }
    }
  }
});

function showArtPrefixed(key,db){
  const a=db[key];if(!a)return;
  document.getElementById('artTitle').textContent=a[0];
  document.getElementById('artRef').innerHTML='<a href="'+(a[3]||'#')+'" target="_blank">Quelle öffnen →</a>';
  document.getElementById('artText').textContent=a[1];
  document.getElementById('artExplain').innerHTML='<strong>Einfach erklärt:</strong> '+a[2];
  document.getElementById('artModal').style.display='block';
  document.body.style.overflow='hidden';
}

// THEME TOGGLE
let theme=localStorage.getItem('theme')||'auto';
function applyTheme(){
  const r=document.documentElement;r.classList.remove('dark','light');
  if(theme!=='auto')r.classList.add(theme);
  const btn=document.getElementById('themeBtn');
  if(theme==='dark')btn.textContent='🌙';
  else if(theme==='light')btn.textContent='☀️';
  else btn.textContent='🌓';
}
function toggleTheme(){
  if(theme==='auto')theme='light';else if(theme==='light')theme='dark';else theme='auto';
  localStorage.setItem('theme',theme);applyTheme();
}
applyTheme();

// NAVIGATION
function getAllCoursePages(){
  let pages=[];
  if(window.TIS&&window.TIS.courses){
    for(const cid in window.TIS.courses){
      const c=window.TIS.courses[cid];
      if(c.config&&c.config.pages)pages=pages.concat(c.config.pages);
    }
  }
  return pages;
}

function getCourseForPage(id){
  if(!window.TIS||!window.TIS.courses)return null;
  for(const cid in window.TIS.courses){
    const c=window.TIS.courses[cid];
    if(c.config&&c.config.pages&&c.config.pages.includes(id))return c;
  }
  return null;
}

function buildSubNav(items, activeId){
  return items.map(i=>'<button class="nl nl-sub'+(i.s===activeId?' on':'')+'" data-s="'+i.s+'" onclick="go(\''+i.s+'\')">'+i.l+'</button>').join('');
}

function go(id){
  document.querySelectorAll('.sec').forEach(s=>s.classList.remove('on'));
  const sec=document.getElementById(id);
  if(sec)sec.classList.add('on');
  
  // Update main nav
  document.querySelectorAll('.nl-main').forEach(l=>l.classList.remove('on'));
  const course=getCourseForPage(id);
  const inCourse=!!course;
  
  // Apple-style "← Kurse" back button
  var backBtn=document.getElementById('backToKurse');
  if(!backBtn){
    backBtn=document.createElement('button');
    backBtn.id='backToKurse';
    backBtn.textContent='← Kurse';
    backBtn.onclick=function(){go('kurse');};
    backBtn.style.cssText='display:none;padding:4px 12px;font-size:13px;border-radius:980px;border:none;background:none;color:var(--ac);cursor:pointer;font-weight:600;letter-spacing:-.2px;white-space:nowrap;font-family:var(--f)';
    var nb=document.querySelector('.nb');
    if(nb)nb.parentNode.insertBefore(backBtn,nb.nextSibling);
  }
  backBtn.style.display=inCourse?'inline-block':'none';

  // Show/hide nav buttons
  document.querySelectorAll('.nl-main[data-s]').forEach(btn=>{
    const s=btn.getAttribute('data-s');
    if(s==='home'||s==='kurse'){
      btn.style.display=inCourse?'none':'';
    } else {
      // Only show the active course button, hide all others
      if(inCourse && course.config && s===course.config.id){
        btn.style.display='';
      } else {
        btn.style.display='none';
      }
    }
  });
  
  // Highlights
  if(id==='home'||id==='kurse')document.querySelector('[data-s="home"]').classList.add('on');
  if(id==='kurse'){const k=document.querySelector('[data-s="kurse"]');if(k)k.classList.add('on');}
  if(inCourse){
    const btn=document.querySelector('[data-s="'+course.config.id+'"]');
    if(btn)btn.classList.add('on');
  }
  
  // Build sub-nav
  const sub=document.getElementById('navSub');
  if(inCourse&&course.config.subNav){
    sub.innerHTML=buildSubNav(course.config.subNav, id);
    sub.style.display='flex';
  } else {
    sub.innerHTML='';sub.style.display='none';
  }
  
  window.scrollTo(0,0);
  
  // Init course-specific features
  initCourseFeatures(id, course);
  
  // Admin panel
  if(id==='admin' && typeof loadAdminPanel==='function') loadAdminPanel();
  
  // Scan abbreviations
  if(typeof initAbkz==='function')setTimeout(initAbkz,100);
  buildTopicNav(id);
}

// COURSE FEATURE INITIALIZATION
function initCourseFeatures(id, course){
  // Flashcards
  if(id.endsWith('_kart')||id==='kart'){
    const cid=course?course.config.id:'recht2';
    initFlashcards(cid);
  }
  // Quiz
  if(id.endsWith('_quiz')||id==='quiz'){
    const cid=course?course.config.id:'recht2';
    initQuiz(cid);
  }
  // Recht2 specifics
  if(id==='konk')bK();
  if(id==='ablauf'){buildFlow(0);buildFlow(1);buildFlow(2);}
  // Update lerntools counts
  if(course&&window.TIS.courses[course.config.id]){
    const fc=window.TIS.courses[course.config.id].flashcards;
    if(fc){
      const el1=document.querySelector('#lt'+capitalize(course.config.id)+'Cards');
      const el2=document.querySelector('#lt'+capitalize(course.config.id)+'Quiz');
      if(el1)el1.textContent=fc.length;
      if(el2)el2.textContent=fc.length;
    }
  }
}

function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1);}

// GENERIC FLASHCARD ENGINE
let currentFC={cards:[],index:0,order:[]};
function initFlashcards(courseId){
  const c=window.TIS.courses[courseId];
  if(!c||!c.flashcards)return;
  currentFC.cards=c.flashcards;
  currentFC.order=[...Array(c.flashcards.length).keys()];
  currentFC.order.sort(()=>Math.random()-.5);
  currentFC.index=0;
  renderFlashcard(courseId);
}
function renderFlashcard(courseId){
  const fc=currentFC;
  if(!fc.cards.length)return;
  if(fc.index>=fc.order.length)fc.index=0;
  const card=fc.cards[fc.order[fc.index]];
  // Auto-detect prefix from DOM: find the card section and look for elements
  const p=getFlashPrefix(courseId);
  const qEl=document.getElementById(p+'q')||document.getElementById('fcq');
  const aEl=document.getElementById(p+'a')||document.getElementById('fca');
  const cEl=document.getElementById(p+'c')||document.getElementById('fc');
  const ccEl=document.getElementById(p+'c'+'c');
  const poolEl=document.getElementById(p+'Pool');
  
  if(qEl)qEl.textContent=card[0];
  if(aEl)aEl.textContent=card[1];
  if(cEl)cEl.classList.remove('fl');
  if(ccEl)ccEl.textContent='Karte '+(fc.index+1)+' von '+fc.cards.length;
  if(poolEl)poolEl.textContent=fc.cards.length+' Karten im Stapel';
}

// Auto-detect flashcard prefix for any course
function getFlashPrefix(courseId){
  // Known prefixes
  var map={'recht2':'fc','arb':'afc','ctrl':'cfc','fa3':'fa3_fc','rm':'rmfc','marketing':'mfc'};
  if(map[courseId])return map[courseId];
  // Auto-detect: try courseId + 'fc', then courseId + '_fc'
  if(document.getElementById(courseId+'fcq'))return courseId+'fc';
  if(document.getElementById(courseId+'_fcq'))return courseId+'_fc';
  return courseId+'fc';
}

// Generic flashcard navigation (called from HTML onclick)
function fcNext(){currentFC.index=(currentFC.index+1)%currentFC.order.length;renderCurrentFC();}
function fcPrev(){currentFC.index=(currentFC.index-1+currentFC.order.length)%currentFC.order.length;renderCurrentFC();}
function fcShuffle(){currentFC.order.sort(()=>Math.random()-.5);currentFC.index=0;renderCurrentFC();}
function renderCurrentFC(){
  // Detect which course we're in
  const sec=document.querySelector('.sec.on');
  if(!sec)return;
  const id=sec.id;
  const course=getCourseForPage(id);
  if(course)renderFlashcard(course.config.id);
}

// Legacy function aliases for existing HTML onclick handlers
function fR(){if(window.TIS&&window.TIS.courses.recht2)initFlashcards('recht2');}
function fN(){fcNext();}function fP(){fcPrev();}function fS(){fcShuffle();}
function arbCardInit(){if(window.TIS&&window.TIS.courses.arb)initFlashcards('arb');}
function aN(){fcNext();}function aP(){fcPrev();}function aS(){fcShuffle();}
function ctrlCardInit(){if(window.TIS&&window.TIS.courses.ctrl)initFlashcards('ctrl');}
function cN(){fcNext();}function cP(){fcPrev();}function cS(){fcShuffle();}

// GENERIC QUIZ ENGINE
function buildQuizFromCards(cards){
  return cards.map((c,i)=>{
    let opts=[c[1]];
    let pool=[...cards];pool.splice(i,1);pool.sort(()=>Math.random()-.5);
    for(let j=0;j<Math.min(3,pool.length);j++) opts.push(pool[j][1]);
    opts.sort(()=>Math.random()-.5);
    return [c[0],opts,opts.indexOf(c[1]),c[1]];
  });
}

let quizState={};

// Auto-detect quiz prefix for any course
function getQuizPrefix(courseId){
  var map={'recht2':'q','arb':'aq','ctrl':'cq','fa3':'fq','rm':'rmq','marketing':'mkq_'};
  if(map[courseId])return map[courseId];
  // Auto-detect: try courseId + 'q_', then courseId + 'q'
  if(document.getElementById(courseId+'q_C'))return courseId+'q_';
  if(document.getElementById(courseId+'qC'))return courseId+'q';
  return courseId+'q';
}

// ===== SUPABASE QUIZ SYNC =====
var _quizSyncTimer={};
function saveQuizToSupabase(courseId){
  // Debounce: save 1s after last change
  clearTimeout(_quizSyncTimer[courseId]);
  _quizSyncTimer[courseId]=setTimeout(function(){_doSaveQuiz(courseId);},1000);
}
async function _doSaveQuiz(courseId){
  try{
    var user=window.TIS_currentUser?window.TIS_currentUser():null;
    if(!user||!user.auth_uid)return;
    var session=window.TIS_getSession?await window.TIS_getSession():null;
    if(!session)return;
    var qs=quizState[courseId];if(!qs)return;
    var payload={auth_uid:user.auth_uid,course_id:courseId,quiz_state:JSON.stringify({status:qs.status,round:qs.round,totR:qs.totR,totW:qs.totW}),updated_at:new Date().toISOString()};
    var url='https://wgfuxttruwsvfhxsgybz.supabase.co/rest/v1/tis_quiz_progress?auth_uid=eq.'+user.auth_uid+'&course_id=eq.'+courseId;
    var key='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnZnV4dHRydXdzdmZoeHNneWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMzEzNzgsImV4cCI6MjA5MDcwNzM3OH0.Cf4sNB3arHbCar7nujsQs1-770Jz0QC_dWi4R8E1d5A';
    // Try PATCH first (update existing)
    var res=await fetch(url,{method:'PATCH',headers:{'apikey':key,'Authorization':'Bearer '+session.access_token,'Content-Type':'application/json','Prefer':'return=representation'},body:JSON.stringify({quiz_state:payload.quiz_state,updated_at:payload.updated_at})});
    var data=await res.json();
    // If no row was updated, INSERT
    if(!data||data.length===0){
      await fetch('https://wgfuxttruwsvfhxsgybz.supabase.co/rest/v1/tis_quiz_progress',{method:'POST',headers:{'apikey':key,'Authorization':'Bearer '+session.access_token,'Content-Type':'application/json','Prefer':'return=representation'},body:JSON.stringify(payload)});
    }
  }catch(e){console.warn('[TIS Quiz] Save failed:',e);}
}

async function loadAllQuizProgress(){
  try{
    var user=window.TIS_currentUser?window.TIS_currentUser():null;
    if(!user||!user.auth_uid)return;
    var session=window.TIS_getSession?await window.TIS_getSession():null;
    if(!session)return;
    var key='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnZnV4dHRydXdzdmZoeHNneWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMzEzNzgsImV4cCI6MjA5MDcwNzM3OH0.Cf4sNB3arHbCar7nujsQs1-770Jz0QC_dWi4R8E1d5A';
    var res=await fetch('https://wgfuxttruwsvfhxsgybz.supabase.co/rest/v1/tis_quiz_progress?auth_uid=eq.'+user.auth_uid+'&select=*',{headers:{'apikey':key,'Authorization':'Bearer '+session.access_token}});
    var rows=await res.json();
    if(rows&&rows.length){
      rows.forEach(function(row){
        try{
          var s=typeof row.quiz_state==='string'?JSON.parse(row.quiz_state):row.quiz_state;
          if(s&&s.status)quizState[row.course_id]=s;
        }catch(e){}
      });
    }
  }catch(e){console.warn('[TIS Quiz] Load failed:',e);}
}

// Load quiz progress after login
var _quizLoadCheck=setInterval(function(){
  var user=window.TIS_currentUser?window.TIS_currentUser():null;
  if(user){clearInterval(_quizLoadCheck);loadAllQuizProgress();}
},500);
setTimeout(function(){clearInterval(_quizLoadCheck);},60000);

function initQuiz(courseId){
  const c=window.TIS.courses[courseId];
  if(!c||!c.flashcards)return;
  const p=getQuizPrefix(courseId);
  if(!quizState[courseId]){
    quizState[courseId]={status:new Array(c.flashcards.length).fill(0),round:0,totR:0,totW:0};
  }
  const qs=quizState[courseId];
  const allQ=buildQuizFromCards(c.flashcards);
  
  // Smart selection
  let pool=[];
  allQ.forEach((q,i)=>{if(qs.status[i]===2)pool.push(i);});
  allQ.forEach((q,i)=>{if(qs.status[i]===3&&pool.length<10)pool.push(i);});
  let unseen=[];allQ.forEach((q,i)=>{if(qs.status[i]===0)unseen.push(i);});
  unseen.sort(()=>Math.random()-.5);
  unseen.forEach(i=>{if(pool.length<10)pool.push(i);});
  let correct=[];allQ.forEach((q,i)=>{if(qs.status[i]===1&&!pool.includes(i))correct.push(i);});
  correct.sort(()=>Math.random()-.5);
  correct.forEach(i=>{if(pool.length<10)pool.push(i);});
  pool.sort(()=>Math.random()-.5);
  
  qs.questions=pool.slice(0,10).map(i=>[i,...allQ[i]]);
  qs.qIndex=0;qs.co=0;qs.wr=0;qs.round++;
  
  const rsEl=document.getElementById(p+'RS');if(rsEl)rsEl.style.display='none';
  const rstEl=document.getElementById(p+'Reset');if(rstEl)rstEl.style.display='none';
  
  updateQuizStats(courseId);
  renderQuizQuestion(courseId);
}

function updateQuizStats(courseId){
  const p=getQuizPrefix(courseId);
  const qs=quizState[courseId];if(!qs)return;
  const c=window.TIS.courses[courseId];if(!c)return;
  const t=qs.status.length||1;
  let s=0,w=0,u=0,o=0;
  qs.status.forEach(v=>{if(v===1)s++;else if(v===3)w++;else if(v===2)u++;else o++;});
  const trEl=document.getElementById(p+'TotR');if(trEl)trEl.textContent=qs.totR;
  const twEl=document.getElementById(p+'TotW');if(twEl)twEl.textContent=qs.totW;
  const tpEl=document.getElementById(p+'TotP');if(tpEl)tpEl.textContent=(qs.totR+qs.totW>0?Math.round(qs.totR/(qs.totR+qs.totW)*100):0)+'%';
  const gEl=document.getElementById(p+'BarG');if(gEl)gEl.style.width=(s/t*100)+'%';
  const gnEl=document.getElementById(p+'BarGn');if(gnEl)gnEl.textContent=s;
  const oEl=document.getElementById(p+'BarO');if(oEl)oEl.style.width=(w/t*100)+'%';
  const onEl=document.getElementById(p+'BarOn');if(onEl)onEl.textContent=w;
  const rEl=document.getElementById(p+'BarR');if(rEl)rEl.style.width=(u/t*100)+'%';
  const rnEl=document.getElementById(p+'BarRn');if(rnEl)rnEl.textContent=u;
  const xEl=document.getElementById(p+'BarX');if(xEl)xEl.style.width=(o/t*100)+'%';
  const xnEl=document.getElementById(p+'BarXn');if(xnEl)xnEl.textContent=o;
}

function renderQuizQuestion(courseId){
  const p=getQuizPrefix(courseId);
  const qs=quizState[courseId];
  const c=window.TIS.courses[courseId];
  if(qs.qIndex>=qs.questions.length){endQuiz(courseId);return;}
  const q=qs.questions[qs.qIndex];
  const pEl=document.getElementById(p+'P');if(pEl)pEl.style.width=(qs.qIndex/qs.questions.length*100)+'%';
  const ptEl=document.getElementById(p+'PT');if(ptEl)ptEl.textContent='Frage '+(qs.qIndex+1)+' von '+qs.questions.length+' (Runde '+qs.round+')';
  const nEl=document.getElementById(p+'N');if(nEl)nEl.style.display='none';
  
  let statusTxt='';
  const st=q[0]<qs.status.length?qs.status[q[0]]:0;
  if(st===0)statusTxt='<span class="b" style="background:var(--s2);color:var(--tx3)">Neu</span>';
  else if(st===1)statusTxt='<span class="b bgreen">Sicher</span>';
  else if(st===2)statusTxt='<span class="b br">Unsicher</span>';
  else if(st===3)statusTxt='<span class="b ba">Wackelig</span>';
  
  let h='<div class="c" style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;align-items:center"><div class="ct2" style="font-size:15px;flex:1">'+q[1]+'</div>'+statusTxt+'</div></div>';
  q[2].forEach((o,i)=>{h+='<button class="qo" onclick="answerQuiz(\''+courseId+'\','+i+')">'+o+'</button>';});
  h+='<div class="qe" id="'+p+'E">'+q[4]+'</div>';
  const cEl=document.getElementById(p+'C');if(cEl)cEl.innerHTML=h;
  updateQuizStats(courseId);
}

function answerQuiz(courseId,i){
  const p=getQuizPrefix(courseId);
  const qs=quizState[courseId];
  const q=qs.questions[qs.qIndex];const ci=q[3];const qi=q[0];
  document.querySelectorAll('#'+p+'C .qo').forEach((b,j)=>{b.disabled=true;if(j===ci)b.classList.add('qc');if(j===i&&i!==ci)b.classList.add('qw');});
  if(i===ci){qs.co++;qs.totR++;if(qs.status[qi]===0)qs.status[qi]=1;else if(qs.status[qi]===2)qs.status[qi]=3;}
  else{qs.wr++;qs.totW++;if(qs.status[qi]===1||qs.status[qi]===3)qs.status[qi]=3;else qs.status[qi]=2;}
  const eEl=document.getElementById(p+'E');if(eEl)eEl.style.display='block';
  const nEl=document.getElementById(p+'N');if(nEl)nEl.style.display='inline-block';
  updateQuizStats(courseId);
  saveQuizToSupabase(courseId);
}

function nextQuizQ(courseId){quizState[courseId].qIndex++;renderQuizQuestion(courseId);}

function endQuiz(courseId){
  const p=getQuizPrefix(courseId);
  const qs=quizState[courseId];
  const pct=qs.questions.length>0?Math.round(qs.co/qs.questions.length*100):0;
  const pEl=document.getElementById(p+'P');if(pEl)pEl.style.width='100%';
  const ptEl=document.getElementById(p+'PT');if(ptEl)ptEl.textContent='Runde '+qs.round+' beendet';
  const cEl=document.getElementById(p+'C');if(cEl)cEl.innerHTML='<div class="hlg" style="text-align:center;font-size:17px"><strong>'+qs.co+' von '+qs.questions.length+' richtig ('+pct+'%)</strong></div>';
  const nEl=document.getElementById(p+'N');if(nEl)nEl.style.display='none';
  const rsEl=document.getElementById(p+'RS');if(rsEl)rsEl.style.display='inline-block';
  const rstEl=document.getElementById(p+'Reset');if(rstEl)rstEl.style.display='inline-block';
  updateQuizStats(courseId);
}

function resetQuiz(courseId){
  const c=window.TIS.courses[courseId];
  quizState[courseId]={status:new Array(c.flashcards.length).fill(0),round:0,totR:0,totW:0};
  saveQuizToSupabase(courseId);
  initQuiz(courseId);
}

// Legacy quiz function aliases (backward compat)
function qSt(){initQuiz('recht2');}function qNx(){nextQuizQ('recht2');}function qA(i){answerQuiz('recht2',i);}function qReset(){resetQuiz('recht2');}
function aqSt(){initQuiz('arb');}function aqNx(){nextQuizQ('arb');}function aqA(i){answerQuiz('arb',i);}function aqReset(){resetQuiz('arb');}
function cqSt(){initQuiz('ctrl');}function cqNx(){nextQuizQ('ctrl');}function cqA(i){answerQuiz('ctrl',i);}function cqReset(){resetQuiz('ctrl');}
function fqSt(){initQuiz('fa3');}function fqNx(){nextQuizQ('fa3');}function fqA(i){answerQuiz('fa3',i);}function fqReset(){resetQuiz('fa3');}
function mkqSt(){initQuiz('marketing');}function mkqNx(){nextQuizQ('marketing');}function mkqA(i){answerQuiz('marketing',i);}function mkqReset(){resetQuiz('marketing');}
function rmqSt(){initQuiz('rm');}function rmqNx(){nextQuizQ('rm');}function rmqA(i){answerQuiz('rm',i);}function rmqReset(){resetQuiz('rm');}

// AUTO-ALIAS: For any future course, auto-create global functions when course is registered
// This runs after all scripts load and creates aliases for any course that doesn't have them yet
window.addEventListener('load',function(){
  setTimeout(function(){
    if(!window.TIS||!window.TIS.courses)return;
    for(var cid in window.TIS.courses){
      var p=getQuizPrefix(cid);
      // Create quiz aliases if they don't exist: {prefix}St, {prefix}Nx, {prefix}A, {prefix}Reset
      if(typeof window[p+'St']!=='function'){
        (function(id){
          window[p+'St']=function(){initQuiz(id);};
          window[p+'Nx']=function(){nextQuizQ(id);};
          window[p+'A']=function(i){answerQuiz(id,i);};
          window[p+'Reset']=function(){resetQuiz(id);};
        })(cid);
      }
    }
  },200);
});

// KONKURS SLIDES (Recht2 specific)
let ki=0,kB=false;
function bK(){
  if(kB||!window.TIS||!window.TIS.courses.recht2||!window.TIS.courses.recht2.konkursSlides)return;
  kB=true;const KS=window.TIS.courses.recht2.konkursSlides;
  const sp=document.getElementById('ksp'),st=document.getElementById('kst');
  if(!sp||!st)return;
  for(let i=0;i<KS.length;i++){const d=document.createElement('div');d.className='spl'+(i===0?' on':'');d.onclick=(function(x){return function(){ki=x;kR()}})(i);sp.appendChild(d);}
  KS.forEach((s,i)=>{st.insertAdjacentHTML('beforeend','<div class="ss'+(i===0?' on':'')+'" id="ks'+i+'"><div class="st">'+s.t+'</div><div class="ssu">'+s.s+'</div>'+s.h+'</div>')});
}
function kR(){const KS=window.TIS.courses.recht2.konkursSlides;document.querySelectorAll('#kst .ss').forEach((s,i)=>s.classList.toggle('on',i===ki));document.querySelectorAll('#ksp .spl').forEach((p,i)=>{p.className='spl'+(i===ki?' on':i<ki?' dn':'')});document.getElementById('knx').textContent=ki===KS.length-1?'Von vorne':'Weiter';}
function kG(d){const KS=window.TIS.courses.recht2.konkursSlides;ki=(ki+d+KS.length)%KS.length;kR();}

// FLOW DIAGRAMS (Recht2 specific)
let fI=[0,0,0],fBuilt=[false,false,false];
function buildFlow(n){
  if(fBuilt[n]||!window.TIS||!window.TIS.courses.recht2)return;
  const FL=window.TIS.courses.recht2.flowDiagrams;if(!FL)return;
  fBuilt[n]=true;
  const sp=document.getElementById('f'+n+'p'),st=document.getElementById('f'+n+'s');
  if(!sp||!st)return;
  for(let i=0;i<FL[n].length;i++){const d=document.createElement('div');d.className='spl'+(i===0?' on':'');d.onclick=(function(x){return function(){fI[n]=x;fRen(n)}})(i);sp.appendChild(d);}
  FL[n].forEach((s,i)=>{st.insertAdjacentHTML('beforeend','<div class="ss'+(i===0?' on':'')+'" id="f'+n+'s'+i+'"><div class="st">'+s.t+'</div>'+s.h+'</div>');});
}
function fRen(n){const FL=window.TIS.courses.recht2.flowDiagrams;document.querySelectorAll('#f'+n+'s .ss').forEach((s,i)=>s.classList.toggle('on',i===fI[n]));document.querySelectorAll('#f'+n+'p .spl').forEach((p,i)=>{p.className='spl'+(i===fI[n]?' on':i<fI[n]?' dn':'')});document.getElementById('f'+n+'n').textContent=fI[n]===FL[n].length-1?'Von vorne':'Weiter';}
function fGo(n,d){const FL=window.TIS.courses.recht2.flowDiagrams;fI[n]=(fI[n]+d+FL[n].length)%FL[n].length;fRen(n);}
function showFlow(n){[0,1,2].forEach(i=>{document.getElementById('flow'+i).style.display=i===n?'block':'none';document.getElementById('fb'+i).className=i===n?'bp1':'';});buildFlow(n);}

// TOPIC NAV (third row)
function buildTopicNav(id){
  const topicBar=document.getElementById('navTopics');
  const sec=document.getElementById(id);
  if(!sec){topicBar.style.display='none';return;}
  const items=sec.querySelectorAll('.tl-item > .tl-head .tl-title');
  if(items.length<1){topicBar.style.display='none';return;}
  let h='';
  items.forEach((t,i)=>{
    const item=t.closest('.tl-item');
    const num=item.querySelector('.tl-num');
    const numTxt=num?num.textContent.trim():(i+1);
    h+='<button class="nt" onclick="scrollToTopic(this,'+i+')" data-idx="'+i+'"><span class="nt-num">'+numTxt+'</span>'+t.textContent.trim()+'</button>';
  });
  topicBar.innerHTML=h;
  topicBar.style.display='flex';
  observeTopics(id);
}
function scrollToTopic(btn,idx){
  const sec=document.querySelector('.sec.on');if(!sec)return;
  const items=sec.querySelectorAll('.tl-item');
  if(items[idx]){items[idx].classList.add('open');
    const y=items[idx].getBoundingClientRect().top+window.scrollY-180;
    window.scrollTo({top:y,behavior:'smooth'});
    document.querySelectorAll('.nt').forEach(b=>b.classList.remove('on'));btn.classList.add('on');
  }
}
let topicObserver=null;
function observeTopics(id){
  if(topicObserver)topicObserver.disconnect();
  const sec=document.getElementById(id);if(!sec)return;
  const items=sec.querySelectorAll('.tl-item');if(items.length<2)return;
  topicObserver=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){
    const idx=[...items].indexOf(e.target);
    document.querySelectorAll('.nt').forEach((b,i)=>{b.classList.toggle('on',i===idx);});
    const activeBtn=document.querySelector('.nt.on');
    if(activeBtn)activeBtn.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  }});},{rootMargin:'-160px 0px -60% 0px',threshold:0});
  items.forEach(item=>topicObserver.observe(item));
}

// ABBREVIATION SYSTEM
function initAbkz(){
  const ABKZ=window.TIS&&window.TIS.abkz?window.TIS.abkz:{};
  const keys=Object.keys(ABKZ).sort((a,b)=>b.length-a.length);
  if(!keys.length)return;
  const regex=new RegExp('\\b('+keys.map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')\\b','g');
  const targets=document.querySelectorAll('.tl-body, .cd, .merksatz, .hl, .hlr, .hlg, .hla, .hlbl');
  targets.forEach(el=>{
    if(el.closest('#glossar')||el.closest('#arb_glossar')||el.closest('#ctrl_glossar')||el.closest('#fa3_glossar')||el.closest('#marketing_glossar'))return;
    if(el.querySelector('.abk'))return;
    const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
    const textNodes=[];while(walker.nextNode())textNodes.push(walker.currentNode);
    textNodes.forEach(node=>{
      if(node.parentElement.classList.contains('abk'))return;
      if(node.parentElement.tagName==='BUTTON'||node.parentElement.tagName==='A')return;
      const text=node.textContent;if(!regex.test(text))return;regex.lastIndex=0;
      const frag=document.createDocumentFragment();let lastIdx=0;let match;regex.lastIndex=0;
      while((match=regex.exec(text))!==null){
        if(match.index>lastIdx)frag.appendChild(document.createTextNode(text.slice(lastIdx,match.index)));
        const span=document.createElement('span');span.className='abk';span.dataset.key=match[1];span.textContent=match[1];
        frag.appendChild(span);lastIdx=regex.lastIndex;
      }
      if(lastIdx<text.length)frag.appendChild(document.createTextNode(text.slice(lastIdx)));
      if(lastIdx>0)node.parentNode.replaceChild(frag,node);
    });
  });
}

// Abbreviation click handler
document.addEventListener('click',function(e){
  const el=e.target.closest('.abk');if(!el)return;
  const key=el.dataset.key;
  const ABKZ=window.TIS&&window.TIS.abkz?window.TIS.abkz:{};
  if(key&&ABKZ[key]){
    e.preventDefault();e.stopPropagation();
    const a=ABKZ[key];
    document.getElementById('artTitle').textContent=a[0];
    document.getElementById('artRef').innerHTML='<span style="color:var(--tx3)">Abkürzung / Begriff</span>';
    document.getElementById('artText').textContent=a[1];
    document.getElementById('artExplain').innerHTML=a[2];
    document.getElementById('artModal').style.display='block';
    document.body.style.overflow='hidden';
  }
});

// COURSE MODULE LOADER
function loadCourseModules(){
  if(!window.TIS)return;
  // Load courses
  if(window.TIS.courses){
    const container=document.getElementById('courseContent');
    if(container){
      for(const cid in window.TIS.courses){
        const c=window.TIS.courses[cid];
        if(c.html){container.insertAdjacentHTML('beforeend',c.html);}
        if(c.config&&c.config.navButton){
          const navCenter=document.getElementById('navCourseCenter')||document.querySelector('.nav-top');
          if(navCenter&&!document.querySelector('[data-s="'+c.config.id+'"]')){
            navCenter.insertAdjacentHTML('beforeend',c.config.navButton);
          }
        }
      }
    }
  }
  // Load pages (impressum, faq)
  if(window.TIS.pages){
    const container=document.getElementById('pagesContent');
    if(container){
      for(const pid in window.TIS.pages){
        container.insertAdjacentHTML('beforeend',window.TIS.pages[pid]);
      }
    }
  }
  setTimeout(initAbkz,500);
}

// Load courses after all scripts have loaded
window.addEventListener('load',loadCourseModules);

