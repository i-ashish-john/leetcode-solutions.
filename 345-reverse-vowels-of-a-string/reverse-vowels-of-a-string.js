/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    let arr = []
     let index ;
    let char = s.split('')
    for(let k =0;k<s.length;k++){
                if(vowels.includes(s[k])){
                  arr.push(s[k])
                }
    }
    
          index = arr.length-1
            for(let j = 0; j<char.length;j++){
                if(vowels.includes(char[j] )){
                    char[j] =arr[index]
                    index--
                }
            }
   
    return char.join('')
   
};
