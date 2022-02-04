
import { Camera } from "./renderer/camera.js"
import { RenderEngine } from "./renderer/engine.js";
import { RenderLoop } from "./RenderLoop.js";


//import { World, Entity, Component } from "ecsy";


class Editor {

constructor(canvasElement) {
  this.renderEngine = new RenderEngine(canvasElement);
  this.renderLoop = new RenderLoop();
  this.camera = new Camera();
  this.canvasElement = canvasElement;

  window.addEventListener('resize', () => {
    this.canvasElement.width = window.innerWidth;
    this.canvasElement.height = window.innerHeight;
    this.camera.width = this.canvasElement.width;
    this.camera.height = this.canvasElement.height;
  });
  
  this.renderEngine.backgroundColor = [0.9, 0.9, 0.9, 1.0];
  this.camera.width = canvasElement.width;
  this.camera.height = canvasElement.height;
  this.camera.z = -6;

  this.renderLoop.renderFunction = () => {      
        let projection = this.camera.calculateProjectionMatrix();
        let vertexs = new Float32Array([
            -1.0, -2.0, -1.0,
            1.0, -1.0, -1.0,
            -1.0, Math.sin(performance.now()*0.001), -1.0
        ]);
        let indices = new Uint16Array([
            0, 1, 2
        ]);
        let colors = new Float32Array([
            0.4, 1.0, 0.6, 1.0,
            0.7, 0.4, 0.6, 1.0,
            0.8, 0.8, Math.cos(performance.now() * 0.01), 1.0,
        ]);
        this.renderEngine.render(projection = projection,
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

  resizeCanvas() {
    this.camera.width = this.canvasElement.width;
    this.camera.height = this.canvasElement.height;
  }
}


export { Editor };
