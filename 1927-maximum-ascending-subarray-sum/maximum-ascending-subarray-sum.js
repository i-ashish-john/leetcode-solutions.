/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let maxSum = nums[0],sum = nums[0]
    for(let i=1;i<nums.length;i++){
            if(nums[i] > nums[i-1]){
                sum+=nums[i]
            }else{
                maxSum = Math.max(maxSum,sum)
                sum = nums[i]
            }
    }
    return Math.max(maxSum,sum)
};

