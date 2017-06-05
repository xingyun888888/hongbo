/**
 * Created by gaochao on 5/27/17.
 */

var gulp=require('gulp');

var concat = require('gulp-concat');

var less = require('gulp-less');

var uglify = require('gulp-uglify');

var del  =  require('del');

var sass = require('gulp-sass');

var compress = require('gulp-minify-css');


var sourcemaps = require('gulp-sourcemaps');

gulp.task('clean',function(){
    return del(['build']);
})

gulp.task("html",function(){
    gulp.src("src/*.html").pipe(gulp.dest("public"));
})

gulp.task("sass",function(){
    gulp.src("src/scss/*.scss").pipe(sass()).pipe(compress()).pipe(gulp.dest("public/css"));
})


gulp.task('default',function(){
   //gulp.src('less/index.less').pipe(less()).pipe(compress()).pipe(concat('style.min.css')).pipe(gulp.dest('build/css'));
   gulp.watch("src/**/*",['html','sass']);
})
