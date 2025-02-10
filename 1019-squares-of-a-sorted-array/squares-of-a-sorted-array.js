/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
//      let r =[]
//     nums.map((item)=>{
//         let s = item*item
//         r.push(s)
//     })
//   return  r.sort((a,b)=>a-b)

return nums.map(x => x * x).sort((a,b)=>a-b)



};