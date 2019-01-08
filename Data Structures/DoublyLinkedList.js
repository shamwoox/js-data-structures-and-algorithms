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

    shift() {
        let removedNode = this.head;
        if(!this.head) {
            return undefined;
        }
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }

    unshift(val) {
        let newHead = new Node(val);
        if(!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }
        let currentNode;
        if(index <= (this.length / 2)) {
            currentNode = this.head;
            for(let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
        } else {
            currentNode = this.tail;
            for(let i = this.length - 1; i > index; i--) {
                currentNode = currentNode.prev;
            }
        }
        return currentNode;
    }

    set(index, val) {
        let updatedNode = this.get(index);
        if(updatedNode) {
            updatedNode.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(index, val) {
        if(index < 0 || index > this.length) {
            return false;
        }
        if(index === 0) {
            this.unshift(val);
        } else if(index === this.length) {
            this.push(val);
        } else {
            let newNode = new Node(val);
            let nextNode = this.get(index);
            let prevNode = this.get(index - 1);
            newNode.next = nextNode;
            nextNode.prev = newNode;
            prevNode.next = newNode;
            newNode.prev = prevNode;
        }
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) {
            return undefined;
        }
        if(index === 0) {
            return this.shift();
        } else if(index === this.length - 1) {
            return this.pop();
        } else {
            var foundNode = this.get(index);
            let nextNode = foundNode.next;
            let prevNode = foundNode.prev;
            nextNode.prev = prevNode;
            prevNode.next = nextNode;
            foundNode.next = null;
            foundNode.prev = null;
        }
        this.length--;
        return foundNode;
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
console.log("=====================");
console.log("** Shifted **");
console.log("=====================");
list.shift();
list.traverse();
console.log("=====================");
console.log("** Unshifted with value 90 **");
console.log("=====================");
list.unshift(90);
list.traverse();
console.log("=====================");
console.log("** Update index 2 to 67 **");
console.log("=====================");
list.set(2, 67);
list.traverse();
console.log("=====================");
console.log("** Insert 81 in index 3 **");
console.log("=====================");
list.insert(3, 81);
list.traverse();
console.log("=====================");
console.log("** Remove index 2 **");
console.log("=====================");
list.remove(2);
list.traverse();