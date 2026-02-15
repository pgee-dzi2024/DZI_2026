var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
// var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();

// scss to css
gulp.task('style', function(){
  return gulp.src('assets/scss/**/*.scss',{sourcemaps:true})
    .pipe(sass({
       //outputStyle: "compressed",
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('assets/css', { sourcemaps: '.' }))
    .pipe(browserSync.reload({stream: true}));         
});



// watch task
gulp.task('watch', function(){
    browserSync.init({
      proxy: "localhost/projects/techneinfosys/templatemonster/dashmaster/templatemonster-main-file/admin/template/index.html"
      // Please update this path according to your local environment or server setup. This allows for easy customization and deployment.
    });   
  gulp.watch('assets/scss/**/*.scss', gulp.series(['style'])).on("change", browserSync.reload);
  gulp.watch('template/**.html').on("change", browserSync.reload);  
});

// Default task
gulp.task('default', gulp.series(['style', 'watch']));
