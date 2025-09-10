/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    nums.sort((a,b) => a-b);
    let moves = 0, prev = -Infinity;

    for (let x of nums) {
        let target = Math.max(x, prev + 1);
        moves += target - x;
        prev = target;
    }

    return moves;
};




