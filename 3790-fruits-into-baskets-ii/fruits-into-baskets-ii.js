/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    // let swap = false
    let locate = Array(fruits.length).fill(false)
    for(let i = 0; i < fruits.length ; i++){
        for(let j = 0; j < baskets.length ; j++){

            if(!locate[j] && fruits[i]<=baskets[j]){
                locate[j]=true
                break
            }
        }
    }
    let nonloc = 0
    for(let i = 0 ;i < locate.length;i++){
        if(!locate[i]){
            nonloc++
        }
    }
    return nonloc
};