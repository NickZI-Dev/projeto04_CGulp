const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function sassCompiler() {
  return gulp.src('./source/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('dist/css'))
}

function imageCompiler() {
  return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
}

exports.default = gulp.parallel(imageCompiler, sassCompiler);

exports.watch = function() {
  return gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.parallel(sassCompiler))
}