// 2. Reto 2 – Módulo de operaciones bancarias
// Diseña un sistema que permita simular las siguientes operaciones:
// • Depositar dinero, retirar dinero y consultar saldo.
// Cada operación debe estar representada por una función diferente
// y el saldo debe mantenerse actualizado entre operaciones.
// Aplica ciclos para permitir múltiples operaciones hasta que el usuario decida salir.
// Utlizar condicionales y ciclos sin utilizar switch.

import { depositarDinero, retirarDinero, consultarSaldo } from './Logica/index.js';

let saldoActual = 0;

while (true) {
    const operacion = prompt('Seleccione una operación: 1. Depositar, 2. Retirar, 3. Consultar saldo, 4. Salir');

    if (operacion === '4') {
        console.log('Gracias por usar el sistema bancario. ¡Hasta luego!');
        break;
    }
    if (operacion === '1') {
        const monto = parseFloat(prompt('Ingresar el monto a depositar:'));
        saldoActual = depositarDinero(saldoActual, monto);
    } else if (operacion === '2') {
        const monto = parseFloat(prompt('Ingresar el monto a retirar:'));
        saldoActual = retirarDinero(saldoActual, monto);
    } else if (operacion === '3') {
        consultarSaldo(saldoActual);
    } else {
        console.log('Operación no válida. Por favor, seleccione una opción válida.');
    }
}