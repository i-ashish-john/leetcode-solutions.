/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let n = questions.length;
    let dp = new Array(n + 1).fill(0); 

    for (let i = n - 1; i >= 0; i--) {
        let [points, brainpower] = questions[i];
        let nextIndex = i + brainpower + 1;
        
        let take = points + (nextIndex < n ? dp[nextIndex] : 0);
        let skip = dp[i + 1]; 
        
        dp[i] = Math.max(take, skip);
    }

    return dp[0];
};



