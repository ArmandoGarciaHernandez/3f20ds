let x = 3;
let unpair2 = x;
for (let i = 0; i <= 42; i++) {
  unpair2 += 1;
  if (unpair2 % 2 !== 0) {
    if (unpair2 % 3 !== 0) {
      if (unpair2 % 5 !== 0) {
        if (unpair2 % 11 !== 0) {
          console.log(unpair2);
        }
      }
    }
  }
}