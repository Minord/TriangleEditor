
import React, { Component } from "react";
import icons from "./../utils/icons.js";
import "./Tools.css"


class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {"active": false}
    }

    render() {
        return(
            <button className="toolButton">
                <img src={this.iconSrc()} />
            </button>
        );
    }

    iconSrc() {
        if (this.props.iconUrl == null){
            return icons.defaultTool;
        }
        else {
            return this.props.iconUrl;
        }
    }
}

export default Tool;
