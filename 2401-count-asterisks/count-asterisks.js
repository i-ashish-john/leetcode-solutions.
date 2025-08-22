/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let asteriskCount = 0; 
    let insidePair = false; 

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '|') {
            insidePair = !insidePair;
        } else if (char === '*' && !insidePair) {
            asteriskCount++;
        }
    }
    return asteriskCount; 
}