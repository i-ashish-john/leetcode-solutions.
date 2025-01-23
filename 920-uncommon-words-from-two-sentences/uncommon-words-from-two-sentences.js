/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let words = s1.split(' ').concat(s2.split(' '))
    let result =[],Count={}

    for(let word of words){
        Count[word] =(Count[word]||0)+1
    }
     for(let n in Count){
        if(Count[n] == 1){
            result.push(n)
        }
     }
      return result
};
