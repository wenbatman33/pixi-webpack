import * as PIXI from 'pixi.js';

export default class Loading extends PIXI.Container {
  init() {
    const redBG = new PIXI.Graphics();
    redBG.beginFill(0xff0000);
    redBG.drawRect(0, 0, 300, 300);
    this.addChild(redBG);
  }
}
