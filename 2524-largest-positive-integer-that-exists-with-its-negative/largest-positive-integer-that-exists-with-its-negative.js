/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    
    nums.sort((a,b)=>b-a)
    console.log(nums)
    for(let i =0;i<nums.length;i++){
        for(let j =i+1;j<nums.length;j++){
               if(0-nums[i]== nums[j]){
                    return nums[i]
               }
        }
        
    }
   return -1
};