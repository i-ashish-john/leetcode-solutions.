/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let str = s.split(' ')
    for(let char in str){
        // console.log(chr)
        str[char] = reverse(str[char])
    }
    return str.join(' ')
};

function reverse(string){
   return string.split('').reverse().join('')
}