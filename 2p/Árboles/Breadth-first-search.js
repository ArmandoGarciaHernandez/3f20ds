class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBFS() {
        if (!this.root) {
            return false;
        }
        const queue = new Queue();
        const treeValues = [];
        queue.enqueue(this.root);
        while (queue.size !== 0) {
            const nodeChildren = queue.first.value.children;
            if (nodeChildren.length !== 0) {
                nodeChildren.forEach(child => queue.enqueue(child));
            }
            treeValues.push(queue.first.value);
            queue.dequeue();
        }
        return treeValues;
    }

    traverseDFS(type) {
        if (!this.root) {
            return false;
        }
        const treeValues = [];
        let current = this.root;

        const preOrderHelper = node => {
            treeValues.push(node.value);
            if (node.children.length !== 0) {
                node.children.forEach(child => {
                    preOrderHelper(child);
                });
            }
            return true;
        };

        const postOrderHelper = node => {
            if (node.children.length !== 0) {
                node.children.forEach(child => {
                    postOrderHelper(child);
                });
            }
            treeValues.push(node.value);
            return true;
        };

        const inOrderHelper = node => {
            if (node.children.length !== 0) {
                const halfway = Math.floor(node.children.length / 2);
                for (let i = 0; i < halfway; i++) {
                    inOrderHelper(node.children[i]);
                }
                treeValues.push(node.value);
                for (let i = halfway; i < node.children.length; i++) {
                    inOrderHelper(node.children[i]);
                }
            } else {
                treeValues.push(node.value);
            }
            return true;
        };

        switch (type) {
            case "pre":
                preOrderHelper(current);
                break;
            case "post":
                postOrderHelper(current);
                break;
            case "in":
                inOrderHelper(current);
                break;
        }
        return treeValues;
    }
}

class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) {
        const newNode = new QueueNode(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;

        return this;
    }
    dequeue() {
        if (this.size === 0) return false;
        const dequeuedNode = this.first;
        const newFirst = this.first.next;
        if (!newFirst) {
            this.last = newFirst;
        }
        this.first = newFirst;
        dequeuedNode.next = null;
        this.size--;
        return dequeuedNode;
    }

    log() {
        let currentNode = this.first;
        let i = 0;
        while (currentNode) {
            console.log(i, currentNode.value);
            i++;
            currentNode = currentNode.next;
        }
    }
}

const testTree = new Tree();

testTree.root = new TreeNode("H");
testTree.root.children.push(new TreeNode("o"));
testTree.root.children.push(new TreeNode("l"));
testTree.root.children[0].children.push(new TreeNode("a"));
testTree.root.children[0].children.push(new TreeNode("M"));
testTree.root.children[0].children.push(new TreeNode("u"));
testTree.root.children[1].children.push(new TreeNode("n"));
testTree.root.children[1].children.push(new TreeNode("d"));
testTree.root.children[1].children.push(new TreeNode("o"));
testTree.root.children[1].children.push(new TreeNode("XD"));

const testTree2 = new Tree();

testTree2.root = new TreeNode(10);
testTree2.root.children.push(new TreeNode(6));
testTree2.root.children.push(new TreeNode(15));
testTree2.root.children[0].children.push(new TreeNode(3));
testTree2.root.children[0].children.push(new TreeNode(8));
testTree2.root.children[0].children.push(new TreeNode(7));
testTree2.root.children[1].children.push(new TreeNode(20));

console.log(testTree.traverseBFS());
console.log(testTree2.traverseDFS("in"));