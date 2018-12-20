// Given two positive integers, find if the two numbers have the same frequency of digits.
// Time Complexity: O(n)


function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    let firstNum = {};
    let secondNum = {};

    //Convert numbers to strings
    num1 = num1.toString();
    num2 = num2.toString();

    if (num1.length !== num2.length) {
        return false;
    }

    for(const digit of num1) {
        if(firstNum.hasOwnProperty(digit)) {
            firstNum[digit]++;
        } else {
            firstNum[digit] = 1;
        }
    }
    for(const digit of num2) {
        if(secondNum.hasOwnProperty(digit)) {
            secondNum[digit]++;
        } else {
            secondNum[digit] = 1;
        }
    }

    const arr = Object.keys(firstNum);

    for (let i = 0; i < arr.length; i++) {
        if (!secondNum.hasOwnProperty(arr[i]) || secondNum[arr[i]] !== firstNum[arr[i]]) {
            return false;
        }
    }
    return true;
}
  
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));