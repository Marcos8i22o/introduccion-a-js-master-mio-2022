/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $formulario = document.querySelector('form');
crearInputsCantidadIntegrantes($formulario);

function crearInputsCantidadIntegrantes($formulario){
    const $label = document.createElement('label');
    $label.textContent = "Ingrese la cantidad de integrantes de la familia: ";
    
    const $cantidadIntegrantes = document.createElement('input');
    $cantidadIntegrantes.type = "number";
    $cantidadIntegrantes.id = "cantidad-de-integrantes";

    $formulario.appendChild($label);
    $formulario.appendChild($cantidadIntegrantes);
}

    
}

