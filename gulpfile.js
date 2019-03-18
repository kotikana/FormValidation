var gulp = require('gulp'),
less = require('gulp-less'),
path = require('path'),
concat = require('gulp-concat'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
minifyCss = require('gulp-clean-css'),
watch = require('gulp-watch'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
minifyHtml = require('gulp-cleanhtml'),
pug = require('gulp-pug')
svgo  = require ('gulp-svgo'),
tinypng = require('gulp-tinypng');

//less-css.
gulp.task('less', function() {
	return gulp.src('src/**/*.less')
	.pipe(sourcemaps.init())
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
	}))
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(concat('main.min.css'))
	.pipe(minifyCss())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/minCss/'))
});

//js
gulp.task('script', function() {
	return gulp.src('src/js/*.js')
	.pipe(concat('script.min.js'))
	.pipe(uglify()) 
	.pipe(gulp.dest('build/minJs/')); 
});


// html
gulp.task('minifyHtml', function(){
	return gulp.src('src/*.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('build/'));
});
//img
gulp.task('svgo',  function() {
	return gulp.src('src/img/*.svg')
	.pipe(svgo())
	.pipe(gulp.dest('build/img'));
});

gulp.task('tiny', function () {
    return gulp.src('src/img/*.{png,jpg,jpeg}')
        .pipe(tinypng('zC9lbGTBwX7Tjs2blrvXQh0RzH7DRzN7'))
        .pipe(gulp.dest('build/img'));
});
//watch
gulp.task('watch', function() {
	gulp.watch('src/**/*.less', gulp.series(['less']));
	gulp.watch('src/js/*.js',  gulp.series(['script']));
	gulp.watch('src/*.html',  gulp.series(['minifyHtml']));
	gulp.watch('src/img/*',  gulp.series(['svgo']));
	gulp.watch('src/img/*.{png,jpg,jpeg}', gulp.series('tiny'));

});

gulp.task('default', gulp.series(['less','minifyHtml','script','tiny','svgo','watch']));