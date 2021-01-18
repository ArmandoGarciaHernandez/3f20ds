class Nodo {
    constructor(dato, siguiente) {
        this.dato = dato;
        this.siguiente = siguiente;
    }
}

class listaEnlazada {
    constructor() {
        this.inicio = null;
        this.tamaño = 0;
    }

    agregar(dato) {
        let nuevoNodo = new Nodo(dato, null);
        if (!this.inicio) {
            this.inicio = nuevoNodo
        } else {
            let actual = this.inicio;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
        this.tamaño++;

    }
}

let lista = new listaEnlazada();
console.log("Lista: ", lista);


lista.agregar("Primer Valor");
lista.agregar("Segudo Valor");
console.log("Elementos : ", lista)