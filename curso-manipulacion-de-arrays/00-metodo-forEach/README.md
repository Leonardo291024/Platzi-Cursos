# Metodo ForEach

**El metodo forEach() de los arrays consiste en ejecutar una funcion callback para cada uno de los elementos iterados.**

## Este metodo recibe dos argumentos: 

- **La funcion que itera cada elemento del array. Esta funcion utiliza tres parametros:**
	- **El valor de el elemento iterado.**
	- **El indice de el elemento iterado.**
	- **El array que se esta iterando.**
- **Un objeto al cual se pueda hacer referencia al contexto this.**

```javascript
array.forEach(function(element, indice, array), thisArg);
```