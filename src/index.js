import './css/main.less';
import './css/main.css';
import './css/index.css'
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
console.log("test hot...")