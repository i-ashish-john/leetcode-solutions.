/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  let a = 0;
  for (let n of nums) {
    a |= n;
  }
  return a * (1 << (nums.length - 1));
};