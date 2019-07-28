function containsDuplicate(nums) {
	let map = {};
	let i,
		n = nums.length;
	for (i = 0; i < n; i++) {
		if (nums[i] in map) {
			return true;
		} else {
			map[nums[i]] = 1;
		}
	}
	return false;
}
