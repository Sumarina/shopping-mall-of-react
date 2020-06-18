import FetchMock from 'fetch-mock';
import regionData from './data/region-data';

FetchMock.mock('/login', (url, opts) => {
  const params = opts.params;
  if (params.account === '12345678910') {
    if (params.password === '123456') {
      return { code: 200, message: 'success' };
    } else {
      return { code: 400, message: '密码错误!' };
    }
  } else {
    return { code: 400, message: '用户名错误!' };
  }
});

FetchMock.mock('getMobileVerifyToken', () => ({ code: 200, message: 'success' }));

FetchMock.mock('/region-data', () => ({ code: 200, message: 'success', data: regionData }));
