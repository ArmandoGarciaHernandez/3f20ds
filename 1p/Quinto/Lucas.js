let pos1 = 1, pos2 = 3, resultado = 0;
for (var posR = 0; posR < 10; posR++) {
  resultado = pos1 + pos2;
  pos1 = pos2;
  pos2 = resultado;
  if (posR == 4) {
    console.log(resultado);
  }
}