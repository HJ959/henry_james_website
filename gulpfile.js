const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');

/*
// add babel sorts out your new js code to work with old code
gulp.task('js', () =>
    gulp.src('js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'))
);
*/
gulp.task('styles', () => {
    return gulp.src('sass/main.scss')
        .pipe(plumber())
        .pipe(sass({includePaths: ['./styles']}))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(gulp.dest('./css/'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);  
});

gulp.task('default', gulp.series(['clean', 'styles']));
