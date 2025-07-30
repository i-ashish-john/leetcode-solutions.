/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
        //   [1,2,1,4,1]
        //121, 234  , 141
        // 1. 1+1 = 2 !  2/2 =0
        // 2. 2+4 =6   !  3/2 =1
        // 3.1+1 = 2  ==   4/2 = 2. count ++
        let count =0
        for(let i = 0 ;i< nums.length; i++ ){
            // for(let j = i ; j<=3 ;j++ ){
                let a = nums[i], b = nums[i+1], c = nums[i+2]
                if(b%2==0 && (a+c === b/2)){
                    count++
                 }
        //  }
     }      
              return count
};