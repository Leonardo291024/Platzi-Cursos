# Metodo find y findIndex

**El metodo find() y findIndex consiste en encontrar el primer elemento de un array que cumpla con la condicion especificada en la funcion.**

**En el caso de find retornara el elemento completo, si cumple con la condicion, caso ontrario retornara undefined.**

**El metodo findIndex retornara el indice del elemento encontrado, caso contrario retronara -1.**

## Estos metodos reciben dos argumentos: 

- **La funcion que itera y evalua cada elemento del array hasta que encuentre uno que cumpla con la ondicion especificada. Esta funcion recibe tres parametros:**
	- **El valor actual de el elemento iterado.**
	- **El indice de el elemento ietrado.**
	- **El array que se esta iterando.**
- **Un obejto al que pueda hacer referencia al contexto this en la funcion.**

```javascript
array.find(funtion(element, indice, array), thisArg);
array.findIndex(funtion(element, indice, array), thisArg);
```