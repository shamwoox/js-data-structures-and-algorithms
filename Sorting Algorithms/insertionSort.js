function insertionSort(nums) {
	for (let i = 1; i < nums.length; i++) {
		for (let j = i; j > 0; j--) {
			if (nums[j] < nums[j - 1]) {
				let temp = nums[j - 1];
				nums[j - 1] = nums[j];
				nums[j] = temp;
			}
		}
	}
	return nums;
}

console.log(insertionSort([ 10, 23, 1, 6, 4, 8, 2, 0 ]));
