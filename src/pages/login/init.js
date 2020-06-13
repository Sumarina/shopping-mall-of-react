import render from './render';
// import bindEvent from './event';

const login = (opts = {}) => {
  const defaultOpts = {
    loginBtnText: '登录',
    accountLabel: '用户名',
    accountPlaceholder: '手机号/邮箱/账号',
    passwordPlaceholder: '请填写密码',
    accountLabel: '用户名',
    passwordLabel: '密码',
    autocomplete: false,
  };
  const options = Object.assign(defaultOpts, opts);
  render(options);
  //   bindEvent(options);
};

export { login };
