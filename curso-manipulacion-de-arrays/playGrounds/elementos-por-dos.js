//Tienes un array de numeros, tu reto es retornar los numeros de ese array multiplicados por 2.

//Para solucionarlo vas a encontar una funcion llamada multiplyElements que reciben un parametro de entrada:

/**
 * array: Un array de numeros. 
*/

/**
 * Ejemplo:
 * 
 * input: [2, 4, 5, 6, 8]
 * 
 * Output: [4, 8, 10, 12, 16]
*/

function multiplyElements(nums){
    const multiply = nums.map(numero => numero * 2);
    console.log(multiply);
}

multiplyElements([2, 4, 5, 6, 8])