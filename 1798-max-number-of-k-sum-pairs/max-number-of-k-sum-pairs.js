/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    // let operations=0;
    // for(let i = 0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){

    //         if(nums[i]+nums[j] == k){
    //             nums.splice(j,1)
    //             nums.splice(i,1)
    //             operations++
    //             i=-1
    //         }


    //     }
       
    // }
    // return operations
     let map = new Map();
    let count = 0;

    for (let num of nums) {
        let target = k - num;
        if (map.get(target) > 0) {
            count++;
            map.set(target, map.get(target) - 1);
        } else {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }

    return count;
};