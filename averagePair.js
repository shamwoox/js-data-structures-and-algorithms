// Write a function called averagePair. Given a sorted array of integers and a targeted average, determine if
// there is a pair of values in the array where the average of the pairs equals the target average.
// There may be more than one pair that matches the average target.
// Bonus Constraints:
//     Time: O(n)
//     Space: O(1)




function averagePair(){
    let arr = arguments[0];
    let target = arguments[1];
    let right = 0;
    let left = arr.length - 1;

    for(let i = 0; i < arr.length; i++) {
        if(left > right) {
            let average = (arr[right] + arr[left]) / 2;
            if(average === target) {
                return true;
            } else if (average > target) {
                left--;
            } else {
                right++;
            }
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([], 4)); //false