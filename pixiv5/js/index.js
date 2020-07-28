let app;
let Screen_1;
let traceMsg;
let moveList=[]
let rootWidth;
let rootHeight;
const player = new PIXI.Container(); 
const loader = new PIXI.Loader();

const rootSpeed = 0.15
const kenMoveList ={
  hadoken:'83,68,80',
  shoyuken:'68,83,68,80',
};

let ken_idle
let shoyuken

window.onload =function (){
  loader
    .add('ken', './img/ken_idle.json')
    .add('shoyuken', './img/shoyuken.json')
    .add('walking', './img/walking.json')
  loader.load();
  loader.onProgress.add((event) => console.log(`loadProgressHandler: ${event.progress}%`));
  loader.onComplete.add(() => onAssetsLoaded());

  app = new PIXI.Application ( { width:800,  height:600,  background: 0xaaaaaa, resolution: 1,  })

  rootWidth =app.view.width;
  rootHeight =app.view.height;

  document.body.append(app.view);
  window.addEventListener('keyup', keyupHandle);
  window.addEventListener('keydown', keydownHandle);

  Screen_1 = new PIXI.Container();
  app.stage.addChild(Screen_1)

  let redBG = new PIXI.Graphics()
  redBG.beginFill(0x000000)
  redBG.drawRect(0,0,app.view.width, app.view.height)
  Screen_1.addChild(redBG)

  traceMsg = new PIXI.Text('traceMsg')
  traceMsg.anchor.set(0.5)
  traceMsg.x = app.view.width/2
  traceMsg.y = app.view.height-100
  traceMsg.style = new PIXI.TextStyle({
    fill:0xffffff,
    fontSize: 40,
    fontFamily: 'Arial',
    fontStyle: 'bold',
  })
  app.stage.addChild(traceMsg)
  app.stage.addChild(player)
}
function onAssetsLoaded(){
  const ken_idleFrames = [];
  const shoryuken_Frames = [];
  const walking_Frames = [];
  console.log(PIXI.Texture)
  for (let i = 1; i < 5; i += 1) {
    const val = i < 10 ? `0${i}` : i;
    ken_idleFrames.push(PIXI.Texture.from(`idle_${val}.png`));
  }

  for (let j = 1; j < 7; j += 1) {
    const val2 = j < 10 ? `0${j}` : j;
    shoryuken_Frames.push(PIXI.Texture.from(`shoyuken_${val2}.png`));
  }
  for (let j = 1; j < 6; j += 1) {
    const val2 = j < 10 ? `0${j}` : j;
    walking_Frames.push(PIXI.Texture.from(`walking_${val2}.png`));
  }

  ken_idle = new PIXI.AnimatedSprite(ken_idleFrames);
  ken_idle.anchor.set(0.5, 1)
  ken_idle.animationSpeed = rootSpeed;
  ken_idle.play();

  walking = new PIXI.AnimatedSprite(walking_Frames);
  walking.anchor.set(0.5, 1)
  walking.animationSpeed = rootSpeed;
  walking.visible=false;
  walking.play();

  shoryuken = new PIXI.AnimatedSprite(shoryuken_Frames);
  shoryuken.anchor.set(0.5, 1)
  shoryuken.animationSpeed = rootSpeed;
  shoryuken.loop=false
  shoryuken.onComplete = () => {
    shoryuken.visible=false;
    ken_idle.visible=true;
  };


  shoryuken.visible=false;
  player.x = 300;
  player.y = 400;
  player.scale.set(1.5, 1.5);
  player.addChild(ken_idle);
  player.addChild(walking);
  player.addChild(shoryuken);
}
function keyupHandle(e){
  walking.visible=false ;
  ken_idle.visible=true;
  moveList.push(e.keyCode)
  let controlString = moveList.toString()
  traceMsg.text = controlString
  
  if(controlString.indexOf(kenMoveList.shoyuken)>0){
    shoryuken.visible=true;
    ken_idle.visible=false;
    shoryuken.gotoAndPlay(0)
  }
  
  // if(controlString.indexOf(kenMoveList.hadoken)>0){
  //   hadoken.visible=true;
  //   ken_idle.visible=false;
  //   hadoken.gotoAndPlay(0)
  // }
  setTimeout(function(){ 
    moveList.shift()
    let controlString = moveList.toString()
    traceMsg.text = controlString
  }, 800);
}

function keydownHandle(e){
  console.log(e.keyCode)
  if(e.keyCode===65) {
    player.x -= 5
    walking.visible=true;
    ken_idle.visible=false;
  }
  if(e.keyCode===68) {
    player.x += 5
    walking.visible=true;
    ken_idle.visible=false;
  }

  if(player.x> (rootWidth/2) ){
    player.scale.x =-1.5 
  } else { 
    player.scale.x =1.5
  }
}