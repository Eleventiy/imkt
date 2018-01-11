'use strict';

var gulp = require('gulp'),
		plugins = require('gulp-load-plugins') (),
		browserSync = require('browser-sync'),
		del = require('del');

// ==================================================
// ### Development Task ###
// ==================================================

// Static server
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './app'
		},
		notify: false
	});
});

// Compile SCSS to CSS
gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
			.pipe(plugins.plumber({ errorHandler: plugins.notify.onError("Error: <%= error.message %>") }))
			.pipe(plugins.sass())
			.pipe(plugins.autoprefixer({
				browsers: ['last 5 version', '> 1%', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', 'Firefox >= 4'],
				cascade: true
			}))
			.pipe(plugins.csso({
				debug: true
			}))
			.pipe(plugins.rename({
				suffix: '.min',
				prefix : ''
			}))
			.pipe(gulp.dest('app/css'))
			.pipe(browserSync.reload({ stream: true }));
});

// JavaScript libraries
gulp.task('js-libs', function() {
	return gulp.src([
				'./node_modules/jquery/dist/jquery.min.js',
				'./node_modules/jquery-migrate/dist/jquery-migrate.min.js',
				'./node_modules/jquery-validation/dist/jquery.validate.min.js',
				'./node_modules/jquery-validation/dist/localization/messages_ru.js',
				'./node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js',
				'./node_modules/slick-carousel/slick/slick.min.js'
			])
			.pipe(plugins.concat('libs.min.js'))
			.pipe(plugins.uglify())
			.pipe(gulp.dest('app/js'))
			.pipe(browserSync.reload({ stream: true }));
});

// Watching for changes
gulp.task('watch', ['browser-sync', 'sass', 'js-libs'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/js/common.js', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
});

// Default task
gulp.task('default', ['watch']);


// ==================================================
// ### Production Task ###
// ==================================================

// Optimizing images
gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
		.pipe(plugins.cache(plugins.imagemin({
			interlaced: true,
			progressive: true,
			optimizationLevel: 5,
			svgoPlugins: [{removeViewBox: true}]
		}))) // Cache Images
		.pipe(gulp.dest('dist/img'));
});

// Migrate fonts to production folder
gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});

// Clean cache
gulp.task('clean', function(callback) {
	return plugins.cache.clearAll(callback);
});

// Clear production folder
gulp.task('clear', function() {
	return del.sync(['dist', '!dist/img', '!dist/img/**/*']);
});

// Building application
gulp.task('build', ['clear', 'clean', 'imagemin', 'fonts'], function() {

	var buildHtml = gulp.src('app/*.html')
			.pipe(gulp.dest('dist'));

	var buildCss = gulp.src('app/css/**/*')
			.pipe(gulp.dest('dist/css'));

	var buildScripts = gulp.src('app/js/**/*.js')
			.pipe(gulp.dest('dist/js'));

});
