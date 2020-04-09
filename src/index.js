import './css/index.css';
import React from 'react';
import { render } from 'react-dom';
import List from './components/list';

const app = (
  <div>
    <List />
  </div>
);

render(app, document.getElementById('app'));
