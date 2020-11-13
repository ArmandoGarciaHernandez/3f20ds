let x = [3, 1, 4, 2, 3];

for (let i = 0; i < x.length; i++) {
    for (let y = i; y < x.length; y++) {
        if (x[i] == x[y + 1]) {
            console.log(' Los valores repetidos son: ',x[i]);
        }
    }
}