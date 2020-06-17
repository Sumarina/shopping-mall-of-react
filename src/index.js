import './css/index.css';
import { render } from 'react-dom';
import App from './pages';
import './common/mock';
import './common/slider';

render(<App></App>, document.getElementById('app'));
