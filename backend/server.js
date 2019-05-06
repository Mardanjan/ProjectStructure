var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");


var urlencodeParser = bodyParser.urlencoded({extended: false});

function check( user ,  password){

    var connection = mysql.createConnection({
        host   :'120.79.26.111',
        user   :'info',
        password :'123456',
        database :'info'
    });
    var  username = user;
    var userpassword = password;
    var sql ="SELECT * FROM user ; "
    connection.query(sql,function (error ,results,fields) {
        if(error) throw error;
        else{
            for(var i=0 ; i<results.length ; i++){
                console.log(results[i].username+results[i].password+results[i].type);
                console.log(username+userpassword);
            }
        }
            });
        }

        app.use('/public',express.static('public'));


        // 根目录，访问服务器的时候直接转到根目录里设定的主页  index2.html
        app.get('/',function (req,res) {
            console.log("访问主页");
            res.sendFile(__dirname+"/"+"html/login.html");
            //window.location.href="Index.html";
        });


        // 帮助请求
        app.get('/help',function (req,res) {


            res.sendFile(__dirname+"/html/"+"help.html");
            console.log("访问help.html");
        });


        //登录 ：  先对信息验证，根据情况跳转指定的页面
        app.post('/index',urlencodeParser,function (req,res) {
            //获取请求里的用户信息
            var username = req.body.user;
            var userpassword = req.body.password;

            var connection = mysql.createConnection({
                host   :'120.79.26.111',
                user   :'info',
                password :'123456',
                database :'info'
            });
            var sql ="SELECT * FROM user ; ";
            var temp = false;
            connection.query(sql,function (error ,results,fields) {
                if(error) throw error;
                else{
                    for(var i=0 ; i<results.length ; i++){
                       // console.log(results[i].username+results[i].password+results[i].type);
                        //console.log(username+userpassword);
                        if(results[i].username==username && results[i].password==userpassword){
                            if(results[i].type=="a"){
                                res.sendFile(__dirname+"/"+"html/index_root.html");
                                console.log("验证成功!  验证用户信息为：" + username + "," + userpassword+","+results[i].type);
                            }else if(results[i].type=="b"){
                                res.sendFile(__dirname+"/"+"html/index_teacher.html");
                                console.log("验证成功!  验证用户信息为：" + username + "," + userpassword+","+results[i].type);
                            }else if(results[i].type=="c"){
                                res.sendFile(__dirname+"/"+"html/index_student.html");
                                console.log("验证成功!  验证用户信息为：" + username + "," + userpassword+","+results[i].type);
                            }
                            temp = true;
                        }
                    }
                    //显示密码错误
                    console.log(temp);
                    res.sendFile(__dirname+"/"+"html/wrong_info.html");
                }

            });



});

var server = app.listen(8000, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
