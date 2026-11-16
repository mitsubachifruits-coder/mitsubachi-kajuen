import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js';

const $ = id => document.getElementById(id);
const root = $('canvasMount');
const IS_MOBILE = window.matchMedia('(max-width:740px)').matches;
const map = $('worldMap');
const mapCtx = map.getContext('2d');
const tips = $('pointerHint');
const loadMessage = $('loadMessage');

const ZONES = [
  { kind:'さくらんぼ', sign:'さくらんぼ', x:-46, z:58, bg:'#b89470', mapAccent:'#d9e9c3', fruit:'#e74b54', flower:'#f4dbcf', id:0 },
  { kind:'桃', sign:'もも', x:46, z:58, bg:'#b58a68', mapAccent:'#f2e7d0', fruit:'#e78c78', flower:'#f4d3d3', id:1 },
  { kind:'すいか', sign:'すいか', x:-46, z:0, bg:'#ae805c', mapAccent:'#dcf0c5', fruit:'#337c4e', flower:'#f3e9bf', id:2 },
  { kind:'ぶどう', sign:'ぶどう', x:46, z:0, bg:'#aa7d5d', mapAccent:'#e0ebcf', fruit:'#8b659d', flower:'#e4d0ed', id:3 },
  { kind:'西洋梨', sign:'西洋梨', x:-46, z:-58, bg:'#b38a66', mapAccent:'#e8efd0', fruit:'#b3bc65', flower:'#f0f1cc', id:4 },
  { kind:'りんご', sign:'りんご', x:46, z:-58, bg:'#b18b68', mapAccent:'#f0e2d2', fruit:'#db5b53', flower:'#f5d7d3', id:5 },
];
const state = {
  paused:true,
  fruits:[],
  hasCatalog:false,
  activeId:null,
  zone:null,
  weather:null,
  rain:[],
  snow:[],
  rainMesh:null,
  snowMesh:null,
  season:'autumn',
};
const fruitById = new Map();
const hitMeshes = [];
const signs = [];
const zoneSprites = [];
const bees = [];
const leafMeshes=[];
const grapeCanopyHits=[];
const butterflies=[];
const footsteps=[];
let walkedDistance=0;
let mapExpanded=false;

let renderer, scene, camera, mainLight, hemisphere, clock;
let rootGroup;
const pos = new THREE.Vector3(0,1.68,99);
let yaw=0;
let pitch=-0.065;
let walkTime=0;
let ready=false;
const FONT_FAMILY='"GenSenOrchard"';

const KEYS=new Set();
const JOY={x:0,y:0};
const vForward=new THREE.Vector3();
const vSide=new THREE.Vector3();
const raycaster=new THREE.Raycaster();
const pointer=new THREE.Vector2();
const wood=material('#88634a');
const darkWood=material('#6d533d');
const warmWood=material('#ae845e');
const leafGreen=material('#70a76d');
const glossyLeaf=material('#91bb7e');
const ink=material('#4e7058');
const steel=material('#adb2b0',{metalness:.4,roughness:.7});
const berryRed=material('#cd3347',{roughness:.36});
const hay=material('#d7c7a1');
const soil=material('#ac9572');

function post(type, extra={}) {
  window.parent.postMessage({type,...extra},window.location.origin);
}
function material(color,options={}) {
  return new THREE.MeshStandardMaterial({color,roughness:.88,metalness:0,...options});
}
function shade(hex, intensity){const c=new THREE.Color(hex);c.multiplyScalar(intensity);return c;}
const materials=new Map();
function m(color,options='') {
  const key=color+options;
  if(!materials.has(key))materials.set(key,material(color,options==='gloss'?{roughness:.4}:{}));
  return materials.get(key);
}
function cube(g,x,y,z,w,h,d,mat,rx=0,ry=0,rz=0){
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);
  mesh.position.set(x,y,z);mesh.rotation.set(rx,ry,rz);mesh.castShadow=true;mesh.receiveShadow=true;
  g.add(mesh);return mesh;
}
function ball(g,x,y,z,r,mat,sc=[1,1,1],seg=12){
  const mesh=new THREE.Mesh(new THREE.IcosahedronGeometry(r,1),mat);
  mesh.position.set(x,y,z);mesh.scale.set(...sc);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;
}
function bar(g,a,b,r,mat,sides=7){
  const A=new THREE.Vector3(...a),B=new THREE.Vector3(...b);
  const obj=new THREE.Mesh(new THREE.CylinderGeometry(r*.8,r,A.distanceTo(B),sides),mat);
  obj.position.copy(A).add(B).multiplyScalar(.5);
  obj.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),B.sub(A).normalize());
  obj.castShadow=true;g.add(obj);return obj;
}
function pathLine(g,pts,r,mat){
  const curve = new THREE.CatmullRomCurve3(pts.map(p=>new THREE.Vector3(...p)));
  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve,Math.max(6,pts.length*4),r,5,false),mat);
  mesh.castShadow=false;g.add(mesh);return mesh;
}
function plane(g,x,y,z,w,h,mat,rotationX=-Math.PI/2,rotationY=0){
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),mat);
  mesh.position.set(x,y,z);mesh.rotation.set(rotationX,rotationY,0);
  mesh.receiveShadow=true;g.add(mesh);return mesh;
}
function labelSprite(text,opts={}){
  const canvas=document.createElement('canvas');canvas.width=opts.w||640;canvas.height=opts.h||210;
  const ctx=canvas.getContext('2d');
  const r=opts.r??34;
  ctx.fillStyle=opts.bg||'#fffdf3';
  ctx.beginPath();ctx.roundRect(12,12,canvas.width-24,canvas.height-24,r);ctx.fill();
  ctx.strokeStyle=opts.border||'#d3c5a8';ctx.lineWidth=opts.stroke||10;ctx.stroke();
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillStyle=opts.color||'#405347';ctx.font=`900 ${opts.font||80}px ${FONT_FAMILY}`;
  ctx.fillText(text,canvas.width/2,canvas.height/2+5,canvas.width-64);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  const material=new THREE.SpriteMaterial({map:texture,depthWrite:false,transparent:true});
  const sprite=new THREE.Sprite(material);sprite.scale.set(opts.size||3.2,(opts.size||3.2)*canvas.height/canvas.width,1);
  sprite.userData.displayName=text;
  return sprite;
}
function flattenedSticker(text,bg='#f4e9bf') {
  return labelSprite(text,{size:2.8,font:70,bg,border:'#f1eee8'});
}

