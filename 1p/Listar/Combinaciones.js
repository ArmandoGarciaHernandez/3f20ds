let S = [31, 1, 4, 2, 32];

combinacion = (ArrayInicial) => {
    let resultado = [];

    let combinar = (arrayS, nArr = []) => {
        if (arrayS.length === 0) {
            resultado.push(nArr)
        } else {
            for (let i = 0; i < arrayS.length; i++) {
                let vActual = arrayS.slice();
                let vSig = vActual.splice(i, 1);
                combinar(vActual, nArr.concat(vSig))
            }
        } 
    }
    combinar(ArrayInicial)
    return resultado;
}
console.log(combinacion(S))