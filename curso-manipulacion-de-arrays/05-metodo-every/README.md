# Metodo every

**El metodo every() de los arrays consiste en retornar un valor logico, verdadero si todos los elementos almenos cumplen con la condicion establecida en la funcion callback y es INMUTABLE.**

## Este metodo recibe dos argumentos: 

- **La funcion que itera y evalua cada elemento del array hasta que todos los elemntos cumplan con la condicion especificada. Esta funcion recibe tres parametros:**
	- **El valor actual de el elemento iterado.**
	- **El indice de el elemento ietrado.**
	- **El array que se esta iterando.**
- **Un obejto al que pueda hacer referencia al contexto this en la funcion.**

```javascript
const otroArray = array.every(funtion(element, indice, array), thisArg);
```