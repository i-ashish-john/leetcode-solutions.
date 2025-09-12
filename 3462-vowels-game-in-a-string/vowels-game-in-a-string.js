/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    for (let i = 0; i < s.length; ++i) {
        const v = s[i];
        if (v === 'a' || v === 'e' || v === 'i' || v === 'o' || v === 'u')
            return true;
    }
    return false;
};