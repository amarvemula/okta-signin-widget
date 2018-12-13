// including plugins
var gulp = require('gulp')
, uglify = require("gulp-uglify");
 
// task
gulp.task('minify-js', function () {
    gulp.src('C:\Images\Oktasignin.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('path/to/destination'));
});