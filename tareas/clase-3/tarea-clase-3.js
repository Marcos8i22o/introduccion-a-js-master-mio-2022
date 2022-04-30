// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


const miNombre = 'Marcos';
const nombreMiPapa = 'Carlos'
let tuNombre = prompt ("¿Cómo te llamas?");

if (tuNombre === miNombre) {
    console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}`);
}else if (tuNombre === nombreMiPapa) {
    console.log('Hola, te llamás igual que mi papá');
}else{
    console.log(`Hola ${tuNombre}`);
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const miEdad = 36;
let tuEdad = Number(prompt("¿Cuántos años tenés?"));

if (tuEdad < miEdad) {
    console.log("Sos más chico que yo");
}else if (tuEdad === miEdad) {
    console.log("Tenemos la misma edad");
}else{
    console.log("Sos más grande que yo");
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const edadMinima = 18;
let respuesta = prompt("Hola, ¿tenés DNI?");

if(respuesta.toLowerCase() === 'si'){
    let tuEdad = Number(prompt("¿Cuántos años tenés?"));
    if (tuEdad > edadMinima) {
        console.log("Podes pasar al bar");
    }else{
        console.log("No podes pasar al bar");
    }
}else if(respuesta.toLowerCase() === 'no') {
    console.log("No podes pasar al bar");
}else{
    console.log("Perdón, no entendí la respuesta");
}
