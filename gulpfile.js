const {series, parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-dart-sass');


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

function watchArchivos () {
     watch('src/scss/app.scss', css);
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
exports.watchArchivos = watchArchivos;
// exports.JavaScript = JavaScript;
// //exports.default = series(CSS, JavaScript, minHTML);
// exports.default = parallel(CSS, JavaScript, minHTML);