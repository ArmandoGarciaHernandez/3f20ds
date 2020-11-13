let x = prompt('Ingresa el valor');
let y = prompt('Ingresa el número de resultados a imprimir');
let z, w, resultado;

for (let i = 1; i <= y; i++) {

    z = Math.pow(x,i);

    w = Math.pow(-1,i+1);
    
    resultado = ((z*w)/i);

    console.log(resultado);
}