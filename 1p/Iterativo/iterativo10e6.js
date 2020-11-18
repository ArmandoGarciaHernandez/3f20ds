let start = Date.now();
let iter = Math.floor(10 * Math.exp(6));

for (let i = 0; i <= iter; i++) {
    console.log((Math.floor(Math.random() * 9999)));
}
let end = Date.now();

console.log(' Duró ' + (end - start) + ' ms en ejecutarse ');
// console.log(iter); Iteraciones