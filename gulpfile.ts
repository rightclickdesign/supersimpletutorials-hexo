/**
 * @file Hexo tasks using Gulp
 * @author Right Click Design, LLC
 */

import * as gulp from 'gulp';
import * as uglify from 'gulp-uglify';
import * as htmlmin from 'gulp-htmlmin';
import * as del from 'del';
import * as runSequence from 'run-sequence';

/**
 * These modules currently do not have d.ts files
 */
const minifycss = require('gulp-clean-css');
const htmlclean = require('gulp-htmlclean');
const imagemin = require('gulp-imagemin');
const replace = require('gulp-replace');
const Hexo = require('hexo');

gulp.task('clean', () => {
    return del(['public/**/*', '']);
});

const hexo = new Hexo(process.cwd(), {});
gulp.task('generate', (cb: any) => {
    hexo.init().then(() => {
        return hexo.call('generate', {
            watch: false
        });
    }).then(() => {
        return hexo.exit();
    }).then(() => {
        return cb()
    }).catch((err: any) => {
        console.log(err);
        hexo.exit(err);
        return cb(err);
    })
})

gulp.task('sanitize-permalink', () => {
    return gulp.src(["./public/content.json"])
        .pipe(replace(/(\"permalink\":\"https:\/\/supersimpletutorials.com\/.*?)(index.html)(\")/g, '$1$3'))
        .pipe(replace(/(\"path\":\".*?)(index.html)(\")/g, '$1$3'))
        .pipe(gulp.dest('./public/'));
});

gulp.task('minify-css', () => {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({
            compatibility: 'ie10+'
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-html', () => {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});

gulp.task('minify-js', () => {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-img', () => {
    return gulp.src('./public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images'))
})

gulp.task('compress', (cb: any) => {
    runSequence(['minify-html', 'minify-css', 'minify-js', 'minify-img'], cb);
});


//gulp.task('build', ['clean', 'generate', 'compress']);
gulp.task('build', (cb: any) => {
    runSequence('generate', 'sanitize-permalink', cb)
});

gulp.task('default', [])