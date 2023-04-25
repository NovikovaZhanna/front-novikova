const { src, dest, series, parallel, watch } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const fileInclude = require('gulp-file-include')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()

const paths = {
  scss: 'src/**/*.scss',
  html: 'src/**/*index.html',
  images: 'src/images/**/*',
  js: 'src/js/*.js',
}

const scss = () =>
  src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(concat('styles.css')) // to single CSS file
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())

// to single HTML file
const html = () =>
  src(paths.html)
    .pipe(fileInclude({ prefix: '@@', basepath: '@file' }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())

const images = () => {
  return src(paths.images).pipe(dest('dist/images')).pipe(browserSync.stream())
}

const js = () =>
  src(paths.js)
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(dest('dist/js'))

const watchFiles = () => {
  browserSync.init({
    server: { baseDir: './dist' },
    notify: false,
  })

  watch(
    [paths.scss, paths.html, paths.images, paths.js],
    series(parallel(scss, html, images, js))
  ).on('change', browserSync.reload)
}

exports.default = series(parallel(scss, html, images, js), watchFiles)
exports.build = parallel(scss, html, images, js)
