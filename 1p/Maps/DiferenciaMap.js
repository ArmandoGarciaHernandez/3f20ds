//Map sirve para recorrer y reutilizar los valores arbitrarios de un arreglo.
let ArrayMAP = [1,2,3,4,5];

let a = ArrayMAP.map(function(x) {
    x = x*2; 
    return x;
})
//Array sin cambio
console.log('*Array sin cambio: ' + ArrayMAP);
//Una vez aplicado dentro del map con alguna operación;
console.log('*Una vez aplicado dentro del map con alguna operación: ' + a);

//Weakmap se utiliza para hacer referencia a las llaves de los objetos y obtener sus valores.
let ejemplo = new WeakMap();
let key = {};

ejemplo.set(key, 'TextoDeEjemplo');
console.log('Weakmap:');
console.log(ejemplo.get(key));