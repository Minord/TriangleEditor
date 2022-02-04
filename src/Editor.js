
import { Camera } from "./renderer/camera.js"
import { RenderEngine } from "./renderer/engine.js";
import { RenderLoop } from "./RenderLoop.js";


//import { World, Entity, Component } from "ecsy";


class Editor {

  constructor(canvasElement) {
    this.renderEngine = new RenderEngine(canvasElement);
    this.renderLoop = new RenderLoop();

    
    this.renderEngine.backgroundColor = [0.9, 0.9, 1.0, 1.0];
    let camera = new Camera();
    let engine = this.renderEngine;
    camera.width = 500;
    camera.height = 350;
    camera.z = -6;

    this.renderLoop.renderFunction = () => {      
        let projection = camera.calculateProjectionMatrix();
        let vertexs = new Float32Array([
            -1.0, -2.0, -1.0,
            1.0, -1.0, -1.0,
            Math.random(), Math.random(), -1.0
        ]);
        let indices = new Uint16Array([
            0, 1, 2
        ]);
        let colors = new Float32Array([
            0.4, 0.4, 0.6, 1.0,
            0.4, 0.4, 0.6, 1.0,
            0.8, 0.8, 1.0, 1.0,
        ]);
        engine.render(projection = projection,
                           vertexs = vertexs,
                           indices = indices,
                           colors = colors);
    };
    
  }

  run() {
    this.renderLoop.startLoop();
  }

  stop() {
    this.renderLoop.stopLoop();
  }
}


export { Editor };
