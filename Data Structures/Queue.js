//Implement a Queue data structure using linked list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if(this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if(this.size === 0) {
            return false;
        } else if(this.first === this.last) {
            this.last = null;
        } else {
            var temp = this.first;
            this.first = this.first.next;
        }
        this.size--;
        return temp;
    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
console.log(q);
q.dequeue();
console.log(q);