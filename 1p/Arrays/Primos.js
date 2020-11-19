let x = 3;
let unpair = x;
let z = 10;
let y = 0; //index
let arr = [];

let esPrimo = (numero) => {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

while (y < z) {
  if (esPrimo(unpair)) {
    arr.push(unpair);  
    y++;
  }
  unpair++;
}
console.log(arr);