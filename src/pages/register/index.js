import { register } from './mobile/init';
import { getId } from '../../common/utils';
export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    register({
      container: getId('register-form'),
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
          <div id="register-form"></div>
        </div>
      </div>
    );
  }
}
