//Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

//Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:
/**
 * array: Un array de strings. 
*/

/**
 * Ejemplo:
 * 
 * Input: ['amor', 'sol', 'piedra', 'día']
 * 
 * Output: [ 'amor', 'piedra' ] 
*/

function filterByLength(arr){
    const filterWords = arr.filter(word => word.length >= 4);
    console.log(filterWords);
}

filterByLength(['amor', 'sol', 'piedra', 'día']);