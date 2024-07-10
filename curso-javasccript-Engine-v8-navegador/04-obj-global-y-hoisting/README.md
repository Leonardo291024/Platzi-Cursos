# Ejemplo de Objeto global y Hoisting

## Objeto window

**Ejecuta la palabra window, se desplegará un objeto en el que se encuentran todas las funcionalidades de JavaScript, por ejemplo ejecuta:**

```javascript
window.console.log("Hola")
```
**Tendra el mismo comportamiento que:**
```javascript
console.log("Hola")
```

## Que es Hoisting.

**Hoisting es un termino para describir que las decclaraciones y funciones son movidas a la parte superior del scope mas cercano: scope global o de funcion. Esto sucede solamente con las declaracciones y no con las asignaciones.**

## Hoisting en variables declaradas con var.

**En el siguiente codigo la respuesta al console.log() es undefined por que al hacer referencia a una variable que no esta declarada, el motor de javascript crea esta variable antes de la declaraion y le asigna el valor undefined.**

```javascript
console.log(nombre) //undefined
var nombre = "Andres"
```

**Lo adeuado es evitar utilizar var para declarar varaibles y en cambio usar let y const, ya que estas dos ultimas en el proceso de optimizacion que realiza el motor de javascript no genera variables con el valor de undefined antes de su declaracion.**