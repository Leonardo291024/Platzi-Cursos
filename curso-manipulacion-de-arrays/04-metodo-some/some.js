const nums = [2,4,6,7];

//Utilizando la estructura for:
let respuesta = false;
for(let i = 0; i < nums.length; i++){
    const element = nums[i];

    if(element %2 === 0){
        respuesta = true;
        break;
    }
}

//Utilizando el metodo some():
const respuesta2 = nums.some((element) => element %2 === 0);

console.log({
    respuesta,
    respuesta2
});