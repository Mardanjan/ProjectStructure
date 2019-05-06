/**
 *第一个express框架实例
 * 引入express模块，
 * @type {createApplication}
 */

//引入模块
let express = require("express");
let app = express();
var http = require("http"); //引入服务器模块
var url  = require("url"); //
var util = require("util");

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plan'});

    //解析url
    var params = url.parse(req.url,true).query;

})
/*



var  server = app.listen(8888,function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例访问地址为：http//%s:%s",host,port)
})
/*
function start(route)
{
    function onRequest(request , response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+ pathname + "receibed.");
        route(pathname);

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello worl");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
*/


/*
app.get('/',function (req,res) {
    res.send("hello world");
});

var  server = app.listen(8000,function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例访问地址为：http//%s:%s",host,port)
})



*/
