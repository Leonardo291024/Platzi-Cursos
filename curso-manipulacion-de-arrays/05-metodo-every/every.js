const nums =  [51, 50, 41, 209, 100, 133];

//Utilizando la estructura for:
let respuesta = true;
for(let i = 0; i < nums.length; i++){
    const element = nums[i];

    if(element >= 41){
        respuesta = false;
        break;
    }
}

//Utilizando el metodo some():
const respuesta2 = nums.every((element) => element >= 40);

console.log({
    respuesta,
    respuesta2
});