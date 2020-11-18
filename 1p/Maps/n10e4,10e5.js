let start = Date.now();
let ArrayMAP = [];
let validar = [];

let IDK = Math.floor(10 * Math.exp(6));
let ID5 = Math.floor(10 * Math.exp(5));
let ID4 = Math.floor(10 * Math.exp(4));

for (let i = 0; i <= IDK; i++) {
    ArrayMAP.push((Math.floor(Math.random() * 9999)));
}
let a = ArrayMAP.map(function (x,index) {
    if (index == ID4) {
        let end = Date.now();
        console.log((end-start) + 'ms en posición: ' + ID4 + ' =10e4');
    }
    if (index == ID5) {
        let end = Date.now();
        console.log((end-start) + 'ms en posición: ' + ID5 + ' =10e5');
    }
    if (index == IDK) {
        let end = Date.now();
        console.log((end-start) + 'ms en posición: ' + IDK + ' =10e6');
    }
})