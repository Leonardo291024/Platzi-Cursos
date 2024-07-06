# Metodo filter

**El metodo filter() de los arrays consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una funcion callback que indica la condiccion a cumplir. Si la condicion se cumple, retornara el elemento completo y es INMUTABLE.**

## Este metodo recibe dos argumentos: 

- **La funcion que itera y evalua si cada elemento del array ya sea un numero, un string, objeto u otro array cumple con la condicion especificada. Esta funcion utiliza tres parametros:**
	- **El valor de el elemento iterado.**
	- **El indice de el elemento iterado.**
	- **El array que se esta iterando.**
- **Un objeto al cual se pueda hacer referencia al contexto this.**

```javascript
const otroArray = array.filter(funtion(element, indice, array), thisArg);
```