//这个index.js文件就是当前项目的统一入口文件
//那么如何区分当前执行的是生成环境还是开发环境呢?

'use strict'

//1.0 获取从环境变量中设置好的NODE_EVN的值：dev:开发环境  dist：代表生产环境
//dev和dist是在 package.json中的scripts中已经预先配置好了
let NODE_EVN = process.env.NODE_EVN;

if(NODE_EVN =='dev')
{
	require('./src/app.js'); //当在cmd面中执行 npm run dev进行这段代码的执行
}else{

	require('./dist/app.js'); //当在cmd面中执行 npm run dist 进行这段代码的执行

}
