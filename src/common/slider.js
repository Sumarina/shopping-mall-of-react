import { getId } from './utils';
const render = Symbol('render');
const event = Symbol('event');
const style = `<style></style>`;

class Slider {
  constructor(opts) {
    this.opts = opts;
    if (!opts.container) {
      throw '请填写container配置';
    } else {
      this[render](opts);
      this[event](opts);
    }
  }
  //使用symbol做key，避免出现被覆盖或者不小心修改函数的情况。
  [render](opts) {
    const unsuccessTip = opts.unsuccessTip || '请按住滑块，拖动到最右边';
    const tpl = `
      <div id="vs-wrapper" class="vs-wrapper">
        <div id="vs-moved-bg" class="vs-moved-bg"></div>
        <span id="vs-move-btn" class="vs-move-btn"></span>
        <div id="vs-unmoved-bg" class="vs-unmoved-bg"></div>
        <div id="vs-text" class="vs-text" ondrag="return false">
            ${unsuccessTip}
        </div>
      </div>
      `;
    opts.container.innerHTML = tpl;
  }
  [event](opts) {
    const $btn = getId('vs-move-btn');
    const $moved = getId('vs-moved-bg');
    const $wrapper = getId('vs-wrapper');
    const $text = getId('vs-text');

    const reset = () => {
      this.startX = 0;
      this.startY = 0;
      this.start = false;
      this.end = false;
      this.offsetArr = [];
      $btn.style.left = '0px';
      $moved.style.width = '0px';
    };

    $btn.onmousedown = (e) => {
      this.start = true;
      this.startX = e.pageX;
      this.startY = e.pageY;
      this.offsetArr = [];
    };
    window.onmousemove = (e) => {
      if (this.start && !this.end) {
        let offsetX = e.pageX - this.startX;
        let offsetY = e.pageY - this.startY;
        this.offsetArr.push(offsetX + ',' + offsetY);
        $btn.style.left = offsetX + 'px';
        $moved.style.width = offsetX + 'px';
        let r1 = $moved.offsetLeft + parseInt(window.getComputedStyle($moved).width);
        let r2 = parseInt(window.getComputedStyle($wrapper).width) - parseInt(window.getComputedStyle($btn).width);
        if (r1 >= r2) {
          this.end = true;
          this.start = false;
          $btn.style.left = r2 + 'px';
          $moved.style.width = r2 + 'px';
          opts.success && opts.success($wrapper, $text, this.offsetArr);
        }
      }
    };
    window.onmouseup = () => {
      if (!this.end) {
        reset();
      }
    };
  }

  reset() {
    this[render](this.opts);
    this[event](this.opts);
  }
}

export default Slider;
