let S = [31, 1, 4, 2, 32];

permutacion = (ArrayInicial) => {
    let resultado = [];

    let permutar = (arrayS, nArr = []) => {
        if (arrayS.length === 0) {
            resultado.push(nArr)
        } else {
            for (let i = 0; i < arrayS.length; i++) {
                let vActual = arrayS.slice();
                let vSig = vActual.splice(i, 1);
                permutar(vActual, nArr.concat(vSig))
            }
        } 
    }
    permutar(ArrayInicial)
    return resultado;
}
console.log(permutacion(S));

//Cuadrática;