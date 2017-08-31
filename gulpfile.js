/* eslint-disable */
const path = require('path')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const react = require('gulp-react')
const sass = require('gulp-sass')
const replace = require('gulp-replace')

gulp.task('js', function() {
  return gulp.src([
    './src/**/*.jsx',
  ])
  .pipe(replace('scss', 'css'))
  .pipe(plumber())
  .pipe(react({harmony: false, es6module: true}))
  .pipe(gulp.dest('dist'))
})

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['js', 'sass']);
/* eslint-enable */
