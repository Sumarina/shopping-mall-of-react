import { login } from './init';
import { getId } from '../../common/utils';
export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    login({
      container: getId('login'),
    });
  }
  render() {
    return <div id="login"></div>;
  }
}
