const {series, parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-dart-sass');
const imagemin = require('gulp-imagemin')


function css( ){
     return src('src/scss/app.scss')
     .pipe( sass() )
     .pipe( dest('./public/css'));
};

function cssMin( ){
     return src('src/scss/app.scss')
     .pipe( sass({
          outputStyle: 'compressed'
     }) )
     .pipe( dest('./public/css'));
};

function imagenes() {
     return src('src/img/**/*')
          .pipe(imagemin())
          .pipe(dest('./public/img'))
}

function watchArchivos () {
     watch('src/scss/**/*.scss', css);
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
// //exports.default = series(CSS, JavaScript, minHTML);
// exports.default = parallel(CSS, JavaScript, minHTML);