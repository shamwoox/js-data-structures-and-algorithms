// Write a function which accepts an array of unsorted integers and sorts the array in ascending order 
// using the Bubble Sort algorithm.

let bubbleSort = arr => {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([3, 2, 1, 4, 0, 10, 5])); // [0, 1, 2, 3, 4, 5, 10]
console.log(bubbleSort([8, -1, 32, 100, 23, 71, -5])); // [-5, -1, 8, 23, 32, 71, 100]
console.log(bubbleSort([1])); // [1]
