/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
   
const result = nums.map(item => {
  return item % 2 === 0 ? 0 : 1;
});

   return result.sort((a,b)=>a-b)
};




