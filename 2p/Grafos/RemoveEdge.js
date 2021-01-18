class graph {
    constructor(o) {
        this.m = o;
    }

    addvertex(v) {
        this.m[v] = 0;
    }

    addedge(e, f) {
        if (typeof (this.m[e]) === 'number') {
            this.m[e] = []
        }
        this.m[e][f] = 1
    }
    removeedge(e, f) {
        this.m[e][f] = 0
    }

    fill() {
        for (let i = 0; i < this.m.length; i++) {
            for (let j = 0; j < this.m.length; j++) {
                if (this.m[i][j] === undefined)
                    this.m[i][j] = 0
            }
        }
    }

    tostring() {
        let s = '\n';
        for (let i = 0; i < this.m.length; i++) {
            s += '\n'
            for (let j = 0; j < this.m.length; j++) {
                s += this.m[i][j] + ' '
            }
        }
        return s;
    }

    print() {
        console.log(this.tostring())
    }
}
class graphSample {
    aNew() {
        return [];
    }
}

let s = new graphSample()
let grahp = new graph(s.aNew());

grahp.addvertex(0);
grahp.addvertex(1);
grahp.addvertex(2);

grahp.addedge(0, 1);
grahp.addedge(1, 2);
grahp.addedge(2, 0);

console.log("Grafo:");

grahp.fill();
grahp.print();

console.log("\nGrafo con arista removida:");

grahp.removeedge(0, 1);
grahp.print();