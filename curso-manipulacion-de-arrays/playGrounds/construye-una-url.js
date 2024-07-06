//En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-).

//Para solucionarlo vas a encontrar una función llamada parseToURL que recibe un parámetro de entrada:
/**
 * title: Un string 
*/

/**
 * Ejemplo: 
 * 
 * Input: "La forma de correr Python"
 * 
 * Output: "la-forma-de-correr-python" 
*/

function parseToURL(title){
    const url = title.split(" ").join("-").toLowerCase();

    console.log(url);
}

parseToURL("La forma de correr Python")