var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//创建application/x-www-form-urlencdoed 编码解析
var urlencodeParser = bodyParser.urlencoded({extended: false})

app.use('/public',express.static('public'));


// 根目录，访问服务器的时候直接转到根目录里设定的主页  index2.html
app.get('/',function (req,res) {
    res.sendFile(__dirname+"/"+"index2.html");
});


// 注册请求，转到注册页面
app.get('/zhuce',function (req,res) {
    res.sendFile(__dirname+"/"+"zhuce.html");
})


//登录 ：  先对信息验证，根据情况跳转指定的页面
app.post('/denglu',urlencodeParser,function (req,res) {
    //获取请求里的用户信息
    var username = req.body.user;
    var userpassword = req.body.password;
    //对用户信息验证，这里设置帐号密码为：123
    /**
     * 这里应该有一系列操作，比如：请求里的用户信息和数据库的用户信息核对再验证
     */
    if(username=="123" && userpassword=="123"){
        console.log("验证成功!  验证用户信息为：" + username + ","+ userpassword);
        /**
         * 这里应该有：根据人员类型跳转到指定页面
         * 暂时就放了一个登陆成功的页面
         */
        res.sendFile(__dirname+"/"+"login_successfully.html");

    }

    //登陆失败以及其他情况
    else if (username!="123" && userpassword !="123") {
        console.log("验证失败! 验证用户信息为：" + username +"," + userpassword);
        res.sendFile(__dirname+"/"+"wrong_password.html");
    }
    else{
        console.log("其它情况");
        res.sendFile(__dirname+"/"+"wrong_password.html");
    }
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})