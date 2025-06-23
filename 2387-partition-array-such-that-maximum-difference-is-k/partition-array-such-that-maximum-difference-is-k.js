/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let counter = 1, minIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(((nums[i]-nums[minIndex]) > k)){
            counter++;
            minIndex = i;
        }
    }
    return counter;
};