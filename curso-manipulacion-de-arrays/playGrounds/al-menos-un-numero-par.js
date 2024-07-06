//Tu reto es retornar true si dentro de array de números al menos uno es un número par, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:

/**
 * numbers: Un array de numeros. 
*/

/**
 * Ejemplo:
 * 
 * Input: [1, 3, 5, 7, 10, 11]
 * 
 * Output: true 
*/

function checkArray(numbers) {
    const checkNum = numbers.some((number) => number %2 === 0);
    console.log(checkNum);
}

checkArray([1, 3, 5, 7, 10, 11]);
checkArray([1, 3, 5]);
checkArray([])