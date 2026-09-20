import * as THREE from '../assets/vendor/three.module.js';

const CONFIG = {
  herName: 'Sanu',
  fromName: 'Qtuu',
  birthday: 'September 21',
  nepaliBirthday: 'Asoj 5',
  age: 21,
  songLabel: 'Maya Pheri — Simma',
  songSrc: './assets/media/maya-pheri.mp3',
  voiceSrc: './assets/media/voice-note.mp3'
};

const PHOTO_LIBRARY = Array.from({ length: 14 }, (_, index) => ({
  id: index + 1,
  src: `./assets/photos/${String(index + 1).padStart(2, '0')}.webp`,
  alt: `A memory for ${CONFIG.herName}, photograph ${index + 1}`
}));

const MEMORIES = [
  {id:'origin',title:'Where it quietly began',eyebrow:'PANCHAKANYA MANDIR · CLASS 9',text:'We were just two kids at Panchakanya Mandir. No dramatic beginning. No idea what would happen years later. And somehow that ordinary moment became the first coordinate in a story I would still be living now.',color:0xf2d5e7,pos:[-4.8,1.6,-4.5],photo:0},
  {id:'laugh',title:'Your laugh',eyebrow:'ONE OF MY FAVORITE SOUNDS',text:'The laugh that makes a normal conversation feel lighter. The one I can hear in my head even when the distance is quiet.',color:0xffebc8,pos:[3.6,2.6,-6.4],photo:1},
  {id:'eyes',title:'Your eyes',eyebrow:'THE THING I NOTICE FIRST',text:'They say things before you do. They look soft when you are happy, dangerous when you are angry, and somehow familiar in every version of you.',color:0xdcd7ff,pos:[5.4,-1.4,-3.2],photo:2},
  {id:'apart',title:'The years in between',eyebrow:'NOT EVERY STORY IS A STRAIGHT LINE',text:'We were apart. Life changed. Time passed. But our story did not disappear. It waited somewhere in the background until life gave us another chapter.',color:0xcfe7ff,pos:[-5.5,-2.3,-7.2],photo:3},
  {id:'care',title:'The way you care',eyebrow:'LOVE IN SMALL THINGS',text:'You make care feel quiet. It is in the details, the checking in, the remembering, the way you notice things. You make love feel less like a speech and more like a thousand small actions.',color:0xe8f4dc,pos:[0.6,3.5,-9.4],photo:4},
  {id:'anger',title:'Your anger',eyebrow:'YES, THIS GOT ITS OWN STAR',text:'Terrifying for approximately twelve seconds. Adorable immediately after. I am putting this inside a galaxy so you cannot throw anything at me while reading it.',color:0xffd6cc,pos:[6.0,1.0,-10.4],photo:5},
  {id:'voice',title:'Your voice',eyebrow:'DISTANCE HAS A SOUND',text:'Sometimes distance is just missing a voice you heard five minutes ago. Yours has become one of those sounds that makes a place feel less far away.',color:0xe1d6ff,pos:[-1.8,-3.3,-11.4],photo:6},
  {id:'again',title:'Finding you again',eyebrow:'MY FAVORITE PART OF OUR TIMELINE',text:'I like that our story was not handed to us perfectly. We lost time. We found each other again. And this time, I know how rare it is to get another beginning with someone who already feels familiar.',color:0xf5d6eb,pos:[2.0,-0.3,-13.3],photo:7}
];

const LETTERS = {
  window:{kicker:'THE WINDOW',title:"Open when you can't sleep",text:'Sanu, if tonight feels too loud, forget tomorrow for a minute. Imagine there is no distance, no clock, no unfinished work — only a quiet room and us talking until one of us forgets what we were even saying. You do not have to solve your life before you sleep. Let tonight simply be tonight.'},
  pillow:{kicker:'THE PILLOW',title:'Open when you miss me',text:'If you opened this because you miss me, then I probably miss you too. Distance is strange — it can make one ordinary hug feel like the most valuable thing in the world. Until I can be next to you, keep this page as a tiny proof that somewhere, qtuu is thinking about you in the middle of his own ordinary day.',photo:8},
  mirror:{kicker:'THE MIRROR',title:'Open when you feel insecure',text:'I wish this mirror could show you what I see instead of only your reflection. I notice your eyes, your expressions, the way your face completely changes when you laugh, the softness in you, and the stubborn fire too. You are not beautiful because every photo is perfect. You are beautiful because you are alive inside all those little moments a photo cannot hold.',photo:9},
  lamp:{kicker:'THE LAMP',title:'Open when you need motivation',text:'You have already lived through versions of life that younger-you had no idea how to handle. I have known you since class 9; I know your story did not stop there. Do the next small thing. Then another. You do not need to glow all the time to still be going somewhere beautiful.',photo:10},
  desk:{kicker:'THE DESK',title:"Open when you're stressed",text:'One thing at a time, sanu. Not the whole week. Not the whole future. Just the next thing. Drink some water. Put your phone down for five minutes. Breathe. I believe in the tired version of you too — not only the one who has everything under control.',photo:11},
  shelf:{kicker:'THE BOOKSHELF',title:'Open when you want to remember us',text:'Panchakanya Mandir. Class 9. Years moving. Being apart. Finding each other again. I do not love our story because it is perfect. I love it because it is ours — interrupted, unexpected, stubborn, funny, long-distance, and somehow still here. If our story were a book, this is the part where I would write: “keep reading.”',photo:12},
  cloud:{kicker:'THE LITTLE CLOUD',title:"Open when you're sad",text:'You do not owe the world a cheerful version of yourself every day. You are allowed to have heavy days. Eat something. Drink water. Cry if you need to. Rest without feeling guilty. I would rather know the real you on a difficult day than only meet the version of you pretending everything is fine.',photo:13},
  flower:{kicker:'THE FLOWER',title:"Open when you're angry at me",text:'First: fair 😭. Second: please tell me what hurt before we let silence do the talking for us. I never want winning an argument to matter more than understanding you. Be angry. Take your time. Then come back and tell me what I missed. And yes, you may still be right. Please do not save a screenshot of that sentence.'}
};

