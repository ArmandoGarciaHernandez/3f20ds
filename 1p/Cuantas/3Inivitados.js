let x = factorialX(3);
let y = factorialX(1);

console.log('En una fiesta hay 3 invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron?');
console.log((x/y));
function factorialX (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
        total = total * i;
         
	}
	return total; 
}

//(n!/(n-r)!) permutación