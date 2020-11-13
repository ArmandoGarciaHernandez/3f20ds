let y = 1;
let z = [y];
let w = [];

for (var i = 1; i <= 10; i++) {
    y -= 2;

    if (i % 2 == 0) {
        y *= -1;
        w.push(y);;
        y *= -1;
    } else {
        w.push(y);;
    }
}
console.log(w);