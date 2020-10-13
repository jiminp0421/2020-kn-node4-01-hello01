var express = require('express'); //require가 express라는 모듈을 찾아준다
var app = express();

app.listen(3000, function(){
    console.log("http://127.0.0.1:3000");
}); //listen은 포트를 쳐다보는 아이 127.~~내 컴퓨터 ip //서버를 만들었고

app.get('/', function(req, res, next){
    res.send('<h1>Hello World</h1>');
}); //alt+shift+화살표 하면 copy된다 //웹페이지 2개를 만들었다고 보면된다

app.get('/jiminp0421', function(req, res, next){
    res.send('<h1>Hello World</h1>');
});