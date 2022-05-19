/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) 
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente 
el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregarIntegrante = document.querySelector('#boton-agregar-integrante');

$botonAgregarIntegrante.onclick = function(){
    agregarIntegrante();
}

function agregarIntegrante(){
    const $divIntegrantes = document.querySelector('#integrantes');

    const $labelIntegrante = document.createElement('label');
    $labelIntegrante.textContent = "Ingrese su sueldo anual: ";

    const $inputIntegrante = document.createElement('input');
    $inputIntegrante.type = "number";
    $inputIntegrante.className = "sueldos-anuales";

    const $hr = document.createElement('hr');

    $divIntegrantes.appendChild($labelIntegrante);
    $divIntegrantes.appendChild($inputIntegrante);
    $divIntegrantes.appendChild($hr);
}
