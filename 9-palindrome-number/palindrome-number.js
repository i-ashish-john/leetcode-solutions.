/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = String(x).split('')
    let start=0,end = x.length-1
    if(x[start]!==x[end]) return false
    while(start<=end){
        if(x[start] === x[end]){
            start++
            end--
        }else{
            return false
        }
    }
    return true
};