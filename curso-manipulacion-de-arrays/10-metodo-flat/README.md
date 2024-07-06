# Metodo flat

**El metodo flat es inmutable y consiste en retornar un array donde los sub-arrays han sido aplandos hasta una profundidad especificada. El aplanamiento consiste en transformar un array de arrays en una sola dimension.**

### Este procedimiento recibe un argumento: 

- **La profundidad del aplanamiento, por defecto, tiene el valor de 1. Si se desea aplanar todos los sub-arrays en una sola dimencion, utiliza el valor infinity.**

```javascript
let rta = array.flat(profundidad);
```