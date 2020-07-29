import * as PIXI from "pixi.js";
import Resouce from "../Resouce";

export default class Loader {  
  load(){
    this.Loader = PIXI.Loader.shared;
    for (var i in Resouce) {
      this.Loader.add(i, Resouce[i])
    }
    this.Loader.load();
    this.Loader.onProgress.add((event) => this.getProgress(event));
    this.Loader.onComplete.add(() => this.onAssetsLoaded());
  }
  
  getProgress(event){
    return event.progress;
  }
  onAssetsLoaded(){
    console.log('onAssetsLoaded');
  }
}