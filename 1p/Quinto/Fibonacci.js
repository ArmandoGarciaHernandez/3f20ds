var a = 10;
let pos1 = 0, pos2 = 1, resultado = 0;
for (var posR = 0; posR < a; posR++) {
  resultado = pos1 + pos2;
  pos1 = pos2;
  pos2 = resultado;
  if (posR == 4) {
    console.log(resultado);
  }
}