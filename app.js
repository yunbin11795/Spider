/**
 * Created by yubin on 2017/11/10.
 */
var express=require('express');
var app=express();
var Book=require('./db');
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/login',function (req,res) {
    Book.find({},function (err,data) {
        if(err){
            console.log(err);
        }
        res.send({data:data});
    })
});

app.listen(8080);