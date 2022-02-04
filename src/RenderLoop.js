class RenderLoop {
  constructor() {
    this.running = false;
    this.animationRequestId = undefined;
    this.renderFunction = () => {};
  }

  startLoop() {
    this.running = true;
    //Give access to loop callback to this.
    let renderLoop = this;
    function loop() { 
      renderLoop.animationRequestId = undefined;
    
      //Execure Render Function CallBack
      renderLoop.renderFunction();
      
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
