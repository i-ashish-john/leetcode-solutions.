/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let temp = new Array(words.length),count=0,allowe_d= allowed.split('')
    
    for(let i =0;i<words.length;i++){
        temp[i]= words[i]
        for(let j =0;j<allowe_d.length;j++){
            temp[i] = temp[i].replaceAll(allowe_d[j],'')
        }
        if(temp[i]==''){
            count++
        }
    }
    return count
};