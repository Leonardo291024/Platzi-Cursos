//Metodo concat():


const numbers1 = [1,2,3,4];
const numbers2 = [5,6,7,8];

let newArray1 = [];

//Utilizando la estructura for:
for(let i = 0; i < numbers1.length; i++){
    const element = numbers1[i];

    newArray1.push(element, numbers2[i]);
}

//Utilizando el spread operator (...):
let newArray2 = [...numbers1, ...numbers2];

//Utilizando el metodo concat:
let newArray3 = numbers1.concat(numbers2);

console.log({
    newArray1, 
    newArray2,
    newArray3
});


