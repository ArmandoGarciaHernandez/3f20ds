let numero = 2,
    base = 2;

const conv = (x, y) => {
    let pila = [],
        resultado = [];
    while (x > 0) {
        pila.push(x % y);
        x = Math.floor(x / y);
    }
    while (pila.length > 0) {
        resultado.push(pila.pop());
    }
    return resultado.join('');
}

console.log(conv(numero, base));