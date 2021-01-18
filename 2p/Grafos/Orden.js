class Grafo {
    constructor() {
        this.vertices = [];
        this.sizeOfvertex = 0;
        this.sizeOfedges = 0;
        this.adjmatrix = [];
    }

    addVertex(nodo) {
        if (this.vertices.includes(nodo)) {
            return -1;
        }
        this.vertices.push(nodo);
        this.sizeOfvertex++;
        this.adjmatrix = new Array(this.sizeOfvertex);
        for (let i = 0; i < this.sizeOfvertex; i++) {
            this.adjmatrix[i] = new Array(this.sizeOfvertex);
        }
        this.fill();
        return this.vertices;
    }

    addEdge(nodo1, nodo2) {
        if (this.adjmatrix[this.vertices.indexOf(nodo1)][this.vertices.indexOf(nodo2)] !== 1) {
            this.adjmatrix[this.vertices.indexOf(nodo1)][this.vertices.indexOf(nodo2)] = 1;
            this.sizeOfedges++;
            return this.adjmatrix;
        } else {
            this.adjmatrix[this.vertices.indexOf(nodo1)][this.vertices.indexOf(nodo2)]++;
            this.sizeOfedges++;
            return this.adjmatrix;
        }
    }

    fill() {
        for (let i = 0; i < this.sizeOfvertex; i++) {
            for (let j = 0; j < this.sizeOfvertex; j++) {
                if (this.adjmatrix[i][j] === undefined) {
                    this.adjmatrix[i][j] = 0
                } else {
                    continue;
                }
            }
        }
    }

    order() {
        return this.sizeOfedges;
    }
}

let añadir = new Grafo();
añadir.addVertex(5);
añadir.addVertex(4);
añadir.addVertex(7);
añadir.addVertex(9);
añadir.addEdge(5, 4);
añadir.addEdge(4, 5);
añadir.addEdge(5, 5);
añadir.addEdge(5, 5);
añadir.addEdge(9, 5);
añadir.fill();
console.log(añadir.adjmatrix);
console.log('Orden: ' + añadir.order());