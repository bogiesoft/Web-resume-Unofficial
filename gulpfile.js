var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var path = require('path');
var browserSync = require('browser-sync');
var scss = require("gulp-scss");

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:8081",
        browser:"google chrome"
    });
});
/*global require*/
    "use strict";
    gulp.task("scss", function () {
        gulp.src(
            "/portfolio/**/scss/*.scss"
        ).pipe(scss(
            {"bundleExec": true}
        )).pipe(gulp.dest("/porftolio/css"));
    });

gulp.task('default', ['browser-sync','scss'], function() {
    gulp.watch(['./portfolio/css/*.css'], browserSync.reload);
    gulp.watch(['./*.html'], browserSync.reload);
		gulp.watch(['./*.css'], browserSync.reload);
    gulp.watch(['./portfolio/*.html'], browserSync.reload);
});
