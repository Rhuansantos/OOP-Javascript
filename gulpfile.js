const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');


gulp.task('scss', () => {

  return gulp.src('./scss/**')
  .pipe(sass().on('error', sass.logError))
  .on('error', swallowError)
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream())

});


gulp.task('es6', () => {
  browserify('js/main.js')
    .transform('babelify', {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source('main.js'))
    .on('error', swallowError)
    .pipe(buffer())
    .pipe(gulp.dest('build'));
});



gulp.task('serve', () => {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/**", ['scss']);
    gulp.watch("./js/**", ['es6']);
    gulp.watch("/*.html").on('change', browserSync.reload);

});


function swallowError (error) {

  console.log(error.toString())
  //this.emit('end')
}

gulp.task('default', ['serve'], () => {

});
