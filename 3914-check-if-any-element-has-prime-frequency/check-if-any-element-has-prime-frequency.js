/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    let count ={}
    for(let i of nums){
        if(!count[i]){
            count[i]=1
        }else{
            count[i]++
        }
        
    }

    function isPrime(c){
       if(c <=1){
          return false
       }
        for(let i = 2;i<c;i++){
            if(c % i == 0 ){
              return false
            }
        }
        return true

    }

 for(let k in count){
   if( isPrime(count[k]) == true){
      return true
   }

 }



   return false
    
};