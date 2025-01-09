/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    
    for(let i = 0; i < nums.length; i++){
        let value = nums[i].toString()
        .split('')
        .reduce((acc, curr) => +curr + acc, 0);
        nums[i] = value
    }

    return Math.min(...nums)

}