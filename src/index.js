import './css/main.less';
import './css/main.css';
import './css/index.css';
class Animals {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

// fetch('/api/user')
//   .then(res => {
//     return res.json();
//   })
//   .then(res => {
//     console.log('user', res);
//   });
