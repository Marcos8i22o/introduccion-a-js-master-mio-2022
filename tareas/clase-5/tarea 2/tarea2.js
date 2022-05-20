//TAREA: 
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $botonResultado = document.querySelector('#resultado');

$botonResultado.onclick = function () {
    const nombreUsuario = document.querySelector('#nombre-usuario').value;    
    mostrarDatosUsuario(nombreUsuario);
    cambiarMensajeDeBienvenida(nombreUsuario);

    return false;
}

function mostrarDatosUsuario (nombreUsuario) {
    
    const $form = document.querySelector('form');

    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    
    const $textoEnPantalla = document.createElement('h3');
    $textoEnPantalla.textContent = `${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} ${edadUsuario}`;
    $form.appendChild($textoEnPantalla);

}

function cambiarMensajeDeBienvenida(nombreUsuario) {
    document.querySelector('h1').textContent = `Bienvenido, ${nombreUsuario}!`
}