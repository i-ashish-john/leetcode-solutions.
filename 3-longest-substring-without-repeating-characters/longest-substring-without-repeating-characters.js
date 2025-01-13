/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let str ='',maxlength = 0
    for(let i = 0 ;i<s.length;i++){

        if(str.includes(s[i])){          
           str = str.slice(str.indexOf(s[i])+1)
        }
        str+=s[i]
       maxlength = Math.max(maxlength,str.length)
    }   
    return maxlength
};