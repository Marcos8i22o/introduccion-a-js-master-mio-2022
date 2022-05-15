//TAREA: 
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


const $botonCalcularTiempoTotal = document.querySelector('#duracion-total-clases');
const acumuladorTiempo = [0,0,0];

$botonCalcularTiempoTotal.onclick = function () {
    guardarTiempo(acumuladorTiempo);
    convertirSegundosAMinutos(acumuladorTiempo);
    convertirMinutosAHoras(acumuladorTiempo);
    resultado(acumuladorTiempo);
}

function guardarTiempo(acumuladorTiempo){
    const nodeListSegundos = document.querySelectorAll('.segundos');
    const nodeListMinutos = document.querySelectorAll('.minutos');
    const nodeListHoras = document.querySelectorAll('.horas');
    const CANTIDAD_CLASES = 5;

    for(let i = 0; i < CANTIDAD_CLASES; i++){
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

