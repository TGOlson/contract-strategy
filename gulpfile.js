'use strict';

var gulp    = require('gulp'),
    sweetjs = require('gulp-sweetjs');

var SRC_SCRIPTS_PATH = 'src/**/*.sjs';

gulp.task('compile-src', function() {
  gulp.src(SRC_SCRIPTS_PATH)
    .pipe(sweetjs({
      modules: ['contracts-js/macros'],

      // This provides more readable names for the compiled code
      // but may slow down compile time
      readableNames: true
    }))
    .pipe(gulp.dest('compiled'));
})

gulp.task('watch', function() {
  gulp.watch(SRC_SCRIPTS_PATH, ['compile-src']);
});

gulp.task('default', ['compile-src', 'watch']);
