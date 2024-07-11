# Garbage Collection

**Es un proceso automatico realizado por el motor de javascript que consiste en eliminar aquellos objetos que no tienen referencias o son inalcanzables para el contexto de ejecucion, a travez del algoritmo mark-and-sweep (marcado y barrido).**

**El garbage collection es importante para liberar aquellas referncias en memoria y no exista un debordamiento en las tareas (Stack OverFlow). Por ejemplo un ciclo infinito que provoque el colapso de la pagina web.**

## Algoritmo de marcado y barrido:

**El algoritmo de marcado y barrido hace referencia a cuando un tipo de dato se vuelve inalcanzable para el programa.**
**El motor de javascript comienza por la raiz, la cual es el objeto global, a medida que el programa avanza los objetos creando o borrando referencias a sus raizes.**

## Ejemplo de Garbage Collection.

**Cuando usamos los metodos shift() y pop() estamos extraemos el primer y ultimo elemento respectivamente de un array. Si no lo guardamos en una variable, el garbage collection lo eliminara.**

```javascript
const array = [1,2,3,4,5];

//Extrae el ultimo elemento, guarda la referencia en la variable lastElement.
const lastElement = array.pop();

console.log(lastElement); //5

//Si no guardamos la referencia en una variable el Garbage Collection lo eliminara.
console.log(array); //[1,2,3,4]


```