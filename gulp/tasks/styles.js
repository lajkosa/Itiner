var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('styles', function() {
    return gulp
            .src('./app/assets/css/styles.css')
            .pipe(postcss([cssvars, nested, autoprefixer]))
            .pipe(gulp.dest('./app/temp/css'))
    ;
});
