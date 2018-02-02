'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const imageOptimize = require('gulp-image');
const imageResize = require('gulp-image-resize');
const rename = require('gulp-rename');
const filter = require('gulp-filter');
const { dest: { images: imagesDestPath }, src: { images: imagesSrcPath } } = require('../config');

const imagesSrcPathPattern = `${imagesSrcPath}/**/*.{jpg,png}`;

gulp.task('images', () => {
  return runSequence('images-placeholder', 'images-optimize');
});

gulp.task('images-placeholder', () => {
  return gulp
    .src(imagesSrcPathPattern)
    .pipe(filter(file => !/-placeholder/.test(file.path)))
    .pipe(
      imageResize({
        width: 50,
        height: 50,
        upscale: false,
        quality: 0.6
      })
    )
    .pipe(
      rename(path => {
        path.basename += '-placeholder';
      })
    )
    .pipe(gulp.dest(imagesSrcPath));
});

gulp.task('images-optimize', () => {
  return gulp
    .src(imagesSrcPathPattern)
    .pipe(
      imageOptimize({
        pngquant: true,
        optipng: true,
        zopflipng: true,
        jpegRecompress: true,
        jpegoptim: true,
        mozjpeg: true,
        gifsicle: true,
        guetzli: true,
        svgo: true,
        concurrent: 10
      })
    )
    .pipe(gulp.dest(imagesDestPath));
});
