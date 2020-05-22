import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import DropdownMenus from './dropdownMenus';

const menuData = [1, 2, 3].map((item) => ({ id: item, href: 'www.sumanrin.cn', description: `小米${item}` }));
const menu = <DropdownMenus menus={menuData}></DropdownMenus>;
export default class Header extends Component {
  constructor(props) {
    super(props);
  }
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
                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link link" onClick={(e) => e.preventDefault()}>
                      小米手机
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link link" onClick={(e) => e.preventDefault()}>
                      Redmi红米
                    </a>
                  </Dropdown>
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
