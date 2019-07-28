function selectionSort(nums) {
	for (let i = 0; i < nums.length; i++) {
		let min = nums[i];
		let swapIndex = i;
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] < min) {
				min = nums[j];
				swapIndex = j;
			}
		}
		let temp = nums[i];
		nums[i] = min;
		nums[swapIndex] = temp;
	}
	return nums;
}

console.log(selectionSort([ 10, 8, 1, 23, 2, 4 ]));
