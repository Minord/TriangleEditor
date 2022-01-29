
import {mat4, glMatrix} from 'gl-matrix';


class Camera {
  constructor() {
    this.fieldOfView = 45.0;
    this.width = 1.0;
    this.height = 1.0;
    this.zNear = 0.01;
    this.zFar = 100.0;
    this.projectionMatrix = mat4.create();
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    this.theta = 0.0;
    this.alpha = 0.0;
    this.beta = 0.0;
  }

  calculateProjectionMatrix() {
    const aspect = this.width / this.height;
    mat4.perspective(this.projectionMatrix,
                     glMatrix.toRadian(this.fieldOfView),
                     aspect,
                     this.zNear,
                     this.zFar);
    mat4.translate(this.projectionMatrix,
                   this.projectionMatrix,
                   [this.x, this.y, this.z]);
    /*mat4.rotate(this.projectionMatrix,
                this.projectionMatrix,
                [this.theta, this.alpha, this.beta]);*/
    return this.projectionMatrix;
  }
}


export { Camera };
