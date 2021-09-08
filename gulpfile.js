const {series, parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-dart-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//utilidades css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');


const paths = {
     imagenes: 'src/img/**/*',
     scss: 'src/scss/**/*.scss',
     js: 'src/js/**/*.js'
}

function css( ){
     return src(paths.scss)
     .pipe( sourcemaps.init())
     .pipe( sass() )
     .pipe( postcss( [autoprefixer(), cssnano()]))//transforma el css
     .pipe( sourcemaps.write('.'))
     .pipe( dest('./public/css'));
};

// function cssMin( ){
//      return src(paths.scss)
//      .pipe( sass({
//           outputStyle: 'compressed'
//      }) )
//      .pipe( dest('./public/css'));
// };

function javaScript() {
     return src(paths.js)
     .pipe( sourcemaps.init())
     .pipe( concat('bundle.js'))
     .pipe( terser() )
     .pipe( sourcemaps.write('.'))
     .pipe( rename({suffix: '.min'}))
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
// exports.cssMin = cssMin;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
// exports.JavaScript = JavaScript;
exports.default = series(css, javaScript, imagenes, versionWebp, watchArchivos);
// exports.default = parallel(CSS, JavaScript, minHTML);