/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let sum = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let isGood = true;

        if (i - k >= 0 && nums[i] <= nums[i - k]) {
            isGood = false;
        }

        if (i + k < n && nums[i] <= nums[i + k]) {
            isGood = false;
        }

        if (isGood) {
            sum += nums[i];
        }
    }

    return sum;
};