/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map(), strArr=[]
    for(let char of s){
        map.set(char,(map.get(char)||0)+1)
    }
    // console.log(map)
    for(let [key,value] of map){
      strArr.push([key,value])
    }
    // console.log(strArr)
let sortingMap  = strArr.sort((a,b)=>b[1]-a[1])
// console.log(sortingMap)
let string = ''
 for(let val of sortingMap){
        while(val[1]>0){
             string+=val[0]
             val[1]-=1
        }
 }
 return string
};