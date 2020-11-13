let x = prompt('Ingrese el número que desea elevar');
let y = prompt('Ingrese la cantidad de veces que quiere elevar el valor');

for (let i = 1; i <= y; i++) {
    let z = Math.pow(x, i);
    console.log(x, ' elevado a la ', i, 'es igual a ', z);
}