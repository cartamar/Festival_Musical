document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navegacionFija();
});

function scrollNav() {
    const enlaces = document.querySelectorAll('.nevagacion-principal a');

    enlaces.forEach( function(enlaces) {
        console.log(enlaces);
        enlaces.addEventListener('click', function(e) {
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        })
    });
};

function navegacionFija() {

    const barra = document.querySelector('.header');

    //Registar el interseccion observer

    const observer =new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        }else {
            barra.classList.add('fijo');
        }
    })

    //Elemento a observar
    observer.observe(document.querySelector('.contenido-presentacion'));
};

//o BiquadFilterNode, para mayor facilidad en el CSS del html
// html {
//     scroll-behavior: smooth;
// }
