// Write a function called naiveStringSearch which determines whether a target string is 
// a substring of a string.

function naiveStringSearch(str, target) {
    str = str.replace(/\s/g, '');
    str = str.toLowerCase();
    target = target.toLowerCase();
    let count = 0;
    for(let i = 0; i < str.length - target.length + 1; i++) {
        for(let j = 0; j < target.length; j++) {
            if(count !== target.length) {
                if(str[i + j] === target[j]) {
                    count++;
                } else {
                    count = 0;
                    break;
                }
            }
        }
    }
    if(count === target.length) {
        return true;
    } else {
        return false;
    }
}

console.log(naiveStringSearch('hello', 't')); // false
console.log(naiveStringSearch('Foo Bar Baz', 'foof')); // false
console.log(naiveStringSearch('hello', 'ello')); // true
console.log(naiveStringSearch('whats up dude', 'sup')); // true
console.log(naiveStringSearch('jsakdhkjsdhkjsahdkas sjahdjsdh sdsd', 'sdhs')); // true
console.log(naiveStringSearch('', '')); // true

