/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map(),result =[]
    arr.forEach(item=>{
        map.set(item,(map.get(item)||0)+1)
    })
    // for(let c of map){
    //   let a =  Object.values(c)
    //  result.push(a)
    // }
  let count =   Array.from(map.values())
   return count.length === new Set(count).size
};