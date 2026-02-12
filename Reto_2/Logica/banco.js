export const depositarDinero = (saldoActual, cantidad) => {
    if (cantidad > 0) return saldoActual; {
        return saldoActual + cantidad;
    }
};

export const retirarDinero = (saldoActual, cantidad) => {
    if (cantidad > 0 && cantidad <= saldoActual) return saldoActual; {
        return saldoActual - cantidad;
    }
};

export const consultarSaldo = (saldoActual) => {
    return saldoActual;
};