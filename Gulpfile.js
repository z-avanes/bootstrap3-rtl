var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('build', function () {
    return gulp.src('bootstrap.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(rename({suffix: '-rtl'}))
        .pipe(gulp.dest('dist'))
        .pipe(rename({suffix: '-min'}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'))
        .pipe(notify({message: 'Styles render complete'}));
});

gulp.task('default', function () {
    gulp.watch('**/*.scss', ['build']);
});

