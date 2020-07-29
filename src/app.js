import * as PIXI from 'pixi.js';
import Loader from './Loader';
import Loading from './Screen/Loading';

export default class App {
  constructor() {
    this.app = new PIXI.Application({
      width: 1440,
      height: 720,
      view: document.querySelector('#app'),
      resolution: 1,
    });
    this.setup();
  }

  setup() {
    const abc = new Loader();
    abc.load()
    // const redBG = new PIXI.Graphics();
    // redBG.beginFill(0xff0000);
    // redBG.drawRect(0, 0, 300, 300);

    // this.app.stage.addChild(redBG);
  }
}
