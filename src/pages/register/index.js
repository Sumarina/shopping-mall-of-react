import { registerTelephone } from './mobile/init';
import { registerInfo } from './info/init';
export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    registerTelephone({
      container: this.refs.registerForm,
      success: () => {
        registerInfo({ container: this.refs.registerForm });
      },
    });
  }
  render() {
    return (
      <div className="register">
        <div className="register-header">
          <div className="header-logo"></div>
          <h2>用户注册</h2>
        </div>
        <div className="register-container">
          <div ref="registerForm"></div>
        </div>
      </div>
    );
  }
}
