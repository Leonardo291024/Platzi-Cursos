//Utilizando el metodo reduce para crear un objeto de frecuencias:
const items = [5,6,7,6,5,7,7,8];

const frecuencias = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }

    return obj;
}, {});

console.log(frecuencias);