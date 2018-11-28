//作用是开启web服务器

'use strict'

// 这是从环境变量中去获取一个PORT的变量值，如果没有则默认给9090端口
let PORT = process.env.PORT || 9090;

const express = require('express');

const path = require('path');
const mongoose  = require('mongoose');

// try{
mongoose.connect('mongodb://localhost/manmanmai');

let app = express();

//加载数据库的模型
require('./models/dbModel.js');

app.all('*',(req,res,next)=>{
	//消除中文乱码
	res.set('Content-Type','application/json;charset=utf-8');
	//设置跨域
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	next();
});

app.use('/',require('./routes/apiRouter.js'));

app.listen(PORT,()=>{
	console.log('环境启动'+ PORT);
});

// }catch(e)
// {
	// console.log('服务器异常啦:'+e);
// }
