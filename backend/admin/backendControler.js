/**
 后台登陆控制器

 */
var router=express.Router();

//引用中间件
var bodyParser = require('body-parser');
//使用一下这个中间件的方法
router.use(bodyParser.urlencoded({extended:true}));
//界面
router.get('/',function (req,res,next) {
    //对口令进行最简单的写死的验证
    if(req.body.password='taoshihan'){
        //记录一下session
        res.session.adminId=1;
        res.redirect("/admin");
    }else{
        res.send('口令错误');
    }

})
module.exports=router;

var session=require("express-session");
var cookieParser = require('cookie-parser');
var router=express.Router();
//使用以下session和cookie
router.use(cookieParser());
router.use(session({
    secret: '12345',
    name: 'nodejs-blog',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 8000000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));

/**
 * 验证控制器
 */
var auth=function(router){
    /*验证权限*/
    router.use(function(req,res,next){
        if(!req.session.adminId){
            res.redirect("/admin/login");
        }
        next();
    });
}

module.exports=auth;
require("./auth")(router);
