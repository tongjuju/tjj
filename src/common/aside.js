import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
class Aside extends Component {
    render () {
        let {aside}=this.props;
        return (
            <div className="zx">
                {
                    aside&&aside.map((item,key)=>{
                        return <NavLink className="zxList" key={key} to={item.path}>{item.text}</NavLink>
                    })
                }
            </div>
        )
    }
}

export default Aside