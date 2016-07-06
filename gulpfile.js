/**
 * Created by ivo on 28.4.16..
 */

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass');


gulp.task('webserver', function () {
    gulp.src('www')
        .pipe(webserver({
            port: 9111,
            livereload: {port: 35744, enable: true},
            fallback: 'index.html'
        }))
});

// gulp.task('regwebserver', function () {
//     gulp.src('www/register')
//         .pipe(webserver({
//             port: 9110,
//             livereload: {port: 35743, enable: true},
//             fallback: 'index.html'
//         }))
// });

gulp.task('sass', function () {
    return gulp.src(['www/static/sass/*.scss'])
        .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('www/static/css'))
});

gulp.task('watch', function () {
    gulp.watch(['www/static/sass/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'watch', 'webserver'], function () {
});