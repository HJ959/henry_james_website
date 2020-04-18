const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');

// add babel sorts out your new js code to work with old code

gulp.task('styles', () => {
    return gulp.src('sass/main.scss')
        .pipe(plumber())
        .pipe(sass({includePaths: ['./styles']}))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);  
});

gulp.task('default', gulp.series(['clean', 'styles']));
