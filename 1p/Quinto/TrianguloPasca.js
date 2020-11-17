let TPascal = [];
let m = 4; 

console.log(TrianguloPascal());

function TrianguloPascal() {
    for (let j = 0; j <= 4; j++) {
        TPascal[j] = calcularfactorial(m) / (calcularfactorial(j) * calcularfactorial(m - j));
    }
    return TPascal;
}

function calcularfactorial(n) {
    let factorial = 1;
    for (i = 1; i <= n; i++) {
        factorial = i * factorial;
    }
    return factorial;
}