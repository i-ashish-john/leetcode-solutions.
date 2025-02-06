/**
 * @param {string[]} strs
 * @retu
 rn {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    console.log(strs[1])
    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 1; i < strs.length; i++) { 
            if (strs[i][j] < strs[i - 1][j]) {
                count++;
                break;
            }
        }
    }
    return count;
};