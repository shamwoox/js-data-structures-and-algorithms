// Implement a Stack data structure using linked list

class Node {
    constructor() {
        this.val = null;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if(this.size === 0) {
            return null;
        } else if (this.size === 1) {
            this.last = null;
        } else {
            var removedNode = this.first;
            this.first = removedNode.next;
        }
        this.size--;
        return removedNode.val;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(10);
stack.push(3);
stack.push(4);
console.log(stack);
stack.pop();
console.log(stack);
