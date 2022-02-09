
import React, {Component} from 'react';


class Tools extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className = "toolsContainer">
                    {this.props.children}
                </div>);
    }

}

export default Tools;
