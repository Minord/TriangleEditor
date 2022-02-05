import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import EditorApp from "./EditorApp.jsx";
import Lab from "./Lab.jsx";

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="app" element={<EditorApp />} />
                    <Route path="lab" element={<Lab />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
