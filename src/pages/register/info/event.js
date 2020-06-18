import { getId } from '../../../common/utils';
import { formCheck } from '../../../common/form-check';
import { fetchPost } from '../../../common/fetch';
export default (opts) => {
  const $form = getId('register-info-form');
  let formValues = {};
  Array.from($form.elements).forEach((item) => {
    if (item.name) {
      formValues[item.name] = item.value;
    }
  });
  $form.onsubmit = async (event) => {
    event.preventDefault();
    let checkResult = formCheck($form);
    console.log(checkResult);
    if (checkResult.length) {
      const type = checkResult[0].type;
      const message = checkResult[0].message;
    } else {
      let data = await fetchPost('/register/info');
      if (data.code === 200) {
        opts.success && opts.success(data);
      } else {
        opts.error && opts.error(data);
      }
    }
  };
};
