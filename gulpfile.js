var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('build', function () {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.'));
});
