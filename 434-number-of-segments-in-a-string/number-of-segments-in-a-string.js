/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
const segments = s.trim().split(/\s+/).filter(word => word.length > 0);
    
    return segments.length;
};