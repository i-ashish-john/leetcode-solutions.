/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.sort((a, b) => a - b);  
    let count = 0;
    
    let index = 0;

    while (nums[index] < k) {
        let m = nums[index];  
        let n = nums[index + 1];

        let newNum = m * 2 + n;
        count++;
        
       
        index += 2;

        let left = index, right = nums.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < newNum) left = mid + 1;
            else right = mid;
        }
        nums.splice(left, 0, newNum); 
    }

    return count;
};