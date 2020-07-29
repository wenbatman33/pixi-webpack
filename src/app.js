import * as PIXI from 'pixi.js';
import Loader from './Loader';
import Loading from './Screen/Loading';
import Resouce from "./Resouce";


export default class App {
  constructor() {
    this.app = new PIXI.Application({
      width: 1440,
      height: 720,
      view: document.querySelector('#app'),
      resolution: 1,
    });
    this.setup();
    this.LoadingScreen = new Loading();
    this.app.stage.addChild(this.LoadingScreen);
    this.LoadingScreen.init(); 
  }

  setup() {
    // 
    this.WW = this.app.view.width;
    this.HH = this.app.view.height;
    // 
    this.Loader = PIXI.Loader.shared;
    for (var i in Resouce) {
      this.Loader.add(i, Resouce[i])
    }
    this.Loader.load();
    this.Loader.onProgress.add((event) => this.getProgress(event));
    this.Loader.onComplete.add(() => this.onAssetsLoaded());
    
  }
  getProgress(event){    
    this.LoadingScreen.setLoading(event.progress)
    return event.progress;
  }
  onAssetsLoaded(){
    console.log('onAssetsLoaded');
  }
}
