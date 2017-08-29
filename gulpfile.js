"use strict";

var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('compileSass', function() {
	return gulp.src('sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'));
});

gulp.task('default', ['compileSass'], function() {
	console.log('Compile scss to css');
});

gulp.task('watchSass', function() {
	gulp.watch('sass/**/*.scss', ['compileSass']);
});