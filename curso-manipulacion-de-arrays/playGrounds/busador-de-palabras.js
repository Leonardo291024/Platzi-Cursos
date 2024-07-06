//Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado.

//Para solucionarlo vas a encontrar una función llamada filterByTerm que recibe los siguientes parámetros de entrada:
/**
 * array: Un array de strigs con palabras.
 * term: Un string con el término a buscar.
*/

/**
 * Ejemplo:
 * 
 * Input: ["ana", "santi", "nico", "anastasia"]
 * Termino: "ana"
 * Output:  ["ana", "anastasia"] 
*/

function filterByTerm(array, term){
    let newArray = [];

    for(let i = 0; i < array.length; i++){
        const element = array[i];

        if(element.includes(term)){
            newArray.push(element);
        }
    }

    console.log(newArray);
}

filterByTerm(["ana", "santi", "nico", "anastasia"], "ana");