/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    const dp = nums.sort((a, b) => a - b).map((n) => [n]);
    // console.log(dp)
    for (let i = nums.length - 1; i >= 0; i--){
        for (let j = i + 1; j< nums.length; j++){
        if (nums[j] % nums[i] === 0 && dp[j].length >= dp[i].length){
                dp[i] = [nums[i]].concat(dp[j]);
            }
        }
    }
    return dp.reduce((a, b) => (a.length > b.length ? a : b));
 
};