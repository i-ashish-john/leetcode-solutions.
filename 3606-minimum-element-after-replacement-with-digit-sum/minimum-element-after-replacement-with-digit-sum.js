/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let minSum = Infinity
    for (let num of nums) {
        let sum = 0;
        for (let val of num.toString()) {
            
            sum += parseInt(val);
           
        }
            // console.log(sum)
        minSum = Math.min(minSum,sum);
    }
    return minSum;
}