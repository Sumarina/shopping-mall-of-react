import React from 'react';
import { render } from 'react-dom';

class List extends React.Component {
  componentDidMount() {
    console.log('挂载完成');
  }
}

function withList(component) {
  return class newList extends React.component {
    componentDidMount() {
      console.log('高阶组件，挂载完成');
    }
  };
}

