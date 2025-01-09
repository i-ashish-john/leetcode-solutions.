/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    // let minSum = Infinity
    // for (let num of nums) {
    //     let sum = 0;
    //     for (let val of num.toString()) {
            
    //         sum += parseInt(val);
           
    //     }
    //         // console.log(sum)
    //     minSum = Math.min(minSum,sum);
    // }
    let min = 0
    let prev = 0

    for(let i = 0; i < nums.length; i++){
        let value = nums[i].toString()
        .split('')
        .reduce((acc, curr) => parseInt(curr) + acc, 0);
        nums[i] = value
    }

    return Math.min(...nums)

}