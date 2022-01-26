import initBuffers from 'buffers.js';
import getShaderProgramInfo from 'shader.js';

class RenderEngine {
    constructor(canvas) {
      //get the context
      this.gl = convas.getContext('webgl');
      //Check for gl existance
      if (!gl) {
        console.log('Unable to initialize WebGL, Your browser or machine may not support it.');
        return;
      }
      //Link Shaders
      this.shaderProgramInfo = getShaderProgramInfo(gl);
      this.buffers = initBuffers(gl);
      this.background_color = [0.0, 0.0, 0.0, 1.0];

      //Link Buffers with vertex shader Attribs

      //Vertex Buffer
      {
        const numComponents = 3;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position);
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
    }
    
    render(projection, vertexs, indices, colors) {
      gl.clearColor(background_color...);
      gl.clearDepth(1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      //Update Camera Uniform Data
      gl.uniformMatrix4fv(
        this.shaderProgramInfo.uniformLocations.projectionMatrix,
        false,
        projection
      );
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
      
      //Render
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.indices);
      gl.useProgram(this.shaderProgramInfor.program);
      const vertexCount = 0;
      const type = gl.UNSIGNED_SHORT;
      const offset = 0;
      gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
};
