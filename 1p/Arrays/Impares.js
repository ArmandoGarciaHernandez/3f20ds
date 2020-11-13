let x = 0;
let y = [x];
let impares = [];

for (let i = 0; i < 20; i++) {
  y += 1;
  if (i % 2 !== 0 && i !== 1) {
    impares.push([i]);
  }
}
console.log('Números impares: ' + impares);