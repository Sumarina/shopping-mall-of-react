const Rules = {
  required: (value) => {
    return !value.trim() && { type: 'required', message: '必填' };
  },
  ltFFFF: (value) => {
    if (!v.match(/\u{ffff}-\u{fffff}/u)) {
      return {
        type: 'ltFFFF',
        message: '您输入了非法字符',
      };
    }
  },
  noOther: (value) => {
    if (!value.match(/[\P{C}]/u)) {
      return {
        type: 'noOther',
        message: '您输入了非法字符',
      };
    }
  },
  email: (value) => {
    if (!value.match(/^([\w\d_\.\-])+\@(([\w\d\-])+\.)+([\w\d{2,4}])+$/)) {
      return {
        type: 'email',
        message: '请输入正确的邮箱格式',
      };
    }
  },
  telephone: (value) => {},
};
const formCheck = (form) => {
  if (!form || !form.elements) return false;
  let checkedResults = [];
  Array.from(form.elements)
    .filter((element) => {
      return element.getAttribute('valid');
    })
    .map((element) => {
      const valid = element.getAttribute('valid');
      let errorResults = [];
      const value = element.value;
      valid.split(',').map((item) => {
        if (Rules[item]) {
          const result = Rules[item](value);
          result && errorResults.push(result);
        }
      });
      errorResults.length > 0 &&
        checkedResults.push({
          id: element.getAttribute('id'),
          name: element.getAttribute('name'),
          type: errorResults[0].type,
          checkedResult: [...errorResults],
        });
    });

  return checkedResults;
};
export { formCheck };
