const words = ["spray", "elites", "limit", "apple", "exuberant"];
const newWords = [];

//Utilizando la estructura for:
for(let i=0; i< words.length; i++){
    const word = words[i];
    if (word.length >= 6){
        newWords.push(word);
    }
}

//Utilizando el metodo filter():
const newWords2 = words.filter(elemnt => elemnt.length >= 6);
console.log({
    newWords,
    newWords2
});

//Filtrar elementos a partir de un objeto: 
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

//filtra todas las ordenes que tengan la propiedad delivery como true.

const delivery = orders.filter ((order) => {
   return order.delivered
});

console.log(delivery);