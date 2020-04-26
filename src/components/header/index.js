import React, { Component } from 'react';

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
              <a>云服务</a>
              <a>金融</a>
            </div>
            <div className="site-user">
              <a>登陆</a>
              <a>注册</a>
              <a>消息通知</a>
            </div>
          </div>
        </div>
        <div className="site-header">
          <div className="container d-flex justify-content-between">
            <div className="header-logo">
              <a className="logo">小米官网</a>
            </div>
            <div className="header-nav">
              <ul className="d-flex">
                <li>
                  <a href="#" className="link">
                    小米手机
                  </a>
                  <div className="item-children">
                    <div className="container">
                      <ul className="d-flex">
                        <li>
                          <a className="children-list">
                            <div className="figure"></div>
                            <div className="title">小米10 Pro</div>
                            <div className="price">4399元起</div>
                          </a>
                        </li>
                        <li>
                          <a className="children-list">
                            <div className="figure"></div>
                            <div className="title">小米10 Pro</div>
                            <div className="price">4399元起</div>
                          </a>
                        </li>
                        <li>
                          <a className="children-list">
                            <div className="figure"></div>
                            <div className="title">小米10 Pro</div>
                            <div className="price">4399元起</div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" className="link">
                    Redmi红米
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    电视
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    笔记本
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    家电
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    路由器
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    智能硬件
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    服务
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    社区
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-search">
              <input type="text" className="search-text" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
