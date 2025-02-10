/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let lv;
    let rv;
    let sorted = [];
    while (l <= r) {
        if (
            (lv = Math.abs(nums[l])) >=
            (rv = Math.abs(nums[r]))
        ) {
            sorted.push(lv);
            l++;
        } else {
            sorted.push(rv);
            r--;
        }
    }
    return sorted.reverse().map(x => x * x);
};