//Tienes un array de números y tu reto es retornar la suma de todos los valores en él.

//Para solucionarlo vas a encontrar una función llamada calcSum que recibe un parámetro de entrada:
/**
 * numbers: Un array de Numeros. 
*/

/**
 * Ejempl: 
 * 
 * Input: [2, 4, 8]
 * 
 * Output: 14 
*/

function calcSum(numbers){
    const suma = numbers.reduce((acumulador, element) => {
       return acumulador += element
    }, 0);
    console.log(suma);
}

calcSum([2, 4, 8]);

