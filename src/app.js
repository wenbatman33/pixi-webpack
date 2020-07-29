import * as PIXI from 'pixi.js';
import Loading from './Screen/Loading';

// let app = '';
const app = new PIXI.Application({
  width: 1440,
  height: 720,
  view: document.querySelector('#app'),
  resolution: 1,
});

export default class App {
  init() {
    const redBG = new PIXI.Graphics();
    redBG.beginFill(0xff0000);
    redBG.drawRect(0, 0, 300, 300);
    app.stage.addChild(redBG);
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
  }
}
