# Metodo flatMap

**El metodo flatMap es inmutable y consiste en la conbinacion de los metodos map y flat. Primero realiza la iteracion de los elementos (como si fuera map) y despues aplana en una sola profundidad (como si fuera flat).**

**Este procedimiento recibe los mismos argumentos que el metodo map.**

```javascript
let rta = array.flatMap(item => item);
```