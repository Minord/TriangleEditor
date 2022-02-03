class RenderLoop {
  constructor() {
    this.running = false;
    this.lastTime = performance.now();
    this.animationRequestId = undefined;
  }

  startLoop() {
    this.running = true;
    //Give access to loop callback to this.
    let renderLoop = this;
    function loop() { 
      renderLoop.animationRequestId = undefined;
      let time = performance.now();
      let delta = time - renderLoop.lastTime;
    
      //Here is were the render logic goes here
      
      if (renderLoop.running) {
        renderLoop.startLoop();
      }
      else {
        renderLoop.stopLoop();
      }
    }
    if (!this.animationRequestId) {
      this.animationRequestId = 
        window.requestAnimationFrame(loop);
    }
  }
  
  stopLoop() {
    if(this.animationRequestId) {
      window.cancelAnimationFrame(this.animationRequestId);
      this.running = false;
    } 
  }
}


export { RenderLoop };
