import * as PIXI from 'pixi.js';

export default class Loading extends PIXI.Container {
  constructor() {
    super();
  }

  init() {
    this.WW = window.innerWidth;
    this.HH = window.innerHeight;
    this.LoadingBar = new PIXI.Container();
    this.LoadingBarBg = new PIXI.Sprite(PIXI.Texture.WHITE);
    this.LoadingBarBg.width = this.WW;
    this.LoadingBarBg.height = 10;
    this.LoadingBarBg.scale.x = 0.01;
    this.addChild(this.LoadingBar);
    this.LoadingBar.addChild(this.LoadingBarBg);
    this.textItem = new PIXI.Text('');
    this.textItem.resolution = 2;
    this.textItem.anchor.set(0.5);
    this.textItem.style = new PIXI.TextStyle({
      fill: 0xffffff,
      fontSize: 16,
      fontFamily: 'Arial',
      fontStyle: 'bold',
    });

    this.addChild(this.textItem);
  }

  resize() {
    console.log('resize');
    this.WW = window.innerWidth;
    this.HH = window.innerHeight;
    this.textItem.position.x = Math.floor(this.WW / 2);
    this.textItem.position.y = Math.floor((this.HH / 2) - 20);
    this.LoadingBar.position.y = Math.floor(this.HH / 2);
  }
  setLoading(num) {
    this.textItem.text = 'Loading ' + Math.floor(num) + '%';
    this.LoadingBarBg.width = this.WW;
    this.LoadingBarBg.scale.x = Math.floor(num);
  }
  removed() {
    console.log('removeEvent');
  }
}
