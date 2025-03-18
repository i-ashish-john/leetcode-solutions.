/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    if(nums.length%2 !== 0) return false
    let frequency ={}
    for(let elem of nums){
        frequency[elem] = (frequency[elem]||0)+1
    }
    for(let findEven of Object.values(frequency)){
        if(findEven%2!==0)return false
    }
    return true
};