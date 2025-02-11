/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0 
 
  while(n!==0){
        let num = n%10
         product*= num
         sum+= num
         n = Math.floor(n/10)
  }
  return product-sum
};
