import React, { Component } from 'react';

import Tool from "./react-components/Tool.jsx";
/* This component give us the chanse
 * of creating an isolated and cofigurable
 * enviroment for developing and testing 
 *
*/
class Lab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <h1> Lab </h1>
                <Tool />
            </React.Fragment>
        );
    }
}

export default Lab;
