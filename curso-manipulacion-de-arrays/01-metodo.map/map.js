const nums = [2, 4, 6];

//Utilizando la estructura repetitiva for():
let newArray = [];
let multiplicacion;

for(let i = 0; i < nums.length; i++){
    const element = nums[i];
    newArray.push(element * 2)
}

console.log(newArray);

//Utilizando el metodo map():
const rta = nums.map(element => element * 2);
console.log(rta);

//Utilizando el metodo map() con objetos:
const products = [
    { title: 'Burger', price: 121 },
    { title: 'Pizza', price: 20 },
    { title: 'Soda', price: 5 },
];

const rta2 = products.map(order => order.price * 2);
console.log(rta2);

//Transformando objetos dentro de un array:
const products2 = [
    { title: 'Burger', price: 121 },
    { title: 'Pizza', price: 20 },
    { title: 'Soda', price: 5 },
];

const rta3 = products2.map((order) => {
    return {
        ...order,
        description: "Delicius",
        tax: 0.19
    }
});

console.log(rta3);
