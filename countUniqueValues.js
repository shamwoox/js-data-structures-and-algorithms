function countUniqueValues(arr) {
    if(arr.length === 0) {
        return 0;
    }
    if(arr.length === 1) {
        return 1;
    }

    let leadIndex = 1;
    let followIndex = 0;
    
    while(leadIndex < arr.length) {
        if(arr[leadIndex] === arr[followIndex]) {
            leadIndex++;
        } else {
            followIndex++;
            arr[followIndex] = arr[leadIndex];
        }
    }
    return followIndex + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 4, 5, 6, 7]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 2]));