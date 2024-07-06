# Metodo map

**El metodo map() de los arrays consiste en crear un nuevo array a partir de los elementos originales transformados mediante una funcion callback y es INMUTABLE.**

## Este metodo recibe dos argumentos: 

- **La funcion que itera y transforma cada elemento del array ya sea un numero, un string, objeto u otro array. Esta funcion utiliza tres parametros:**
	- **El valor de el elemento iterado.**
	- **El indice de el elemento iterado.**
	- **El array que se esta iterando.**
- **Un objeto al cual se pueda hacer referencia al contexto this.**

```javascript
const otroArray = array.map(funtion(element, indice, array), thisArg);
```