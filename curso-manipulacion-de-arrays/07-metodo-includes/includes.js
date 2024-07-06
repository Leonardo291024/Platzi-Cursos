const fruits = ["manzana", "pera", "piña"];

//Utilizando la estructura for:
let respuesta = false;
for(let i = 0; i < fruits.length; i++){
    const element = fruits[i];

    if(element === "khja"){
        respuesta = true;
        break;
    }
}

//Utilizando el metodo includes():
    //Utilizando strings:
const saludo = "Hola Mundo"
console.log(saludo.includes("Mundo"));

    //Utilizando arrays:
console.log(fruits.includes("pera"));

console.log(respuesta);
