let Sets = new Set();
let validar = [];

while (Sets.size < 10) {
    index = Validacion();
    name = 'name';
    random = name + index;
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