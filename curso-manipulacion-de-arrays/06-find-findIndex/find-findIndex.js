const nums = [1, 30, 41, 29, 50, 60];

//Utilizando la estructura for:
let respuesta = undefined;
for(let i = 0; i < nums.length; i++){
    const element = nums[i];

    if(element >= 40){
        respuesta = element;
        break;
    }
}

//Utilizando el metodo find() y findIndex():
const respuesta2 = nums.find((element) => element >= 40);
const respuesta3 = nums.findIndex((element) => element >= 40);

console.log({
    respuesta,
    respuesta2,
    respuesta3
});