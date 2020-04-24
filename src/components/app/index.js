import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Header from '../header';

export default class App extends Component {
  render() {
    return (
        <Header></Header>
    );
  }
}
