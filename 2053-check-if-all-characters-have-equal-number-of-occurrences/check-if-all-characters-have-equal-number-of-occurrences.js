/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let map = new Map()
    for(let char of s){
        if(map.has(char)){
            map.set(char,map.get(char)+1)
        }else{
            map.set(char,1)
        }
    }
    let freq =  new Set(map.values())

    return freq.size === 1
};