/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
 
    while (s.length > 2) {
        let result = '';
        for (let i = 0; i < s.length - 1; i++) {
            let sum = (s[i] - '0') + (s[i + 1] - '0');
            result += (sum % 10).toString();
        }
        s = result;
    }
    return s[0] === s[1];
};

