const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const utils = require('./utils');

const fs = require('fs');

const staticPath = './static';

const app = new Koa();
const router = new Router();

app.use(static(path.join(__dirname, staticPath)));
app.use(bodyParser());

app.use(async (ctx, next) => {
  await next();
});

router.post('/update', async ctx => {
  const body = ctx.request.body;
  const name = body['name'];
  const time = utils.formate(new Date());
  const result = await update(name, time);
  if (result.status === 'success') {
    ctx.body = {
      message: `${name}于${utils.setDateTime(time)}打卡成功`,
      status: 'success'
    };
  } else {
    ctx.body = result;
  }
});
router.post('/query', async ctx => {
  const body = ctx.request.body;
  const name = body['name'];
  ctx.body = await query(name);
});

function update(name, time) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, '/files/data.json'), (err, data) => {
      if (err) {
        resolve({ status: 'fail', message: err });
      }
      const strData = JSON.parse(data.toString());
      if (Object.keys(strData).length > 0) {
        for (const d in strData) {
          if (d === name) {
            const tempData = strData[d];
            tempData.indexOf(time) === -1 && strData[d].push(time);
          } else {
            strData[name] = [time];
          }
        }
      } else {
        strData[name] = [time];
      }

      const jsonData = JSON.stringify(strData);
      fs.writeFile(path.join(__dirname, '/files/data.json'), jsonData, err => {
        if (err) {
          resolve({ status: 'fail', message: err });
        }
        resolve({ status: 'success' });
      });
    });
  });
}

function query(name) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, '/files/data.json'), (err, data) => {
      if (err) {
        resolve({ status: 'fail', message: err });
      }
      const strData = JSON.parse(data.toString());
      let result = {};
      if (name) {
        for (const d in strData) {
          if (d === name) {
            result[d] = strData[d];
          }
        }
      } else {
        result = { ...strData };
      }

      resolve({ status: 'success', data: result });
    });
  });
}

function getDateTime(time) {
  return `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate()}日`;
}

app.use(router.routes()).use(router.allowedMethods());

app.listen(9090, err => {
  if (err) throw err;
  console.log('runing...');
});
