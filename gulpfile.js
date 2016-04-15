var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var path = require('path');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:8081",
        browser:"google chrome"
    });
});


gulp.task('default', ['browser-sync'], function() {
    gulp.watch(['./portfolio/css/*.css'], browserSync.reload);
    gulp.watch(['./*.html'], browserSync.reload);
		gulp.watch(['./*.css'], browserSync.reload);
    gulp.watch(['./portfolio/*.html'], browserSync.reload);
});
