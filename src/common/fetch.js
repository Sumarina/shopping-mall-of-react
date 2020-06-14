const fetchPost = (url, params) => {
  return fetch(url, {
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencode',
    },
    params: params,
    credentials: 'include', //fetch默认不带cookie 设置为include后会携带
  }).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  });
};

export { fetchPost };
