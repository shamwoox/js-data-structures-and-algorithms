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
            return current;
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

    //Remove from head
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

    //Insert into head
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
            return currentIndex;
        }
    }

    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(index, val) {
        let newNode = new Node(val);
        if(index < 0 || index > this.length) {
            return false;
        } else if(index === this.length) {
            return !!this.push(newNode);
        } else if(index === 0) {
            return !!this.unshift(val);
        } else {
            let prev = this.get(index - 1);
            newNode.next = prev.next;
            prev.next = newNode;
            this.length++;
            return true;
        }
    }

    remove(index) {
        if(index < 0 || index > this.length) {
            return undefined;
        } else if(index === this.length - 1) {
            return this.pop();
        } else if(index === 0) {
            return this.shift();
        } else {
            let prev = this.get(index - 1);
            var removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.length--;
        return removedNode;
    }

    reverse() {
        //Swap head and tail
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        let prevNode = null;
        let nextNode;

        for(let i = 0; i < this.length; i++) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
console.log("====ORIGINAL LIST====");
list.push("Paul");
list.push("James");
list.push("Thomas");
list.push("Matthew");
list.push("Maria");
list.push("Arianna");
list.traverse();
console.log("=====================");
console.log(`** ${list.pop()} popped **`);
console.log("=====================");
list.traverse();
console.log("=====================");
console.log(`** ${list.shift()} shifted **`);
console.log("=====================");
list.traverse();
console.log("=====================");
console.log(`** Unshift Anthony **`);
console.log("=====================");
list.unshift("Anthony");
list.traverse();
console.log(`GET INDEX 2: ${list.get(2).val}`);
list.set(1, "Bob");
list.traverse();
console.log("=====================");
console.log("Insert John into index 2");
console.log("=====================");
list.insert(2, "John");
list.traverse();
console.log("=====================");
console.log("Remove index 2");
console.log("=====================");
list.remove(2);
list.traverse();
console.log("=====================");
console.log("** List is reversed **");
console.log("=====================");
list.reverse();
list.traverse();