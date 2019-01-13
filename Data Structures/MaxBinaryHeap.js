class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp(); 
    }
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if(element <= parent) {
                break;
            } else {
                this.values[parentIndex] = element;
                this.values[index] = parent;
                index = parentIndex;
            }
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(10);
heap.insert(30);
heap.insert(13);
heap.insert(24);
heap.insert(100);
heap.insert(99);
console.log(heap);