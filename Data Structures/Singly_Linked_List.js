class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.length !== 0) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.head) {
            let current = this.head;
            let prev = current;
            while(current.next) {
                prev = current;
                current = current.next;
            }
            this.tail = prev;
            this.tail.next = null;
            this.length--;
            if(this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current.val;
        } else {
            return undefined;
        }
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
}

let list = new SinglyLinkedList();
list.push("Paul");
list.push("James");
list.push("Thomas");
list.push("Matthew");
list.traverse();
console.log("============");
console.log(`*${list.pop()} was popped*`);
console.log("New Linked List");
list.traverse();
console.log("============");
console.log(`*${list.pop()} was popped*`);
console.log("New Linked List");
list.traverse();
console.log("============");
console.log(`*${list.pop()} was popped*`);
console.log("New Linked List");
list.traverse();
console.log("============");
console.log(`*${list.pop()} was popped*`);
console.log("New Linked List");
list.traverse();