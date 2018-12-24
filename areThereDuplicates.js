// Write a function called areThereDuplicates that accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions:
//     Time: O(n)
//     Space: O(n)
// Bonus:
//     Time: O(n log n)
//     Space: O(1)

function areThereDuplicates () {
    let left = 0;
    let right = arguments.length - 1;
    for(let i = 0; i < arguments.length; i++) {
        if(right > left) {
            if(arguments[left] === arguments[right]) {
                return true;
            } else {
                left++;
            }
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true