// 1. Sistema de cálculo académico
// Crea un programa modularizado que permita registrar el nombre y tres notas de un estudiante.
// Debe cumplir con las siguientes funciones:
// • Una función para calcular el promedio.
// • Una función para determinar si aprueba o reprueba.
// • Una función principal que muestre el mensaje final con nombre y resultado.
// Aplica retorno de valores y estructuras condicionales.

// Importamos las funciones necesarias desde el módulo de lógica
import { calcularPromedio, determinarResultado } from "./logica/index.js";

// Función principal para mostrar los resultados del estudiante
function mostrarResultadosEstudiante(nombre, nota1, nota2, nota3) {
    // Calculamos el promedio utilizando la función importada
    const promedio = calcularPromedio(nota1, nota2, nota3);
    // Determinamos el resultado utilizando la función importada
    const resultado = determinarResultado(promedio);

    // Mostramos el mensaje final con el nombre del estudiante, su promedio y su resultado
    console.log("--------------------------------------------------");
    console.log(`El estudiante: ${nombre}`);
    console.log(`Promedio: ${promedio.toFixed(2)}`);
    console.log(`Resultado: ${resultado}`);
}

// Ejemplo de uso de la función principal
mostrarResultadosEstudiante("Juan Pérez", 4.5, 3.0, 2.5);
mostrarResultadosEstudiante("María Gómez", 2.0, 2.5, 3.0);
mostrarResultadosEstudiante("Carlos López", 2.0, 2.5, 2.0);