import * as PIXI from 'pixi.js';
import axios from 'axios';

const app = new PIXI.Application({
  width: 800,
  height: 600,
  view: document.querySelector('#app'),
  resolution: 1,
  // resolution: window.devicePixelRatio || 1
});

const stage = new PIXI.Container();
const loader = new PIXI.Loader();
// //////////////////////////////////////////////
// 資源載入器
const resourcesList = [
  '/static/img/bunny.png',
  '/static/img/ken.png',
  '/static/img/ken.json',
  '/static/img/bg.jpg',
];
resourcesList.map((element) => {
  loader.add(element);
  return '';
});
loader.load(init);
loader.onLoad.add(() => loadHandler());
loader.onProgress.add((event) => loadProgressHandler(event));
loader.onComplete.add(() => allComplete());
// //////////////////////////////////////////////

const texture = PIXI.Texture.from(resourcesList[2]);
const bunny = new PIXI.Sprite(texture);
bunny.anchor.set(0.5);
bunny.x = 160;
bunny.y = 160;
app.stage.addChild(bunny);

// 
function loadHandler() {
  console.log('loadHandler');
}
function loadProgressHandler(event) {
  console.log(resourcesList.length);
  console.log(`loadProgressHandler: ${event.progress}%`);
}
function init() {
  console.log('init');
}
function allComplete() {
  // axios.get('https://t-api.tgcity18.info/api/Home/web')
  //   .then((res) => {
  //     console.log(res);
  //   });
  console.log('allComplete');
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  app.render(stage);
}
animate();
