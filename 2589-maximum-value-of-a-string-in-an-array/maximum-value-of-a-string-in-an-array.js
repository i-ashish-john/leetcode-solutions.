/**
 * @param {string[]} strs
 * @return {number}
 */
function maximumValue(strs) {
    let max = 0;
    for (let str of strs) {
        let count = 0;
        if (!isNaN(str)) { 
            count = parseInt(str); 
        } else {
            count = str.length;
        }
        max = Math.max(max, count); 
    }
    return max;
}