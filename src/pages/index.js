import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Header from './header';
import Login from './login';
import Register from './register';

export default class App extends Component {
  render() {
    return <Register></Register>;
  }
}
