import React, { Component } from 'react'

class Login extends Component {
    render () {
        return (
            <div className="loginBox">
                <div className="loginList">
                        <h3>登录/注册</h3>
                        <div className="loginBody">
                            用户名：<input src="type"/><br/>
                            密码：<input src="type"/>

                        </div>
                </div>
            </div>
        )
    }
}

export default Login