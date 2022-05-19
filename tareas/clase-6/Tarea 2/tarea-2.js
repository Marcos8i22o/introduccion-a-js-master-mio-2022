/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) 
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente 
el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregarIntegrante = document.querySelector('#boton-agregar-integrante');
const $botonQuitarIntegrante = document.querySelector('#boton-quitar-integrante')
const $botonCalcular = document.querySelector('#boton-calcular');

$botonAgregarIntegrante.onclick = function(){
    agregarIntegrante();
}

/*$botonQuitarIntegrante.onclick = function(){

}
*/



$botonCalcular.onclick = function(){
    const nodeListSalarios = document.querySelectorAll('.sueldos-anuales');
    
    const mayorSalarioAnual = calcularMayorSalario(nodeListSalarios);
    const menorSalarioAnual = calcularMenorSalario(nodeListSalarios);
    const salarioAnualPromedio = calcularSalarioAnualPromedio(nodeListSalarios);
    const salarioMensualPromedio = calcularSalarioMensualPromedio(nodeListSalarios);
    //mostrarResultados
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

function calcularMayorSalario(salarios){
    let maximo = Number(salarios[0].value);

    for(let i = 0; i < salarios.length; i++){
        let salario = Number(salarios[i].value);
        
        if(salario > maximo){
            maximo = salario;
        }
    }

    return maximo;
}

function calcularMenorSalario(salarios){
    let minimo = Number(salarios[0].value);

    for(let i = 0; i < salarios.length; i++){
        let salario = Number(salarios[i].value);
        
        if(salario < minimo){
            minimo = salario;
        }
    }

    return minimo;
}

function calcularSalarioAnualPromedio(salarios){
    let acumulador = 0;

    for(let i = 0; i < salarios.length; i++){
        acumulador += Number(salarios[i].value);
    }

    return acumulador / salarios.length;
}

function calcularSalarioMensualPromedio(salarios){
    const MESES_EN_EL_ANIO = 12;
    let acumulador = 0;

    for(let i = 0; i < salarios.length; i++){
        let salarioMensual = Number(salarios[i].value) / MESES_EN_EL_ANIO;
        acumulador += salarioMensual;
    }

    return acumulador / salarios.length;
}
