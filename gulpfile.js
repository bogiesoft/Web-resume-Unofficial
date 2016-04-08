var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('mincss',function () {
	gulp.src('src/**/*.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('/'));
});

gulp.task('default',['mincss'],function(){
	 gulp.watch("scss/**/*.css", ['mincss']);
});
