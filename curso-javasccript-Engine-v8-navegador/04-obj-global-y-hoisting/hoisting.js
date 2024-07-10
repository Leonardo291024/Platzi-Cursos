//Hoisting en variables declaradas con var
console.log(nombre); //undefined
var nombre = "Luis"

var nombre2 = undefined;
console.log(nombre2); //undefined
nombre2 = "Andrea";


//Hoisting en variables declaradas con let y const
let nombre3 = "Mario";
nombre3 = "Paco";
console.log(nombre3);

const nombre4 = "Maria";
nombre4 = 23;
console.log(nombre4); //TypeError: Assignment to constant variable


//Hoisting en funciones
saludo()
function saludo(){
    console.log("helow world");
}