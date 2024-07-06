//Metodo flat
const matrix = [[1,2,3], [4,5,6], [7,8,9]];

//Usando la estructura for:
const rta1 = [];

for(let i = 0; i < matrix.length; i++){
    const array = matrix[i];
    
    for(let j = 0; j < array.length; j++){
        rta1.push(matrix[i][j])
    }
}


//Utilizando el metodo flat:
const rta2 = matrix.flat(3);
console.log({
    rta1,
    rta2
});