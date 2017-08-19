var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('browser-sync', function() {
    browserSync({
        files: ["*.html","css/*.css","js/*.js"],

         proxy: "localhost/practice"
    });
});

// Default task to be run with `gulp`
gulp.task('default', ["browser-sync"]);
