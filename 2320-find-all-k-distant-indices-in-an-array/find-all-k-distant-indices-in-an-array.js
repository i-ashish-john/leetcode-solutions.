/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
function findKDistantIndices(nums, key, k) {
    const n = nums.length, res = [], { min, max } = Math;
    for (let i = 0, right = 0; i < n; i++) {
        if (nums[i] === key) {
            const left = max(right, i - k);
            right = min(n - 1, i + k) + 1;
            for (let j = left; j < right; j++) res.push(j);
        }
    }
    return res;
}