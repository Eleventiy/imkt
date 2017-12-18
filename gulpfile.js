'use strict';

var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		rename = require('gulp-rename'),
		cleanCss = require('gulp-clean-css'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		imageMin = require('gulp-imagemin'),
		plumber = require('gulp-plumber'),
		notify = require('gulp-notify'),
		runSequence = require('run-sequence'),
		cache = require('gulp-cache'),
		del = require('del');

// ==================================================
// ### Development Task ###
// ==================================================

// Browser-sync
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

// SCSS
gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
			.pipe(sass())
			.pipe(rename({suffix: '.min', prefix : ''}))
			.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', 'Firefox >= 4'))
			.pipe(cleanCss(
					{debug: true}, function(details) {
						console.log(details.name + ': ' + details.stats.originalSize);
						console.log(details.name + ': ' + details.stats.minifiedSize);
					}
			)) // Опционально, закомментировать при отладке
			.pipe(gulp.dest('app/css'))
			.pipe(browserSync.reload({stream: true}));
});

// JavaScript
gulp.task('js', function() {
	return gulp.src('app/js/**/*.js')
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
			.pipe(concat('common.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('app/js'))
			.pipe(browserSync.reload({stream: true}));
});
// gulp.task('js', ['common-js'], function() {
// 	return gulp.src([
// 				'app/js/common.min.js' // Всегда в конце
// 			])
// 			.pipe(concat('scripts.min.js'))
// 			.pipe(uglify()) // Минимизировать весь js (на выбор)
// 			.pipe(gulp.dest('app/js'))
// 			.pipe(browserSync.reload({stream: true}));
// });

// Images
gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
			.pipe(cache(imageMin({
				interlaced: true
			}))) // Cache Images
			.pipe(gulp.dest('dist/img'));
});

// Fonts
gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
			.pipe(gulp.dest('dist/fonts'))
});

// Watcher
gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload);
});

// Default
gulp.task('default', ['watch']);


// ==================================================
// ### Production Task ###
// ==================================================

// Clean cache
gulp.task('cache', function() {
	return del.sync('dist').then(function(callback) {
		return cache.clearAll(callback);
	});
});

// Clear "dist" folder
gulp.task('clean:dist', function() {
	return del.sync(['dist', '!dist/img', '!dist/img/**/*']);
});

// Build taks
gulp.task('build', ['imagemin'], function() {

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist/'));

	var buildCss = gulp.src('app/css/**/*.css')
			.pipe(gulp.dest('dist/css'));

	var buildScripts = gulp.src('app/js/**/*.js')
			.pipe(gulp.dest('dist/js'));

	var buildLibs = gulp.src('app/libs/**/*')
		.pipe(gulp.dest('dist/libs'));

	var buildImg = gulp.src('app/libs/**/*')
		.pipe(gulp.dest('dist/libs'));

});
