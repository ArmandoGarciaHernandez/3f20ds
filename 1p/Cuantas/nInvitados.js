let invitados = 5
let x = factorialX(invitados);


console.log("En una fiesta hay n invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron?");
console.log(x);

function factorialX(n) {
    let total = 1;
    for (i = 1; i <= n; i++) {
        total = total * i;

    }
    return total;
}

//(n!/(n-r)!) permutación