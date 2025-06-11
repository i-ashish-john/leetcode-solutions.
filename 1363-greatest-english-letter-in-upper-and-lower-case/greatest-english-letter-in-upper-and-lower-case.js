/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const set = new Set(s);
    let result = '';

    for (let i = 0; i < 26; i++) {
        let upper = String.fromCharCode(65 + i); 
        let lower = String.fromCharCode(97 + i); 
        // console.log('upper--->'+upper, 'lower---->'+lower)
        if (set.has(upper) && set.has(lower)) {
            result = upper; 
        }
    }

    return result;
};
