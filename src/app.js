import * as PIXI from 'pixi.js';
import Loader from './Loader';
import Loading from './Screen/Loading';
import Resouce from "./Resouce";
import {
  TweenMax
} from 'gsap';

export default class App {
  constructor() {
    this.app = new PIXI.Application({
      width: 800,
      height: 600,
      antialias: false,
      view: document.querySelector('#app'),
      resolution: 1,
    });
    // //////////////////////////////////////////////////
    this.setup();
    // //////////////////////////////////////////////////
    this.LoadingScreen = new Loading();
    this.LoadingScreen.init();
    this.app.stage.addChild(this.LoadingScreen);

    window.onresize = () => this.appResize();
    this.appResize();
  }

  setup() {
    this.Loader = PIXI.Loader.shared;
    for (var i in Resouce) {
      this.Loader.add(i, Resouce[i]);
    }
    this.Loader.load();
    this.Loader.onProgress.add((event) => this.getProgress(event));
    this.Loader.onComplete.add(() => this.onAssetsLoaded());
  }
  appResize() {
    app.width = window.innerWidth;
    app.height = window.innerHeight;
    if (this.LoadingScreen) this.LoadingScreen.resize();
  }
  getProgress(event) {
    this.LoadingScreen.setLoading(event.progress);
    return event.progress;
  }
  onAssetsLoaded() {
    const vm = this;
    TweenMax.to(this.LoadingScreen, 1, {
      alpha: 0,
      onComplete: () => this.end(),
    })
  }
  end() {
    console.log('end')
    // this.app.stage.destroy({
    //   children: true,
    //   texture: true,
    //   baseTexture: true
    // });
    this.LoadingScreen.parent.removeChild(this.LoadingScreen);
    // this.app.stage.removeChild(this.LoadingScreen);
    delete this.LoadingScreen;
  }
}
