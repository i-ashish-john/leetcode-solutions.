/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // if(nums.length == 0) return -1

   let leftSum = 0;
   let rightSum = nums.reduce((acc,num)=>acc+num,0)

   for(let i =0;i<nums.length;i++){
        rightSum -= nums[i]
        
        if(leftSum == rightSum){
            return i
        }

        leftSum+=nums[i]
    }
    return -1
};
