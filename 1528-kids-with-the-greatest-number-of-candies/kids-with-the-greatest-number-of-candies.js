/**
 * @param {number[]} candies=
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let n = candies.length
    let resultArr= new Array(n).fill(true)
    // console.log(resultArr)
    let ca = [...candies]
    // console.log(ca)
    ca.sort((a,b)=>b-a)
    let largest = ca[0]
    for(let i = 0;i<candies.length;i++){
        // console.log(candies[i])
        let check =candies[i]+extraCandies
        if(check < largest){
            // console.log(candies[i])
            resultArr[i]=false
        }
    }
 
return resultArr

};