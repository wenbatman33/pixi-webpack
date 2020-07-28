import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 1440,
  height: 720,
  view: document.querySelector('#app'),
  resolution: 1.5,
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

loader
  // json
  .add('hit', '/static/img/hit.json')
  .add('faceHit', '/static/img/faceHit.json')
  .add('idle', '/static/img/idle.json')
  .add('walking', '/static/img/walking.json')
  .add('crouch', '/static/img/crouch.json')
  .add('stunned', '/static/img/stunned.json')
  .add('crouchPunch_L', '/static/img/crouchPunch_L.json')
  .add('crouchPunch_M', '/static/img/crouchPunch_M.json')
  .add('crouchPunch_H', '/static/img/crouchPunch_H.json')
  .add('ForwradJumpKick_L', '/static/img/ForwradJumpKick_L.json')
  .add('ForwradJumpPunch_L', '/static/img/ForwradJumpPunch_L.json')
  // 
  .add('hadoukan', '/static/img/hadoukan.json')
  .add('hadoukan_air', '/static/img/hadoukan_air.json')
  .add('hadoukan_air_ending', '/static/img/hadoukan_air_ending.json')
  .add('shouryuken', '/static/img/shouryuken.json')
  .add('fireShouryuken', '/static/img/fireShouryuken.json')
  .add('tatsumaki', '/static/img/tatsumaki.json')
  // 
  .add('kick_L', '/static/img/kick_L.json')
  .add('kick_H', '/static/img/kick_H.json')
  .add('kickForwrad_L', '/static/img/kickForwrad_L.json')
  .add('kickForwrad_M', '/static/img/kickForwrad_M.json')
  .add('kickForwrad_H', '/static/img/kickForwrad_H.json')
  // 
  .add('jump', '/static/img/jump.json')
  .add('jumpKick_L', '/static/img/jumpKick_L.json')
  .add('jumpKick_H', '/static/img/jumpKick_H.json')
  .add('jumpPunch_L', '/static/img/jumpPunch_L.json')
  .add('knockdown', '/static/img/knockdown.json')
  // 
  .add('punch_L', '/static/img/punch_L.json')
  .add('punch_M', '/static/img/punch_M.json')
  .add('shoulderToss', '/static/img/shoulderToss.json')
  .add('victoryType1', '/static/img/victoryType1.json')
  .add('victoryType2', '/static/img/victoryType2.json')
  .add('ko', '/static/img/ko.json')
  .add('spinningBackroll', '/static/img/spinningBackroll.json')
  // jpg
  .add('stageBg', '/static/img/bg.jpg');
loader.load();
loader.onProgress.add((event) => console.log(`loadProgressHandler: ${event.progress}%`));
loader.onComplete.add(() => onAssetsLoaded());
// //////////////////////////////////////////////

function onAssetsLoaded() {
  initScreenGuide();
  initSetKeyEvent();
}

