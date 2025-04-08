/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let result = 0;

  while (nums.length !== new Set(nums).size) {
    nums.splice(0, 3);
    result++;
  }

  return result;
};