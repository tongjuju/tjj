import React, { Component } from 'react'
import Aside from "../common/aside";
import "../content.css";
class Content extends Component {
    render () {
        let {aside}=this.props;
        return (
            <div className="dist">
               <Aside aside={aside}/>
               <div className="distLi">
                   {this.props.children}
               </div>
            </div>
        )
    }
}

export default Content