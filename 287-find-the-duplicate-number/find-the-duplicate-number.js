/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fast =1  , slow = 0
    nums.sort((a,b)=>a-b)
    while(nums[fast]!==nums[slow]){
        fast ++,slow++
    }
    return nums[slow]
};