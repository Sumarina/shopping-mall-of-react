const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');
const bodyParser = require('koa-bodyparser');

const fs = require('fs');
const { chunk } = require('underscore');

const staticPath = './static';

const app = new Koa();
const router = new Router();

app.use(static(path.join(__dirname, staticPath)));
app.use(bodyParser());

app.use(async (ctx, next) => {
  await next();
});

router.get('/user', async (ctx) => {
  return (ctx.body = { name: 'marin', age: '20' });
});

router.get('/img', async (ctx, next) => {
  let { imgName } = ctx.request.query; // 提取参数
  const res = await readImg(imgName);
  // res 为 Buffer流
  if (res) {
    ctx.type = 'jpg';
    const time = 3 * 24 * 60 * 60 * 1000;
    ctx.set('Cache-Control', `max-age=${time}`);
    ctx.body = res;
  }
  await next();
});
// 用fs处理流
function readImg(filePath) {
  // 创建可读流
  let data = [];
  return new Promise((res, rej) => {
    const readerStream = fs.createReadStream(path.join(__dirname, './static/starGirl.jpg'));
    readerStream.on('data', function (chunk) {
      data.push(chunk);
    });
    readerStream.on('end', function () {
      const finalData = Buffer.concat(data); // 合并Buffer
      res(finalData);
    });
  });
}

// router.post('/update', async ctx => {
//   const body = ctx.request.body;
//   const name = body['name'];
//   const time = utils.formate(new Date());
//   const result = await update(name, time);
//   if (result.status === 'success') {
//     ctx.body = {
//       message: `${name}于${utils.setDateTime(time)}打卡成功`,
//       status: 'success'
//     };
//   } else {
//     ctx.body = result;
//   }
// });
// router.post('/query', async ctx => {
//   const body = ctx.request.body;
//   const name = body['name'];
//   ctx.body = await query(name);
// });

// function update(name, time) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path.join(__dirname, '/files/data.json'), (err, data) => {
//       if (err) {
//         resolve({ status: 'fail', message: err });
//       }
//       const strData = JSON.parse(data.toString());
//       if (Object.keys(strData).length > 0) {
//         for (const d in strData) {
//           if (d === name) {
//             const tempData = strData[d];
//             tempData.indexOf(time) === -1 && strData[d].push(time);
//           } else {
//             strData[name] = [time];
//           }
//         }
//       } else {
//         strData[name] = [time];
//       }

//       const jsonData = JSON.stringify(strData);
//       fs.writeFile(path.join(__dirname, '/files/data.json'), jsonData, err => {
//         if (err) {
//           resolve({ status: 'fail', message: err });
//         }
//         resolve({ status: 'success' });
//       });
//     });
//   });
// }

// function query(name) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path.join(__dirname, '/files/data.json'), (err, data) => {
//       if (err) {
//         resolve({ status: 'fail', message: err });
//       }
//       const strData = JSON.parse(data.toString());
//       let result = {};
//       if (name) {
//         for (const d in strData) {
//           if (d === name) {
//             result[d] = strData[d];
//           }
//         }
//       } else {
//         result = { ...strData };
//       }

//       resolve({ status: 'success', data: result });
//     });
//   });
// }

// function getDateTime(time) {
//   return `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate()}日`;
// }

// 处理跨域
// router.all('/*', async (ctx, next) => {
//   // *代表允许来自所有域名请求
//   ctx.set('Access-Control-Allow-Origin', '*');
//   // 其他一些设置...
//   await next();
// });

app.use(router.routes()).use(router.allowedMethods());

app.listen(9090, (err) => {
  if (err) throw err;
  console.log('runing...');
});
