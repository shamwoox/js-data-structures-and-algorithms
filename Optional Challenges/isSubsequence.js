function isSubsequence(str1, str2) {
	// good luck. Add any arguments you deem necessary.
	let p = 0;
	for (let i = 0; i < str2.length; i++) {
		if (str2[i] === str1[p]) {
			p++;
		}
	}
	if (p >= str1.length) {
		return true;
	}
	return false;
}

console.log(isSubsequence('d', ''));
