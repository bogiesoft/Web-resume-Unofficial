var gulp = require('gulp');
// var less = require('gulp-less');
var path = require('path');
var cleanCSS = require('gulp-clean-css');
	
gulp.task('minify-css', function() {
  	return gulp.src('/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['minify-css'], function() {
    gulp.watch("./*.css", ['css']);
});
