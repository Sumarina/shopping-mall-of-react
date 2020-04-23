import './css/index.css';
import React from 'react';
import { render } from 'react-dom';
import Header from './components/header';

const app = (
  <div>
    <Header />
  </div>
);

render(app, document.getElementById('app'));
