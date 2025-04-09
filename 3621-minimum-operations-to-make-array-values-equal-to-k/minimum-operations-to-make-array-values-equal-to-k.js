/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let hash = {};
    hash[k] = true;
    let res = 0;
    for (let num of nums) {
        if (num < k) return -1;
        if (!hash[num]) {
            hash[num] = true;
            res++;
        }
    }
    return res;
};