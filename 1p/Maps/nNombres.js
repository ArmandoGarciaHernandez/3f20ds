let ArrayMAP = [];
let validar = [];

let IDK = Math.floor(10 * Math.exp(6));

for (let i = 0; i <= IDK; i++) {
    ArrayMAP.push((Math.floor(Math.random() * 9999)));
}

let a = ArrayMAP.map(function (x) {
    return 'name' + x;
})
console.log(a);