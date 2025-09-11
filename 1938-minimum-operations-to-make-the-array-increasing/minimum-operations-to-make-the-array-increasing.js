/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let ops = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            let diff = (nums[i] + 1) - nums[i + 1]
            ops += diff
            nums[i + 1] = nums[i] + 1  
        }
    }
    return ops
};
