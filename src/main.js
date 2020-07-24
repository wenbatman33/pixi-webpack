import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 800, height: 720, view: document.querySelector('#app'), resolution: 1, // resolution: window.devicePixelRatio || 1
});
// //////////////////////////////////////////////
const stage = new PIXI.Container();
const loader = new PIXI.Loader();
const ken = new PIXI.Container();
// //////////////////////////////////////////////
const assetsList = {
  ken: '/static/img/ken.json',
  shoryuken: '/static/img/shoryuken.json',
  tatsumaki: '/static/img/tatsumaki.json',
  stageBg: '/static/img/bg.jpg',
};
const kenFrames = [];
const shoryukenFrames = [];

loader
  .add('ken', '/static/img/ken.json')
  .add('shoryuken', '/static/img/shoryuken.json')
  .add('tatsumaki', '/static/img/tatsumaki.json')
  .add('stageBg', '/static/img/bg.jpg');

loader.load();
loader.onProgress.add((event) => console.log(`loadProgressHandler: ${event.progress}%`));
loader.onComplete.add(() => onAssetsLoaded());

function onAssetsLoaded() { 
  initControlEvent();
  initStage();
  console.log(Object.keys(loader.resources.shoryuken.data.frames).length);
}

// //////////////////////////////////////////////
function initStage() {
  const texture = PIXI.Texture.from(assetsList.stageBg);
  const bg = new PIXI.Sprite(texture);
  bg.scale.set(0.7, 0.7);
  // for (let i = 0; i < loader.resources.ken.data.frames.length; i += 1) {
  //   const val = i < 10 ? `0${i}` : i;
  //   kenFrames.push(PIXI.Texture.from(`rollSequence00${val}.png`));
  // }
  for (let i = 0; i < 3; i += 1) {
    const val = i < 10 ? `0${i}` : i;
    kenFrames.push(PIXI.Texture.from(`rollSequence00${val}.png`));
  }
  for (let k = 0; k <= 7; k += 1) {
    const val2 = k < 10 ? `0${k}` : k;
    shoryukenFrames.push(PIXI.Texture.from(`shoryuken_${val2}.png`));
  }
  const ken_1 = new PIXI.AnimatedSprite(kenFrames);
  ken_1.animationSpeed = 0.1;
  ken_1.scale.set(1.5, 1.5);
  ken_1.y = 280;
  ken_1.play();

  const ken_2 = new PIXI.AnimatedSprite(shoryukenFrames);
  ken_2.animationSpeed = 0.1;
  ken_2.scale.set(1.5, 1.5);
  ken_2.x = 280;
  ken_2.y = 340;
  ken_2.play();

  app.stage.addChild(bg);
  app.stage.addChild(ken);
  ken.addChild(ken_1);
  ken.addChild(ken_2);
  document.addEventListener('keydown', onKeyDown);
}

// //////////////////////////////////////////////
function initControlEvent() {
  document.onkeydown = commands;
  document.onkeyup = commandsOneOff;
}
function commands(event) {}
function commandsOneOff(event) {}
function onKeyDown(key) {
  if (key.keyCode === 65 || key.keyCode === 37) {
    ken.position.x -= 5;
  }
  if (key.keyCode === 68 || key.keyCode === 39) {
    ken.position.x += 5;
  }
}

app.render(stage);
// //////////////////////////////////////////////
// function animate() {
//   requestAnimationFrame(animate);
//   app.render(stage);
// }
// animate();
