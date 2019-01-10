class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(val < currentNode.val) {
                    if(currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (val > currentNode.val) {
                    if(currentNode.right === null) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    return undefined;
                }
            }
        }
    }

    find(val) {
        if(!this.root) {
            return false;
        } else {
            let currentNode = this.root;
            let found = false;
            while(currentNode && !found) {
               if(val === currentNode.val) {
                   return true;
               } else if(val < currentNode.val) {
                   if(currentNode.left === null) {
                       return false;
                   } else {
                       currentNode = currentNode.left;
                   }
               } else if(val > currentNode.val) {
                   if(currentNode.right === null) {
                       return false;
                   } else {
                       currentNode = currentNode.right;
                   }
               }
            }
            return false;
        }
    }
}

let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(10);
bst.insert(8);
bst.insert(11);
bst.insert(9);
bst.insert(25);
bst.insert(24);
bst.insert(27);
console.log(bst);
console.log(bst.find(9));
console.log(bst.find(11));
console.log(bst.find(23));