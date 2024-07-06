//Metodo join()

//Utilizando la estrucura for:
const elements = ["Hola", null, "como", "estas"];
const separador = "/";

let string1 = "";

for(let i = 0; i < elements.length; i++){
    const element = elements[i];

    if(i !== elements.length - 1){
        string1 += element + separador; 
    }else{
        string1 += element;
    }
}

//Utilizando el metodo join():
const string2 = elements.join("/");

console.log({
    string1,
    string2
});


//Metodo split();
const texto = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web."

console.log(texto.split(" "));
console.log(texto.split(","));
console.log(texto.split("Javascript"));
console.log(texto.split(" ", 3));
