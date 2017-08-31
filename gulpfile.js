/* eslint-disable */
const path = require('path')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const replace = require('gulp-replace')

gulp.task('js', function() {
  return gulp.src([
    './src/**/*.jsx',
  ])
  .pipe(replace('scss', 'css'))
  .pipe(plumber())
  .pipe(babel())
  .pipe(gulp.dest('dist'))
})

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['js', 'sass']);
/* eslint-enable */
