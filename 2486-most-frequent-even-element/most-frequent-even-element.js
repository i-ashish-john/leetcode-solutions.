/**
 * @param {number[]} nums
 * @return {number}
 */ 
var mostFrequentEven = function(nums) {
    //[]
    let count = {}

     for( let char of nums){
        if(char % 2 == 0){
            if(!count[char]){
                count[char]= 1
            }else{
                count[char]++
            }
        }
     }
    
     let largest = 0
     let out = -1
    for(let r in count){
        
        if(count[r] > largest){
            largest = count[r]
            out  = Number(r)
        }
    }

    return out
};




