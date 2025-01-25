/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let sum =0
//   let nums1 = [...nums]
  for(let i=0; i<nums.length;i++){
    // let sorted =nums1.sort((a,b)=>b-a)
    // console.log('sorted',sorted);
    let flag = true;
    for(let j=0;j< nums.length;j++){
        if(nums[j]===nums[i] &&  i!=j){
            flag = false
        }
    }
    if(flag==true){
        sum+=nums[i]
    }
    
  }
  return sum

};