import * as PIXI from 'pixi.js';

export default class Loading extends PIXI.Container {
  init() {
    this.redBG = new PIXI.Graphics();
    this.redBG .beginFill(0xff0000);
    this.redBG .drawRect(0, 0, 300, 300);
    this.addChild(this.redBG);
  }
  setLoading(num){
    // console.log(num);
    this.redBG.width = 300 * (num/ 100);
  }
}
