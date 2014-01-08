var koa = require('koa');
var app = module.exports = koa();

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(3000);