function brandLogoPanel(){
  const canvas=document.createElement('canvas');
  canvas.width=1400;canvas.height=420;
  const ctx=canvas.getContext('2d');
  ctx.fillStyle='#fffdf5';
  ctx.beginPath();ctx.roundRect(18,18,canvas.width-36,canvas.height-36,44);ctx.fill();
  ctx.strokeStyle='#e9dcc3';ctx.lineWidth=18;ctx.stroke();
  const chars=[
    {t:'み',c:'#ff3131'},{t:'つ',c:'#006dff'},{t:'ば',c:'#00bf63'},
    {t:'ち',c:'#ffde59'},{t:'果',c:'#8c52ff'},{t:'樹',c:'#00a1ff'},{t:'園',c:'#ff66c4'}
  ];
  ctx.textAlign='left';ctx.textBaseline='middle';
  let fontSize=212;
  let gap=10;
  let widths=[];
  let total=0;
  while(fontSize>=120){
    ctx.font=`900 ${fontSize}px ${FONT_FAMILY}`;
    widths=chars.map(char=>ctx.measureText(char.t).width);
    total=widths.reduce((a,b)=>a+b,0)+gap*(chars.length-1);
    if(total<=canvas.width-170)break;
    fontSize-=2;
  }
  let x=(canvas.width-total)/2;
  chars.forEach((char,i)=>{
    ctx.fillStyle=char.c;
    ctx.fillText(char.t,x,canvas.height/2+4);
    x+=widths[i]+gap;
  });
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  const face=new THREE.Mesh(new THREE.PlaneGeometry(6.6,1.98),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide,toneMapped:false,depthWrite:false,transparent:true}));
  face.renderOrder=3;
  face.userData.displayName='みつばち果樹園';
  return face;
}
function createLoadingScene(){
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,IS_MOBILE?1.3:1.8));
  renderer.setSize(innerWidth,innerHeight);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.18;
  renderer.shadowMap.enabled=!IS_MOBILE;
  renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.domElement.tabIndex=0;
  root.appendChild(renderer.domElement);
  scene=new THREE.Scene();scene.background=new THREE.Color('#a7d3e1');
  scene.fog=new THREE.Fog('#c3dae3',145,440);
  camera=new THREE.PerspectiveCamera(66,innerWidth/innerHeight,.1,470);
  camera.rotation.order='YXZ';
  mainLight=new THREE.DirectionalLight('#ffefd8',2.05);
  mainLight.position.set(-24,42,18);mainLight.castShadow=!IS_MOBILE;
  mainLight.shadow.mapSize.set(IS_MOBILE?1024:2048,IS_MOBILE?1024:2048);
  mainLight.shadow.camera.left=-90;mainLight.shadow.camera.right=90;
  mainLight.shadow.camera.top=90;mainLight.shadow.camera.bottom=-90;
  mainLight.shadow.camera.near=1;mainLight.shadow.camera.far=260;
  mainLight.shadow.bias=-.00045;
  scene.add(mainLight);
  hemisphere=new THREE.HemisphereLight('#e0f5ff','#b5b28e',2.1);scene.add(hemisphere);
  rootGroup=new THREE.Group();scene.add(rootGroup);
  clock=new THREE.Clock();
  makeLandscape();
  makePlotFloors();
  makePathway();
  makeCherryHouse();
  makeGrapeTrellis();
  makeEntrance();
  makeProps();
  makeBees();
  makeButterflies();
  makeWeatherMeshes();
  camera.position.copy(pos);camera.rotation.set(pitch,yaw,0,'YXZ');
  attachControls();
  animate();
  loadMessage.classList.add('hidden');
  ready=true;
  window.__orchardReady=true;
  post('orchard:ready');
}
function makeLandscape(){
  plane(rootGroup,0,-.10,0,370,390,m('#9b7957'));
  // The distant ridges encircle the Yamagata Basin; distant fields are intentionally low-poly.
  makeBasinRidge(200,'#9aafb0',22,13);
  makeBasinRidge(174,'#7f9f98',17,39);
  makeBasinRidge(152,'#729880',10,72);
  makeBasinFields();
  // Village edge, small orchards and rice fields beneath the basin mountains.
  for(let i=0;i<45;i++){
    const x=((i*11)%170)-85;
    const z=-105-(i%3)*4;
    const g=new THREE.Group();
    bar(g,[0,0,0],[0,2.6,0],.12,wood);
    ball(g,0,3.3,0,1.2,m(i%3===0?'#8eb78a':'#72a97a'),[.8,1.4,.8]);
    g.position.set(x,0,z);rootGroup.add(g);
  }
  for(let i=0;i<11;i++){
    const g=new THREE.Group();
    const cloudMat=new THREE.MeshStandardMaterial({color:'#fffaf2',roughness:1,transparent:true,opacity:.92});
    ball(g,-1.8,0,0,2.6,cloudMat,[1.6,.45,.6]);
    ball(g,0,.4,0,2.6,cloudMat,[1.4,.62,.65]);
    ball(g,1.9,0,0,2.45,cloudMat,[1.6,.42,.58]);
    g.position.set(-97+(i%5)*42,27+(i%3)*4,-116+Math.floor(i/5)*87);
    rootGroup.add(g);
  }
  for(let i=0;i<42;i++){
    const x=(i%2===0?-67:67)+(i%3)*.28;
    const z=-80+(i%21)*7.5;
    const g=new THREE.Group();
    bar(g,[0,0,0],[0,2.5,0],.17,darkWood);
    ball(g,0,3.0,0,1.25,m(i%2?'#79a975':'#8ebc85'),[1.15,1.1,1.1]);
    g.position.set(x,0,z);rootGroup.add(g);
  }
}
function makeBasinRidge(radius, color, mainHeight, seed){
  const points=[];
  const indices=[];
  const segments=100;
  for(let i=0;i<=segments;i++){
    const a=(i/segments)*Math.PI*2;
    const east=Math.max(0,Math.cos(a));
    const west=Math.max(0,-Math.cos(a));
    const ripple=Math.sin(a*8+seed)*.17+Math.sin(a*17+seed*.31)*.10+Math.sin(a*31+seed*.18)*.075;
    const height=mainHeight*(.70+east*.50+west*.18+ripple);
    const r0=radius-13;
    const r1=radius+11;
    const r2=radius+23;
    const cr=Math.sin(a*13+seed)*1.9;
    points.push(
      Math.cos(a)*r0, -.45, Math.sin(a)*r0,
      Math.cos(a)*(r1+cr), height, Math.sin(a)*(r1+cr),
      Math.cos(a)*r2, -.45, Math.sin(a)*r2
    );
    if(i<segments){
      const k=i*3;
      indices.push(k,k+1,k+3, k+1,k+4,k+3);
      indices.push(k+1,k+2,k+4, k+2,k+5,k+4);
    }
  }
  const geometry=new THREE.BufferGeometry();
  geometry.setAttribute('position',new THREE.Float32BufferAttribute(points,3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const material=new THREE.MeshStandardMaterial({color,roughness:1,metalness:0,side:THREE.DoubleSide,flatShading:true});
  const ridge=new THREE.Mesh(geometry,material);
  ridge.castShadow=false;
  ridge.receiveShadow=true;
  rootGroup.add(ridge);
  // Small scattered tree-tops on the foothills make the silhouette less geometric.
  if(radius<80){
    for(let i=0;i<40;i++){
      const a=i*.83+seed;
      const x=Math.cos(a)*(radius-10), z=Math.sin(a)*(radius-10);
      const tree=ball(rootGroup,x,2.25,z,2.25,m(i%3===0?'#71936e':'#759c77'),[1.0,1.22,.85],6);
      tree.castShadow=false;
    }
  }
}
function makeBasinFields(){
  const greens=['#bacc91','#c8d99e','#9fc9a0','#c2ca84','#d5d49e'];
  for(let row=0;row<9;row++){
    for(let col=0;col<12;col++){
      const x=-125+col*13;
      const z=-128+row*12;
      if(Math.abs(x)<76&&z>-82)continue;
      const color=greens[(col+row*3)%greens.length];
      plane(rootGroup,x,-.04,z,12.2,11.1,m(color));
      for(let j=0;j<4;j++){
        const zz=z-3.9+j*2.4;
        bar(rootGroup,[x-4.9,-.016,zz],[x+4.9,-.016,zz],.027,m('#8cb284'),4);
      }
    }
  }
  for(let i=0;i<26;i++){
    const z=-115+i*8.5;
    const x=i%2===0?-91:91;
    const g=new THREE.Group();
    bar(g,[0,0,0],[0,2.25,0],.10,wood);
    ball(g,0,2.78,0,1.25,m(i%3===0?'#759b74':'#7da37b'),[1.12,1.13,.85],8);
    g.position.set(x,0,z);rootGroup.add(g);
  }
}
function makePlotFloors(){
  for(const zone of ZONES){
    const g=new THREE.Group();
    plane(g,0,.0,0,57,43,m(zone.bg));
    // Soft alternating soil beds create a planted-earth surface rather than a colored lawn.
    for(let strip=0;strip<7;strip++){
      const x=-23.6+strip*7.85;
      plane(g,x,.014,0,4.35,40.8,m(strip%2===0?'#b9926d':'#a7805e'));
      for(let i=0;i<10;i++){
        const z=-19.1+i*4.18;
        ball(g,x+2.12,.075,z,.14,m(i%2?'#86664d':'#c3a27e'),[1.2,.35,1.0],6);
      }
    }
    // Border stones and soft wild grass mark orchard paths.
    for(let j=0;j<28;j++){
      const x=-27.5+(j*23%55);
      const z=j%2===0?-21:21;
      ball(g,x,.12,z,.16,m(j%3===0?'#86b675':'#b6c981'),[.6,1.7,.5]);
    }
    for(let j=0;j<24;j++){
      const z=-20.2+(j*11%41);
      const x=j%2===0?-27.6:27.6;
      ball(g,x,.09,z,.14,m('#9db978'),[.7,1.5,.6]);
    }
    zone.group=g;
    g.position.set(zone.x,0,zone.z);
    rootGroup.add(g);
  }
}
function makePathway(){
  // A continuous scenic walk with side lanes and garden crossings.
  plane(rootGroup,0,.023,0,11.4,212,m('#e7d7b5'));
  plane(rootGroup,0,.032,93,14,14,m('#ede0c6'));
  for(let z of [-29,29]){
    plane(rootGroup,0,.029,z,151,4.9,m('#e8d8bc'));
    for(let i=0;i<30;i++){
      const x=-74+i*5;
      cube(rootGroup,x,.071,z-2.2,.28,.07,.22,m('#d7c5a6'));
      cube(rootGroup,x,.071,z+2.2,.28,.07,.22,m('#d7c5a6'));
    }
  }
  for(let i=0;i<76;i++){
    const z=-73+i*1.96;
    const x=(i%2?5.22:-5.22);
    cube(rootGroup,x,.088,z,.17,.11,1.25,m('#d5c2a2'));
  }
  // Branch paths leading to each planted orchard.
  for(const zone of ZONES){
    const from=zone.x<0?-10.2:10.2;
    const to=zone.x<0?-73:73;
    plane(rootGroup,(from+to)/2,.04,zone.z+5.5,Math.abs(to-from),3.3,m('#e9dabb'));
  }
  const petalColors=['#f3dbcf','#e3e8b3','#dce2f1','#f5e9ce'];
  for(let i=0;i<360;i++){
    const x=(i%2===0?-5.9:5.9)+(((i*7)%5)-2)*.1;
    const z=-96+(i*11%194);
    const y=.12+((i*3)%4)*.03;
    bar(rootGroup,[x,0,z],[x,y+.12,z],.028,m('#729c67'),5);
    ball(rootGroup,x,y+.15,z,.13,m(petalColors[i%petalColors.length]),[.95,.85,.95]);
  }
  // Rustic entrance: brand sign is a SQUARE, above (not inside) the wooden arch.
  const welcome=new THREE.Group();
  bar(welcome,[-3.45,0,0],[-3.45,2.9,0],.16,darkWood);
  bar(welcome,[3.45,0,0],[3.45,2.9,0],.16,darkWood);
  cube(welcome,0,2.82,0,8.6,.24,.37,warmWood);
  const name=brandLogoPanel();
  name.position.set(0,4.72,.12);welcome.add(name);
  for(let x of [-2.3,2.3]){
    bar(welcome,[x,2.94,-.1],[x,3.72,-.1],.07,m('#a88759'));
  }
  welcome.position.set(0,0,91);rootGroup.add(welcome);
  // Names along paths are optional guideposts, NOT cultivar labels on crops.
  for(const zone of ZONES){
    const sign=new THREE.Group();
    const x=zone.x<0?-8.1:8.1;
    const z=zone.z+14.2;
    bar(sign,[0,0,0],[0,1.55,0],.12,warmWood);
    const display=labelSprite(zone.sign,{size:2.65,font:90,bg:'#fffdf1',border:'#d1bd95',stroke:12});
    display.position.set(0,1.92,0);sign.add(display);
    sign.position.set(x,0,z);
    rootGroup.add(sign);signs.push(sign);
  }
  // Paved observation point with a small lily pond, without the removed bench or greeting board.
  makePondAndFlowers();
}
function makePondAndFlowers(){
  const x=-18,z=92.0;
  const pond=new THREE.Group();
  const oval=new THREE.Mesh(new THREE.SphereGeometry(3.1,20,16),m('#c8d9cd',{roughness:.3}));
  oval.scale.set(1.35,.095,.88);oval.position.set(0,.08,0);pond.add(oval);
  const water=new THREE.Mesh(new THREE.SphereGeometry(2.9,20,16),material('#90bdc4',{metalness:.1,roughness:.22}));
  water.scale.set(1.35,.025,.88);water.position.set(0,.17,0);pond.add(water);
  for(let i=0;i<14;i++){
    const a=i*Math.PI*2/14;
    const stone=ball(pond,Math.cos(a)*3.98,.18,Math.sin(a)*2.64,.38,m(i%3?'#b1ad9a':'#d4cdb9'),[1.6,.4,.95]);
    stone.rotation.y=a;
  }
  for(let i=0;i<8;i++){
    const a=i*2.4;
    const px=Math.cos(a)*2.1,pz=Math.sin(a)*1.3;
    const leaf=ball(pond,px,.225,pz,.38,m('#7dba7a'),[1.1,.08,.64]);leaf.rotation.y=a;
    if(i%3===0)ball(pond,px+.1,.32,pz,.17,m('#f9f0d3'),[.75,.45,1]);
  }
  pond.position.set(x,0,z);rootGroup.add(pond);
  for(let i=0;i<36;i++){
    const a=i*2.4,d=4.8+(i%3)*.34;
    const xx=x+Math.cos(a)*d,zz=z+Math.sin(a)*d*.71;
    bar(rootGroup,[xx,0,zz],[xx,.48+(i%4)*.08,zz],.03,m('#6b985f'));
    ball(rootGroup,xx,.52+(i%4)*.08,zz,.19,m(i%2?'#f1c9d6':'#f9e2a8'),[.8,.85,.9]);
  }
}
function makeCherryHouse(){
  const g=new THREE.Group();
  const halfWidth=23.5,halfDepth=17.4;
  for(let z=-halfDepth;z<=halfDepth;z+=3.7){
    bar(g,[-halfWidth,0,z],[-halfWidth,4.65,z],.085,steel);
    bar(g,[halfWidth,0,z],[halfWidth,4.65,z],.085,steel);
    const points=[];
    for(let i=0;i<=28;i++){
      const x=-halfWidth+(i/28)*halfWidth*2;
      const y=4.65+2.6*Math.sin(i/28*Math.PI);
      points.push([x,y,z]);
    }
    pathLine(g,points,.067,steel);
  }
  for(let x of [-23.5,-11.75,0,11.75,23.5]){
    const y=4.65+2.6*Math.sin((x/23.5+1)*Math.PI/2);
    pathLine(g,[[x,y,-halfDepth],[x,y,halfDepth]],.072,steel);
  }
  const verts=[],indices=[],segments=36;
  for(let j=0;j<=1;j++)for(let i=0;i<=segments;i++){
    const ratio=i/segments;
    const x=-halfWidth+halfWidth*2*ratio;
    verts.push(x,4.65+2.6*Math.sin(Math.PI*ratio)+.04,j===0?-halfDepth-.02:halfDepth+.02);
  }
  for(let i=0;i<segments;i++){
    indices.push(i,i+1,segments+1+i,i+1,segments+2+i,segments+1+i);
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));geometry.setIndex(indices);geometry.computeVertexNormals();
  const roof=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color:'#f9ffff',side:THREE.DoubleSide,metalness:.02,roughness:.25,transparent:true,opacity:.15,depthWrite:false}));
  roof.renderOrder=5;g.add(roof);
  g.position.set(-46,0,58);rootGroup.add(g);
}
function makeGrapeTrellis(){
  const g=new THREE.Group();
  const beamY=3.78;
  const wire=m('#a3b2a7');
  for(let x of [-26,-13,0,13,26]){
    for(let z of [-21,-10.5,0,10.5,21])bar(g,[x,0,z],[x,beamY,z],.095,steel);
    bar(g,[x,beamY,-21],[x,beamY,21],.052,steel);
  }
  for(let z of [-21,-10.5,0,10.5,21])bar(g,[-26,beamY,z],[26,beamY,z],.062,steel);
  // Mature branches climb up onto the shelf and ramify horizontally between the supports.
  for(let j=0;j<9;j++){
    const z=-16+j*4.1;
    const curve=[];
    for(let k=0;k<=14;k++){
      const x=-25+k*(50/14);
      curve.push([x,beamY+.04+Math.sin(k*.9+j)*.10,z+Math.sin(k*.7+j*.8)*.29]);
    }
    pathLine(g,curve,.054,m('#705a43'));
  }
  const greenery=[m('#74ad6a'),m('#8fbd7d'),m('#689d5f'),m('#a1c58a')];
  const grapeTones=[m('#4b345c','gloss'),m('#b8d677','gloss'),m('#6b4d78','gloss')];
  const bunchMat=m('#6d7654');
  for(let row=0;row<9;row++){
    for(let col=0;col<12;col++){
      const x=-23.0+col*4.14;
      const z=-16.0+row*4.07;
      const wobble=Math.sin(col*1.8+row*.71);
      const y=beamY+.18+(wobble*.09);
      const leaf=ball(g,x,y,z,.68,greenery[(col+row)%greenery.length],[1.38,.17,1.0],8);
      leaf.rotation.y=col*.31+row*.28;
      if((col+row)%3!==0){
        const tone=grapeTones[(Math.floor(col/4)+row)%grapeTones.length];
        const bunchX=x+.42,bunchZ=z-.37;
        bar(g,[bunchX,beamY+.12,bunchZ],[bunchX,beamY-.21,bunchZ],.022,bunchMat,5);
        for(let tier=0;tier<4;tier++){
          const count=4-tier;
          for(let n=0;n<count;n++){
            const bx=bunchX+(n-(count-1)/2)*.17;
            ball(g,bx,beamY-.34-tier*.17,bunchZ,.092,tone,[1,1.08,1],8);
          }
        }
        const hit=new THREE.Mesh(new THREE.SphereGeometry(.62,8,8),new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}));
        hit.position.set(bunchX,beamY-.52,bunchZ);
        g.add(hit);
        grapeCanopyHits.push({mesh:hit,x:46+bunchX,z:bunchZ});
      }
    }
  }
  g.position.set(46,0,0);rootGroup.add(g);
}
function makeEntrance(){
  // Quiet floral arrival garden: no bench and no こんにちは sign.
  const vine=material('#779e6d');
  for(let i=0;i<7;i++){
    const xx=11+(i%4)*2.7;
    const zz=89+Math.floor(i/4)*4.5;
    bar(rootGroup,[xx,0,zz],[xx,1.15,zz],.05,vine);
    ball(rootGroup,xx,1.35,zz,.49,m('#7ead74'),[.85,1.1,.9]);
    ball(rootGroup,xx+.23,1.48,zz,.12,m('#fae8a9'));
  }
}
function makeProps(){
  // Boundary decorations, pots, watering cans and small birdhouses.
  for(let i=0;i<12;i++){
    const z=-79+i*14;
    const x=i%2===0?-75.4:75.4;
    const pot=new THREE.Group();
    cube(pot,0,.30,0,.7,.6,.7,m(i%2?'#ba8065':'#d1a282'));
    for(let j=0;j<4;j++){
      pathLine(pot,[[0,.65,0],[Math.sin(j)*.23,.92,Math.cos(j)*.19],[Math.sin(j)*.28,1.36,Math.cos(j)*.3]],.03,m('#74a46f'));
      ball(pot,Math.sin(j)*.28,1.29,Math.cos(j)*.3,.23,m(j%2?'#e2cdd8':'#f6d2cb'),[1,.65,.7]);
    }
    pot.position.set(x,0,z);rootGroup.add(pot);
  }
  for(let i=0;i<6;i++){
    const x=i%2?-80:80,z=-73+i*28;
    bar(rootGroup,[x,0,z],[x,3.2,z],.14,darkWood);
    cube(rootGroup,x,3.18,z,.75,.65,.55,m('#d6b58e'));
    cube(rootGroup,x,3.6,z,.9,.14,.72,m('#875f44'));
    ball(rootGroup,x,3.17,z+.3,.12,m('#3f624e'));
  }
}
function makeBees(){
  for(let i=0;i<7;i++){
    const g=new THREE.Group();
    ball(g,0,0,0,.13,m('#f8c65f'),[1.4,1,.9]);
    cube(g,-.055,0,0,.034,.25,.20,m('#4c3830'));
    cube(g,.05,0,0,.034,.25,.20,m('#4c3830'));
    const wings=[];
    for(let j=0;j<2;j++){
      const w=ball(g,j?.07:-.07,.14,0,.1,new THREE.MeshStandardMaterial({color:'#fffef8',transparent:true,opacity:.68,roughness:.3}),[1.1,.33,.8]);
      wings.push(w);
    }
    rootGroup.add(g);bees.push({g,wings,seed:i*1.79});
  }
}
function makeButterflies(){
  for(let i=0;i<11;i++){
    const g=new THREE.Group();
    const color=i%3===0?'#f8e1a1':i%3===1?'#e7b9cd':'#cbd9f4';
    ball(g,0,0,0,.075,m('#8c7952'),[.65,1.4,.65]);
    const wings=[];
    for(let side of [-1,1]){
      const wing=ball(g,side*.11,.04,0,.14,m(color),[.9,.25,1.0]);
      wing.rotation.z=side*.35;wings.push(wing);
    }
    rootGroup.add(g);butterflies.push({g,wings,seed:i*2.04});
  }
}
function cultivarTone(fruit){
  const name=fruit.name;
  if(fruit.kind==='さくらんぼ'){
    if(name.includes('月山')||fruit.id==='napoleon')return '#f2d76a';
    if(name.includes('黒')||name.includes('紅王')||name.includes('紅さやか')||name.includes('ジュノ'))return '#aa284d';
    return '#e64b61';
  }
  if(fruit.kind==='桃')return name.includes('黄金') ? '#f7c967' : '#eda393';
  if(fruit.kind==='ぶどう'){
    if(/シャイン|サンヴェルデ|瀬戸/.test(name))return '#b7d978';
    if(/クイーン|安芸/.test(name))return '#de7584';
    return '#705183';
  }
  if(fruit.kind==='西洋梨')return name.includes('レクチェ')?'#d9c579':'#b0ba68';
  if(fruit.kind==='りんご'){
    if(/ゴールド|ゴールデン|王林|トキ|名月|はるか|星の金貨|もりのかがやき/.test(name))return '#e7d46d';
    if(name.includes('秋映')||name.includes('紅玉'))return '#a8324b';
    return '#e75d55';
  }
  return '#397c50';
}
function makeCherryFruit(g,x,y,z,c,r=.105){
  const mFruit=m(c,'gloss');
  ball(g,x-.09,y,z,r,mFruit,[1,1.07,1]);ball(g,x+.09,y+.02,z+.04,r,mFruit,[1.07,1,1]);
  pathLine(g,[[x-.09,y+r,z],[x-.06,y+.35,z-.03],[x,y+.4,z]],.011,m('#74834e'));
  pathLine(g,[[x+.09,y+r,z+.04],[x+.05,y+.34,z],[x,y+.4,z]],.011,m('#74834e'));
}
function makeCherryTree(g,tone,seed){
  const n=seed;
  const trunk=m('#75543c');
  bar(g,[0,0,0],[0,.75,0],.155,trunk);
  // open Y training: two leaders spread sideways, supported at low height.
  for(let side of [-1,1]){
    bar(g,[0,.67,0],[side*.79,2.28,0],.098,trunk);
    bar(g,[side*.3,1.35,0],[side*1.22,2.56,.32],.068,trunk);
    bar(g,[side*.9,1.94,0],[side*1.3,2.25,-.58],.052,trunk);
    // narrow foliage between fruiting side branches
    ball(g,side*.88,2.45,.08,.65,m(n%3===0?'#6c9e5e':'#80af6e'),[1.05,.74,.72]);
    ball(g,side*1.18,2.69,-.35,.57,m(n%2===0?'#81b174':'#629a62'),[.95,.8,1.2]);
    ball(g,side*.65,1.99,.4,.52,m('#7aa96b'),[.75,.7,1]);
    for(let i=0;i<(IS_MOBILE?2:3);i++){
      const bx=side*(.6+i*.27),by=1.82+((i+n)%3)*.21,bz=(i%2?-.42:.4);
      makeCherryFruit(g,bx,by,bz,tone,.075+((i+n)%3)*.008);
    }
    bar(g,[side*1.4,.18,0],[side*1.4,2.38,0],.032,steel,6);
  }
  bar(g,[-1.45,1.95,0],[1.45,1.95,0],.018,steel,6);
}
function makePeachTree(g,tone,seed){
  const base=m('#7b583c');
  bar(g,[0,0,0],[0,2.1,0],.18,base);
  const branches=[[-1.35,2.78,-.16],[1.15,2.72,-.08],[.2,3.45,-.5],[-.18,3.28,.9]];
  branches.forEach((p,i)=>{bar(g,[0,1.65,0],p,.095,base);
    ball(g,p[0],p[1],p[2],.93,m(i%2?'#7baa75':'#84b17a'),[1,.78,1]);
  });
  for(let i=0;i<(IS_MOBILE?5:8);i++){
    const theta=(i*2.399+seed)*1.0;
    const x=Math.cos(theta)*1.15,y=2.35+(i%4)*.27,z=Math.sin(theta)*.9;
    ball(g,x,y,z,.21,m(tone,'gloss'),[1,1,.95]);
    // cheek blush texture cue
    if(tone!=='#f7c967')ball(g,x+.05,y+.06,z+.17,.12,m('#ef657a'),[1,.8,.48]);
  }
  for(let i=0;i<4;i++)ball(g,Math.cos(i*1.7)*.75,3.3,Math.sin(i*1.5)*.75,.5,m('#92ba81'),[1,.7,1.1]);
}
function pearBody(g,x,y,z,tone){
  const points=[];
  for(const [r,h] of [[0,0],[.07,.04],[.22,.1],[.30,.25],[.32,.40],[.25,.57],[.17,.72],[.15,.88],[.08,.98],[0,1]])points.push(new THREE.Vector2(r,h));
  const mesh=new THREE.Mesh(new THREE.LatheGeometry(points,12),m(tone,'gloss'));
  mesh.scale.set(.92,.66,.92);mesh.position.set(x,y,z);mesh.castShadow=true;g.add(mesh);
  bar(g,[x,y+.62,z],[x+.02,y+.77,z],.018,m('#74573f'),5);
}
function makeAppleOrPearTree(g,tone,seed,isPear){
  const trunk=m('#79573e');
  bar(g,[0,0,0],[0,2.16,0],.22,trunk);
  const branches=[[-1.4,2.7,-.25],[1.2,2.72,.35],[-.15,3.62,.18],[.6,2.9,-1.05],[-.65,2.9,.95]];
  branches.forEach((p,i)=>{
    bar(g,[0,1.8,0],p,.083,trunk);
    const crown=ball(g,p[0],p[1],p[2],.83,m(i%2===0?'#74a767':'#8cbb78'),[1.0,.83,1.06]);
    crown.castShadow = (i<3);
  });
  for(let i=0;i<(IS_MOBILE?5:8);i++){
    const a=seed*.6+i*2.4;
    const x=Math.cos(a)*1.28,y=2.47+(i%3)*.23,z=Math.sin(a)*.95;
    if(isPear)pearBody(g,x,y-.3,z,tone);
    else{
      ball(g,x,y,z,.19,m(tone,'gloss'),[1,1.03,.97]);
      bar(g,[x,y+.16,z],[x+.03,y+.31,z],.015,m('#826247'),5);
      ball(g,x+.12,y+.25,z,.105,m('#719d54'),[1.5,.32,.8]);
    }
  }
}
function bunch(g,x,y,z,tone){
  for(let row=0;row<4;row++){
    const count=row<3?3-row:1;
    for(let i=0;i<count;i++)ball(g,x+(i-(count-1)/2)*.22,y-row*.22,z+(row%2)*.03,.12,m(tone,'gloss'));
  }
  pathLine(g,[[x,y+.18,z],[x+.04,y+.44,z]],.026,m('#6e8c57'));
}
function makeVine(g,tone,seed){
  const vine=m('#695442');
  bar(g,[0,0,0],[0,3.3,0],.11,vine);
  for(let arm of [-1,1]){
    bar(g,[0,3.12,0],[arm*3.55,3.88,-.1],.069,vine);
    bar(g,[arm*1.4,3.6,0],[arm*4.4,3.96,2.15],.048,vine);
    bar(g,[arm*2.0,3.7,0],[arm*3.9,3.96,-2.1],.042,vine);
  }
  for(let row=-3;row<=3;row++){
    const canopy=[];
    for(let i=0;i<=10;i++){
      const x=-4.6+i*.92;
      canopy.push([x,3.94+Math.sin(i*.7+row*.6+seed)*.11,row*.6]);
    }
    pathLine(g,canopy,.033,m('#6f945f'));
  }
  const leafColors=['#7ead72','#96c188','#70a269','#a5ca8c'];
  for(let i=0;i<(IS_MOBILE?16:32);i++){
    const x=-4.38+(i%8)*1.22,z=-2.08+Math.floor(i/8)*1.41;
    const leaf=ball(g,x,4.0+Math.sin(i*1.4+seed)*.1,z,.53,m(leafColors[(seed+i)%leafColors.length]),[1.22,.19,.84],8);
    leaf.rotation.y=i*.62;
  }
  const count=IS_MOBILE?14:24;
  for(let i=0;i<count;i++){
    const col=i%6,row=Math.floor(i/6);
    const x=-3.95+col*1.52+(row%2)*.22;
    const z=-1.8+row*1.15;
    const y=3.52+Math.sin(i*1.4+seed)*.1;
    bunch(g,x,y,z,tone);
  }
}
function makeWatermelon(g,tone,seed,fruit){
  // watermelons grow along the ground, not on tree trunks.
  const leafMat=m('#6aa65e');
  pathLine(g,[[0,.17,0],[-1.25,.15,.35],[-1.55,.13,-.8],[-2,.14,-1.2]],.068,m('#56834c'));
  pathLine(g,[[0,.17,0],[.9,.16,.45],[1.45,.15,1.1],[2.1,.16,.95]],.067,m('#56834c'));
  pathLine(g,[[0,.17,0],[.25,.15,-.65],[.5,.14,-1.45]],.052,m('#56834c'));
  for(let i=0;i<7;i++){
    const x=Math.sin(i*1.4+seed)*1.25,z=Math.cos(i*.9)*1.15;
    const leaf=ball(g,x,.23,z,.25,leafMat,[1.6,.19,.7]);leaf.rotation.y=i*1.8;
  }
  const isLong=fruit.id==='raoh-long';
  const body=ball(g,.5,.55,.12,.56,m(tone,'gloss'),isLong?[1,1,1.55]:[1,1,1],2);
  body.geometry.dispose();body.geometry=new THREE.SphereGeometry(.55,18,14);
  // lengthwise stripes make each watermelon immediately recognisable
  const stripe=m(tone==='#273c31'?'#465b4c':'#8abf65');
  for(let s=0;s<9;s++){
    const ang=(s/9)*Math.PI*2;
    const points=[];
    for(let k=0;k<=10;k++){
      const t=-Math.PI/2+(k/10)*Math.PI;
      const rr=.56*Math.cos(t);
      const elongate=isLong?1.5:1;
      points.push([.5+Math.cos(ang)*rr, .55+Math.sin(t)*.56, .12+Math.sin(ang)*rr*elongate]);
    }
    pathLine(g,points,.014,stripe);
  }
  ball(g,-.35,.37,.55,.19,m('#6b9f5d'),[1.6,.25,.7]);
}
function addPickable(g,fruit,seed,kind){
  const radius = kind==='すいか'?2.05:kind==='ぶどう'?5.0:kind==='さくらんぼ'?1.75:2;
  const height = kind==='すいか'?1.2:kind==='ぶどう'?5.1:4.7;
  const hit=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,height,9),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide}));
  hit.position.y=height/2;hit.userData.fruitId=fruit.id;hitMeshes.push(hit);g.add(hit);
  return null;
}
function plantCultivar(fruit,x,z,kind,index){
  const group=new THREE.Group();group.position.set(x,0,z);
  const tone=cultivarTone(fruit);
  if(kind==='さくらんぼ')makeCherryTree(group,tone,index);
  if(kind==='桃')makePeachTree(group,tone,index);
  if(kind==='すいか')makeWatermelon(group,tone,index,fruit);
  if(kind==='ぶどう')makeVine(group,tone,index);
  if(kind==='西洋梨')makeAppleOrPearTree(group,tone,index,true);
  if(kind==='りんご')makeAppleOrPearTree(group,tone,index,false);
  const label=addPickable(group,fruit,index,kind);
  rootGroup.add(group);
  leafMeshes.push({mesh:group,label,fruit,kind});
}
function addAllCultivars(list){
  for(const group of leafMeshes){rootGroup.remove(group.mesh);}
  leafMeshes.length=0;hitMeshes.length=0;
  for(const zone of ZONES){
    const cultivars=list.filter(f=>f.kind===zone.kind);
    const columns=zone.kind==='さくらんぼ'?6:zone.kind==='西洋梨'?3:zone.kind==='ぶどう'?3:4;
    const rows=Math.ceil(cultivars.length/columns);
    const sx=zone.kind==='さくらんぼ'?8.0:zone.kind==='西洋梨'?15.0:zone.kind==='ぶどう'?15.5:13.0;
    const sz=zone.kind==='さくらんぼ'?6.2:zone.kind==='ぶどう'?9.2:zone.kind==='西洋梨'?12.5:zone.kind==='すいか'?11.2:11.3;
    cultivars.forEach((fruit,i)=>{
      const col=i%columns,row=Math.floor(i/columns);
      const x=zone.x+(col-(columns-1)/2)*sx;
      const z=zone.z+(row-(rows-1)/2)*sz;
      plantCultivar(fruit,x,z,zone.kind,i);
    });
  }
  const grapePlants=leafMeshes.filter(item=>item.kind==='ぶどう');
  for(const bunchHit of grapeCanopyHits){
    if(!grapePlants.length)break;
    let nearest=grapePlants[0];
    let shortest=Infinity;
    for(const plant of grapePlants){
      const dx=bunchHit.x-plant.mesh.position.x;
      const dz=bunchHit.z-plant.mesh.position.z;
      const distance=dx*dx+dz*dz;
      if(distance<shortest){shortest=distance;nearest=plant;}
    }
    bunchHit.mesh.userData.fruitId=nearest.fruit.id;
    hitMeshes.push(bunchHit.mesh);
  }
}
function makeWeatherMeshes(){
  const rainCount=760;
  const rainPos=new Float32Array(rainCount*6);
  const drops=[];
  for(let i=0;i<rainCount;i++)drops.push({x:pos.x+(Math.random()-.5)*48,y:.5+Math.random()*27,z:pos.z+(Math.random()-.5)*38});
  const rainGeometry=new THREE.BufferGeometry();
  rainGeometry.setAttribute('position',new THREE.BufferAttribute(rainPos,3).setUsage(THREE.DynamicDrawUsage));
  const rainMaterial=new THREE.LineBasicMaterial({color:'#eaf3ff',transparent:true,opacity:.58,depthWrite:false});
  state.rainMesh=new THREE.LineSegments(rainGeometry,rainMaterial);
  state.rainMesh.frustumCulled=false;state.rainMesh.visible=false;
  scene.add(state.rainMesh);state.rain=drops;
  const snowCount=620;
  const snowPos=new Float32Array(snowCount*3);
  const flakes=[];
  for(let i=0;i<snowCount;i++)flakes.push({x:pos.x+(Math.random()-.5)*46,y:.5+Math.random()*28,z:pos.z+(Math.random()-.5)*37,seed:Math.random()*8});
  const snowGeometry=new THREE.BufferGeometry();
  snowGeometry.setAttribute('position',new THREE.BufferAttribute(snowPos,3).setUsage(THREE.DynamicDrawUsage));
  state.snowMesh=new THREE.Points(snowGeometry,new THREE.PointsMaterial({size:.13,color:'#ffffff',transparent:true,opacity:.88,depthWrite:false,sizeAttenuation:true}));
  state.snowMesh.frustumCulled=false;state.snowMesh.visible=false;
  scene.add(state.snowMesh);state.snow=flakes;
}
function configureWeather(weather){
  state.weather=weather;
  const mode=weather?.mode || 'unknown';
  const isDay=weather?.isDay!==false;
  let sky='#a7d3e1',fog='#cadfe1';
  let sun=1.85,hemi=2.0;
  let exposure=1.18;
  if(mode==='cloudy'){sky='#b4c3c7';fog='#bbc8bd';sun=1.14;hemi=1.65;exposure=1.03;}
  if(mode==='rain'){sky='#8297a4';fog='#95aaa7';sun=.8;hemi=1.5;exposure=.98;}
  if(mode==='fog'){sky='#c3cdca';fog='#c1ccca';sun=.65;hemi=1.55;exposure=1.08;}
  if(mode==='snow'){sky='#b1c1cb';fog='#c3d0d7';sun=1.0;hemi=1.7;exposure=1.1;}
  if(!isDay){sky='#2c4c61';fog='#465c64';sun=.25;hemi=.87;exposure=.98;}
  scene.background=new THREE.Color(sky);
  scene.fog.color.set(fog);
  scene.fog.near=mode==='fog'?24:145;
  scene.fog.far=mode==='fog'?240:440;
  mainLight.intensity=sun;
  hemisphere.intensity=hemi;
  renderer.toneMappingExposure=exposure;
  state.rainMesh.visible=mode==='rain';
  state.snowMesh.visible=mode==='snow';
}
function rainUpdate(dt,time){
  if(!state.rainMesh.visible)return;
  const buff=state.rainMesh.geometry.attributes.position.array;
  const wind=Math.min(2.6,Math.max(0,state.weather?.wind||0)/20);
  for(let i=0;i<state.rain.length;i++){
    const d=state.rain[i];
    d.y-=dt*(13+wind*2);d.x+=dt*(wind*2+.22);
    if(d.y<-.2 || Math.abs(d.x-pos.x)>27 || Math.abs(d.z-pos.z)>23){
      d.y=15+Math.random()*19;d.x=pos.x+(Math.random()-.5)*45;d.z=pos.z+(Math.random()-.5)*36;
    }
    // The transparent rain shelter keeps rainfall above the cherry foliage.
    const underShelter=d.x>-69.5&&d.x<-22.5&&d.z>40.6&&d.z<75.4&&d.y<7.3;
    const j=i*6;
    if(underShelter){for(let k=0;k<6;k++)buff[j+k]=0;continue;}
    buff[j]=d.x;buff[j+1]=d.y;buff[j+2]=d.z;
    buff[j+3]=d.x-wind*.10;buff[j+4]=d.y-.56;buff[j+5]=d.z;
  }
  state.rainMesh.geometry.attributes.position.needsUpdate=true;
}
function snowUpdate(dt,time){
  if(!state.snowMesh.visible)return;
  const buff=state.snowMesh.geometry.attributes.position.array;
  const wind=Math.min(1.5,Math.max(0,state.weather?.wind||0)/20);
  for(let i=0;i<state.snow.length;i++){
    const d=state.snow[i];
    d.y-=dt*(1.2+(i%4)*.15);d.x+=dt*(Math.sin(time*.8+d.seed)*.13+wind*.5);
    if(d.y<.08 || Math.abs(d.x-pos.x)>25 || Math.abs(d.z-pos.z)>22){
      d.y=19+Math.random()*14;d.x=pos.x+(Math.random()-.5)*42;d.z=pos.z+(Math.random()-.5)*36;
    }
    const inHouse=d.x>-69.5&&d.x<-22.5&&d.z>40.6&&d.z<75.4&&d.y<7.3;
    const j=i*3;
    buff[j]=d.x;buff[j+1]=inHouse?-500:d.y;buff[j+2]=d.z;
  }
  state.snowMesh.geometry.attributes.position.needsUpdate=true;
}
function birdAndBeeUpdate(t){
  for(const b of bees){
    const a=t*.55+b.seed;
    const which=Math.floor(b.seed)%ZONES.length;
    const zone=ZONES[which];
    b.g.position.set(zone.x+Math.cos(a)*2.6,2.25+Math.sin(a*2.9)*.19,zone.z+Math.sin(a)*2.7);
    b.g.rotation.y=-a;
    b.wings[0].rotation.z=Math.sin(t*31)*.5;
    b.wings[1].rotation.z=-Math.sin(t*31)*.5;
  }
  for(const b of butterflies){
    const a=t*.40+b.seed;
    const zone=ZONES[Math.floor(b.seed)%ZONES.length];
    b.g.position.set(zone.x+Math.cos(a)*5.0,1.1+Math.sin(a*3.5)*.31,zone.z+Math.sin(a)*6.2);
    b.g.rotation.y=a;
    b.wings[0].rotation.z=Math.sin(t*13+b.seed)*.72;
    b.wings[1].rotation.z=-Math.sin(t*13+b.seed)*.72;
  }
}
const MAP_BOUNDS={minX:-92,maxX:92,minZ:-108,maxZ:108};
function mapPoint(x,z){
  const pad=30,W=map.width,H=map.height;
  return [pad+(x-MAP_BOUNDS.minX)/(MAP_BOUNDS.maxX-MAP_BOUNDS.minX)*(W-2*pad),
          pad+(MAP_BOUNDS.maxZ-z)/(MAP_BOUNDS.maxZ-MAP_BOUNDS.minZ)*(H-2*pad)];
}
function drawMap(){
  const ctx=mapCtx,W=map.width,H=map.height;
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='#f4f6eb';ctx.beginPath();ctx.roundRect(5,5,W-10,H-10,19);ctx.fill();
  ctx.strokeStyle='rgba(71,112,68,.08)';ctx.lineWidth=1;
  for(let x=-80;x<=80;x+=20){const [mx0]=mapPoint(x,0);ctx.beginPath();ctx.moveTo(mx0,20);ctx.lineTo(mx0,H-20);ctx.stroke();}
  for(let z=-100;z<=100;z+=20){const [,my0]=mapPoint(0,z);ctx.beginPath();ctx.moveTo(20,my0);ctx.lineTo(W-20,my0);ctx.stroke();}
  const start=mapPoint(0,97),end=mapPoint(0,-101);
  ctx.strokeStyle='#d6c4a4';ctx.lineWidth=23;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(start[0],start[1]);ctx.lineTo(end[0],end[1]);ctx.stroke();
  ctx.strokeStyle='#f4e8d1';ctx.lineWidth=15;ctx.stroke();
  for(let z of [-29,29]){const [x1,y1]=mapPoint(-62,z),[x2,y2]=mapPoint(62,z);
    ctx.strokeStyle='#e9d6b8';ctx.lineWidth=13;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();}
  for(const zone of ZONES){
    const [cx,cy]=mapPoint(zone.x,zone.z);
    const [lx,ty]=mapPoint(zone.x-28.5,zone.z+21.5);
    const [rx,by]=mapPoint(zone.x+28.5,zone.z-21.5);
    ctx.fillStyle=zone.mapAccent||zone.bg;ctx.strokeStyle='#adc89d';ctx.lineWidth=2;
    ctx.beginPath();ctx.roundRect(lx,ty,rx-lx,by-ty,12);ctx.fill();ctx.stroke();
    ctx.globalAlpha=.65;
    for(let ix=-2;ix<=2;ix++)for(let iz=-1;iz<=1;iz++){
      const [x,y]=mapPoint(zone.x+ix*7,zone.z+iz*7);
      ctx.fillStyle=zone.fruit;ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fill();
    }
    ctx.globalAlpha=1;
    ctx.fillStyle='#324e39';ctx.textAlign='center';ctx.font=`900 15px ${FONT_FAMILY}`;
    ctx.fillText(zone.sign,cx,cy+5,100);
  }
  // Breadcrumb route shows the distance already explored.
  if(footsteps.length>1){
    ctx.beginPath();ctx.strokeStyle='#b66a4b';ctx.lineWidth=3;ctx.lineCap='round';
    footsteps.forEach((point,i)=>{const [x,y]=mapPoint(point.x,point.z);if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);});ctx.stroke();
  }
  // Entry, blue pond and visitor arrow.
  const [pondX,pondY]=mapPoint(-18,92.0);
  ctx.fillStyle='#9ec9cf';ctx.beginPath();ctx.ellipse(pondX,pondY,8,5,0,0,Math.PI*2);ctx.fill();
  const [gateX,gateY]=mapPoint(0,91);
  ctx.fillStyle='#786448';ctx.fillRect(gateX-7,gateY-3,14,5);
  const [px,py]=mapPoint(pos.x,pos.z);
  ctx.save();ctx.translate(px,py);ctx.rotate(yaw);
  ctx.fillStyle='#e26c4d';ctx.beginPath();ctx.moveTo(0,-10);ctx.lineTo(-7,7);ctx.lineTo(7,7);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();ctx.restore();
  const distanceLabel=$('walkDistance');
  if(distanceLabel)distanceLabel.textContent='歩いた距離 '+Math.round(walkedDistance)+'m';
}
function showHoverFruit(fruitId){
  state.activeId=fruitId;
  if(fruitId && fruitById.has(fruitId)){
    tips.textContent=fruitById.get(fruitId).name;
    tips.classList.add('visible');
  } else {tips.classList.remove('visible');}
}
function pickAt(clientX,clientY){
  const rect=renderer.domElement.getBoundingClientRect();
  pointer.x=(clientX-rect.left)/rect.width*2-1;
  pointer.y=-(clientY-rect.top)/rect.height*2+1;
  raycaster.setFromCamera(pointer,camera);
  const hit=raycaster.intersectObjects(hitMeshes,false)[0];
  return hit?.object?.userData?.fruitId||null;
}
let drag=null;
function attachControls(){
  const mapExpand=$('mapExpand');
  if(mapExpand){
    mapExpand.addEventListener('click',e=>{
      e.stopPropagation();mapExpanded=!mapExpanded;
      $('mapBox').classList.toggle('expanded',mapExpanded);
      mapExpand.textContent=mapExpanded?'閉じる':'拡大';
      mapExpand.setAttribute('aria-expanded',String(mapExpanded));
    });
  }
  map.addEventListener('click',e=>{
    if(state.paused)return;
    const rect=map.getBoundingClientRect();
    const xx=(e.clientX-rect.left)/rect.width*map.width;
    const yy=(e.clientY-rect.top)/rect.height*map.height;
    const [wx,wz]=[
      MAP_BOUNDS.minX+((xx-30)/(map.width-60))*(MAP_BOUNDS.maxX-MAP_BOUNDS.minX),
      MAP_BOUNDS.maxZ-((yy-30)/(map.height-60))*(MAP_BOUNDS.maxZ-MAP_BOUNDS.minZ),
    ];
    const z=ZONES.find(item=>Math.abs(item.x-wx)<=28.5&&Math.abs(item.z-wz)<=21.5);
    if(z){warpToKind(z.kind);post('orchard:zone',{kind:z.kind});}
    if(mapExpanded){mapExpanded=false;$('mapBox').classList.remove('expanded');mapExpand.textContent='拡大';mapExpand.setAttribute('aria-expanded','false');}
  });
  renderer.domElement.addEventListener('pointerdown',e=>{
    if(state.paused)return;
    drag={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,dist:0};
    renderer.domElement.setPointerCapture(e.pointerId);
  });
  renderer.domElement.addEventListener('pointermove',e=>{
    if(!state.paused && drag && drag.id===e.pointerId){
      const dx=e.clientX-drag.lastX,dy=e.clientY-drag.lastY;
      drag.dist+=Math.abs(dx)+Math.abs(dy);
      yaw-=dx*.0039;
      pitch=Math.max(-.9,Math.min(.63,pitch-dy*.0031));
      drag.lastX=e.clientX;drag.lastY=e.clientY;
    }
    if(!drag && !state.paused && e.pointerType==='mouse')showHoverFruit(pickAt(e.clientX,e.clientY));
  });
  renderer.domElement.addEventListener('pointerup',e=>{
    if(!drag || drag.id!==e.pointerId)return;
    if(!state.paused && drag.dist<12){
      const id=pickAt(e.clientX,e.clientY);
      if(id)post('orchard:pick',{id});
    }
    drag=null;
  });
  renderer.domElement.addEventListener('pointercancel',()=>{drag=null;});
  renderer.domElement.addEventListener('pointerleave',()=>{if(!drag)showHoverFruit(null);});
  window.addEventListener('keydown',e=>{
    const key=e.key.toLowerCase();
    if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright',' '].includes(key))e.preventDefault();
    KEYS.add(key);
    if(key==='e'&&!state.paused&&state.activeId)post('orchard:pick',{id:state.activeId});
  });
  window.addEventListener('keyup',e=>KEYS.delete(e.key.toLowerCase()));
  window.addEventListener('blur',()=>{KEYS.clear();JOY.x=JOY.y=0;const knob=$('knob');knob.style.transform='translate(-50%,-50%)';});
  const joystick=$('joystick'),knob=$('knob');let jid=null;
  function joyInput(e){
    const rect=joystick.getBoundingClientRect();
    const dx=e.clientX-(rect.left+rect.width/2),dy=e.clientY-(rect.top+rect.height/2);
    const k=Math.min(1,36/Math.max(36,Math.hypot(dx,dy)));
    JOY.x=dx*k/36;JOY.y=dy*k/36;
    knob.style.transform='translate(calc(-50% + '+(dx*k)+'px),calc(-50% + '+(dy*k)+'px))';
  }
  joystick.addEventListener('pointerdown',e=>{if(state.paused)return;jid=e.pointerId;joystick.setPointerCapture(jid);joyInput(e);e.preventDefault();});
  joystick.addEventListener('pointermove',e=>{if(e.pointerId===jid){joyInput(e);e.preventDefault();}});
  function joyUp(e){if(jid===null||e.pointerId!==jid)return;jid=null;JOY.x=JOY.y=0;knob.style.transform='translate(-50%,-50%)';}
  joystick.addEventListener('pointerup',joyUp);joystick.addEventListener('pointercancel',joyUp);
}
function movement(dt){
  const f=(KEYS.has('w')||KEYS.has('arrowup')?1:0)-(KEYS.has('s')||KEYS.has('arrowdown')?1:0)-JOY.y;
  const r=(KEYS.has('d')||KEYS.has('arrowright')?1:0)-(KEYS.has('a')||KEYS.has('arrowleft')?1:0)+JOY.x;
  const len=Math.hypot(f,r);
  if(len<.06)return false;
  const F=f/Math.max(1,len),R=r/Math.max(1,len);
  const speed=(KEYS.has('shift')?11.0:7.0)*dt;
  const dx=(-Math.sin(yaw)*F+Math.cos(yaw)*R)*speed;
  const dz=(-Math.cos(yaw)*F-Math.sin(yaw)*R)*speed;
  const oldX=pos.x,oldZ=pos.z;
  pos.x=Math.max(-84,Math.min(84,pos.x+dx));
  pos.z=Math.max(-98,Math.min(102,pos.z+dz));
  walkedDistance+=Math.hypot(pos.x-oldX,pos.z-oldZ);
  if(!footsteps.length||Math.hypot(footsteps[footsteps.length-1].x-pos.x,footsteps[footsteps.length-1].z-pos.z)>2.1){
    footsteps.push({x:pos.x,z:pos.z});if(footsteps.length>900)footsteps.shift();
  }
  return true;
}
function localZone(){
  let near=null,dmin=24;
  for(const zone of ZONES){
    const d=Math.hypot(pos.x-zone.x,pos.z-zone.z);
    if(d<dmin){dmin=d;near=zone.kind;}
  }
  if(state.zone!==near){state.zone=near;post('orchard:zone',{kind:near});}
}
function updateLabels(){
  return;
}
function warpToKind(kind){
  const zone=ZONES.find(z=>z.kind===kind);
  if(!zone)return;
  pos.x=zone.x<0?-12.2:12.2;
  pos.z=zone.z+5.2;
  yaw=zone.x<0?Math.PI/2:-Math.PI/2;
  pitch=-.09;
  showHoverFruit(null);
  localZone();
}
function focusFruit(id){
  const entity=leafMeshes.find(p=>p.fruit.id===id);
  if(!entity)return;
  const zone=ZONES.find(z=>z.kind===entity.kind);
  const x=entity.mesh.position.x,z=entity.mesh.position.z;
  pos.x=x+(zone?.x<0?4.8:-4.8);
  pos.z=z+2.8;
  const dir=new THREE.Vector3(x-pos.x,0,z-pos.z);
  yaw=Math.atan2(-dir.x,-dir.z);
  pitch=-.03;
  localZone();
}
function animate(){
  requestAnimationFrame(animate);
  const dt=Math.min(.04,clock.getDelta());
  const t=performance.now()*.001;
  const moving=!state.paused&&movement(dt);
  if(moving)walkTime+=dt*10;
  camera.position.set(pos.x,1.68+(moving?Math.sin(walkTime)*.028:0),pos.z);
  camera.rotation.set(pitch,yaw,0,'YXZ');
  birdAndBeeUpdate(t);
  rainUpdate(dt,t);snowUpdate(dt,t);
  updateLabels();localZone();drawMap();
  renderer.render(scene,camera);
}
window.addEventListener('resize',()=>{
  if(!renderer)return;
  camera.aspect=innerWidth/innerHeight;
  camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,IS_MOBILE?1.3:1.8));
});
window.addEventListener('message',event=>{
  if(event.origin!==window.location.origin || !event.data || typeof event.data!=='object')return;
  const data=event.data;
  // The iframe can render before React mounts its message listener; replay readiness on ping.
  if(data.type==='orchard:ping'){
    if(ready){post('orchard:ready');}
    else if(window.__orchardLoadingError){post('orchard:error');}
    return;
  }
  if(data.type==='orchard:catalog' && Array.isArray(data.fruits)){
    const kinds=new Set(ZONES.map(z=>z.kind));
    const list=data.fruits.filter(f=>typeof f?.id==='string'&&typeof f?.name==='string'&&kinds.has(f.kind));
    state.fruits=list;
    fruitById.clear();for(const f of list)fruitById.set(f.id,f);
    if(ready)addAllCultivars(list);
  }
  if(data.type==='orchard:weather' && ready)configureWeather(data.weather||null);
  if(data.type==='orchard:pause')state.paused=Boolean(data.paused);
  if(data.type==='orchard:go' && typeof data.kind==='string')warpToKind(data.kind);
  if(data.type==='orchard:focus' && typeof data.id==='string')focusFruit(data.id);
});
async function startOrchard(){
  try{
    const faces=await document.fonts.load('900 32px "GenSenOrchard"','みつばち果樹園さくらんぼ桃すいかぶどう西洋梨りんご');
    if(!faces.length || !document.fonts.check('900 32px "GenSenOrchard"')){
      throw new Error('GenSenRoundedJP-H.otf could not be loaded from /fonts/');
    }
    document.documentElement.classList.remove('orchardFontsPending');
    createLoadingScene();
  }catch(error){
    console.error('Orchard scene error',error);
    if(loadMessage){loadMessage.textContent='果樹園を表示できませんでした。フォントの配置と通信環境を確認してください。';}
    document.documentElement.classList.remove('orchardFontsPending');
    window.__orchardLoadingError=true;
    post('orchard:error');
  }
}
void startOrchard();
