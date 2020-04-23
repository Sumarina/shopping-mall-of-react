import React, { Component } from 'react';

import './header.less';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="site-topbar">
          <div className="container">
            <div className="topbar-nav">
              <a>小米商场</a>
              <a>MIUI</a>
              <a>IoT</a>
            </div>
            <div className="site-user">
              <a>登陆</a>
              <a>注册</a>
              <a>消息通知</a>
            </div>
          </div>
        </div>
        <div className="site-header">
          <div className="container">
            <div className="header-logo"></div>
            <div className="header-nav"></div>
            <div className="header-search"></div>
          </div>
        </div>
      </div>
    );
  }
}
