/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const sortNum = sorting(n)
    
    for (let i = 0; i < 30; i++){
        let x = Math.pow(2, i);
        if(sorting(x) === sortNum){
            return true
        }
    }
    return false
};
function sorting(n){
    const numstr = n.toString().split('')
    console.log(numstr)
    const res = numstr.sort().join('')
    
    return res
}