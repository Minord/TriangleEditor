import { initBuffers } from './buffers.js';
import { getShaderProgramInfo } from './shaders.js';

class RenderEngine {
    constructor(canvas) {
      //get the context
      this.gl = canvas.getContext('webgl');
      //For avoid the use of this.gl
      const gl = this.gl;
      //Check for gl existance
      if (!gl) {
        console.log('Unable to initialize WebGL, Your browser or machine may not support it.');
        return;
      }
      //Link Shaders
      this.shaderProgramInfo = getShaderProgramInfo(gl);
      this.buffers = initBuffers(gl);
      this.backgroundColor = [0.0, 0.0, 0.0, 1.0];

      //Link Buffers with vertex shader Attribs 
      //Vertex Buffer
      {
        const numComponents = 3;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.vertex);
        gl.vertexAttribPointer(
          this.shaderProgramInfo.attribLocations.vertexPosition,
          numComponents,
          type,
          normalize,
          stride,
          offset);
        gl.enableVertexAttribArray(
          this.shaderProgramInfo.attribLocations.vertexPosition);
      } 
      //Color Buffer
      {
        const numComponents = 4;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.color);
        gl.vertexAttribPointer(
          this.shaderProgramInfo.attribLocations.vertexColor,
          numComponents,
          type,
          normalize,
          stride,
          offset);
        gl.enableVertexAttribArray(
          this.shaderProgramInfo.attribLocations.vertexColor);
      } 
      gl.useProgram(this.shaderProgramInfo.program);
    }
    
    render(projection=null, vertexs=null, indices=null, colors=null) {
      //For avoid the repite use of this.gl
      const gl = this.gl;

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clearColor(this.backgroundColor[0],
                    this.backgroundColor[1],
                    this.backgroundColor[2],
                    this.backgroundColor[3]);
      gl.clearDepth(1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      //Update Buffers Data
      if (vertexs) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.vertex);
        gl.bufferData(gl.ARRAY_BUFFER, vertexs, gl.STATIC_DRAW);

      }
      if (colors) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.color);
        gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);   
      }
      if (indices) {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.indices);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW); 
      }

      //Update Camera Uniform Data
      if (projection) {
        gl.uniformMatrix4fv(
          this.shaderProgramInfo.uniformLocations.projectionMatrix,
          false,
          projection
        );
      }
      
      //Render
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.indices);
      const vertexCount = 3;
      const type = gl.UNSIGNED_SHORT;
      const offset = 0;
      gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
};


export {RenderEngine};
