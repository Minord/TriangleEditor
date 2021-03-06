/*Variables that store the names of the attribs
position and uniforms this is here because*/
const positionAttribName = 'position';
const colorAttribName = 'color';
const projectionUniformName = 'projectionMatrix';


/*This is the vertex shader this shader
only tranform the triangles based on the
the projection matrix and define color
for  fragment shader.*/
const vertexShaderSource = `
  attribute vec4 ${positionAttribName};
  attribute vec4 ${colorAttribName};
  
  uniform mat4 ${projectionUniformName};

  varying lowp vec4 result_color;

  void main(void) {
    gl_Position = ${projectionUniformName} * ${positionAttribName};
    result_color = color;
  }
`;

/*This fragment shader only set the color
of the color the one pased for the vertex
shader.*/
const fragmentShaderSource = `
  varying lowp vec4 result_color;
  void main(void) {
    gl_FragColor = result_color;
  }
`;

/*This is a function that give
the default shader program defined
on this file*/
function getShaderProgramInfo(gl) {
  const shaderProgram = buildShaderProgram(gl, vertexShaderSource, fragmentShaderSource);
  
  const shaderProgramInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, positionAttribName),
      vertexColor: gl.getAttribLocation(shaderProgram, colorAttribName)
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, projectionUniformName)
    }
  };
  return shaderProgramInfo;
}


/*Load Compile and Check errors on Vertex or Fragmet shader*/
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  //Check for compile errors
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.log('An error occurred compiling the shaders: ' +
                gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}


/** Initialize and Link a Program Shader*/
function buildShaderProgram(gl, vertexSource, fragmentSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  //Link shaders 
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  //Check for link errors
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)){
    console.log('Unable to initialize the shader program: ' +
                gl.getProgramInfoLog(shaderProgram));
    return null;
  }
  return shaderProgram;
}


export {getShaderProgramInfo, buildShaderProgram};
