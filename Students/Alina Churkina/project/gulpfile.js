const gulp 			= require('gulp');
const sass 			= require('gulp-sass');
const rename 		= require('gulp-rename');
const autoprefixer 	= require('gulp-autoprefixer');
const sourcemaps 	= require('gulp-sourcemaps');

/* ------------ Styles compile ------------- */
gulp.task('styles:compile', function () {
	return gulp.src('./src/layout/scss/style.scss') /*файл содержащий импорты и лежащий в scss*/
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('src/layout/style'));
});

/* ------------ Watchers ------------- */
gulp.task('watch', function () {
	gulp.watch('./src/layout/scss/**/*.scss', gulp.series('styles:compile'));
});