'use strict';

var gulp       = require('gulp'),
    sweetjs    = require('gulp-sweetjs'),
    sourcemaps = require('gulp-sourcemaps'),
    source     = require('vinyl-source-stream'),
    sweetify   = require('sweetify'),
    browserify = require('browserify');

var SRC_SCRIPTS_PATH = 'src/**/*.sjs';
//
// gulp.task('browserify', function() {
//     return browserify('./src/registry.sjs')
//         .transform(sweetjs({
//           modules: ['contracts-js/macros'],
//
//           // This provides more readable names for the compiled code
//           // but may slow down compile time
//           readableNames: true
//         }))
//         .bundle()
//         //Pass desired output filename to vinyl-source-stream
//         .pipe(source('dist.js'))
//         // Start piping stream to tasks!
//         .pipe(gulp.dest('dist'));
// });

gulp.task('compile-src', function() {
  gulp.src(SRC_SCRIPTS_PATH)
    .pipe(sourcemaps.init())
    .pipe(sweetjs({
      modules: ['contracts-js/macros'],

      // This provides more readable names for the compiled code
      // but may slow down compile time
      readableNames: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('compiled'));
});

gulp.task('watch', function() {
  gulp.watch(SRC_SCRIPTS_PATH, ['compile-src']);
});

gulp.task('default', ['compile-src', 'watch']);
