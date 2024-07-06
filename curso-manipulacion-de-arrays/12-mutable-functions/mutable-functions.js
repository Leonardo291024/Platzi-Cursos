//Metodo push(): Agrega uno o varios elementos al final del array original.
const array1 = [1,2,3];
console.log(array1);
array1.push(4,5);
console.log(array1);



//Metodo unshift(): Agrega uno o varios elementos al inicio del array original.
const array2 = [3,4,5];
console.log(array2);
array2.unshift(1,2);
console.log(array2);


//Metodo pop(): Extrae el elemento final del array original. El metodo no recibe ningun argumento.
const array3 = ["pepe", "susana", "alejandro", "paulina"];
console.log(array3);
array3.pop();
console.log(array3);


//Metodo shift(): Extrae el elemento de el principio de el array original. No recibe ningun argumento.
const array4 = ["pepe", "susana", "alejandro", "paulina"];
console.log(array4);
array4.shift();
console.log(array4);


//Metodo splice(): Extrae uno o varios elementos del array original apartir del indice y los remplaza con otro elemento especificado como argumento. 
const array5 = ["pepe", "susana", "alejandro", "paulina"];
const elements = array5.splice(1,1,"marcos");
console.log(elements);
console.log(array5);

const array6 = ["pepe", "susana", "alejandro", "paulina"];
const elements2 = array6.splice(1,2,"Usuario","Usuario");
console.log(elements2);
console.log(array6);