import React, { Component } from 'react'
import PropTypes from "prop-types";
import {hash} from "../util"
import {Link,Route} from "react-router-dom";
class Header extends Component {
    constructor (props) {
        super(props)
        this.state={
            id:0
        }
    }
    render () {
        let { navList }= this.props;
        let {id}=this.state; 
        return (
            <div className='header'>

                <h1>艾德教育</h1>
                <Link to='/home'>首页</Link>
                <Link to='/company'>员工管理</Link>
                <Link to='/check'>员工考勤</Link>
                <div className='user'></div>
                <div className='info'></div>
                
            </div>
        )
    }
    handleClick(item,key){
        this.props.navActive(item,key);
        this.setState({
            id:key
        })
    }

}
Header.defaultProps={
    navList:[
        {
            text:"首页",
            id:1
        },{
            text:"员工管理",
            id:2
        },{
            text:"员工考勤",
            id:3
        },{
            text:"工作计划",
            id:4
        },{
            text:"客户管理",
            id:5
        },{
            text:"亚太学院",
            id:6
        },{
            text:"级别考核",
            id:7
        },{
            text:"管理助手",
            id:8
        },{
            text:"积分管理",
            id:9
        }
    ],
    navActive:(item,key)=>{
        console.log(item,key)
    }

}
// Header.PropTypes={
//     navList:PropTypes.array
// }
export default Header