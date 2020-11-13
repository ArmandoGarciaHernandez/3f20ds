for (let i = 1; i <= 10; i++) {
    let fila = '';
    let x = [fila];
    let y = [];

    for (let a = 1; a <= i; a++) {
        x += a + ' ';
    }
    y.push(x);
    console.log(y);
}