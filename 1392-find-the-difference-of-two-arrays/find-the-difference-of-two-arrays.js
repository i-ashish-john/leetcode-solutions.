/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let main = [],r1=[],r2=[]
    for(let n of nums1){
        console.log(n)
        if(!r1.includes(n)){

        if(!nums2.includes(n)){
            r1.push(n)
        }

        }
    }

    for(let m of nums2){

        if(!r2.includes(m)){

        if(!nums1.includes(m)){
            r2.push(m)
        }
        
        }
        
    }
     main.push(r1,r2)
    return main
};