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
        function canvasResize() {
            console.log("Resize");
        }
        return(
            <canvas className="EditorCanvas"
                    width={window.innerWidth}
                    height={window.innerHeight}
                    ref={this.canvasRef}>
            </canvas>
        );
    }
    
    componentDidMount() {
        this.editor = new Editor(this.canvasRef.current);
        this.editor.run();
    }

    componentWillUnmount() {
        this.editor.stop();
        this.editor = null;
    }
}

class App extends Component {
    render(){
        return(
            <div className="App">
                <h1> Hello World Again </h1>
                <CanvasEditor/>
            </div>
        );
    }
}


export default App;
