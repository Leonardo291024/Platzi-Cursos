# Metodo sort

**El metodo sort es mutable y consiste en ordenar un array apartir de los valores Unicode de los caracteres y este retorna un array con la misma referencia en memoria que el original.**

**Este proceso recibe un argumento:**
- **Una funcion de comparacion que compara cada elemento con otro. Por defecto evalua el valor Unicode del caracter. Esta funcion recibe dos parametros:**
	- **El primer elemento a comparar.**
	- **El segundo elemento a comparar.**

```javascript
let sortArray = array.sort((a,b) => a - b);
```

**Si la funcion comparativa retorna un numero mayor a 0, entonces el primer elemento se situa antes que el segundo. Si es menor que 0, entonces el segundo elemento se situa antes que el primero.**