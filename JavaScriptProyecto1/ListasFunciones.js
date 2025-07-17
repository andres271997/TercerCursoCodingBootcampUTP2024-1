/*************************************************************
 * Fecha y Hora de publicación: 14/07/2025 - 11:20 AM
 * Versión: 1.0
 * Autor: Ing(c) Andrés Andrade
 * Lenguaje: JavaScript
 * Versión ECMAScript: 6.0
 * Universidad Tecnológica de Pereira
 * Programa: Ingeniería de Sistemas y Computación
 * 
 * Descripción: Este archivo contiene funciones relacionadas
 * con el manejo de listas (arreglos):
 * 1. Encontrar el número mayor y menor
 * 2. Concatenar y ordenar listas
 * 3. Invertir una lista
 * 
 * Salvedad: Las funciones están diseñadas para ejecutarse
 * desde consola, sin interacción directa con el usuario.
 *************************************************************/

// 1. Función que encuentra el número mayor y menor de una lista
function encontrarMayorYMenor(lista) {
    // mayor: Variable que almacenará el número mayor
    // menor: Variable que almacenará el número menor
    let mayor = Math.max(...lista);
    let menor = Math.min(...lista);

    console.log("Lista:", lista);
    console.log("Número mayor:", mayor);
    console.log("Número menor:", menor);
}

// 2. Función que concatena dos listas y las ordena
function concatenarYOrdenarListas(lista1, lista2) {
    // listaUnida: Resultado de unir ambas listas
    let listaUnida = lista1.concat(lista2);

    // listaOrdenada: Lista unida, ordenada de menor a mayor
    let listaOrdenada = listaUnida.slice().sort((a, b) => a - b);

    console.log("Lista 1:", lista1);
    console.log("Lista 2:", lista2);
    console.log("Lista concatenada:", listaUnida);
    console.log("Lista ordenada:", listaOrdenada);
}

// 3. Función que invierte los elementos de una lista
function invertirLista(lista) {
    // listaInvertida: Copia invertida del arreglo
    let listaInvertida = lista.slice().reverse();

    console.log("Lista original:", lista);
    console.log("Lista invertida:", listaInvertida);
}

// -----------------------------------------
// LLAMADAS A LAS FUNCIONES PARA PRUEBAS
// -----------------------------------------

// Prueba para mayor y menor
encontrarMayorYMenor([5, 8, 3, 12, 1, 9]);

// Prueba para concatenar y ordenar
concatenarYOrdenarListas([4, 1, 7], [10, 3, 2]);

// Prueba para invertir lista
invertirLista([100, 200, 300, 400]);
