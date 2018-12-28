// Write a function called binarySearch which accepts a sorted array and a value and returns
// the index at which the value exists. Otherwise, return -1

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((right + left) / 2);
    while(right >= left && arr[middle] !== val) {
        if (val > arr[middle]) {
            left = middle + 1;
        } else if (val < arr[middle]){
            right = middle - 1;
        }
        middle = Math.floor((right + left) / 2);
    }
    if (arr[middle] === val) {
        return middle;
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([5, 10, 12, 15, 20, 21, 24, 25, 30], 24)); // 6