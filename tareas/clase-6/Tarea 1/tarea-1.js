/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $formulario = document.querySelector('form');
const $botonCalcular = document.querySelector('#calcular');
crearInputsCantidadIntegrantes($formulario);
crearBotonAceptar($formulario);
const $botonAceptar = document.querySelector('#boton-aceptar');


function crearInputsCantidadIntegrantes($formulario){
    const $totalIntegrantes = document.querySelector('#total-integrantes');

    const $label = document.createElement('label');
    $label.textContent = "Ingrese la cantidad de integrantes de la familia: ";
    
    const $cantidadIntegrantes = document.createElement('input');
    $cantidadIntegrantes.type = "number";
    $cantidadIntegrantes.id = "cantidad-de-integrantes";

    $totalIntegrantes.appendChild($label);
    $totalIntegrantes.appendChild($cantidadIntegrantes);

    $formulario.appendChild($totalIntegrantes);
}

function crearBotonAceptar($form){
    const $totalIntegrantes = document.querySelector('#total-integrantes');
    
    const $boton = document.createElement('button');
    $boton.type = "button";
    $boton.id = "boton-aceptar";
    $boton.textContent = "Aceptar";

    $totalIntegrantes.appendChild($boton);
    $form.appendChild($totalIntegrantes);
}

function crearInputsEdades($formulario,cantidadIntegrantes){
    for(let i = 0; i < cantidadIntegrantes; i++){
        
        const $div = document.createElement('div');
        
        const $label = document.createElement('label');
        $label.textContent = `Integrante nº: ${i+1} `;

        const $inputEdad = document.createElement('input');
        $inputEdad.type = "number";
        $inputEdad.className = "edades-integrantes";

        $div.appendChild($label);
        $div.appendChild($inputEdad);

        $formulario.appendChild($div);
    }
}

$botonAceptar.onclick = function() {
    const cantidadIntegrantes = Number(document.querySelector('#cantidad-de-integrantes').value);
    crearInputsEdades($formulario,cantidadIntegrantes);
}

$botonCalcular.onclick = function() {
    const nodeListEdades = document.querySelectorAll('.edades-integrantes');
    const mayorEdad = calcularMayorEdad(nodeListEdades);
    const menorEdad = calcularMenorEdad(nodeListEdades);
    const promedioEdades = calcularPromedioEdades(nodeListEdades);
}

function calcularMayorEdad (edades) {
    let mayorEdad = 0;
    for(let i = 0; i < edades.length; i++){
        let edadIntegrante = Number(edades[i].value);
        
        if(edadIntegrante > mayorEdad){
            mayorEdad = edadIntegrante;
        }
    }

    return mayorEdad;
}

function calcularMenorEdad (edades) {
    let menorEdad = Number(edades[0].value);

    for(let i = 1; i < edades.length; i++){
        let edadIntegrante = Number(edades[i].value);
        
        if(edadIntegrante < menorEdad){
            menorEdad = edadIntegrante;
        }
    }

    return menorEdad;
}

function calcularPromedioEdades (edades) {
    let acumulador = 0;

    for(let i = 0; i < edades.length; i++){
        acumulador += Number(edades[i].value);
    }

    return acumulador / edades.length;
}
