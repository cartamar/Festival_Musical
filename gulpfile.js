const {series, parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-dart-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

const paths = {
     imagenes: 'src/img/**/*',
     scss: 'src/scss/**/*.scss',
     js: 'src/js/**/*.js'
}

function css( ){
     return src(paths.scss)
     .pipe( sass() )
     .pipe( dest('./public/css'));
};

function cssMin( ){
     return src(paths.scss)
     .pipe( sass({
          outputStyle: 'compressed'
     }) )
     .pipe( dest('./public/css'));
};

function javaScript() {
     return src(paths.js)
     .pipe( concat('bundle.js'))
     .pipe( dest('./public/js'));
}

function imagenes() {
     return src(paths.imagenes)
          .pipe(imagemin())
          .pipe(dest('./public/img'))
          .pipe(notify ({message : "Imagen Minificada"}));
}
function versionWebp() {
     return src(paths.imagenes)
     .pipe( webp())
     .pipe(dest('./public/img'))
     .pipe(notify ({message : "Vercion webp"}));
}

function watchArchivos () {
     watch(paths.scss, css);
     watch(paths.js, javaScript);
}

// function JavaScript( done ) {
//     console.log('Compilando JavaScript');

//     done();
// }

// function minHTML( done ) {
//     console.log('Minificando HTML');

//     done();
// }

exports.css = css;
exports.cssMin = cssMin;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
// exports.JavaScript = JavaScript;
exports.default = series(css, javaScript, imagenes, versionWebp, watchArchivos);
// exports.default = parallel(CSS, JavaScript, minHTML);