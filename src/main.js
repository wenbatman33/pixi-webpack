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
  .add('hit', '/static/img/hit.json')
  .add('facehit', '/static/img/facehit.json')
  .add('idle', '/static/img/idle.json')
  .add('walk', '/static/img/walk.json')
  .add('crouch', '/static/img/crouch.json')
  .add('stunned', '/static/img/stunned.json')
  .add('crouchPunch_L', '/static/img/crouchPunch_L.json')
  .add('crouchPunch_M', '/static/img/crouchPunch_M.json')
  .add('crouchPunch_H', '/static/img/crouchPunch_H.json')
  .add('ForwradJumpKick_L', '/static/img/ForwradJumpKick_L.json')
  .add('ForwradJumpPunch_L', '/static/img/ForwradJumpPunch_L.json')
  .add('hadoukan', '/static/img/hadoukan.json')
  .add('hadoukan_air', '/static/img/hadoukan_air.json')
  .add('hadoukan_air_ending', '/static/img/hadoukan_air_ending.json')
  .add('ko', '/static/img/ko.json')
  .add('jump', '/static/img/jump.json')
  .add('jumpKick_L', '/static/img/jumpKick_L.json')
  .add('jumpKick_H', '/static/img/jumpKick_H.json')
  .add('jumpPunch_L', '/static/img/jumpPunch_L.json')
  .add('kick_L', '/static/img/kick_L.json')
  .add('kick_H', '/static/img/kick_H.json')
  .add('kickForwrad_L', '/static/img/kickForwrad_L.json')
  .add('kickForwrad_M', '/static/img/kickForwrad_M.json')
  .add('kickForwrad_H', '/static/img/kickForwrad_H.json')
  .add('knockdown', '/static/img/knockdown.json')
  .add('punch_L', '/static/img/punch_L.json')
  .add('punch_M', '/static/img/punch_M.json')
  .add('tatsumaki', '/static/img/tatsumaki.json')
  .add('shouryuken', '/static/img/shouryuken.json')
  .add('fireShouryuken', '/static/img/fireShouryuken.json')
  .add('shoulderToss', '/static/img/shoulderToss.json')
  .add('victoryType1', '/static/img/victoryType1.json')
  .add('victoryType2', '/static/img/victoryType2.json')
  .add('spinningBackroll', '/static/img/spinningBackroll.json')
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
