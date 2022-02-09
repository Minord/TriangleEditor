
import React, { Component } from "react";
import icons from "./../utils/icons.js";
import "./Tools.css"


/* How i put a custom icon to this.
 * 
 * Resolved: I think that with a props named iconUrl
 * we can set and adecuate simbol to the component
 *
 * How i make that this act like a button?
 *
 * Idea: That i should make is create a style named tool
 * this is alredy implemented
 */

class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {"active": false}
    }

    render() {
        return(
            <button className="toolButton">
                <img src={iconUrl()} />
            </button>
        );
    }

    iconUrl() {
        if (this.props.iconUrl == null){
            return icons.defaultTool;
        }
        else {
            this.prop.iconUrl;
        }
    }
}

export default Tool;
