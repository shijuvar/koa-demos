var koa = require('koa');
var Q = require('q');
var request = Q.denodeify(require('request'));
var app = module.exports = koa();

app.use(function *(){
    var response = yield getHttpRequest('https://twitter.com/shijucv');
    this.body =  response.body;
});

function *getHttpRequest(url) {
    var resultParams = yield request(url);
    return resultParams[0];
}
app.listen(3000);
console.log('listening on port 3000');