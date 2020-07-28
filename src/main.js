import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 800,
  height: 720,
  view: document.querySelector('#app'),
  resolution: 1,
});
// //////////////////////////////////////////////
const screenGuide = new PIXI.Container();
const ScreenMain = new PIXI.Container();
const ScreenList = [screenGuide, ScreenMain];
const loader = PIXI.Loader.shared;
const ken = new PIXI.Container();
const moveList = {
  idle: '',
  shoryuken: '',
};

// //////////////////////////////////////////////
let kenSheet;
loader
  // json
  .add('idle', '/static/img/idle.json')
  .add('walking', '/static/img/walking.json')
  .add('shoryuken', '/static/img/shoyuken.json')
  // jpg
  .add('stageBg', '/static/img/bg.jpg');
loader.load();
loader.onProgress.add((event) => console.log(`loadProgressHandler: ${event.progress}%`));
loader.onComplete.add(() => onAssetsLoaded());
// //////////////////////////////////////////////

function onAssetsLoaded() {
  // initScreenMain();
  kenSheet = loader.resources.idle.spritesheet;
  // console.log(kenSheet.animations);
  // 需檢查 spritesheet.animations 的名稱
  const kenIdle = new PIXI.AnimatedSprite(kenSheet.animations.idle);
  kenIdle.animationSpeed = 0.1;
  kenIdle.anchor.set(0.5, 1);
  kenIdle.x = 280;
  kenIdle.y = 500;
  kenIdle.play();
  ken.addChild(kenIdle);

  initScreenGuide();
  initSetKeyEvent();
  app.stage.addChild(ScreenMain);
  ScreenMain.addChild(ken);
}

// //////////////////////////////////////////////
function initScreenGuide() {
  const texture = PIXI.Texture.from(loader.resources.stageBg.url);
  const bg = new PIXI.Sprite(texture);
  bg.scale.set(0.7, 0.7);
  // screenGuide.addChild(bg);
  // app.stage.addChild(screenGuide);
}

function initSetKeyEvent() {
  window.addEventListener('keyup', keyupHandle);
  window.addEventListener('keydown', keydownHandle);
  const texture = PIXI.Texture.from(loader.resources.stageBg.url);
  const bg = new PIXI.Sprite(texture);
  bg.scale.set(0.7, 0.7);
  // ScreenMain.addChild(bg);
  // app.stage.addChild(ScreenMain);
}

function keyupHandle(e) {
  console.log('keyupHandle: ' + e.key);
}

function keydownHandle(e) {
  console.log('keydownHandle: ' + e.key);
}

function switchScreen(e) {}
