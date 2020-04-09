import './css/index.css';
import React from 'react';
import { render } from 'react-dom';
import List from './components/list';
// import { Button } from 'antd';

// function AvatarComp(props) {
//   return (
//     <div>
//       my name is {props.name},age {props.age}
//     </div>
//   );
// }
// function withAvatarComp(Comp) {
//   const name = 'marin';
//   return props => <Comp {...props} name={name}></Comp>;
// }
// const NewAvatarComp = withAvatarComp(AvatarComp);
const app = (
  <div>
    <List />
  </div>
);

render(app, document.getElementById('app'));
