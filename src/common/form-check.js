const Rules = {
  email: (value) => {},
  telephone: (value) => {},
  required: (value) => {
    return !value.trim() && { type: 'required', message: '必填', checkedResult: false };
  },
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
