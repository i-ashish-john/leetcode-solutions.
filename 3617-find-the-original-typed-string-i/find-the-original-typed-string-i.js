/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let count = 1;
    let len = word.length;
    let i=0;
    while(i<len){
        let c =1;
        let curr = word[i];
        while(i < len - 1 && curr === word[i+1]){
            c++;
            i++;
        }
        i++;
        count += c-1;
    }
    return count;
};