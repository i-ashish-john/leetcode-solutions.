/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    let count = 0;
    const n = nums.length;
    if (n < 3) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    for (let i = n - 1; i >= 2; i--) {
        let left = 0; 
        let right = i - 1; 

        while (left < right) {
            // Check the triangle inequality: a + b > c
            if (nums[left] + nums[right] > nums[i]) {
                count += (right - left);
                right--; 
            } else {
            
                left++;
            }
        }
    }

    return count;
};