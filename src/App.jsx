import React, {Component} from "react";
import "./App.css";

import { RenderEngine } from "./renderer/engine.js";
import { Camera } from "./renderer/camera.js";

class CanvasEditor extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.engine = null;
    }

    render() {
        return(
            <canvas id="canvas-poly-1"
                    width="500"
                    height="350"
                    ref={this.canvasRef}>
            </canvas>
        );
    }
    
    //This class will create the context for
    //the canvas in OpenGL
    componentDidMount() {
        this.engine = new RenderEngine(this.canvasRef.current); 
        this.engine.backgroundColor = [0.9, 0.9, 1.0, 1.0];
        let camera = new Camera();
        camera.width = 500;
        camera.height = 350;
        camera.z = -6;
        
        let projection = camera.calculateProjectionMatrix();
        let vertexs = new Float32Array([
            -1.0, -2.0, -1.0,
            1.0, -1.0, -1.0,
            1.0, 1.0, -1.0
        ]);
        let indices = new Uint16Array([
            0, 1, 2
        ]);
        let colors = new Float32Array([
            0.4, 0.4, 0.6, 1.0,
            0.4, 0.4, 0.6, 1.0,
            0.8, 0.8, 1.0, 1.0,
        ]);
        this.engine.render(projection = projection,
                           vertexs = vertexs,
                           indices = indices,
                           colors = colors);
    }
}

class App extends Component {
    render(){
        return(
            <div className="App">
                <h1> Hello, World! </h1>
                <CanvasEditor/>
            </div>
        );
    }
}


export default App;
