// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var arrayPairSum = function(nums) {
//     nums.sort((a,b)=>a-b)
//     let result = 0
//     for (let i = 0; i < nums.length; i += 2) {
//         result += Math.min(nums[i], nums[i+1])
//         console.log(result)
//     }
//     return result
// }
/**
 * @param {number[]} nums
 * @return {number}
 */

const sortedArray = (array) => {
    const arrayLength = array.length

    if(arrayLength < 2) {
        return array
    }

    const midPoint = Math.floor(arrayLength / 2)
    const leftList = sortedArray(array.slice(0, midPoint))
    const rightList = sortedArray(array.slice(midPoint))

    const res = []
    let leftPtr = 0
    let rightPtr = 0

    while(leftPtr < midPoint || rightPtr < arrayLength - midPoint) {
        if(leftList === midPoint) {
            res.push(rightList[rightPtr])
            rightPtr++
        } else if (rightPtr === arrayLength - midPoint) {
            res.push(leftList[leftPtr])
            leftPtr++
        } else if (leftList[leftPtr] < rightList[rightPtr]) {
            res.push(leftList[leftPtr])
            leftPtr++
        } else {
            res.push(rightList[rightPtr])
            rightPtr++
        }
    }

    return res
}


var arrayPairSum = function(nums) {
    const updatedArray = sortedArray(nums)

    let sum = 0

    for(let i  = 0; i < updatedArray.length;) {
        sum+=Math.min(updatedArray[i], updatedArray[i+1] || 0)
        i+=2
    }

    return sum
};