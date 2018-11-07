import React, { Component } from 'react'

import {NavLink} from "react-router-dom";
import RenderRouter from "../util/renderRouter";
class Layout extends Component {
    render () {
        window.l=this;
        let {path}=this.props.match;
        let {routes}=this.props;
        return (
            
            <div className="wrap">
                <nav>

                    <NavLink to={`${path}/home`}>首页</NavLink>
                    <NavLink to={`${path}/company`}>员工管理</NavLink>
                    <NavLink to={`${path}/check`}>员工考勤</NavLink>
                    <NavLink to={`${path}/plan`}>工作计划</NavLink>
                    <NavLink to={`${path}/client`}>客户管理</NavLink>
                    <NavLink to={`${path}/college`}>亚太学院</NavLink>
                    <NavLink to={`${path}/assess`}>级别考核</NavLink>
                    <NavLink to={`${path}/assistant`}>管理助手</NavLink>
                    <NavLink to={`${path}/integral`}>积分管理</NavLink>
                </nav>
                
                <section>

                     <RenderRouter routes={routes}/>
                    {/* <Route path={`${path}/home`} component={Home} />
                    <Route path={`${path}/company`} component={Company}/>
                    <Route path={`${path}/check`} component={Check}/> */}
                </section>
            </div>
        )
    }
}

export default Layout