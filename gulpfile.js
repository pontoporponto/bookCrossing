var gulp = require('gulp');

gulp.task('test', function() {
  return gulp.src('client/templates/*.pug')
    .pipe(gulp.dest('build/html'))
});