const FINAL_LETTER = `We met when we were kids, before either of us knew what life would become. Then life moved us apart. Years passed. And somehow, in a world where people disappear from each other's stories all the time, I got to find you again.\n\nI love your laugh, your eyes, your voice, the way you care, and yes — even the anger that has probably terrified me more than once. I love that there are still things about you I am learning. I love that distance has not made you feel less important.\n\nOn your 21st birthday, I do not want to make some giant promise about a perfect future. I just want to say something simpler and more real: I am grateful that our story got another chapter. And if life lets me, I want to keep reading it with you.\n\nHappy birthday, sanu.`;

const app = document.querySelector('#app');
app.innerHTML = `
  <div class="experience">
    <div class="three-mount" id="threeMount" aria-hidden="true"></div>
    <div class="atmosphere" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="grain" aria-hidden="true"></div>
    <audio id="music" src="${CONFIG.songSrc}" loop preload="none"></audio>
    <audio id="voice" src="${CONFIG.voiceSrc}" preload="none"></audio>
    <div id="ui" aria-live="polite"></div>
    <div id="tooltip" class="object-tooltip" hidden></div>
  </div>`;

const ui = document.querySelector('#ui');
const music = document.querySelector('#music');
const voice = document.querySelector('#voice');
const tooltip = document.querySelector('#tooltip');
const experience = document.querySelector('.experience');
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

const state = {
  phase:'cover',
  visited:new Set(),
  puzzleDone:false,
  sound:false,
  hovered:null,
  roomLetters:new Set()
};

let world;
try {
  world = createWorld(document.querySelector('#threeMount'), onWorldSelect, onHover);
} catch (error) {
  console.warn('3D renderer unavailable; using the visual fallback.', error);
  document.querySelector('#threeMount').innerHTML = '<div class="webgl-fallback" aria-hidden="true"></div>';
  world = { setPhase(){} };
}
render();

window.addEventListener('pointermove', (event) => {
  experience.style.setProperty('--pointer-x', `${event.clientX}px`);
  experience.style.setProperty('--pointer-y', `${event.clientY}px`);
}, { passive:true });

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && ui.querySelector('.modal-layer,.memory-panel')) render();
});

