// Write a function which accepts an array of unsorted integers and sorts the array in ascending order 
// using the Bubble Sort algorithm.

let bubbleSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 2, 1, 4, 0, 10, 5])); // [0, 1, 2, 3, 4, 5, 10]
console.log(bubbleSort([8, -1, 32, 100, 23, 71, -5])); // [-5, -1, 8, 23, 32, 71, 100]
console.log(bubbleSort([1])); // [1]
