import React, { Component } from 'react';
import { Button } from 'antd';

function AvatarComp(props) {
  return (
    <div>
      my name is{props.name},age {props.age}
      <Button>test</Button>
    </div>
  );
}

function withAvatarComp(Comp) {
  const name = '高阶组件';
  return (props) => <Comp {...props} name={name}></Comp>;
}
const NewAvatarComp = withAvatarComp(AvatarComp);

function Filter({ children, type }) {
  return React.Children.map(children, (child) => {
    if (type !== child.type) return;
    return child;
  });
}

function RadioGroup(props) {
  return React.Children.map(props.children, (child) => {
    const cloneChild = React.cloneElement(child, { name: props.name });
    return cloneChild;
  });
}

function Radio({children,...rest}) {
  return (
    <label>
      <input type="radio" {...rest} />
      {children}
    </label>
  );
}
export default class List extends Component {
  render() {
    return (
      <div>
        {/* <NewAvatarComp age="20" /> */}
        {/* <Filter type="p">
          <p>我是p标签</p>
          <h1>我是h1标签</h1>
        </Filter> */}
        <RadioGroup name="fruits">
          <Radio value="banana">香蕉</Radio>
          <Radio value="apple">苹果</Radio>
        </RadioGroup>
      </div>
    );
  }
}
