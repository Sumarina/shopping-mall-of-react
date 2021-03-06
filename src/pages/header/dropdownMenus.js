import { Menu } from 'antd';

const handlerMenuItems = (menus) => {
  return menus.map((menu) => {
    return (
      <Menu.Item key={menu.id}>
        <a target="_blank" rel="noopener noreferrer" href={menu.href}>
          {menu.description}
          {/* <div className="item-children">
            <div className="container">
              <ul className="d-flex">
                <li>
                  <a className="children-list">
                    <div className="figure"></div>
                    <div className="title"></div>
                    <div className="price">439元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </a>
      </Menu.Item>
    );
  });
};
export default class DropdownMenus extends PureComponent {
  render() {
    const { menus } = this.props;
    return <Menu>{handlerMenuItems(menus)}</Menu>;
  }
}
