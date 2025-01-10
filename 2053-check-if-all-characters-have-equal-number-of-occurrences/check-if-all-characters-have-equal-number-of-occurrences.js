/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let check = {}
    for(let char of s){
        check[char] = (check[char]||0)+1
    }
    let values = Object.values(check)
    return new Set(values).size==1
};