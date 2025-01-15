/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let p = pattern.split('');
    let words = s.split(' ');
    
    if (p.length !== words.length) {
        return false;
    }
    let map = new Map();
    
    for (let i = 0; i < p.length; i++) {
        if (map.has(p[i])) {
            
            if(map.get(p[i]) !== words[i]){
                return false;
            }
        } else {
            if ([...map.values()].includes(words[i])) {
                return false;
            }
            map.set(p[i], words[i]);
        }
    }
    
    return true;
};