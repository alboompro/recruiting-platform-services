var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();



//Cria a pagina e informa qual arquivo vai ser chamado
gulp.task('browserSync', function() {  
  browserSync.init({
    server: {
      baseDir: './',
    },
    port: 8080,
    startPath: 'view/home.html',
  })
});

// Sass Source
var scssFiles = './assets/sass/**/*.scss';

// CSS destination
var cssDest = './assets/css';

// Options for development
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
}

gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
  .pipe(sass(sassDevOptions)).on('error', sass.logError)
  .pipe(gulp.dest(cssDest))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch',  ['browserSync'], function() {
  gulp.watch(scssFiles, ['sassdev', 'sassprod'])
});

gulp.task('default', ['sassdev', 'sassprod', 'watch']);
