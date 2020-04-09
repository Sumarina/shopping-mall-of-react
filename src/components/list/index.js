import React, { Component } from 'react';

function AvatarComp(props) {
  return (
    <div>
      my name is{props.name},age {props.age}
    </div>
  );
}

function withAvatarComp(Comp) {
  const name = '高阶组件';
  return props => <Comp {...props} name={name}></Comp>;
}
const NewAvatarComp = withAvatarComp(AvatarComp);
export default class List extends Component {
  render() {
    return (
      <div>
        <NewAvatarComp age="20" />
      </div>
    );
  }
}