// //////////////////////////////////////////////
function initScreenGuide() {
  // const stageBgTexture = PIXI.Texture.from(loader.resources.stageBg.url);
  // const stageBg = new PIXI.Sprite(stageBgTexture);
  // stageBg.scale.set(0.7, 0.7);
  // screenGuide.addChild(stageBg);
  // initScreenMain();
  const idle_sheet = loader.resources.idle.spritesheet;
  const ken_idle = new PIXI.AnimatedSprite(idle_sheet.animations.idle);
  ken_idle.animationSpeed = 0.1;
  ken_idle.anchor.set(0.5, 1);
  ken_idle.x = 30;
  ken_idle.y = 100;
  ken_idle.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_idle);

  const hit_sheet = loader.resources.hit.spritesheet;
  const ken_hit = new PIXI.AnimatedSprite(hit_sheet.animations.hit);
  ken_hit.animationSpeed = 0.1;
  ken_hit.anchor.set(0.5, 1);
  ken_hit.x = 80;
  ken_hit.y = 100;
  ken_hit.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_hit);

  const faceHit_sheet = loader.resources.faceHit.spritesheet;
  const ken_faceHit = new PIXI.AnimatedSprite(faceHit_sheet.animations.faceHit);
  ken_faceHit.animationSpeed = 0.1;
  ken_faceHit.anchor.set(0.5, 1);
  ken_faceHit.x = 130;
  ken_faceHit.y = 100;
  ken_faceHit.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_faceHit);

  const walking_sheet = loader.resources.walking.spritesheet;
  const ken_walking = new PIXI.AnimatedSprite(walking_sheet.animations.walking);
  ken_walking.animationSpeed = 0.1;
  ken_walking.anchor.set(0.5, 1);
  ken_walking.x = 180;
  ken_walking.y = 100;
  ken_walking.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_walking);

  const crouch_sheet = loader.resources.crouch.spritesheet;
  const ken_crouch = new PIXI.AnimatedSprite(crouch_sheet.animations.crouch);
  ken_crouch.animationSpeed = 0.1;
  ken_crouch.anchor.set(0.5, 1);
  ken_crouch.x = 230;
  ken_crouch.y = 100;
  ken_crouch.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_crouch);

  const stunned_sheet = loader.resources.stunned.spritesheet;
  const ken_stunned = new PIXI.AnimatedSprite(stunned_sheet.animations.stunned);
  ken_stunned.animationSpeed = 0.1;
  ken_stunned.anchor.set(0.5, 1);
  ken_stunned.x = 280;
  ken_stunned.y = 100;
  ken_stunned.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_stunned);

  const crouchPunch_L_sheet = loader.resources.crouchPunch_L.spritesheet;
  const ken_crouchPunch_L = new PIXI.AnimatedSprite(crouchPunch_L_sheet.animations.crouchPunch_L);
  ken_crouchPunch_L.animationSpeed = 0.1;
  ken_crouchPunch_L.anchor.set(0.5, 1);
  ken_crouchPunch_L.x = 330;
  ken_crouchPunch_L.y = 100;
  ken_crouchPunch_L.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_crouchPunch_L);

  const crouchPunch_M_sheet = loader.resources.crouchPunch_M.spritesheet;
  const ken_crouchPunch_M = new PIXI.AnimatedSprite(crouchPunch_M_sheet.animations.crouchPunch_M);
  ken_crouchPunch_M.animationSpeed = 0.1;
  ken_crouchPunch_M.anchor.set(0.5, 1);
  ken_crouchPunch_M.x = 380;
  ken_crouchPunch_M.y = 100;
  ken_crouchPunch_M.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_crouchPunch_M);

  const crouchPunch_H_sheet = loader.resources.crouchPunch_H.spritesheet;
  const ken_crouchPunch_H = new PIXI.AnimatedSprite(crouchPunch_H_sheet.animations.crouchPunch_H);
  ken_crouchPunch_H.animationSpeed = 0.1;
  ken_crouchPunch_H.anchor.set(0.5, 1);
  ken_crouchPunch_H.x = 430;
  ken_crouchPunch_H.y = 100;
  ken_crouchPunch_H.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_crouchPunch_H);

  const ForwradJumpKick_L_sheet = loader.resources.ForwradJumpKick_L.spritesheet;
  const ken_ForwradJumpKick_L = new PIXI.AnimatedSprite(ForwradJumpKick_L_sheet.animations.ForwradJumpKick_L);
  ken_ForwradJumpKick_L.animationSpeed = 0.1;
  ken_ForwradJumpKick_L.anchor.set(0.5, 1);
  ken_ForwradJumpKick_L.x = 480;
  ken_ForwradJumpKick_L.y = 100;
  ken_ForwradJumpKick_L.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_ForwradJumpKick_L);

  const ForwradJumpPunch_L_sheet = loader.resources.ForwradJumpPunch_L.spritesheet;
  const ken_ForwradJumpPunch_L = new PIXI.AnimatedSprite(ForwradJumpPunch_L_sheet.animations.ForwradJumpPunch_L);
  ken_ForwradJumpPunch_L.animationSpeed = 0.1;
  ken_ForwradJumpPunch_L.anchor.set(0.5, 1);
  ken_ForwradJumpPunch_L.x = 530;
  ken_ForwradJumpPunch_L.y = 100;
  ken_ForwradJumpPunch_L.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_ForwradJumpPunch_L);

  const hadoukan_sheet = loader.resources.hadoukan.spritesheet;
  const ken_hadoukan = new PIXI.AnimatedSprite(hadoukan_sheet.animations.hadoukan);
  ken_hadoukan.animationSpeed = 0.1;
  ken_hadoukan.anchor.set(0.5, 1);
  ken_hadoukan.x = 30;
  ken_hadoukan.y = 200;
  ken_hadoukan.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_hadoukan);

  const hadoukan_air_sheet = loader.resources.hadoukan_air.spritesheet;
  const ken_hadoukan_air = new PIXI.AnimatedSprite(hadoukan_air_sheet.animations.hadoukan_air);
  ken_hadoukan_air.animationSpeed = 0.1;
  ken_hadoukan_air.anchor.set(0.5, 1);
  ken_hadoukan_air.x = 130;
  ken_hadoukan_air.y = 200;
  ken_hadoukan_air.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_hadoukan_air);

  const hadoukan_air_ending_sheet = loader.resources.hadoukan_air_ending.spritesheet;
  const ken_hadoukan_air_ending = new PIXI.AnimatedSprite(hadoukan_air_ending_sheet.animations.hadoukan_air_ending);
  ken_hadoukan_air_ending.animationSpeed = 0.1;
  ken_hadoukan_air_ending.anchor.set(0.5, 1);
  ken_hadoukan_air_ending.x = 230;
  ken_hadoukan_air_ending.y = 200;
  ken_hadoukan_air_ending.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_hadoukan_air_ending);

  const shouryuken_sheet = loader.resources.shouryuken.spritesheet;
  const ken_shouryuken = new PIXI.AnimatedSprite(shouryuken_sheet.animations.shouryuken);
  ken_shouryuken.animationSpeed = 0.1;
  ken_shouryuken.anchor.set(0.5, 1);
  ken_shouryuken.x = 330;
  ken_shouryuken.y = 200;
  ken_shouryuken.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_shouryuken);

  const fireShouryuken_sheet = loader.resources.fireShouryuken.spritesheet;
  const ken_fireShouryuken = new PIXI.AnimatedSprite(fireShouryuken_sheet.animations.fireShouryuken);
  ken_fireShouryuken.animationSpeed = 0.1;
  ken_fireShouryuken.anchor.set(0.5, 1);
  ken_fireShouryuken.x = 430;
  ken_fireShouryuken.y = 200;
  ken_fireShouryuken.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_fireShouryuken);

  const tatsumaki_sheet = loader.resources.tatsumaki.spritesheet;
  const ken_tatsumaki = new PIXI.AnimatedSprite(tatsumaki_sheet.animations.tatsumaki);
  ken_tatsumaki.animationSpeed = 0.1;
  ken_tatsumaki.anchor.set(0.5, 1);
  ken_tatsumaki.x = 530;
  ken_tatsumaki.y = 200;
  ken_tatsumaki.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_tatsumaki);

  const kick_L_sheet = loader.resources.kick_L.spritesheet;
  const ken_kick_L = new PIXI.AnimatedSprite(kick_L_sheet.animations.kick_L);
  ken_kick_L.animationSpeed = 0.1;
  ken_kick_L.anchor.set(0.5, 1);
  ken_kick_L.x = 30;
  ken_kick_L.y = 300;
  ken_kick_L.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_kick_L);

  const kick_H_sheet = loader.resources.kick_H.spritesheet;
  const ken_kick_H = new PIXI.AnimatedSprite(kick_H_sheet.animations.kick_H);
  ken_kick_H.animationSpeed = 0.1;
  ken_kick_H.anchor.set(0.5, 1);
  ken_kick_H.x = 130;
  ken_kick_H.y = 300;
  ken_kick_H.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_kick_H);

  const kickForwrad_L_sheet = loader.resources.kickForwrad_L.spritesheet;
  const ken_kickForwrad_L = new PIXI.AnimatedSprite(kickForwrad_L_sheet.animations.kickForwrad_L);
  ken_kickForwrad_L.animationSpeed = 0.1;
  ken_kickForwrad_L.anchor.set(0.5, 1);
  ken_kickForwrad_L.x = 230;
  ken_kickForwrad_L.y = 300;
  ken_kickForwrad_L.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_kickForwrad_L);

  const kickForwrad_M_sheet = loader.resources.kickForwrad_M.spritesheet;
  const ken_kickForwrad_M = new PIXI.AnimatedSprite(kickForwrad_M_sheet.animations.kickForwrad_M);
  ken_kickForwrad_M.animationSpeed = 0.1;
  ken_kickForwrad_M.anchor.set(0.5, 1);
  ken_kickForwrad_M.x = 330;
  ken_kickForwrad_M.y = 300;
  ken_kickForwrad_M.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_kickForwrad_M);

  const kickForwrad_H_sheet = loader.resources.kickForwrad_H.spritesheet;
  const ken_kickForwrad_H = new PIXI.AnimatedSprite(kickForwrad_H_sheet.animations.kickForwrad_H);
  ken_kickForwrad_H.animationSpeed = 0.1;
  ken_kickForwrad_H.anchor.set(0.5, 1);
  ken_kickForwrad_H.x = 430;
  ken_kickForwrad_H.y = 300;
  ken_kickForwrad_H.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_kickForwrad_H);

  const jump_sheet = loader.resources.jump.spritesheet;
  const ken_jump = new PIXI.AnimatedSprite(jump_sheet.animations.jump);
  ken_jump.animationSpeed = 0.1;
  ken_jump.anchor.set(0.5, 1);
  ken_jump.x = 30;
  ken_jump.y = 400;
  ken_jump.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_jump);

  const jumpKick_L_sheet = loader.resources.jumpKick_L.spritesheet;
  const ken_jumpKick_L = new PIXI.AnimatedSprite(jumpKick_L_sheet.animations.jumpKick_L);
  ken_jumpKick_L.animationSpeed = 0.1;
  ken_jumpKick_L.anchor.set(0.5, 1);
  ken_jumpKick_L.x = 130;
  ken_jumpKick_L.y = 400;
  ken_jumpKick_L.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_jumpKick_L);

  const jumpKick_H_sheet = loader.resources.jumpKick_H.spritesheet;
  const ken_jumpKick_H = new PIXI.AnimatedSprite(jumpKick_H_sheet.animations.jumpKick_H);
  ken_jumpKick_H.animationSpeed = 0.1;
  ken_jumpKick_H.anchor.set(0.5, 1);
  ken_jumpKick_H.x = 230;
  ken_jumpKick_H.y = 400;
  ken_jumpKick_H.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_jumpKick_H);

  const jumpPunch_L_sheet = loader.resources.jumpPunch_L.spritesheet;
  const ken_jumpPunch_L = new PIXI.AnimatedSprite(jumpPunch_L_sheet.animations.jumpPunch_L);
  ken_jumpPunch_L.animationSpeed = 0.1;
  ken_jumpPunch_L.anchor.set(0.5, 1);
  ken_jumpPunch_L.x = 330;
  ken_jumpPunch_L.y = 400;
  ken_jumpPunch_L.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_jumpPunch_L);

  const knockdown_sheet = loader.resources.knockdown.spritesheet;
  const ken_knockdown = new PIXI.AnimatedSprite(knockdown_sheet.animations.knockdown);
  ken_knockdown.animationSpeed = 0.1;
  ken_knockdown.anchor.set(0.5, 1);
  ken_knockdown.x = 430;
  ken_knockdown.y = 400;
  ken_knockdown.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_knockdown);

  const punch_L_sheet = loader.resources.punch_L.spritesheet;
  const ken_punch_L = new PIXI.AnimatedSprite(punch_L_sheet.animations.punch_L);
  ken_punch_L.animationSpeed = 0.1;
  ken_punch_L.anchor.set(0.5, 1);
  ken_punch_L.x = 30;
  ken_punch_L.y = 500;
  ken_punch_L.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_punch_L);

  const punch_M_sheet = loader.resources.punch_M.spritesheet;
  const ken_punch_M = new PIXI.AnimatedSprite(punch_M_sheet.animations.punch_M);
  ken_punch_M.animationSpeed = 0.1;
  ken_punch_M.anchor.set(0.5, 1);
  ken_punch_M.x = 130;
  ken_punch_M.y = 500;
  ken_punch_M.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_punch_M);

  const shoulderToss_sheet = loader.resources.shoulderToss.spritesheet;
  const ken_shoulderToss = new PIXI.AnimatedSprite(shoulderToss_sheet.animations.shoulderToss);
  ken_shoulderToss.animationSpeed = 0.1;
  ken_shoulderToss.anchor.set(0.5, 1);
  ken_shoulderToss.x = 230;
  ken_shoulderToss.y = 500;
  ken_shoulderToss.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_shoulderToss);

  const victoryType1_sheet = loader.resources.victoryType1.spritesheet;
  const ken_victoryType1 = new PIXI.AnimatedSprite(victoryType1_sheet.animations.victoryType1);
  ken_victoryType1.animationSpeed = 0.1;
  ken_victoryType1.anchor.set(0.5, 1);
  ken_victoryType1.x = 330;
  ken_victoryType1.y = 500;
  ken_victoryType1.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_victoryType1);

  const victoryType2_sheet = loader.resources.victoryType2.spritesheet;
  const ken_victoryType2 = new PIXI.AnimatedSprite(victoryType2_sheet.animations.victoryType2);
  ken_victoryType2.animationSpeed = 0.1;
  ken_victoryType2.anchor.set(0.5, 1);
  ken_victoryType2.x = 430;
  ken_victoryType2.y = 500;
  ken_victoryType2.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_victoryType2);

  const ko_sheet = loader.resources.ko.spritesheet;
  const ken_ko = new PIXI.AnimatedSprite(ko_sheet.animations.ko);
  ken_ko.animationSpeed = 0.1;
  ken_ko.anchor.set(0.5, 1);
  ken_ko.x = 530;
  ken_ko.y = 500;
  ken_ko.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_ko);

  const spinningBackroll_sheet = loader.resources.spinningBackroll.spritesheet;
  const ken_spinningBackroll = new PIXI.AnimatedSprite(spinningBackroll_sheet.animations.spinningBackroll);
  ken_spinningBackroll.animationSpeed = 0.1;
  ken_spinningBackroll.anchor.set(0.5, 1);
  ken_spinningBackroll.x = 630;
  ken_spinningBackroll.y = 500;
  ken_spinningBackroll.play();
  app.stage.addChild(screenGuide);
  screenGuide.addChild(ken_spinningBackroll);
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
