class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        if(this.head) {
            let current = this.head;
            while(current !== null) {
                console.log(current.val);
                current = current.next;
            }
            
        } else {
            console.log("EMPTY");
        }
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let removedNode = this.tail;
        if(!this.head) {
            return undefined;
        }
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;
        return removedNode;
    }
}

let list = new DoublyLinkedList();
console.log("====ORIGINAL LIST====");
list.push(1);
list.push(10);
list.push(5);
list.push(2);
list.push(7);
list.traverse();
console.log("=====================");
console.log("** Popped **");
console.log("=====================");
list.pop();
list.traverse();

