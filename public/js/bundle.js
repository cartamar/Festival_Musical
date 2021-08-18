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

document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
    let ancho = window.innerWidth
    console.log(ancho);
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for( let i = 1; i <= 12 ; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //Funcion de monstrar imagen
        imagen.onclick = mostrarImagen;
        
        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
};

function mostrarImagen( e ) {
    const id = parseInt(e.target.dataset.imagenId);
    console.log(id); 
    
    const imagen = document.createElement('IMG');
    imagen.src = `/img/grande/${id}.webp`;
    
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //cuando se sa click cierra la imagen
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('bloquear-body')
    }

    //Boton para cerrar imagen
    const cerrarImagen = document.createElement('p');
    cerrarImagen.textContent = 'x';
    cerrarImagen.classList.add('btn-cerrar');
    overlay.appendChild(cerrarImagen);

    //Accion de cerrar imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
    };

    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay)
    body.classList.add('bloquear-body');
    
}