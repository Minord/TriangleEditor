import React, {Component} from "react";
import "./App.css";

import { Editor } from "./Editor.js";

class CanvasEditor extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.editor = null;
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
    
    componentDidMount() {
        this.editor = new Editor(this.canvasRef.current);
        this.editor.run();
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
