import * as PIXI from 'pixi.js'
import axios from 'axios'

const app = new PIXI.Application({
  width: 800,
  height: 600,
  view: document.querySelector('#scene'),
  resolution: 1
  // resolution: window.devicePixelRatio || 1
});
// //////////////////////////////////////////////
const stage = new PIXI.Container();
const loader = new PIXI.Loader();

// //////////////////////////////////////////////
// 資源載入器
const resourcesList= [
  'assets/img/flowerTop.png',
  'assets/img/bunny.png'
]
resourcesList.map(element => {
  loader.add(element);
});
loader.load(init)
loader.onLoad.add(() => loadHandler()); 
loader.onProgress.add((event)=>loadProgressHandler(event));
loader.onComplete.add(() => allComplete());
// //////////////////////////////////////////////

const texture = PIXI.Texture.from(resourcesList[1]);
const bunny = new PIXI.Sprite(texture);
bunny.anchor.set(0.5);
bunny.x = 160
bunny.y = 160
app.stage.addChild(bunny);

// //////////////////////////////////////////////
function loadHandler() {
  console.log('loadHandler');
}
function loadProgressHandler(event) {
  console.log(resourcesList.length);
  console.log('loadProgressHandler: '+event.progress + '%');
}
function init() {
  console.log('init');
}
function allComplete() {
  axios.get('https://t-api.tgcity18.info/api/Home/web')
  .then((res)=>{
    console.log(res)
  })
  console.log('allComplete');
  animate();
}
// //////////////////////////////////////////////
function animate() {
  requestAnimationFrame(animate);
  bunny.rotation -= 0.01;
  app.render(stage);
}
animate();


// app.ticker.add((delta) => {
//   bunny.rotation -= 0.01 * delta;
// });