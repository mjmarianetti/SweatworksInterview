const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const babel = require('gulp-babel');
const templateCache = require('gulp-angular-templatecache');
const clean = require('gulp-clean');

const paths = {
  js: [
    'src/**/*.module.js',
    'src/**/*.service.js',
    'src/**/*.filter.js',
    'src/**/*.directive.js',    
    'src/**/*.state.js',
    'src/**/*.controller.js',
    'dist/templates.js'
  ],
  html: [
    'src/**/*.html'
  ],
  dest: {
    js: 'dist/app.js'
  }
};

const options = {
  moduleName : 'test'
};

gulp.task('concat',['templates'], function () {
  return gulp.src(paths.js)
  .pipe(babel())
  .pipe(concat(paths.dest.js))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(gulp.dest('.'));
});

gulp.task('dev',['templates'], function () {
  return gulp.src(paths.js)
  .pipe(babel())
  .pipe(sourcemaps.init())
  .pipe(concat(paths.dest.js))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('.'));
});

gulp.task('templates', function() {
  return gulp.src(paths.html)
  .pipe(templateCache({module: options.moduleName}))
  .pipe(gulp.dest("dist"));
});

gulp.task('clean', function () {
   return gulp.src('./dist/templates.js').pipe(clean());
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch',function () {
  gulp.watch(paths.js, ['dev','clean']);
});

gulp.task('build', ['concat','clean']);
gulp.task('default', ['dev','clean','webserver','watch']);
