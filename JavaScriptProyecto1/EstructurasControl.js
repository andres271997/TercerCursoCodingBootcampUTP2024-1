/*************************************************************
 * Fecha y Hora de publicación: 14/07/2025 - 11:00 AM
 * Versión: 1.0
 * Autor: Ing(c) Andrés Andrade
 * Lenguaje: JavaScript
 * Versión ECMAScript: 6.0
 * Universidad Tecnológica de Pereira
 * Programa: Ingeniería de Sistemas y Computación
 * 
 * Descripción: Menú interactivo que permite al usuario:
 * 1. Adivinar un número aleatorio entre 0 y 99
 * 2. Calcular el factorial de un número con for y while
 * 3. Contar cuántas vocales distintas hay en una frase
 * 
 * Salvedad: No se validan caracteres especiales o letras en entradas numéricas.
 *************************************************************/
//Funcion que genera un numero aleatorio y pide al usuario que lo adivine

function adivinaNumero() {
    let numeroSecreto = Math.floor(Math.random() * 100);
    let intento;

    do {
        let entrada = prompt("Adivine el número (entre 0 y 99):");

        // Si presiona cancelar
        if (entrada === null) {
            alert("Juego cancelado.");
            return; // termina el juego
        }

        // Convertir a número
        intento = parseInt(entrada);

        // Validar si es un número válido
        if (isNaN(intento)) {
            alert("Entrada no válida. Intente de nuevo.");
            continue; // vuelve a pedir el número
        }

        if (intento < numeroSecreto) {
            alert("Muy bajo. Intente con un número más alto.");
        } else if (intento > numeroSecreto) {
            alert("Muy alto. Intente con un número más bajo.");
        } else {
            alert("¡Felicidades! Adivinaste el número correcto.");
        }

    } while (intento !== numeroSecreto);
}



//Funcion que calcula el factorial de un numero usando for y while
function calcularFactorial() {
    let numero = parseInt(prompt("Ingrese un numero entero positivo para calcualar su factorial:"));

    if (numero < 0 || isNaN(numero)) {
        alert("Por favor ingrese un numero valido positivo.");
        return;
    }

    //Factorial con for
    let factorialFor = 1;
    for (let i = 1; i <= numero; i++) {
        factorialFor *= i;
    }
    
    //Factorial con while
    let factorialWhile = 1;
    let j = 1;
    while (j <= numero) {
        factorialWhile *= j;
        j++;
    }
    alert(`Factorial con For: ${factorialFor}\NFactorial con while: ${factorialWhile}`);
}

//Funcion que cuenta cuantas  vocales distintas hay en una frase 
function contarVocales() {
    let frase = prompt("Ingrese una frase:");
    let vocales = new Set();

    for (let letra of frase.toLowerCase()) {
        if ("aeiou".includes(letra)) {
            vocales.add(letra);
        }
        
    }
    alert(`vocales encontradas: ${[...vocales].join(", ")}\nTotal de vocales distintas: ${vocales.size}`);

}

//Funcion que muentra el menu principal de esta seccion
function mostrarMenuControl() {
    let opcion;
    do {
        opcion = prompt(
            `*** MENU ESTRUCTURAS DE CONTROL ***
            1. Adivina el numero [0-99]
            2. Calculadora de factorial (FOR y WHILE)
            3. Contador de vocales distintas
            4. salir
            
            Seleccione una opcion:`);
        switch (opcion) {
            case "1":
                adivinaNumero();
                break;
            case "2":
                calcularFactorial();
                break;
            case "3":
                contarVocales();
                break;
            case "4":
                alert("¡gracias por usar el programa de estructuras de control");
                break;
            default:
                alert("opcion no valida. intente de nuevo");
        }
    } while (opcion !== "4");    
}
mostrarMenuControl();























