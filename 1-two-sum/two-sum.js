/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // nums.sort((a,b)=>b-a)
    let result = []
    for(let i =0;i<nums.length;i++){
        for(let j =i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                result.push(i,j)
            }
        }
    }
    return result
};