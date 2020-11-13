let y = 1;

for (var i = 1; i <= 10; i++) {
  y -= 2;

  if (i % 2 == 0) {
    y *= -1;
    console.log(y);
    y *= -1;
  } else {
    console.log(y);
  }
}