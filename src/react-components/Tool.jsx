
import React, { Component } from "react";
import icons from "./../utils/icons.js";

class Tool extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button>
                <img src={icons.defaultTool} />
            </button>
        );
    }
}

export default Tool;
