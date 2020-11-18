let ArrayMAP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let validar = [];

let a = ArrayMAP.map(function () {
    return 'name' + Validacion();
})

function Validacion() {

    do {
        x = Math.round(Math.random() * 10);

    } while (validar.indexOf(x) !== -1);
    validar.push(x);
    return x;
}

console.log(a);