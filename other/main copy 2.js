import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 1200,
  height: 720,
  view: document.querySelector('#app'),
  resolution: 1,
  // resolution: window.devicePixelRatio || 1
});
const stage = new PIXI.Container();
const loader = new PIXI.Loader();
// //////////////////////////////////////////////

const resourcesList = [
  '/static/img/shoryuken.json',
  '/static/img/tatsumaki.json',
  '/static/img/ken.json',
];
resourcesList.map((element) => {
  loader.add(element);
  return '';
});
loader.load(init);
loader.onProgress.add((event) => loadProgressHandler(event));
loader.onComplete.add(() => allComplete());

function loadProgressHandler(event) {
  console.log(`loadProgressHandler: ${event.progress}%`);
}

function allComplete() {
  console.log('allComplete');

  document.onkeydown = commands;
  document.onkeyup = commandsOneOff;
}
function commands(event) {}
function commandsOneOff(event) {}

function init() {
  const texture = PIXI.Texture.from('/static/img/bg.jpg');
  const bg = new PIXI.Sprite(texture);
  bg.scale.set(0.7, 0.7);

  const frames = [];
  for (let i = 0; i < 3; i += 1) {
    const val = i < 10 ? `0${i}` : i;
    frames.push(PIXI.Texture.from(`rollSequence00${val}.png`));
  }
  console.log(frames);
  const shoryuken_Frames = [];
  for (let k = 0; k <= 7; k += 1) {
    const val2 = k < 10 ? `0${k}` : k;
    console.log(PIXI.Texture.from(`shoryuken_${val2}.png`));
    shoryuken_Frames.push(PIXI.Texture.from(`shoryuken_${val2}.png`));
  }
  console.log(shoryuken_Frames);
  const ken = new PIXI.AnimatedSprite(frames);
  ken.animationSpeed = 0.1;
  ken.scale.set(1.5, 1.5);
  ken.y = 280;
  ken.play();

  const ken_2 = new PIXI.AnimatedSprite(shoryuken_Frames);
  ken_2.animationSpeed = 0.1;
  ken_2.scale.set(1.5, 1.5);
  ken_2.x = 280;
  ken_2.y = 340;
  ken_2.play();

  app.stage.addChild(bg);
  app.stage.addChild(ken);
  app.stage.addChild(ken_2);

  document.addEventListener('keydown', onKeyDown);
  // Animate the rotation
  // app.ticker.add(() => {
  //   anim.rotation += 0.01;
  // });

  function onKeyDown(key) {
    if (key.keyCode === 65 || key.keyCode === 37) {
      ken.position.x -= 5;
    }
    if (key.keyCode === 68 || key.keyCode === 39) {
      ken.position.x += 5;
    }
  }
}
app.render(stage);
// //////////////////////////////////////////////
// function animate() {
//   requestAnimationFrame(animate);
//   app.render(stage);
// }
// animate();
