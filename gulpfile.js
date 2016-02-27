var Promise = require('promise'),
    gulp = require('gulp'),
    path = require('path'),
    sass = require('gulp-sass'),
    $ = require('gulp-load-plugins')();
cachebust = new $.cachebust;


var startServer = function(){
    return new Promise(function (fulfil) {
        gulp.src('./www')
            .pipe($.webserver({
                port: 9123,
                livereload: true,
                fallback: 'index.html'
            }))
            .on('end', fulfil);
    });
};

// Compile Sass to CSS
gulp.task('sass', function() {
    return gulp.src('www/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('www/assets/css'));
});

gulp.task('default', ['sass'], function() {
    startServer();
});

gulp.task('bust-config', function () {
    return gulp.src('www/config.js')
        .pipe(cachebust.resources())
        .pipe($.uglify())
        .pipe(gulp.dest('www'));
});

gulp.task('less', function () {
    return gulp.src('www/less/master.less')
        .pipe($.less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('www/css'));
});

gulp.task('build-index', ['bust-config'], function () {
    return gulp.src('www/index.html')
        .pipe(cachebust.references())
        .pipe($.htmlmin({
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true,
            minifyCSS: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeComments: true
        }))
        .pipe(gulp.dest('www'));
});
