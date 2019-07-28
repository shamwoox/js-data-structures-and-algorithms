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
		if (!this.root) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (val < currentNode.val) {
					if (currentNode.left === null) {
						currentNode.left = newNode;
						return this;
					} else {
						currentNode = currentNode.left;
					}
				} else if (val > currentNode.val) {
					if (currentNode.right === null) {
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
		if (!this.root) {
			return false;
		} else {
			let currentNode = this.root;
			let found = false;
			while (currentNode && !found) {
				if (val === currentNode.val) {
					return true;
				} else if (val < currentNode.val) {
					if (currentNode.left === null) {
						return false;
					} else {
						currentNode = currentNode.left;
					}
				} else if (val > currentNode.val) {
					if (currentNode.right === null) {
						return false;
					} else {
						currentNode = currentNode.right;
					}
				}
			}
			return false;
		}
	}

	BFS() {
		let queue = [],
			visited = [];
		let node = this.root;
		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			visited.push(node.val);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
		return visited;
	}

	DFSPreOrder() {
		let visited = [];
		let current = this.root;
		function traverse(node) {
			visited.push(node.val);
			if (node.left) {
				traverse(node.left);
			}
			if (node.right) {
				traverse(node.right);
			}
		}
		traverse(current);
		return visited;
	}

	DFSPostOrder() {
		let visited = [];
		let current = this.root;
		function traverse(node) {
			if (node.left) {
				traverse(node.left);
			}
			if (node.right) {
				traverse(node.right);
			}
			visited.push(node.val);
		}
		traverse(current);
		return visited;
	}

	DFSInOrder() {
		let visited = [];
		let current = this.root;
		function traverse(node) {
			if (node.left) {
				traverse(node.left);
			}
			visited.push(node.val);
			if (node.right) {
				traverse(node.right);
			}
		}
		traverse(current);
		return visited;
	}
}

let bst = new BinarySearchTree();

bst.insert(8);
bst.insert(6);
bst.insert(5);
bst.insert(7);
bst.insert(10);
bst.insert(9);
bst.insert(11);

console.log(`BFS Traversal: ${bst.BFS()}`);
console.log(`PreOrder Traversal: ${bst.DFSPreOrder()}`);
console.log(`PostOrder Traversal: ${bst.DFSPostOrder()}`);
console.log(`InOrder Traversal: ${bst.DFSInOrder()}`);
