/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
  return word.length >= 3        &&
  /[aeiouAEIOU]/.test(word)      &&
  /[b-df-hj-np-tv-z]/i.test(word)&&
  /^[a-zA-Z0-9]+$/.test(word)
    
};