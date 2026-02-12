// Determina si el estudiante aprobó o reprobó según su promedio
export const determinarResultado = (promedio) => {
    return promedio >= 3.0 ? "Aprobado" : "Reprobado";
}