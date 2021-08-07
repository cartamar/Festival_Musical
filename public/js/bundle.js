
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
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

    //Ostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay)
    body.classList.add('bloquear-body');
}