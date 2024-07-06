//Ordenamiento de palabras: Si ordenas un array de palabras, puede ordenar correctamente por el valor Unicode de los caracteres de la palabra.
const words = ["réservé", "premier", "communiqué", "café", "adieu", "éclair", "banana"];
console.log(words);
words.sort();
console.log(words); 


//Ordenamiento de numeros: Si ordenas un array de numeros provoca un ordenamiento inesperado porque ordena por el valor Unicode de los caracteres de numero.
const numbers = [1, 30, 4, 21, 100000];
console.log(numbers);
numbers.sort();
console.log(numbers);

//Para arreglar este omportamiento, es necesario utilizar la siguiente funcion comparativa:
//Forma Ascendente:
const numbers2 = [1, 30, 4, 21, 100000];
console.log(numbers2);
numbers2.sort((a, b) => a - b);
console.log(numbers2);

//Forma Descendente:
const numbers3 = [1, 30, 4, 21, 100000];
console.log(numbers3);
numbers3.sort((a, b) => b - a);
console.log(numbers3);


//Ordenamiento de objetos por su propiedad: Cuando necesites ordenar un array de objetos, compara una propiedad de tipo numerica de la misma forma que el ordenamiento de numeros, ya sea de manera Ascendente o Descendente.
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

console.log(orders);
orders.sort((a, b) => a.total - b.total);
console.log(orders);