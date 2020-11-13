let x = 3;
let z = [x];
let w = [];

for(let i=1; i<=10; i++){ 
    z = Math.pow(x,i);
    w.push(z);
    console.log(x,' elevado a la ',i,'es igual a ', w[i-1]);
}