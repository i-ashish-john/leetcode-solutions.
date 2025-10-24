/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length== 0) return 0 

    nums = nums.sort((a,b)=>a-b)

    let currcount = 1
    let maxcount = 1

    for(let i = 0; i< nums.length;i++){

        if(nums[i] == nums[i-1])continue
        if(nums[i] == nums[i-1]+1){
             currcount++
             maxcount = Math.max(maxcount,currcount)
        } else{
            currcount=1
        }
        
    }
    return maxcount
};