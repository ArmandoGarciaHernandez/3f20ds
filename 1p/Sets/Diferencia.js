//Set es una colección de valores arbitrarios. Solamente pueden tener valores únicos.
console.log('*Set es una colección de valores arbitrarios. Solamente pueden tener valores únicos.');
const Set1 = new Set();
Set1.add('name');
console.log(Set1 )+ '\n';

//Weakset: son solamente colecciones de objetos, no contienen valores arbitrarios de cualquier otro tipo y solamente tienen valores únicos.
console.log('*Weakset: son solamente colecciones de objetos, no contienen valores arbitrarios de cualquier otro tipo y solamente tienen valores únicos.');
let Weakset = new WeakSet();
let name1 = {
    name: 'Armando' 
};

Weakset.add(name1);

console.log(Weakset.has(name1));