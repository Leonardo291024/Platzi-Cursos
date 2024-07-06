# Mutable Functions

**Las funciones mutables consisten en cambiar el array original. Estos metodos son:**

## - Metodo push(): 
**Agrega uno o varios elementos al final del array original. El metodo recibe como argumento los valores a agregar.**
```javascript
array.push("elementos a eliminar");
```

## - Metodo unshift():
**Agrega uno o varios elemenos al inicio del array original. El metodo recibe como argumento los valores a agregar.**
```javascript
array.shift("elementos a eliminar");
```

## - Metodo pop():
**Extrae el elemento final del array original. El metodo no recibe ningun argumento.**
```javascript
array.po();
```

## - Metodo shift():
**Extrae el elemento del inicio del array original. El metodo no recibe ningun argumento.**
```javascript
array.shift();
```

# - Metodo splice():
**Extrae uno o varios elementos del array original a partir del indice especificado como argumento. Retorna un array con los elementos extraidos.**

**El metodo recibe tres argumentos:**
- **El indice donde comenzara a cambiar el array.**
- **La cantidad de elementos que seran reemplazados.**
- **Uno o varios elementos que reemplazaran a los originales del array.**
```javascript
array.splice(indice, cantidad, item1,item2,..., );
```

