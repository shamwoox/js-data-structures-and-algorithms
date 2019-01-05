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

    shift() {
        if(this.head) {
            let temp = this.head;
            this.head = temp.next;
            this.length--;
            if(this.length === 0) {
                this.tail = null;
            }
            return temp.val;
        } else {
            return undefined;
        }
    }

    unshift(val) {
        let newNode = new Node(val);
        if(this.head) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        } else {
            let currentIndex = this.head;
            for(let i = 0; i < index; i++) {
                currentIndex = currentIndex.next;
            }
            return currentIndex.val;
        }
    }
}

let list = new SinglyLinkedList();
console.log("====ORIGINAL LIST====");
list.push("Paul");
list.push("James");
list.push("Thomas");
list.push("Matthew");
list.traverse();
console.log("=====================");
console.log(`** ${list.pop()} popped **`);
console.log("=====================");
list.traverse();
console.log("=====================");
console.log(`** ${list.shift()} shifted **`)
console.log("=====================");
list.traverse();
console.log("=====================");
console.log(`** Unshift Anthony **`);
console.log("=====================");
list.unshift("Anthony");
list.traverse();
console.log(`GET INDEX 2: ${list.get(2)}`);
