let x = 3;
let y = [x];
let impares = [];

for (let i = 0; i < 42; i++) {
  y += 1;
  if (i % 2 !== 0) {
    if (i % 3 !== 0) {
      if (i % 5 !== 0) {
        if (i % 11 !== 0) {
          impares.push([i]);
        }
      }
    }
  }
}
console.log('Números Primos: ' + impares);