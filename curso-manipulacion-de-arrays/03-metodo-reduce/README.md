# Metodo reduce

**El metodo reduce() de los arrays consiste en retornar un solo valor de el array iterado mediante una funcion callback que indica de que manera itera cada elemento para reducirlo y es INMUTABLE.**

## Este metodo recibe dos argumentos: 

- **La funcion que itera y reduce el elemento del array. Esta funcion utiliza cuatro parametros:**
	- **El valor acumulado por la funcion.**
	- **El valor actual de el elemento iterado.**
	- **El indice de el elemento ietrado.**
	- **El array que se esta iterando.**
- **El valor inicial que utilizara como argumento la funcion. Si no se especifica, en la primera iteracion, el valor inicial sera el primer elemento del array y no ejecuta la funcion.**

```javascript
const otroArray = array.reduce(funtion(acumulador,element, indice, array), valorInicial);
```

# Metodo reduce reloaded:

**El metodo reduce() tambien podemos utilizarlo para crear un objeto con frecuencia de cada elemento de un array, es decir cuantas veces aparece.**

## Objeto de frecuencias:

**Para obtener un objeto de frecuencias de cada elemento de un array es necesario tener presente las siguientes concideraciones.**

- **Establecer un objeto vacio como valor inicial del metodo reduce().**
- **El objeto vacio tambien sera nuestro acumulador.**
- **Verificar si el elemento ya existe en nuestro objeto de frecuencias.**
- **Si no existe, creamos la propiedad refernete al elemento del array y la inicializamos en 1.**
- **Si ya existe solamente debemos umentar en una unidad la propiedad de nuestro objeto referente al el elemento.**
- **Finalmente, debes retornar el obejto dentro de la funcion del elemento reduce.**

```javascript
const items = [5,6,7,6,5,7,7,8];
//El objeto de frecuencias sera el siguiente:

/*
    {
        5: 2,
        6: 2,
        7: 3,
        8: 1
    }
*/
```