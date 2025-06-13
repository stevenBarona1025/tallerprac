// Función para calcular el factorial de un número
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

// Genera un número aleatorio entre 1 y 10
const numero = Math.floor(Math.random() * 10) + 1;

// Calcula su factorial
const resultado = factorial(numero);

// Formatea el mensaje
console.log(`\n\x1b[36m★ Calculadora de Factorial ★\x1b[0m`);
console.log(`Número generado: \x1b[33m${numero}\x1b[0m`);
console.log(`Factorial de ${numero}: \x1b[32m${resultado}\x1b[0m`);
console.log("\n¡Prueba a ejecutarlo de nuevo!");
