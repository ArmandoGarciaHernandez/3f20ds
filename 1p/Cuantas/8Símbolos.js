let x = factorialX(8);
let y = factorialX(1);

console.log('De un alfabeto de 8 símbolos cuantas palabras de 8 símbolos podemos generar?');
console.log((x/y));
function factorialX (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
        total = total * i;
         
	}
	return total; 
}

//(n!/(n-r)!) permutación