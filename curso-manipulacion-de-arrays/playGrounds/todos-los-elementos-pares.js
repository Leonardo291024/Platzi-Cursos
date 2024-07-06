//Tu reto es retornar true si dentro de array de números todos son pares, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:

/**
 * numbers: Un array de numeros. 
*/

/**
 * Ejemplo:
 * 
 * Input: [2, 4, 6, 8, 10]
 * 
 * Output: true 
*/


function checkArray(numbers){
    if(numbers.length === 0){
        console.log(false); 
        return
    } 

    const checNumbers = numbers.every((number) => number %2 === 0);
    console.log(checNumbers);
}

checkArray([2, 4, 6, 8, 10]);
checkArray([2, 4, 6, 8, 11]);
checkArray([]);