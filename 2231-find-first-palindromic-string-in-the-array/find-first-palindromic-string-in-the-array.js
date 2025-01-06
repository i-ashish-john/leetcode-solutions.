/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
       if(check(words[i])){
          return `${words[i]}`
       }
    }
    return ""
};
function check(s){
    //  s = s.split('')
//    if(s.length ==1){
//     return true
//    }
//    if(s[0] == s[s.length-1]){
//       return check(s.slice(1,-1))
//    }
let left =0
let right = s.length-1

while(left<right){
    if(s[left] !== s[right]){return false}
    left++
    right--
}
   return true
};
