/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let num = new Set(nums)
    let arr = Array.from(num)
    arr.sort((a,b)=>b-a)
    if(arr.length >=3){
     return arr[2]
    }else{
        return arr[0]
    }
    // return arr[0]
};