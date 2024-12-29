/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k%nums.length
    const temp = nums.slice(nums.length-k)
    nums.splice(nums.length-k,k)
    nums.unshift(...temp)
};