function icon(name){
  const paths = {
    arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
    close:'<path d="M6 6l12 12M18 6 6 18"/>',
    volume:'<path d="M11 5 6 9H3v6h3l5 4V5Zm4.5 4.5a4 4 0 0 1 0 5M17.5 7a7 7 0 0 1 0 10"/>',
    mute:'<path d="M11 5 6 9H3v6h3l5 4V5Zm5 5 5 5M21 10l-5 5"/>',
    spark:'<path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Zm6 12 .9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15Z"/>',
    replay:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/>',
    lock:'<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
}

function lilyMark(className=''){
  return `<svg class="lily-mark ${className}" viewBox="0 0 160 200" aria-hidden="true">
    <path class="lily-stem" d="M81 188c1-38-5-76 2-111 3-15 10-27 21-37"/>
    <path class="lily-leaf" d="M82 130c-20-10-36-4-45 10 17 3 31 2 45-10Z"/>
    <path class="lily-leaf" d="M83 151c18-12 34-9 46 3-16 6-31 6-46-3Z"/>
    <g class="lily-bloom">
      <path d="M104 42c20-24 39-21 41-16-3 14-16 26-38 33"/>
      <path d="M101 47c5-33-8-44-14-43-8 15-5 34 7 51"/>
      <path d="M96 53C74 28 54 29 51 35c4 16 19 29 40 35"/>
      <path d="M98 58c-29-4-43 8-42 15 13 10 31 9 48-2"/>
      <path d="M104 56c26 3 41 17 38 24-16 6-33 0-46-15"/>
      <path d="M102 53c12-29 31-34 36-30 2 15-8 31-29 42"/>
      <circle cx="102" cy="56" r="4"/>
      <path class="lily-stamen" d="M102 55l-8-23m10 22 6-25m-4 28 20-15"/>
    </g>
  </svg>`;
}

function photoAt(index){ return PHOTO_LIBRARY[index]; }
function photoTag(index, className='', loading='lazy'){
  const photo=photoAt(index);
  return `<img class="${className}" src="${photo.src}" alt="${photo.alt}" loading="${loading}" draggable="false">`;
}

function render(){
  tooltip.hidden=true;
  if(state.phase==='cover') return renderCover();
  const header = `<header class="hud-top">
    <div class="brandmark">for ${CONFIG.herName.toLowerCase()} <i>✦</i></div>
    <button id="soundBtn" class="hud-button" type="button" aria-label="${state.sound?'Turn music off':'Turn music on'}">${icon(state.sound?'volume':'mute')}<span>${state.sound?CONFIG.songLabel:'sound off'}</span></button>
  </header>`;
  if(state.phase==='galaxy') ui.innerHTML = header + renderGalaxyHUD();
  if(state.phase==='transition-room') ui.innerHTML = header + `<div class="portal-transition"><div>${lilyMark('transition-lily')}<span>02 / SOMEWHERE CLOSER</span><h2>Come inside.</h2><p>I left the light on.</p></div></div>`;
  if(state.phase==='room') ui.innerHTML = header + renderRoomHUD();
  bindCommon();
}

function renderCover(){
  ui.innerHTML = `<main class="cover-screen">
    <div class="cover-photo-stage" aria-hidden="true">
      <figure class="cover-photo cover-photo-a">${photoTag(1,'', 'eager')}<span>one ordinary day</span></figure>
      <figure class="cover-photo cover-photo-b">${photoTag(7,'', 'eager')}<span>kept because it felt like you</span></figure>
      <figure class="cover-photo cover-photo-c">${photoTag(12,'', 'eager')}<span>and another little moment</span></figure>
      ${lilyMark('cover-lily')}
    </div>
    <div class="cover-copy">
      <span class="cover-index">A SMALL PLACE ON THE INTERNET · MADE BY ${CONFIG.fromName.toUpperCase()}</span>
      <h1>For the girl<br>I somehow<br><em>found twice.</em></h1>
      <p>${CONFIG.birthday} · ${CONFIG.nepaliBirthday} · Twenty-one</p>
      <button id="enterBtn" class="enter-button" type="button"><span>enter ${CONFIG.herName.toLowerCase()}'s universe</span>${icon('arrow')}</button>
      <small>headphones recommended</small>
    </div>
    <div class="cover-coordinate">09°21' · ${CONFIG.age} YEARS · ∞ AFTER</div>
    <div class="cover-whisper">some memories deserve more than a camera roll</div>
  </main>`;
  document.querySelector('#enterBtn').onclick = async()=>{
    state.phase='galaxy';
    world.setPhase('galaxy');
    render();
    prefetchPhotos();
    try{await music.play();state.sound=true;render();}catch{}
  };
}

function renderGalaxyHUD(){
  const n=state.visited.size;
  return `<div class="galaxy-hud">
    <div class="galaxy-intro"><span class="chapter-label">01 / THE UNIVERSE</span><h2>I kept a few things<br>in the sky for you.</h2><p>${coarsePointer?'Tap the glowing stars that feel different.':'Move gently. Tap the stars that feel different.'}</p></div>
    <div class="galaxy-progress"><span>${String(n).padStart(2,'0')} / ${String(MEMORIES.length).padStart(2,'0')} fragments found</span><div class="progress-line"><i style="width:${n/MEMORIES.length*100}%"></i></div></div>
    <div class="galaxy-bottom">${state.puzzleDone?`<button id="portalBtn" class="portal-cta" type="button"><span>the room is waiting</span>${icon('arrow')}</button>`:`<button id="puzzleBtn" class="quiet-cta" type="button">${icon('spark')} find the constellation</button>`}</div>
  </div>`;
}

function renderRoomHUD(){
  const count=state.roomLetters.size;
  return `<div class="room-hud">
    <div class="room-title"><span class="chapter-label">02 / THE ROOM</span><h2>For the days<br>I can't be there.</h2><p>Everything in this room means something. Tap what catches your eye.</p></div>
    <div class="room-counter">${count}/8 letters opened</div>
    <div class="room-hint"><i></i> ${coarsePointer?'drag to look around · tap objects':'move gently to look around · tap objects'}</div>
    ${count>=5?`<button id="finalBtn" class="final-link" type="button">there's one last thing ${icon('arrow')}</button>`:''}
  </div>`;
}

function bindCommon(){
  const soundBtn=document.querySelector('#soundBtn');
  if(soundBtn) soundBtn.onclick=toggleMusic;
  const puzzleBtn=document.querySelector('#puzzleBtn'); if(puzzleBtn) puzzleBtn.onclick=openPuzzle;
  const portalBtn=document.querySelector('#portalBtn'); if(portalBtn) portalBtn.onclick=enterRoom;
  const finalBtn=document.querySelector('#finalBtn'); if(finalBtn) finalBtn.onclick=showFinale;
}

async function toggleMusic(){
  if(music.paused){
    try{await music.play();state.sound=true}catch{state.sound=false;showToast('Add maya-pheri.mp3 to /assets/media')}
  }else{
    music.pause();state.sound=false;
  }
  render();
}

function onWorldSelect(data){
  if(data.kind==='memory') openMemory(data.data);
  if(data.kind==='room') openRoomObject(data.id);
}

function onHover(data,x,y){
  state.hovered=data;
  if(!data){tooltip.hidden=true;return}
  const labels={window:'window',pillow:'pillow',mirror:'mirror',lamp:'lamp',desk:'desk',shelf:'bookshelf',cloud:'little cloud',flower:'lily',cassette:'voice note',gift:'birthday card',future:'do not open yet'};
  tooltip.textContent=data.kind==='memory'?'memory ✦':(labels[data.id]||'open');
  tooltip.style.left=`${Math.min(x+15, window.innerWidth-130)}px`;
  tooltip.style.top=`${Math.min(y+15, window.innerHeight-42)}px`;
  tooltip.hidden=false;
}

function openMemory(m){
  state.visited.add(m.id);
  render();
  ui.insertAdjacentHTML('beforeend',`<aside class="memory-panel" role="dialog" aria-modal="true" aria-label="${m.title}">
    <button id="closeMemory" class="close-minimal" type="button" aria-label="Close memory">${icon('close')}</button>
    <figure class="memory-photo"><div class="memory-photo-frame">${photoTag(m.photo)}</div><figcaption>fragment ${String(MEMORIES.findIndex(x=>x.id===m.id)+1).padStart(2,'0')} / ${String(MEMORIES.length).padStart(2,'0')}</figcaption></figure>
    <div class="memory-copy"><div class="memory-number">✦</div><span class="memory-kicker">${m.eyebrow}</span><h3>${m.title}</h3><p>${m.text}</p><button id="continueMemory" class="continue-link" type="button">keep exploring ${icon('arrow')}</button></div>
  </aside>`);
  document.querySelector('#closeMemory').onclick=render;
  document.querySelector('#continueMemory').onclick=render;
}

function openPuzzle(){
  const pts=[{x:13,y:69},{x:29,y:42},{x:45,y:61},{x:62,y:30},{x:77,y:52},{x:88,y:25}];
  let step=0;
  ui.insertAdjacentHTML('beforeend',`<div class="modal-layer puzzle-layer" role="dialog" aria-modal="true" aria-label="Constellation puzzle">
    <div class="puzzle-card">
      <div class="puzzle-head"><div><span>HIDDEN BETWEEN THE STARS</span><h3>Trace us back to each other.</h3></div><button id="closePuzzle" type="button" aria-label="Close puzzle">${icon('close')}</button></div>
      <p>There is only one rule: begin where our story began, then follow the light.</p>
      <div class="puzzle-sky" id="puzzleSky"><svg viewBox="0 0 100 100" preserveAspectRatio="none" id="puzzleLines"></svg>${pts.map((p,i)=>`<button data-i="${i}" style="left:${p.x}%;top:${p.y}%" type="button" aria-label="Constellation point ${i+1}"><i></i></button>`).join('')}<div class="puzzle-origin">Panchakanya</div>${lilyMark('puzzle-lily')}</div>
      <div class="puzzle-status" id="puzzleStatus">Start with Panchakanya.</div>
    </div>
  </div>`);
  document.querySelector('#closePuzzle').onclick=render;
  const sky=document.querySelector('#puzzleSky');
  const status=document.querySelector('#puzzleStatus');
  const svg=document.querySelector('#puzzleLines');
  sky.querySelectorAll('button').forEach(btn=>btn.onclick=()=>{
    const i=+btn.dataset.i;
    if(i!==step){
      step=0;sky.classList.add('wrong');status.textContent='Not that way. Start where we met.';
      sky.querySelectorAll('button').forEach(b=>b.classList.remove('lit'));svg.innerHTML='';
      setTimeout(()=>sky.classList.remove('wrong'),450);return;
    }
    btn.classList.add('lit');step++;
    if(step>1){const a=pts[step-2],b=pts[step-1];svg.insertAdjacentHTML('beforeend',`<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`)}
    status.textContent=`${step} of ${pts.length} stars connected`;
    if(step===pts.length)setTimeout(()=>{state.puzzleDone=true;render()},650);
  });
}

function enterRoom(){
  state.phase='transition-room';world.setPhase('transition-room');render();
  setTimeout(()=>{state.phase='room';world.setPhase('room');render()},1700);
}

async function openRoomObject(id){
  if(id==='cassette'){
    try{
      if(voice.paused){await voice.play();showToast("qtuu's voice is playing")}
      else{voice.pause();showToast('voice note paused')}
    }catch{showToast('Add voice-note.mp3 to /assets/media')}
    return;
  }
  if(id==='gift') return openScratch();
  if(id==='future') return openLockedLetter();
  if(LETTERS[id]){state.roomLetters.add(id);render();openLetter(LETTERS[id])}
}

function openLetter(d){
  const photo = Number.isInteger(d.photo) ? `<figure class="letter-photo">${photoTag(d.photo)}<figcaption>kept between the pages</figcaption></figure>` : '';
  ui.insertAdjacentHTML('beforeend',`<div class="modal-layer letter-layer" role="dialog" aria-modal="true" aria-label="${d.title}">
    <article class="letter-sheet">
      <button id="closeLetter" class="close-paper" type="button" aria-label="Close letter">${icon('close')}</button>
      ${lilyMark('paper-lily')}
      <span class="letter-kicker">${d.kicker}</span><h3>${d.title}</h3>${photo}<p>${d.text}</p><div class="letter-sign">— qtuu</div>
    </article>
  </div>`);
  document.querySelector('#closeLetter').onclick=render;
}

function openLockedLetter(){
  const unlock=new Date('2026-09-21T00:00:00+05:45');
  if(Date.now()>=unlock.getTime())return openLetter({kicker:'ONE YEAR LATER',title:'You came back.',text:'Another year passed. I hope we collected new jokes, survived new arguments, made new memories, and found more reasons to choose each other. Happy birthday again, sanu. Past-qtuu was hoping future-us would still be here.'});
  ui.insertAdjacentHTML('beforeend',`<div class="modal-layer letter-layer" role="dialog" aria-modal="true" aria-label="Locked letter">
    <article class="letter-sheet"><button id="closeLetter" class="close-paper" type="button" aria-label="Close letter">${icon('close')}</button>${lilyMark('paper-lily')}<div class="locked-letter">${icon('lock')}<span>NOT YET, SANU</span><h3>Open on your next birthday.</h3><p>Some things are better when time gets to keep the secret.</p><small>September 21, 2026</small></div></article>
  </div>`);
  document.querySelector('#closeLetter').onclick=render;
}

function openScratch(){
  ui.insertAdjacentHTML('beforeend',`<div class="modal-layer scratch-layer" role="dialog" aria-modal="true" aria-label="Birthday scratch card">
    <div class="scratch-modal"><button id="closeScratch" class="close-minimal dark" type="button" aria-label="Close scratch card">${icon('close')}</button>${lilyMark('scratch-lily')}<span class="scratch-kicker">A TINY BIRTHDAY THING</span><h3>No peeking.</h3><div class="scratch-area"><div class="scratch-reveal"><strong>21</strong><span>Happy birthday, sanu.</span><p>If I could wrap time, I would give you every good moment we have not lived yet.</p></div><canvas id="scratchCanvas"></canvas></div><small id="scratchHint">use your finger or mouse</small></div>
  </div>`);
  document.querySelector('#closeScratch').onclick=render;
  const canvas=document.querySelector('#scratchCanvas');
  const ctx=canvas.getContext('2d');
  const hint=document.querySelector('#scratchHint');
  let drawing=false,strokes=0;
  const paint=()=>{
    const r=canvas.getBoundingClientRect();
    canvas.width=r.width*devicePixelRatio;canvas.height=r.height*devicePixelRatio;
    ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
    const g=ctx.createLinearGradient(0,0,r.width,r.height);g.addColorStop(0,'#d8d2db');g.addColorStop(.48,'#a49ba8');g.addColorStop(1,'#eee7ed');
    ctx.fillStyle=g;ctx.fillRect(0,0,r.width,r.height);
    ctx.fillStyle='rgba(255,255,255,.74)';ctx.font='600 11px DM Sans';ctx.textAlign='center';ctx.fillText('SCRATCH HERE',r.width/2,r.height/2+4);
  };
  paint();
  const scratch=e=>{
    if(!drawing)return;
    const r=canvas.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    ctx.globalCompositeOperation='destination-out';ctx.beginPath();ctx.arc(x,y,30,0,Math.PI*2);ctx.fill();
    if(++strokes>35)hint.textContent='okay, you were allowed to see it ♡';
  };
  canvas.onpointerdown=e=>{drawing=true;canvas.setPointerCapture(e.pointerId);scratch(e)};
  canvas.onpointermove=scratch;canvas.onpointerup=()=>drawing=false;canvas.onpointercancel=()=>drawing=false;
}

function showToast(msg){
  const old=document.querySelector('.toast');if(old)old.remove();
  ui.insertAdjacentHTML('beforeend',`<div class="toast" role="status">${msg}</div>`);
  setTimeout(()=>document.querySelector('.toast')?.remove(),2500);
}

function showFinale(){
  world.setPhase('finale');
  const film=PHOTO_LIBRARY.map((photo,index)=>`<figure style="--i:${index}"><img src="${photo.src}" alt="${photo.alt}" loading="lazy"><span>${String(index+1).padStart(2,'0')}</span></figure>`).join('');
  ui.innerHTML=`<div class="finale-screen">
    <div class="finale-stars">${Array.from({length:42},(_,i)=>`<i style="--x:${(i*47)%100}%;--y:${(i*31)%100}%;--d:${(i%8)*.4}s"></i>`).join('')}</div>
    ${lilyMark('finale-lily')}
    <div class="finale-copy"><span>ONE LAST THING</span><h2>I love you,<br><em>Sanu.</em></h2><p>${FINAL_LETTER}</p><div class="final-signature">— your qtuu</div></div>
    <section class="finale-memories" aria-label="Our photographs"><div class="finale-memories-head"><span>14 LITTLE PROOFS THAT YOU WERE HERE</span><p>not a gallery. just pieces of a life I like looking at.</p></div><div class="photo-film">${film}</div></section>
    <button id="replayBtn" class="replay-button" type="button">${icon('replay')} replay our little universe</button>
  </div>`;
  document.querySelector('#replayBtn').onclick=()=>location.reload();
}

function prefetchPhotos(){
  const load=()=>PHOTO_LIBRARY.forEach(({src})=>{const img=new Image();img.src=src});
  if('requestIdleCallback' in window) requestIdleCallback(load,{timeout:1600}); else setTimeout(load,400);
}

function createWorld(mount,onSelect,onHoverCb){
  const scene=new THREE.Scene();
  scene.background=new THREE.Color(0x07070b);
  scene.fog=new THREE.FogExp2(0x08070c,.018);
  const camera=new THREE.PerspectiveCamera(44,1,.1,180);camera.position.set(0,.4,12);
  let portraitView=false;
  const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.06;
  mount.appendChild(renderer.domElement);
  const clock=new THREE.Clock(),raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),pointerTarget=new THREE.Vector2();
  let phase='cover',phaseAt=0,roomLook=new THREE.Vector2();

  const starGeo=new THREE.BufferGeometry(),count=2100,pos=new Float32Array(count*3),cols=new Float32Array(count*3),cc=new THREE.Color();
  const palette=[0xffffff,0xf6dfed,0xd9d4ff,0xd9e9ff,0xfff0d7];
  for(let i=0;i<count;i++){
    const r=5+Math.random()*30,theta=Math.random()*Math.PI*2,phi=Math.acos(2*Math.random()-1);
    pos[i*3]=Math.sin(phi)*Math.cos(theta)*r;pos[i*3+1]=Math.cos(phi)*r*.58;pos[i*3+2]=-4-Math.abs(Math.sin(phi)*Math.sin(theta)*r);
    cc.setHex(palette[(Math.random()*palette.length)|0]);cols[i*3]=cc.r;cols[i*3+1]=cc.g;cols[i*3+2]=cc.b;
  }
  starGeo.setAttribute('position',new THREE.BufferAttribute(pos,3));starGeo.setAttribute('color',new THREE.BufferAttribute(cols,3));
  const stars=new THREE.Points(starGeo,new THREE.PointsMaterial({size:.052,vertexColors:true,transparent:true,opacity:.9,depthWrite:false}));scene.add(stars);

  const dustGeo=new THREE.BufferGeometry(),dustPoints=[];
  for(let i=0;i<560;i++)dustPoints.push((Math.random()-.5)*30,(Math.random()-.5)*14,-Math.random()*35);
  dustGeo.setAttribute('position',new THREE.Float32BufferAttribute(dustPoints,3));
  const dust=new THREE.Points(dustGeo,new THREE.PointsMaterial({size:.022,color:0xd6c4dc,transparent:true,opacity:.28,depthWrite:false}));scene.add(dust);

  const nebulaTexture=createNebulaTexture();
  const nebulaGroup=new THREE.Group();scene.add(nebulaGroup);
  [[-7,2,-16,14,.12],[8,-3,-22,18,.10],[0,5,-30,24,.06]].forEach(([x,y,z,s,o])=>{
    const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:nebulaTexture,color:0xb78cae,transparent:true,opacity:o,depthWrite:false,blending:THREE.AdditiveBlending}));
    sp.position.set(x,y,z);sp.scale.set(s,s,s);nebulaGroup.add(sp);
  });

  scene.add(new THREE.AmbientLight(0xa79bb7,.34));
  const galaxyLight=new THREE.PointLight(0xe3cce5,18,30);galaxyLight.position.set(0,3,4);scene.add(galaxyLight);

  const memoryGroup=new THREE.Group();scene.add(memoryGroup);const memoryInts=[];
  MEMORIES.forEach((m,i)=>{
    const g=new THREE.Group();g.position.set(...m.pos);g.userData={kind:'memory',data:m};
    const s=new THREE.Mesh(new THREE.SphereGeometry(.13+(i%3)*.025,24,24),new THREE.MeshBasicMaterial({color:m.color}));
    const glow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture(m.color),color:m.color,transparent:true,opacity:.62,depthWrite:false,blending:THREE.AdditiveBlending}));
    glow.scale.set(1.5,1.5,1.5);
    // A larger invisible target keeps the star easy to tap on phones without changing its appearance.
    const hit=new THREE.Mesh(new THREE.SphereGeometry(.38,12,12),new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}));
    g.add(glow,s,hit);memoryGroup.add(g);memoryInts.push(g);
  });
  const ring=new THREE.Mesh(new THREE.TorusGeometry(2.8,.005,8,180),new THREE.MeshBasicMaterial({color:0x8f7899,transparent:true,opacity:.18}));ring.rotation.x=1.1;ring.rotation.z=.4;ring.position.z=-9;memoryGroup.add(ring);

  const portal=new THREE.Group();portal.position.set(0,0,-17);portal.visible=false;scene.add(portal);
  const pr=new THREE.Mesh(new THREE.TorusGeometry(2.15,.065,24,160),new THREE.MeshBasicMaterial({color:0xf1dbe9,transparent:true,opacity:.8}));portal.add(pr);
  const pd=new THREE.Mesh(new THREE.CircleGeometry(2.06,80),new THREE.MeshBasicMaterial({color:0x6d566c,transparent:true,opacity:.38}));pd.position.z=.02;portal.add(pd);
  const portalGlow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture(0xe4bfd5),color:0xe4bfd5,transparent:true,opacity:.15,depthWrite:false,blending:THREE.AdditiveBlending}));portalGlow.scale.set(7,7,7);portal.add(portalGlow);

  const room=new THREE.Group();room.visible=false;room.position.set(0,-1.8,-3);scene.add(room);const roomInts=[];buildRoom(room,roomInts);

  function createNebulaTexture(){
    const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d');
    const g=x.createRadialGradient(128,128,0,128,128,128);g.addColorStop(0,'rgba(255,235,248,.9)');g.addColorStop(.22,'rgba(222,164,205,.34)');g.addColorStop(.55,'rgba(126,96,155,.12)');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,256,256);return new THREE.CanvasTexture(c);
  }
  function glowTexture(hex){
    const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d'),g=x.createRadialGradient(64,64,0,64,64,64),co=new THREE.Color(hex),rgb=`${Math.round(co.r*255)},${Math.round(co.g*255)},${Math.round(co.b*255)}`;
    g.addColorStop(0,`rgba(${rgb},1)`);g.addColorStop(.18,`rgba(${rgb},.65)`);g.addColorStop(1,`rgba(${rgb},0)`);x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);
  }
  function mat(c,r=.8){return new THREE.MeshStandardMaterial({color:c,roughness:r,metalness:.02})}
  function box(parent,size,p,c,data,rot=[0,0,0]){const m=new THREE.Mesh(new THREE.BoxGeometry(...size),mat(c));m.position.set(...p);m.rotation.set(...rot);if(data)m.userData=data;parent.add(m);return m}
  function hot(parent,id,p,size){const m=new THREE.Mesh(new THREE.BoxGeometry(...size),new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}));m.position.set(...p);m.userData={kind:'room',id};parent.add(m);roomInts.push(m)}

  function buildLily(parent,position){
    const group=new THREE.Group();group.position.set(...position);group.userData={kind:'room',id:'flower'};
    const stem=new THREE.Mesh(new THREE.CylinderGeometry(.018,.023,.85,10),mat(0x5d755b,.75));stem.position.y=.36;group.add(stem);
    const leafMat=mat(0x6c8067,.72);
    [-1,1].forEach((side,i)=>{const leaf=new THREE.Mesh(new THREE.SphereGeometry(.11,14,10),leafMat);leaf.scale.set(.55,2.1,.28);leaf.position.set(side*.12,.25+i*.08,0);leaf.rotation.z=side*.72;group.add(leaf)});
    const bloom=new THREE.Group();bloom.position.y=.84;
    const petalMat=new THREE.MeshStandardMaterial({color:0xf2ece9,roughness:.56,metalness:0,emissive:0x2a1520,emissiveIntensity:.08});
    for(let i=0;i<6;i++){
      const petal=new THREE.Mesh(new THREE.SphereGeometry(.13,18,12),petalMat);petal.scale.set(.65,2.15,.38);const a=i/6*Math.PI*2;petal.position.set(Math.cos(a)*.13,Math.sin(a)*.13,0);petal.rotation.z=a-Math.PI/2;petal.rotation.x=.22; bloom.add(petal);
    }
    const center=new THREE.Mesh(new THREE.SphereGeometry(.07,16,12),new THREE.MeshStandardMaterial({color:0xc98ca7,roughness:.5,emissive:0x3d1928,emissiveIntensity:.16}));center.position.z=.03;bloom.add(center);group.add(bloom);
    parent.add(group);roomInts.push(group);return group;
  }

  function addPhotoPrint(parent,photoIndex,p,rotationZ,scale=.72){
    const backing=new THREE.Mesh(new THREE.PlaneGeometry(1.02*scale,1.34*scale),new THREE.MeshStandardMaterial({color:0xf1ebe5,roughness:.9,side:THREE.DoubleSide}));
    backing.position.set(p[0],p[1],p[2]);backing.rotation.set(-Math.PI/2,0,rotationZ);parent.add(backing);
    const texture=new THREE.TextureLoader().load(PHOTO_LIBRARY[photoIndex].src);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
    const image=new THREE.Mesh(new THREE.PlaneGeometry(.88*scale,1.12*scale),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide,toneMapped:false}));
    image.position.set(p[0],p[1]+.008,p[2]-.02*Math.sin(rotationZ));image.rotation.set(-Math.PI/2,0,rotationZ);parent.add(image);
  }

  function buildRoom(p){
    box(p,[12,.18,9],[0,0,0],0x6c594e);box(p,[12,6,.18],[0,3,-4.45],0x9a879d);box(p,[.18,6,9],[-5.9,3,0],0x88788c);box(p,[4.5,.04,2.65],[-.4,.13,.7],0xb99aa9);
    box(p,[4.2,.7,2.3],[-3.05,.55,-1.6],0x4d414d);box(p,[4.05,.38,2.18],[-3.05,1.05,-1.6],0xe8e0df);box(p,[2.35,.16,2.12],[-2.2,1.34,-1.6],0xb88da3);roomInts.push(box(p,[1.25,.25,.72],[-4.12,1.36,-1.95],0xf2eeee,{kind:'room',id:'pillow'},[0,0,.04]));
    box(p,[3.2,.18,1.25],[3.55,1.45,-1.85],0x5e483f);box(p,[.18,1.4,.18],[2.35,.72,-1.95],0x4a3933);box(p,[.18,1.4,.18],[4.75,.72,-1.95],0x4a3933);roomInts.push(box(p,[.85,.48,.4],[3.0,1.82,-1.78],0x2c2830,{kind:'room',id:'cassette'}));roomInts.push(box(p,[.55,.42,.55],[4.18,1.77,-1.75],0xb37d8e,{kind:'room',id:'gift'}));roomInts.push(box(p,[1.1,.48,.75],[3.75,.9,-1.9],0x553e39,{kind:'room',id:'future'}));
    // Dedicated touch zones make the small desk objects forgiving on coarse pointers.
    hot(p,'cassette',[3.0,1.82,-1.58],[1.15,.92,.8]);hot(p,'gift',[4.18,1.77,-1.55],[.95,.88,.9]);hot(p,'future',[3.75,.9,-1.56],[1.5,1.0,.95]);hot(p,'desk',[3.55,1.48,-1.85],[3.3,.3,1.4]);
    box(p,[2.2,3.1,.5],[4.35,3.55,-4.08],0x57413b);for(let i=0;i<4;i++)box(p,[1.95,.09,.54],[4.35,2.2+i*.78,-3.75],0x3f302d);const bc=[0x89708d,0xa87986,0x766989,0xa39374,0x705f68];for(let i=0;i<10;i++)box(p,[.12+.08*(i%2),.45+.25*(i%3),.32],[3.62+(i%5)*.28,2.48+Math.floor(i/5)*.78,-3.68],bc[i%bc.length]);hot(p,'shelf',[4.35,3.55,-3.62],[2.2,3.1,.55]);
    box(p,[3.2,2.35,.08],[-2.4,3.8,-4.32],0x352c3c);const night=new THREE.Mesh(new THREE.PlaneGeometry(2.82,1.97),new THREE.MeshBasicMaterial({color:0x111321}));night.position.set(-2.4,3.8,-4.25);p.add(night);const moon=new THREE.Mesh(new THREE.SphereGeometry(.35,24,24),new THREE.MeshBasicMaterial({color:0xffefd4}));moon.position.set(-1.55,4.18,-4.16);p.add(moon);hot(p,'window',[-2.4,3.8,-4.05],[3.1,2.2,.4]);
    const mf=new THREE.Mesh(new THREE.TorusGeometry(.95,.055,12,100),mat(0x6e5c67,.4));mf.scale.y=1.25;mf.position.set(.1,3.35,-4.08);p.add(mf);const mir=new THREE.Mesh(new THREE.CircleGeometry(.88,64),new THREE.MeshStandardMaterial({color:0xb6bcc8,roughness:.18,metalness:.55}));mir.scale.y=1.25;mir.position.set(.1,3.35,-4.12);mir.userData={kind:'room',id:'mirror'};p.add(mir);roomInts.push(mir);
    box(p,[.08,1.4,.08],[1.65,1.85,-2.0],0x3d3540);const shade=new THREE.Mesh(new THREE.ConeGeometry(.52,.65,32,1,true),new THREE.MeshStandardMaterial({color:0xd8bfae,side:THREE.DoubleSide,roughness:.7}));shade.position.set(1.65,2.5,-2);shade.userData={kind:'room',id:'lamp'};p.add(shade);roomInts.push(shade);const warm=new THREE.PointLight(0xffc894,8.5,7);warm.position.set(1.65,2.45,-1.5);p.add(warm);
    const cg=new THREE.Group();cg.position.set(-.1,5.0,-2.9);for(let i=0;i<4;i++){const s=new THREE.Mesh(new THREE.SphereGeometry(.28+(i%2)*.1,20,20),new THREE.MeshStandardMaterial({color:0xe5dce6,roughness:.9}));s.position.set((i-1.5)*.3,(i%2)*.08,0);cg.add(s)}cg.userData={kind:'room',id:'cloud'};p.add(cg);roomInts.push(cg);

    const vase=new THREE.Mesh(new THREE.CylinderGeometry(.17,.24,.5,24),mat(0x74677c,.35));vase.position.set(4.55,1.8,-1.73);p.add(vase);buildLily(p,[4.55,2.05,-1.73]);

    // Six real photographs become small physical prints scattered across the rug.
    const printLayout=[[-1.75,.17,1.05,-.20],[-.72,.18,1.58,.12],[.35,.17,1.05,.29],[1.45,.18,1.65,-.18],[-.25,.19,2.52,-.12],[.95,.18,2.65,.15]];
    printLayout.forEach((item,i)=>addPhotoPrint(p,8+i,item.slice(0,3),item[3],.68));

    for(let i=0;i<28;i++){const q=new THREE.Mesh(new THREE.SphereGeometry(.012,8,8),new THREE.MeshBasicMaterial({color:0xdac8e4}));q.position.set((Math.random()-.5)*10,.22+Math.random()*4,-3.9+Math.random()*7);p.add(q)}
    const ceiling=new THREE.PointLight(0xb9a8d7,11,13);ceiling.position.set(-2,5.2,1.2);p.add(ceiling);
    const lilyGlow=new THREE.PointLight(0xf3c5d8,1.7,2.5);lilyGlow.position.set(4.55,2.88,-1.45);p.add(lilyGlow);
  }

  function resize(){
    const r=mount.getBoundingClientRect();
    camera.aspect=r.width/r.height;
    portraitView=camera.aspect<.82;
    // Preserve usable horizontal framing on portrait devices; desktop keeps the original cinematic lens.
    camera.fov=portraitView?Math.min(78,THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(25))/camera.aspect))):44;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio,portraitView?1.45:1.75));
    renderer.setSize(r.width,r.height,false);
  }
  resize();new ResizeObserver(resize).observe(mount);
  function setPointer(e){const r=renderer.domElement.getBoundingClientRect();pointer.x=((e.clientX-r.left)/r.width)*2-1;pointer.y=-((e.clientY-r.top)/r.height)*2+1;pointerTarget.set(pointer.x,pointer.y)}
  renderer.domElement.addEventListener('pointermove',e=>{
    setPointer(e);if(phase==='room'){roomLook.x=pointer.x;roomLook.y=pointer.y}
    const ints=phase==='room'?roomInts:phase==='galaxy'?memoryInts:[];raycaster.setFromCamera(pointer,camera);const h=raycaster.intersectObjects(ints,true)[0];let o=h?.object;while(o&&!o.userData?.kind)o=o.parent;
    renderer.domElement.style.cursor=o?'pointer':'default';onHoverCb(o?.userData||null,e.clientX,e.clientY);
  });
  renderer.domElement.addEventListener('pointerleave',()=>onHoverCb(null,0,0));
  renderer.domElement.addEventListener('pointerdown',e=>{
    setPointer(e);if(phase==='room'&&e.pointerType==='touch')roomLook.set(pointer.x,pointer.y);const ints=phase==='room'?roomInts:phase==='galaxy'?memoryInts:[];raycaster.setFromCamera(pointer,camera);const h=raycaster.intersectObjects(ints,true)[0];let o=h?.object;while(o&&!o.userData?.kind)o=o.parent;if(o)onSelect(o.userData);
  });
  function setPhase(p){phase=p;phaseAt=clock.getElapsedTime();if(p==='finale')scene.background.set(0x050507)}
  function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}const lerp=(a,b,t)=>a+(b-a)*t,clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  function loop(){
    requestAnimationFrame(loop);const t=clock.getElapsedTime();stars.rotation.y=t*.006;dust.rotation.y=-t*.003;nebulaGroup.rotation.z=Math.sin(t*.035)*.025;pr.rotation.z=t*.08;
    MEMORIES.forEach((m,i)=>{const g=memoryInts[i];g.position.y=m.pos[1]+Math.sin(t*.7+i)*.12;g.rotation.y=t*.12});
    if(phase==='cover'){memoryGroup.visible=true;room.visible=false;portal.visible=false;camera.position.x+=(pointerTarget.x*.22-camera.position.x)*.015;camera.position.y+=(.35+pointerTarget.y*.12-camera.position.y)*.015;camera.position.z+=((portraitView?13:12)-camera.position.z)*.03;camera.lookAt(0,0,-4)}
    if(phase==='galaxy'){const e=ease(clamp((t-phaseAt)/2.8,0,1));scene.background.set(0x07070b);memoryGroup.visible=true;room.visible=false;portal.visible=false;scene.fog.density=.012;camera.position.z=lerp(portraitView?13:12,portraitView?8.5:5.8,e);camera.position.y=.2+pointerTarget.y*.2;camera.position.x=pointerTarget.x*(portraitView?.18:.28);camera.lookAt(pointerTarget.x*(portraitView?.4:.6),pointerTarget.y*.35,-8)}
    if(phase==='transition-room'){portal.visible=true;memoryGroup.visible=true;room.visible=false;const e=ease(clamp((t-phaseAt)/1.7,0,1));camera.position.set(0,lerp(.2,0,e),lerp(5.8,-14.2,e));camera.lookAt(0,0,-17);portal.scale.setScalar(1+e*.8);scene.fog.density=lerp(.012,.035,e)}
    if(phase==='room'){scene.background.set(0x17131a);memoryGroup.visible=false;portal.visible=false;room.visible=true;scene.fog.density=.008;const e=ease(clamp((t-phaseAt)/2.2,0,1)),bx=lerp(0,.15,e),by=lerp(.4,1.75,e),bz=lerp(-14.2,portraitView?12.5:6.6,e);camera.position.x+=(bx+roomLook.x*(portraitView?.7:.44)-camera.position.x)*.035;camera.position.y+=(by-roomLook.y*.2-camera.position.y)*.035;camera.position.z+=(bz-camera.position.z)*.035;camera.lookAt(roomLook.x*(portraitView?1.35:.92),1.8-roomLook.y*.42,-2.35)}
    renderer.render(scene,camera);
  }
  loop();
  return {setPhase};
}
