// file name :test.js
var express             = require('express');
var app                 = express();
var bodyParse           = require('body-parser')
var cookieParser        = require('cookie-parser') ;

const　http = require('http');

app.use(cookieParser()) ;
app.use(bodyParse.urlencoded({extended:false})) ;

// 处理根目录的get请求
app.get('/',function(req,res){
    res.sendfile('public/main.html') ;
    console.log('main page is required ');
}) ;

// 处理/login的get请求
app.get('/add', function (req,res) {
    res.sendfile('public/add.html') ;
    console.log('add page is required ') ;
}) ;

// 处理/login的post请求
app.post('/login',function(req,res){
    var name=req.body.name ;
    var pwd=req.body.pwd   ;
    console.log(name+'--'+pwd) ;
    console.log("/login  post 拉拉");
    res.sendfile('public/add.html') ;
   /*
    if (name =="mardan" && pwd == "mardan")
    {
        res.sendfile('public/ok!.html') ;
    }
    else{

        return;
    }
    */
    //res.status(200).send(name+'--'+pwd) ;
   // res.sendFile('public/add.html');
});
var server = http.createServer((req,rs)=>{
    if(req.url=='/add'){
        res.writeHead(200,{
            "content-type":"text/html;charset=utf-8","Access-Control-Allow-Origin":"*"
        });
        res.write("a");
        res.end();
    }
})
server.listen(8000);
// 监听3000端口
//var server=app.listen(3000) ;