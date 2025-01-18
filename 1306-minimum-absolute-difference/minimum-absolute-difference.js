/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr){
    arr.sort((a,b)=>a-b)
    // let result
    let result = [],smallest =0,final=[]
    let map = new Map()  
    for(let i =0;i<arr.length-1;i++){
        if(!map.has(arr[i])){
            map.set(arr[i],arr[i+1])
        }
    }
    for(let [key,value]of map){
        result.push([key,value])
    }  
    smallest = Math.min(...result.map(pair => pair[1] - pair[0]))
    final = result.filter(pair => pair[1] - pair[0] === smallest)
    return final
};