var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');


gulp.task('build', function () {
    return sass('bootstrap.scss', {style: 'expanded'})
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

