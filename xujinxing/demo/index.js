const fs = require('fs');
const os = require('os');
const Koa = require('koa');
const app = new Koa();

let timeout = async function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, time)
  })
}
let time = 0;
const main = async ctx => {
  var a = await timeout(time)
  ctx.response.type = 'html';
  let file = './index.html';
  if(ctx.request.url == '/second.html'){
    file = './second.html'
  }
  ctx.response.body = fs.createReadStream(file);
};

app.use(main);
app.listen(3000);

function getLocalIP() {
  var interfaces = os.networkInterfaces();
  var addresses = [];
  for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
      var address = interfaces[k][k2];
      if (address.family === 'IPv4' && !address.internal) {
        addresses.push(address.address);
      }
    }
  }
  var LOCAL_SERVICE_IP = addresses && addresses[0];
  return LOCAL_SERVICE_IP;
}
let ip = getLocalIP() + ':3000';
console.log(`server listening on ${ip}`)
