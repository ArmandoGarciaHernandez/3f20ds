let x = Math.PI / 2;
let y = -1;
let r = [];

for (let i = 0; i < 10; i++) {
    z = Math.pow(y,i);

    w = factorial(2*i+1); 

    m = Math.pow(x,2*i+1);

    resultado = ((z/w)*m);
    r.push(resultado);    
}
console.log(r);

function factorial(f) {
    let o = 1;
    for (let a = 1; a <= f; a++) {
        o = o*a;             
    }
    return o; 
}