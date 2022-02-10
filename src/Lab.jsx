import React, { Component } from 'react';

import Tool from "./react-components/Tool.jsx";
import Tools from "./react-components/Tools.jsx";
import icons from "./utils/icons.js";

class Lab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <h1> Lab </h1>
                <Tools>
                    <Tool />
                    <Tool iconUrl={icons.meshTool}/>
                    <Tool iconUrl={icons.triangleTool}/>
                    <Tool iconUrl={icons.vertexTool}/>
                </Tools>
            </React.Fragment>
        );
    }
}

export default Lab;
