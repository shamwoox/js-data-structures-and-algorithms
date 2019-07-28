function maxSubarraySum(arr, n) {
	if (n > arr.length) {
		return null;
	}
	let p = 0;
	let q = n - 1;
	let maxSum = 0;
	while (q < arr.length) {
		let sum = 0;
		for (let i = p; i < q + 1; i++) {
			sum += arr[i];
		}
		if (sum > maxSum) {
			maxSum = sum;
		}
		p++;
		q++;
	}
	return maxSum;
}

console.log(maxSubarraySum([ 1, 4, 2, 10, 23, 3, 1, 0, 20 ], 4));
