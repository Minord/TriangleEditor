import React, {Component} from "react";
import "./App.css";

import { RenderEngine } from "./renderer/engine.js";

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
        this.engine.render(); //Should be black
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
