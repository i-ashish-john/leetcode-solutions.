/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  let val = 0;
  for (let n of nums) {
    val |= n;
  }
  return val * (1 << (nums.length - 1));
};