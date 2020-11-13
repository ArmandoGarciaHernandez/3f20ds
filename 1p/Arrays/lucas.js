let numeros = [1, 3];
for (let i = 2; i < 10; i++) {
    numeros[i] = numeros[i - 2] + numeros[i - 1];
}console.log(numeros);
