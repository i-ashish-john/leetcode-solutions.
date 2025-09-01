/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {

    let myset = new Map()
    let limit = arr.length/4

    for(let char of arr){
      myset.set(char,(myset.get(char)||0)+1)

      if (myset.get(char) > limit) {
            return char; 
        }
    }
    console.log(myset)
};