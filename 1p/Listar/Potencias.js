let S = [31,1,2,4,32];
let PosiblesCombinaciones = NuevoArray => NuevoArray.reduce(
    (combinaciones, valor) => combinaciones.concat(
        combinaciones.map(set => [valor, ...set])
    ),
    [
        []
    ]
);

console.log(PosiblesCombinaciones(S));
//Exponencial