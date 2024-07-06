const letters = ["a", "b", "c"];

//Utilizando la estructura repetitiva for():
for(let i = 0; i < letters.length; i++){
    const element = letters[i];
    //console.log(element);
}

//Utilizando el metodo forEach():
letters.forEach(item => console.log(item));

//Utilizando el metodo forEach() para objetos:
const products = [
    { title: 'Burger', price: 121 },
    { title: 'Pizza', price: 20 },
    { title: 'Soda', price: 5 },
];

products.forEach(order => console.log(order.title));




