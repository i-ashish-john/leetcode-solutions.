/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let Obj = {};
    Obj[k] = true;
    let res = 0;
    for (let num of nums) {
        if (num < k) return -1;
        if (!Obj[num]) {
            Obj[num] = true;
            res++;
        }
    }
    return res;
};