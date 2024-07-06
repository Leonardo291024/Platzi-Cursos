const numbers = [7,3,6,9,2,4];

//Utilizando la estructura for:
let suma = 0;

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];

    suma += element;
}

//Utlizando el metod reduce():
const suma2 = numbers.reduce((acumulador, element) => {
    return acumulador += element;
}, 0);

console.log({
    suma,
    suma2
});