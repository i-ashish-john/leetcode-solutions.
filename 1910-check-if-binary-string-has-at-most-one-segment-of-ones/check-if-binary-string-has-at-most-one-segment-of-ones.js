/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    
    let hasSeenZero = false;
    
    for (let char of s) {
        if (char === '0') {
            hasSeenZero = true;
        } else if (hasSeenZero) {
            return false;
        }
    }
    
    return true;
};