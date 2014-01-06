var koa = require('koa');
var Q = require('q');
var request = Q.denodeify(require('request'));
var app = module.exports = koa();

app.use(function *(){
    var response = yield doHttpRequest('https://twitter.com/shijucv');
    this.body =  response.body;
});

function *doHttpRequest(url) {
    var resultParams = yield request(url);
    return resultParams[0];
}
if (!module.parent) app.listen(3000);