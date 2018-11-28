//1.0 回顾gulp的方法
/*
   src:查找要处理的文件
   pipe(调用插件())
   dest(输出到目标路径)

   task()

 */

'use strict'

const gulp = require('gulp');


//2.0 定义任务
gulp.task('default',['es6toes5','cleancss','minimage','minhtml','copy'],()=>{
 
  console.log('gulp自动化完毕');

});

//3.0 先将es6语法转出es5语法后再将js文件进行压缩
const gulpbabel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('es6toes5',()=>{

	gulp.src(['./src/controllers/*.js',
		'./src/models/*.js' ,'./src/routes/*.js'
		] , {base:'src'})
	.pipe(gulpbabel({
		 presets: ['es2015'] //告诉gulp-babel将es6转换成es5
	}))
	.pipe(uglify()) //压缩js （由于gulp-uglify插件不认识es6语法，所以应该先使用gulp-babel将es6语法转换成es5以后再压缩）
	.pipe(gulp.dest('dist'));

	console.log('es6toes5执行完毕');
});

//4.0 压缩css文件
//加上, {base:'src'} 表示将src中的目录结构原样拷贝到dist文件夹中
const cleancss = require('gulp-clean-css');
const rev = require('gulp-rev');  //可以实现将site.css这些文件进行重命名(随机)
gulp.task('cleancss',()=>{
  
  gulp.src('./src/statics/css/*.css', {base:'src'})
  .pipe(cleancss({compatibility: 'ie8'}))
  .pipe(rev())  //根据 .css中的内容进行md5 加密以后生成的随机数据，只要内容不改变随机数就不改变
  .pipe(gulp.dest('dist'))
  .pipe(rev.manifest()) //生成另外一个rev-manifest.json文件
  .pipe(gulp.dest('./src/rev')); //将rev-manifest.json文件保存到src/rev目录中

  console.log('css压缩ok');

});

//5.0 压缩图片资源
const imagemin = require('gulp-imagemin');
gulp.task('minimage',()=>{
  gulp.src('./src/statics/images/*.*',{base:'src'})
  .pipe(imagemin())
  .pipe(gulp.dest('dist'));
});

//6.0 压缩html
const minhtml = require('gulp-htmlmin');
const revCollector = require('gulp-rev-collector'); //执行site.css替换为site_dfsdf.css
gulp.task('minhtml',()=>{
  gulp.src(['./src/rev/*.json','./src/views/*.html'],{base:'src'})
  .pipe(minhtml({collapseWhitespace: true})) //空格给压缩
  .pipe(revCollector())  //自动去查找 ./src/rev/*.json 根据当前.html中的/statics/css/site.css 作为可以找到其对应的值为：statics/css/site-33fa5f7d18.css 替换之
  .pipe(gulp.dest('dist'));
});


//7.0 利用gulp-copy 插件实现文件拷贝
//注意：1、路径 中的 第一个*代表的是当前第一级文件夹，第二个*代表的是一级文件夹下面的子文件夹
//*.*代表所有的文件
//2、参数必须加上{prefix:1} 才能拷贝成功，否则失败
const copyfile = require('gulp-copy');
gulp.task('copy',()=>{
gulp.src(['./src/statics/bowersrc/**/*.*',
		'./src/app.js'
	],{base:'src'})
.pipe(copyfile('dist',{prefix:1}));

console.log('拷贝文件完毕');
});

