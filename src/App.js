import React, { Component } from 'react';
import "./App.css";
import {BrowserRouter,Route} from "react-router-dom"
import RenderRouter from "./util/renderRouter";
import config from "./router/config";



class App extends Component {
    render() {
        return ( 
        <div className='wrap'>
            <BrowserRouter>
                  <RenderRouter routes={config}/>  
            </BrowserRouter>
        </div>
        
        );
    }
}

export default App;
