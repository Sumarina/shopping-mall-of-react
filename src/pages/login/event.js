import { getId } from '../../common/utils';

import { fetchPost } from '../../common/fetch';

import { formCheck } from '../../common/form-check';

const Fields = {
  account: '账号',
  password: '密码',
};
const errorRules = {
  required: (field) => {
    return `请输入${Fields[field]}!`;
  },
  mobile: () => {
    return `手机号码格式不正确!`;
  },
  email: () => {
    return `邮箱格式不正确!`;
  },
};

const clearHtml = (dom) => {
  return (dom.innerHTML = '');
};

export default (opts = {}) => {
  const $loginForm = getId('login-form');
  const $loginBtn = getId('login-btn');
  const $clearAccount = getId('clear-account');
  const $account = getId('login-account');
  const $password = getId('login-password');
  const $error = getId('login-error');
  //需要表单验证
  $loginForm.onsubmit = async (event) => {
    event.preventDefault(event);
    const checked = formCheck($loginForm);
    // console.log(checked);
    if (!checked.length) {
      /**
       * 点击登录（使用onsubmit的触发方式包括回车和click）
       */
      const res = await fetchPost('/login', {
        account: $account.value,
        password: $password.value,
      });
      console.log('res', res);
      if (res.code !== 200) {
        $error.innerHTML = `${res.message}`;
      }
    } else {
      const item = checked[0];
      const element = document.getElementById(item.id);
      $error.innerHTML = `${errorRules[item.type](item.name)}`;
    }
  };
  $account.oninput = () => {
    clearHtml($error);
  };
  $clearAccount.onclick = () => {};
  $password.oninput = () => {
    clearHtml($error);
  };
};
