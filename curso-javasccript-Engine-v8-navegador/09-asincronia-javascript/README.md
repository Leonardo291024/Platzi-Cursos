# Que es la asincronia en JavaScript

## JavaScript RunTime:

**Recordando el material de call stack, se menciona que javascript realiza una tarea a la vez en el call stack esto se denomina codigo sincrono o single thread. La sincronia puede presentar problemas en operaciones que demoran demaciado.**

**Para solucionar esto podemos ejecutar las operaciones mas lentas despues de las mas rapidas. Y esa solucion se llama asincronismo y javascript tiene una manera de manejarlo.**

## Asincronismo:

**La asincronia en JS consiste en delegar algunas tareas para que las ejecute el navegador, una vez esas tareas estan terminadas entran en otra estructura llamada Callback queue. En el Callback queue la primera tarea que entra es la primera en salir mediante un Event Loop.**

###  - Event Loop: 
**Es el encargado de preguntar al call stack si ya ha terminado todas sus tareas. Entonces, si y solo si el call stack esta vacio, el Event Loop movera las funciones que estan en el callback queue para que se ejecuten.**

## Web APIs:
**Son herramientas adicionales que te ofrece el navegador para realizar peticiones, modificar el DOM, entre otras. Estas herramientas las puedes observar en el objeto global window.**

## Ejemplo de Asincronia:

```javascript
const foo = () => console.log("first");
const bar = () => setTimeout(() => console.log("seccond"), 500);
const baz = () => console.log("third");

bar();
foo();
baz();
```

**El resultado es:**
- **Primero se muestra en consola "first"**
- **Segundo se muestra en consola "Third"**
- **Tercero se muestra en consola "Second"**

**Esto porque la funcion bar() salio del call stack para esperar asincronamente un tiempo definido de medio segundo en este caso. Despues tendra que esperar sin importar el tiempo establecido en el setTimeout(), hasta que se vacie el call stack para el Event Loop le permita entrar en el call stack para ejecutarse.**