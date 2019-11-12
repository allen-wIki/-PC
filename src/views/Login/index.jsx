import React, { Component } from 'react';

import './login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login-wrap">
        <div className="login-main">
          <div className="login-btn-wrap">
            <div className="login-btn">登录</div>
            <div className="login-register">注册</div>
          </div>

          <div className="login-loginbar">
            <input type="text" placeholder="用户账号" />
            <input type="text" placeholder="账号密码" />
            <div className="login-verification">
              <div>
                <input className="verification-input" type="text" placeholder="验证码" />
              </div>
              <div className="verification">xsgsxaw</div>
            </div>
            <button className="login-submit">登录</button>
          </div>
          <div className="forget-password">忘记密码</div>
        </div>
      </div>
    )
  }
}
