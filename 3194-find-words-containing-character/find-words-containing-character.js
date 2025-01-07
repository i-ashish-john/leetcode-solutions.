/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let index = []
    for(let i = 0; i < words.length ; i++ ){
         if(itterate(words[i],x)){
            index.push(i)
         }
    }
return index
};
function itterate(char,x){
   for(s of char){
        if(s==x){
            return true
        }
   }
}