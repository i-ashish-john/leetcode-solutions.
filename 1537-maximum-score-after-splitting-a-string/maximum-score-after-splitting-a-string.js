/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let num = s.length
    let maxScore = 0,leftZeros=0,rightOnes=0
    for(let char of s){
        if(char == '1') rightOnes++
    }
    for(let i =0;i<num-1;i++){
        if(s[i] == '0'){
            leftZeros++
        }else{
            rightOnes--
        }
        maxScore=Math.max(maxScore,leftZeros+rightOnes)
    }
    return maxScore
};