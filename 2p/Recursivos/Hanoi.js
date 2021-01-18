let t1 = 1,
    t2 = 2,
    t3 = 3;
let n = 4;

function hanoi(platillos, Inicio, Final) {

    if (platillos == 1)
        console.log("Mover plato " + platillos + " de torre " + Inicio + " a torre " + Final);
    else {
        hanoi(platillos - 1, Inicio, Final);
        console.log("Mover plato " + platillos + " de torre " + Inicio + " a torre " + Final);
        hanoi(platillos - 1, Final, Inicio);
    }
}

hanoi(n, t1, t3, t2);
console.log("TORRE RESUELTA");