let x = 3;
let unpair = x;
let z = 10;
let y = 0; //index

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
    if (y == 4) {
      console.log(unpair);
    }
    y++;
  }
  unpair++;
}