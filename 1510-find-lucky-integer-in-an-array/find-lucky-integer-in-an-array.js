/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let count = {};

    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    let maxLucky = -1;

    for (let num in count) {
        num = Number(num);
        if (count[num] === num) {
            maxLucky = Math.max(maxLucky, num);
        }
    }

    return maxLucky;
};
