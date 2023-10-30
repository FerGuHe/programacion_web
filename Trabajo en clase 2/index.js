//JavaScript: Funciones, Arreglos & Funciones
//1.1 Potencia de un numero 

/*function power(base, exponent) {
    return base ** exponent;
}
let resultado = power(4, 3); 

console.log(resultado);*/


//2. Identificar el numero mas grande.

/*function getLargerInt(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
let numeroMayor = getLargerInt(10, 5); 
console.log(numeroMayor);*/


//3. Secuencia de fibonacci.

/*function fibonacciSequence(limit) {
    let fibonacciSeries = [];
    if (limit >= 1) {
        fibonacciSeries.push(0);
    }
    if (limit >= 2) {
        fibonacciSeries.push(1);
    }
    for (let i = 2; i < limit; i++) {
        let nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        fibonacciSeries.push(nextFibonacci);
    }
    return fibonacciSeries;
}
let limit = 12; 
let resultado = fibonacciSequence(limit);
console.log(resultado); */


//4. NUmero promedio de los numero de la entreda.

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let average = sum / numbers.length;
    return average;
}
let numbers = [1, 2, 3, 4, 5,8,10,11]; 
let promedio = calculateAverage(numbers);
console.log(promedio); 





