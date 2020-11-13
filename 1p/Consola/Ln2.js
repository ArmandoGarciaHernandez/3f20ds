let x = prompt('Ingresa el valor');
let y = prompt('Ingresa el número de resultados a imprimir');
let z, w, resultado;

for (let i = 1; i <= y; i++) {

    z = Math.pow(-1,i+1);

    w = Math.pow(x-1,i);
    
    resultado = ((z/i)*w);

    console.log(resultado);
}