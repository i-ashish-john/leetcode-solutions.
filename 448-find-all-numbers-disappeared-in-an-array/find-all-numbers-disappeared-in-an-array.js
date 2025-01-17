/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums){
    let myset = new Set(nums)
    // myset=Array.from(myset)
    console.log(myset)
    let result = []
    for(let i = 1;i<=nums.length;i++){
        if(!myset.has(i)){
            result.push(i)
        }
    }
   return result
};