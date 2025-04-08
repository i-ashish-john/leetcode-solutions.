/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;
    
    let target = total / 2;
    value = new Set([0]);
    
    for (let num of nums) {
        let newPossible = new Set(value);
        for (let s of value) {
            if (s + num === target) return true;
            newPossible.add(s + num);
        }
        value = newPossible;
    }

    return value.has(target);
};