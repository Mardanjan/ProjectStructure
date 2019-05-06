var mysql = require("mysql");

/*
var connection = mysql.createConnection({

    host   :'localhost',
    user   :'root',
    password :'123456',
    database :'a'
});

*/
var connection = mysql.createConnection({
    host   :'120.79.26.111',
    user   :'info',
    password :'123456',
    database :'info'
});

connection.connect();

connection.query('select * from user',function (error ,results,fields) {
    if(error) throw error;
    console.log(results[0].user);

});
/*

var connection = mysql.createConnection({
    host   :'120.79.26.111',
    user   :'info',
    password :'123456',
    database :'info'
});

connection.query('select * from book',function (error ,results,fields) {
    if(error) throw error;
    console.log(results[0].name);

});*/