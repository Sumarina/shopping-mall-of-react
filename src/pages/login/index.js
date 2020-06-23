import { login } from './init';
import { getId } from '../../common/utils';
export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    login({
      container: this.refs.login,
      success: () => {},
    });
  }
  render() {
    return (
      <div>
        <div className="login-header">
          <div className="header-logo"></div>
        </div>
        <div className="login-container">
          <div className="form-panel">
            <div className="login-box">
              <div ref="login" className="login-wrapper"></div>
              <div className="extra-links">
                <a className="login-link">免费注册</a>
                <a className="login-link">忘记密码</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
