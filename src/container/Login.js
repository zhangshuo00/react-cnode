import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="loginDiv">
                    <ul>
                        <li>用户名<input type="text" style={{marginLeft:'20px',border:'1px solid #ccc',borderRadius:'4px'}}/></li>
                        <li>密码<input type="password" style={{marginLeft:'35px',border:'1px solid #ccc',borderRadius:'4px'}}/></li>
                    </ul>
                    <button><Link to="/home" style={{color:'white'}}>登录</Link></button>
                </div>
            </div>
        )
    }
}
