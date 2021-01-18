class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    };
};

class listaDobleEnlazada {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    addToHead(data) {
        const nevouNodo = new Node(data, this.head, null);

        if (this.head) {
            nevouNodo.next = this.head;
            this.head.prev = nevouNodo;
            this.head = nevouNodo;
        } else {
            this.head = nevouNodo;
            this.tail = nevouNodo;
        };
        this.size++;
    };

    addToTail(data) {
        const nuevoNodo = new Node(data, null, this.tail);

        if (this.tail)
        {
            nuevoNodo.prev = this.tail;
            this.tail.next = nuevoNodo;
            this.tail = nuevoNodo;
        } else {
            this.tail = nuevoNodo;
            this.head = nuevoNodo;
        };
        this.size++;
    };

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null
        };

        const newNode = new Node(data, null, null);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };

            newNode.next = current;
            newNode.prev = previous;
            current.prev = newNode;
            previous.next = newNode;
        };
        this.size++;
    };



    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        };

        return result += ' Fin ';
    };

    reversePrint() {
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.prev;
        };

        return result += ' Fin ';
    };

}

const doubleLinkedList = new listaDobleEnlazada();
doubleLinkedList.addToHead(3);
doubleLinkedList.addToHead(2);
doubleLinkedList.addToTail(7);
doubleLinkedList.addToTail(8);
doubleLinkedList.insertAt(4, 2);


console.log("Lista de cabeza a cola :", doubleLinkedList.print())
console.log("Lista de cola a cabeza : ", doubleLinkedList.reversePrint())
console.log(doubleLinkedList)