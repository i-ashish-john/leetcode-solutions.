/** 
 * @param {number} n
 * @return {number}
 */ 
var sumAndMultiply = function(n) {
const str = n.toString(); 

let sum = 0;
let concatStr = ''

for (let char of str) {
    if (char !== '0') { 
        concatStr += char
        sum += Number(char)
    }
}

return sum * Number(concatStr)
    
};




