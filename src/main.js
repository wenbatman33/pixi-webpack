import * as PIXI from 'pixi.js';

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

const resourcesList = [
  '/static/img/ken.json',
  '/static/img/bg.jpg',
];
resourcesList.map((element) => {
  loader.add(element);
  return '';
});
loader.load(init);

function init() {
  const texture = PIXI.Texture.from('/static/img/bg.jpg');
  const bg = new PIXI.Sprite(texture);
  bg.scale.set(0.7, 0.7);

  const frames = [];
  for (let i = 0; i < 3; i += 1) {
    const val = i < 10 ? `0${i}` : i;
    frames.push(PIXI.Texture.from(`rollSequence00${val}.png`));
  }
  const ken = new PIXI.AnimatedSprite(frames);
  ken.animationSpeed = 0.1;
  ken.scale.set(1.5, 1.5);
  ken.y = 280; 
  ken.play();
  
  app.stage.addChild(bg);
  app.stage.addChild(ken);

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

// //////////////////////////////////////////////
function animate() {
  requestAnimationFrame(animate);
  app.render(stage);
}
animate();
