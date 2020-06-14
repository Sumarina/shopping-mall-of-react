import { getId } from '../../common/utils';

import { fetchPost } from '../../common/fetch';

import { formCheck } from '../../common/form-check';

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
    } else {
      checked.forEach((item) => {
        const element = document.getElementById(item.id);
        $error.innerHTML = `${element.getAttribute('name')}${item['checkedResult'][0].message}`;
      });
    }
  };
  $account.oninput = () => {};
  $clearAccount.onclick = () => {};
  $password.oninput = () => {};
};
