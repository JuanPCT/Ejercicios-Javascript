/*
Ejercicio 1: Saludo simple
Crea un programa que utilice alert() para mostrar el mensaje: "¡Hola! ¡Bienvenido/a  a JavaScript!"
*/

alert("¡Hola! ¡Bienvenido/a  a JavaScript!");

/*
Ejercicio 2: Conversión a minúsculas
Solicita al usuario que ingrese una palabra o frase utilizando prompt(). Luego, muestra la entrada del usuario en minúsculas utilizando toLowerCase().
*/

var palabra = prompt("Ingrese una palabra o frase");
alert(palabra.toLowerCase());

/*
Ejercicio 3: Calculadora de edad
Pide al usuario su edad y el algoritmo debe responder si es mayor de edad o menor de edad;
*/

var edad = prompt("Ingrese su edad");
if (edad >= 18) {
    alert("Es mayor de edad");
} else {
    alert("Es menor de edad");
}

/*
Ejercicio 4: Verificación de contraseña
Solicita al usuario ingresar una contraseña utilizando prompt("Ingresa tu contraseña"). Si la contraseña es "secreto123", muestra un mensaje de acceso concedido con alert(). De lo contrario, muestra un mensaje de acceso denegado.
*/

var contraseña = prompt("Ingresa tu contraseña");

if(contraseña == "secreto123"){
    alert("Acceso concedido");
}else{
    alert("Acceso denegado");
}

/*
Ejercicio 5: Mensajes personalizados
Crea una función llamada mostrarMensaje que tome un parámetro nombre. Dentro de la función, utiliza alert() para mostrar: "¡Hola, [nombre]! Espero que estés disfrutando de JavaScript." Pide al usuario su nombre utilizando prompt() y llama a la función.
(onclick)
*/

function mostrarMensaje(nombre){
    alert("¡Hola, "+nombre+"! Espero que estés disfrutando de JavaScript.");
}

var nombre = prompt("Ingrese su nombre");
mostrarMensaje(nombre);

/*
Ejercicio 6: Decisión de beca
Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18
*/

var nombre = prompt("Ingrese su nombre");
var edad = prompt("Ingrese su edad");
var pais = prompt("Ingrese su pais");
var departamento = prompt("Ingrese su departamento");

if(pais == "canada" && departamento == "toronto" && edad >= 18){
    alert("Felicidades "+nombre+" usted ha ganado una beca");
}else{
    alert("Lo sentimos "+nombre+" usted no ha ganado una beca");
}

