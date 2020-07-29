import * as PIXI from "pixi.js";
import Resouce from "../Resouce";

export default class Loader {  
  load(){
    this.Loader = PIXI.Loader.shared;
    // console.log('abcwww');
    // console.log(Resouce);
    // const obh = Object.keys(Resouce);
    // console.log(obh);
    for (var i in Resouce) {
      this.Loader.add(i, Resouce[i])
    }
    this.Loader.load();
    this.Loader.onProgress.add((event) => {
      console.log(event.progress );
      // loadingBar.width = WW * (event.progress / 100);
      // loadingBar.position.x = (WW / 2) - (loadingBar.width / 2);
    });
    this.Loader.onComplete.add(() => this.onAssetsLoaded());
  }
  
  onAssetsLoaded(){
    console.log('onAssetsLoaded');
  }
}