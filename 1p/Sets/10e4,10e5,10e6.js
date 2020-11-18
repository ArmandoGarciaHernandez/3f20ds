let start = Date.now();
let euler = new Set();

let IDK = Math.floor(10 * Math.exp(6));
let ID5 = Math.floor(10 * Math.exp(5));
let ID4 = Math.floor(10 * Math.exp(4));

    while (euler.size < IDK) {
        x = (Math.floor(Math.random() * 9999));
        euler.add(x)

        if (euler.size == ID4) {
            let end = Date.now();
            console.log((end - start) + 'ms en posición: ' + ID4 + ' =10e4');
        }
        if (euler.size == ID5) {
            let end = Date.now();
            console.log((end - start) + 'ms en posición: ' + ID5 + ' =10e5');
        }
        if (euler.size == IDK) {
            let end = Date.now();
            console.log((end - start) + 'ms en posición: ' + IDK + ' =10e6');
        }
    }