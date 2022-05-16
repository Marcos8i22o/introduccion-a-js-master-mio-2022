//TAREA: 
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto
//    "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto 
//    "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto 
//    "El número más frecuente es..."

const $body = document.querySelector('body');
crearListaOrdenada($body);
crearListaRandom($body);

function crearListaOrdenada($body){
    const $listaOrdenada = document.createElement('ol');
    $body.appendChild($listaOrdenada);

    return $body;
}

function crearListaRandom ($body) {
    const MAX = 1000;
    const TOPE_ITEMS = 20;
    const $listaOrdenada = document.querySelector('ol');

    for (let i =  0; i < TOPE_ITEMS; i++) {
        let $li = document.createElement('li');
        $li.textContent = Math.floor(Math.random() * MAX);
        $listaOrdenada.appendChild($li);
    }
}