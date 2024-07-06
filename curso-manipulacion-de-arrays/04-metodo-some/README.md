# Metodo some

**El metodo some() de los arrays consiste en retornar un valor logico, verdadero si existe almenos un elemento que cumple la condiion establecida en la funcion callback y es INMUTABLE.**

## Este metodo recibe dos argumentos: 

- **La funcion que itera y evalua cada elemento del array hasta que almenos uno cumpla con la ondicion especificada. Esta funcion recibe tres parametros:**
	- **El valor actual de el elemento iterado.**
	- **El indice de el elemento ietrado.**
	- **El array que se esta iterando.**
- **Un obejto al que pueda hacer referencia al contexto this en la funcion.**

```javascript
const otroArray = array.some(funtion(element, indice, array), thisArg);
```