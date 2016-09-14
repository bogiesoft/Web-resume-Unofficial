var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('less',function(){
    return gulp.src('./less/test.less')
    .pipe(less({
        paths:[path.join(__dirname,'less','includes')]
    }))
    .pipe(gulp.dest('./css'));
});
gulp.task('minify-css', function() {
  return gulp.src('./portfolio/css/main.css')
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(cleanCSS())        
    .pipe(gulp.dest('./portfolio/css'));
});
gulp.task('minify-css1', function() {
  return gulp.src('./css/test.css')
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(cleanCSS())        
    .pipe(gulp.dest('./css'));
});

gulp.task('default',['less','minify-css','minify-css1'],function(){
    gulp.watch("./less/*.less",['less']);
    gulp.watch("./portfolio/css/*.css",['minify-css']);
    gulp.watch("./css/*.css",['minify-css1']);
});

