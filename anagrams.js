function validAnagram(string1, string2) {

    //If the two strings aren't equal, return false
    if(string1.length !== string2.length) {
        return false;
    }

    let stringObj1 = {}; 
    let stringObj2 = {}; 

    //Store string1's character frequency
    //O(n)
    for (const character of string1) {
        if (stringObj1.hasOwnProperty(character)) {
            stringObj1[character]++;
        } else {
            stringObj1[character] = 1;
        }
    }

    //Store string2's character frequency
    //O(n)
    for (const character of string2) {
        if (stringObj2.hasOwnProperty(character)) {
            stringObj2[character]++;
        } else {
            stringObj2[character] = 1;
        }
    }

    const arr = Object.keys(stringObj1);

    //Compare the two objects
    //O(n)
    for (let i = 0; i < arr.length; i++) {
        if (!stringObj2.hasOwnProperty(arr[i]) || stringObj2[arr[i]] !== stringObj1[arr[i]]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('', ''));
console.log(validAnagram('poop', 'pooop'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
