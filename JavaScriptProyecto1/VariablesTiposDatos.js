/*************************************************************
 * Fecha y Hora de publicación: 14/07/2025 - 10:30 AM
 * Versión: 1.0
 * Autor: Ing(c) Andrés Andrade
 * Lenguaje: JavaScript
 * Versión ECMAScript: 6.0
 * Universidad Tecnológica de Pereira
 * Programa: Ingeniería de Sistemas y Computación
 * 
 * Descripción: Menú interactivo con funciones para:
 * 1. Conversión Celsius a Fahrenheit
 * 2. Cálculo del IMC
 * 3. Generador de nombre de usuario
 * 4. Cálculo de número de Fibonacci
 * 
 * Salvedad: Solo se realizan las funciones indicadas en el problema.
 *************************************************************/
// Funcion que convierte grados celcius  fahrenheit
function convertirCelsiusAFahrenheit() {
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
    let fahrenheit = (9 / 5 * celsius) + 32;

    alert(`${celsius} C equivalen a ${fahrenheit.toFixed(2)} f`);

}

// Funcion para calcular  el IMC
function calcularIMC() {
    let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
    let altura = parseFloat(prompt("Ingrese su altura en metros:"));
    let imc = peso / (altura * altura);

    alert(`su IMC es : ${imc.toFixed(2)}`);

}

//Funcion que genera un nombre de usuario con nombre, apellido y año de nacimiento
function generarNombreUsuario() {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let anioNacimiento = prompt("Ingrese su año de nacimiento:");

    let nombreUsuario = nombre + apellido + anioNacimiento;

    alert(`su nombre de usuario es : ${nombreUsuario}`);

}

function calcularFibonacci() {
    let n = parseInt(prompt("Ingrese el numero de terminos de la serie fibonaci que desea ver :"));

    let a = 0, b = 1, temp;
    let resultado = "Serie de fibonacci: 0";

    for (let i = 1; i < n; i++){
        resultado += " " + b;
        temp = a + b;
        a = b;
        b = temp;
    }
    alert(resultado);
}

//Funcion que muestra el menu principal 
function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(
            `*** MENU PRINCIPAL ***
        1. Convertir celsius a fahrenheit
        2. Calular  IMC 
        3. Generar nombre del usuario
        4. Calular numero  Fibonacci
        5. Salir

        Seleccione una opcion:`);
        switch (opcion) {
            case "1":
                convertirCelsiusAFahrenheit();
                break;
            case "2":
                calcularIMC();
                break;
            case "3":
                generarNombreUsuario();
                break;
            case "4":
                calcularFibonacci();
                break;
            case "5":
                alert("¡gracias por usar el programa!");
                break;
            default:
                alert("Opcion no valida intente de nuevo.");
        }
    } while (opcion !== "5");

}

mostrarMenu();