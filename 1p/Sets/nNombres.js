let Sets = new Set();
let validar = [];
let iteraciones = Math.floor(Math.random()*(11-1)+1);

while (Sets.size < iteraciones) {
    valor = Validacion();
    name = 'name';
    random = name + valor;
    Sets.add(random);   
}
function Validacion() {
    do {
        x = Math.round(Math.random() * 10);

    } while (validar.indexOf(x) !== -1);
    validar.push(x);
    return x;
}
console.log(Sets);