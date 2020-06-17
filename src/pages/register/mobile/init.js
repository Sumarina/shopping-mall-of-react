import render from './render';
import bindEvent from './event';

const register = (opts = {}) => {
  const defaultOpts = {
    registerBtnText: '下一步',
    mobilePlaceholder: '请输入手机号',
    autocomplete: false,
  };
  const options = Object.assign(defaultOpts, opts);
  render(options);
  bindEvent(options);
};

export { register };
