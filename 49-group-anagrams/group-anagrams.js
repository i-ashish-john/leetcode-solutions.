/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let MAP={}
   for(let word of strs){
    let sorted = word.split('').sort().join('')
    if(!MAP[sorted]){
        MAP[sorted] = []
    }
        MAP[sorted].push(word);

    // console.log(MAP)

}

let result = Object.values(MAP);

return result

};