function dividir(izq, der) {
    let arr = []

    while (izq.length && der.length) {
        if (izq[0] < der[0]) {
            arr.push(izq.shift());
        } else {
            arr.push(der.shift());
        }
    }

    return [...arr, ...izq, ...der]
}

function mergeSort(array) {
    const half = array.length / 2

    if (array.length < 2) {
        return array
    }

    const izquierda = array.splice(0, half)
    return dividir(mergeSort(izquierda), mergeSort(array));
}

array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));