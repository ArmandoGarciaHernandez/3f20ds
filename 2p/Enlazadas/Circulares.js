class Node {
    constructor(elm, next = null, prev = null) {
        this.element = elm;
        this.next = next;
    }
}

class circularLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    getElementAt = function (index) {
        if (index >= 0 && index <= this.length) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    append = function (element) {
        const node = new Node(element);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.getElementAt(this.length - 1);
            current.next = node;
        }

        node.next = this.head;
        this.length++;
    }

    insert = function (element, index) {
        if (index >= 0 && index <= this.length) {
            const node = new Node(element);
            let current = this.head;

            if (index === 0) {
                if (this.head === null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.length);
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }

            this.length++;
            return true;
        }
        return false;
    }

    toString = function () {
        let current = this.head,
            string = '';

        const temp = this.head.element;

        while (current) {
            if (temp === current.next.element) {
                string += current.element + (current.next ? '\n' : '');
                break;
            }

            string += current.element + (current.next ? '\n' : '');
            current = current.next;
        }

        return string;
    }
}

let listaCircular = new circularLinkedList();

listaCircular.insert(1, 0);
listaCircular.insert(2, 1);
listaCircular.insert(3, 2);

console.log("valores de la lista : \n", listaCircular.toString())
console.log("lista : ", listaCircular);
listaCircular.insert("Posición ", 3);
console.log("Posición de la lista : ", listaCircular.getElementAt(3));