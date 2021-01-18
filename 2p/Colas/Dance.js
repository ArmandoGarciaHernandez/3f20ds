function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}


function Dancer(nombre, s) {
    this.nombre = nombre;
    this.s = s;
}

function dance(hombre, mujeres) {
    print("Parejas \n");
    while (!mujeres.empty() && !hombre.empty()) {
        person = mujeres.dequeue();
        print("Female dancer is: " + person.nombre);
        person = hombre.dequeue();
        print("Male dancer is: " + person.nombre + "\n");
    }
}

function print(element) {
    return console.log(element);
}

function ejemplo() {
    let dMasculino = new Queue();
    dMasculino.enqueue(new Dancer("Pedro", "H"));
    dMasculino.enqueue(new Dancer("Pablo", "H"));

    let dMujeres = new Queue();
    dMujeres.enqueue(new Dancer("Ximena", "M"));
    dMujeres.enqueue(new Dancer("Sofía", "M"));
    dMujeres.enqueue(new Dancer("Romina", "M"));

    dance(dMasculino, dMujeres);
    if (!dMujeres.empty()) {
        print(dMujeres.front().nombre + " no tiene pareja");
    }
    if (!dMasculino.empty()) {
        print(dMasculino.front().nombre + " no tiene pareja.");
    }
}
ejemplo();