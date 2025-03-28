/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    // console.log(nums.length)
    if(nums.length==2 || nums.length ==1) return -1
    nums.sort((a,b)=>a-b)
    nums.splice(nums.length-1,1)
     nums.splice(0,1)
     return nums[0]

};