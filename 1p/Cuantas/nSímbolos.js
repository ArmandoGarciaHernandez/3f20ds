let alfabeto = 8;
let palabras = 3;
let resta = (alfabeto-palabras);

let x = factorialX(alfabeto);
let y = factorialX(resta);

console.log("De un alfabeto de n símbolos cuantas palabras de r símbolos podemos generar?, r<=n");
console.log(x / y);

function factorialX(n) {
    let total = 1;
    for (i = 1; i <= n; i++) {
        total = total * i;

    }
    return total;
}

//(n!/(n-r)!) permutación
// n = 8, r = 3
// n-r = 5