/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if(arr.length<2) return false
    arr.sort((a,b)=>b-a)
    let s = arr[0]-arr[1]
    console.log(s)
    for(let i = 1;i<arr.length;i++){
        if(arr[i-1] - arr[i] !== s ){
            return false
        }
    }
    return true
};