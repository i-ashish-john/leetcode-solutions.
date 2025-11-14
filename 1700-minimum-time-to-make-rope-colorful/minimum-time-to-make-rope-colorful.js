/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let totalTime = 0;
    let i = 0;
    const n = colors.length;
    
    while (i < n) {
        let j = i;
        let maxTime = neededTime[i];
        let groupSum = neededTime[i];
        
        while (j + 1 < n && colors[j] === colors[j + 1]) {
            j++;
            maxTime = Math.max(maxTime, neededTime[j]);
            groupSum += neededTime[j];
        }
        
        if (j > i) {
            totalTime += (groupSum - maxTime);
        }
        
        i = j + 1; // Move to next different color
    }
    
    return totalTime;
};