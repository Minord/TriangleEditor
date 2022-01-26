/*This function init the buffers that the render will
use the vertex, indices and color buffers. Initializated*/
function initBuffers(gl) {
  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, null, gl.STATIC_DRAW);

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bindData(gl.ARRAY_BUFFER, null, gl.STATIC_DRAW);

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bindData(gl.ARRAY_BUFFER, null, gl.STATIC_DRAW);
 
  return {
    vertex : vertexBuffer,
    color : colorBuffer,
    indices : indexBuffer
  };
}
