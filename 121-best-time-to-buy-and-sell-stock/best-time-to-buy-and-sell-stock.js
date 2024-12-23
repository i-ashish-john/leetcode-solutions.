/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minProfit = Infinity
    let maxProfit =0
    for(let pro of prices){
        if(pro<minProfit){
            minProfit = pro
        }else if (pro - minProfit > maxProfit){
             maxProfit = pro-minProfit
        }
    }
    return maxProfit
};