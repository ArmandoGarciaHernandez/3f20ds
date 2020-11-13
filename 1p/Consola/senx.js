let x = Math.PI / 2;
let y = -1;
let u = prompt('Ingresa la cantidad de resultados que quieres en la serie');


for (let i = 0; i < u; i++) {
    z = Math.pow(y,i);

    w = factorial(2*i+1); 

    m = Math.pow(x,2*i+1);

    resultado = ((z/w)*m);
    console.log(resultado);
}

function factorial(f) {
    let o = 1;
    for (let a = 1; a <= f; a++) {
        o = o*a;             
    }
    return o; 
}