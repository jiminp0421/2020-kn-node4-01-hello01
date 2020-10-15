var express = require('express/index.js'); //require가 express라는 모듈을 불러오면 index.js라는 시작파일을 알아서 가져온다 (index.js는 생략가능) require는 상대경로없이 쓴다(src="블라블라")
var app = express();
var path = require('path');
//console.log(app); //웹브라우저 밖 터미널에서 실행된다 노드창(ctrl+j) (ctrl+c를하면 노드모드에서 빠져나올수있다 노드가 자바스크립트를 파싱해서 실행시켜준다)

app.listen(3000, function(){ //listen은 포트를 쳐다보는 아이 (3000번포트를 노드포트로 만들겠습니다.) 127.~~내 컴퓨터 ip //서버를 만드는 역할은 listen.
    console.log("http://127.0.0.1:3000"); //콜백함수를 실행해주세요 function안에는 콜백함수
}); 

app.get('/hello', function(req, res, next){ //'/'루트로 요청이 들어오면 콜백함수 안에 인자(req 요청 res 응답 next는 미들웨어)를 사용할수있다
    res.send('<h1>Hello World</h1>'); //res객체안에 send가있다.
}); //alt+shift+화살표 하면 copy된다 //웹페이지 2개를 만들었다고 보면된다

console.log( path.join(__dirname, './public')); //노드가 지원하는 글로벌 변수 __dirname c부터보여주는 절대경로를 보여준다 join은 dirname과 public의 경로를 합쳐준다

//post방식으로는 이 두개를 사용해야한다 requestbody에 접근하기위해
app.use(express.json()); //포스트 방식으로 요청이들어오는 request를 json으로 만들어주세요. (자바스크립트로 사용할수있게)
app.use(express.urlencoded({extended:false}));//인자로 자바스크립트 객체를 보내고있다 요청사항을 쿼리스트링으로 바꿔주세요.

app.use('/', express.static( path.join(__dirname, './public'))); //use는 미들웨어를 사용한다 정적인 파일은 서버랑 상관없이 html파일이라 바로바로 f5를 눌러도 변경된 사항을 볼수있다.


app.get('/jiminp0421', function(req, res, next){
    res.send('<h1>Hello World</h1>');
});

//doctype 단축기 tap+느낌표 동적생성
app.get('/sample', function(req, res, next){
    var title = '샘플페이지';
    var content = 'Hello 샘플';
    var html = `
    <!DOCTYPE html> 
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        <h1>${content}</h1>
    </body>
    </html>`;
    res.send(html);
});

//쿼리방식
app.get('/search', function(req, res){
    var q = req.query.q //요청사항에있는 쿼리의 q.
    res.send(`<h1>당신이 요청한 쿼리는 ${q}입니다.</h1>`);
});

//시멘틱방식 params. /user(라우터):id(변수)
app.get('/user/:id', function(req, res){
    var id = req.params.id;
    res.send(`<h1>안녕하세요! ${id}님</h1>`);
});

//post방식
app.post('/join', function(req, res){
    var a;
    var userid = req.body.userid;
    var userpw = req.body.userpw;
    res.send(`<h1>${userid} / ${userpw}</h1>`); //에러가났다. 디버그사용 create a lunch.json.file
});