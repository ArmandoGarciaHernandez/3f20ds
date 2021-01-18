class SacaColumna {
    constructor(datodeUsuario) {
        this.datodeUsuario = datodeUsuario;
    }
    eligirColuma() {
        this.datodeUsuario = Number(prompt("Ingresa la columna deseada de tres disponibles"));
        while (this.datodeUsuario < 1 || this.datodeUsuario > 3) {
            alert("Ingresar de 1 a 3");
            this.datodeUsuario = Number(prompt("Ingresa la columna deseada de tres disponibles"))
        }
        return this.datodeUsuario;
    }
    sacarColumna(matriz) {
        let ind = this.datodeUsuario - 1;
        console.log('usted ha seleccionado la columna ', this.datodeUsuario, ':')
        let columna = matriz.map(function (matriz) {
            console.log(matriz[ind]);
        });
    }
}
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let miMatriz = new SacaColumna();
miMatriz.eligirColuma();
miMatriz.sacarColumna(matriz);