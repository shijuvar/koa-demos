/*
Sample for Koa Context object
Context encapsulates node's request and response objects.
Context object provides accessors and alias for Request and Response equivalents:
 */
var koa = require('koa');
var app = module.exports = koa();

app.use(function *(){

    //Context object's accessors for methods of Req and Res
    console.log(this.method);
    console.log(this.url);
    console.log(this.ip);
    this.type = 'text/plain; charset=utf-8';
    this.body = 'Hello World';

});

if (!module.parent) app.listen(3000);
