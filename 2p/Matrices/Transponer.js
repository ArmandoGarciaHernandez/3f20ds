matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

function trasponer(a) {
    var w = a.length || 0;
    var h = a[0] instanceof Array ? a[0].length : 0;

    if (h === 0 || w === 0) {
        return [];
    }
    var i, j, t = [];

    for (i = 0; i < h; i++) {
        t[i] = [];

        for (j = 0; j < w; j++) {
            t[i][j] = a[j][i];
        }
    }
    return t;
}

console.log(matriz, 'matriz original');
console.log(transpose(matriz), 'matriz traspuesta');