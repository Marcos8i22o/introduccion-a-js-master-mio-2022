//TAREA: 
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonAgregar = document.querySelector('#agregar-clases');
const $botonCalcularTiempoTotal = document.querySelector('#duracion-total-clases');
let acumuladorTiempo = [0,0,0];

$botonAgregar.onclick = function () {

    $botonAgregar.disabled = true;
    const numeroDeClases = Number(document.querySelector('#cantidad-de-clases').value);
    agregarClases(numeroDeClases);

    $botonCalcularTiempoTotal.onclick = function () {

        guardarTiempo(acumuladorTiempo,numeroDeClases);
        convertirSegundosAMinutos(acumuladorTiempo);
        convertirMinutosAHoras(acumuladorTiempo);
        resultado(acumuladorTiempo);
        resetear();
        
        acumuladorTiempo = [0,0,0];
    }

}
    


function agregarClases(numeroDeClases){
    
    for(let i = 0; i < numeroDeClases; i++){
        crearInputs(i);
    }    

}

function crearInputs (clase) {
    
    const $clases = document.querySelector('#clases');

    const $div = document.createElement('div');
    const $etiqueta = document.createElement('label');
    const $inputHora = document.createElement('input');
    const $inputMinutos = document.createElement('input');
    const $inputSegundos = document.createElement('input');

    $inputHora.type = "number";
    $inputMinutos.type = "number";
    $inputSegundos.type = "number";

    $inputHora.className = "horas";
    $inputMinutos.className = "minutos";
    $inputSegundos.className = "segundos";

    $inputHora.placeholder = "Ingrese hora/s"
    $inputMinutos.placeholder = "Ingrese minuto/s";
    $inputSegundos.placeholder = "Ingrese segundo/s";

    $etiqueta.textContent = `Clase ${clase+1}: `

    $div.appendChild($etiqueta);
    $div.appendChild($inputHora);
    $div.appendChild($inputMinutos);
    $div.appendChild($inputSegundos);

    $clases.appendChild($div);
}

function guardarTiempo(acumuladorTiempo,numeroDeClases){
    const nodeListSegundos = document.querySelectorAll('.segundos');
    const nodeListMinutos = document.querySelectorAll('.minutos');
    const nodeListHoras = document.querySelectorAll('.horas');

    for(let i = 0; i < numeroDeClases; i++){
        acumuladorTiempo[2] += Number(nodeListSegundos[i].value);
        acumuladorTiempo[1] += Number(nodeListMinutos[i].value);
        acumuladorTiempo[0] += Number(nodeListHoras[i].value);
    }

    return acumuladorTiempo;
}

function convertirSegundosAMinutos(acumuladorTiempo) {
    while (acumuladorTiempo[2] >= 60) {
        acumuladorTiempo[2] -= 60;
        acumuladorTiempo[1] += 1;
    }
     
    return acumuladorTiempo;
}

function convertirMinutosAHoras(acumuladorTiempo){
    while (acumuladorTiempo[1] >= 60) {
        acumuladorTiempo[1] -= 60;
        acumuladorTiempo[0] += 1;
    }

    return acumuladorTiempo;
}

function resultado(acumuladorTiempo) {
    const $resultado = document.querySelector('#texto-a-mostrar');
    $resultado.textContent = `La duración total de las clases es: ${acumuladorTiempo[0]} horas ${acumuladorTiempo[1]} minutos ${acumuladorTiempo[2]} segundos`;
}

function resetear() {
    const $clases = document.querySelector('#clases');
    $clases.remove()
    $botonAgregar.disabled = false;
}