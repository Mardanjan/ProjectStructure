/**
 *第一个express框架实例
 * 引入express模块，
 * @type {createApplication}
 */

//引入模块
let express = require("express");
let app = express();

app.get('/',function (req,res) {
    res.send("hello world");
});

var  server = app.listen(8000,function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例访问地址为：http//%s:%s",host,port)
})




