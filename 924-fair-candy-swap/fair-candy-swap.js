/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    // let alice_S = Math.min(...aliceSizes)
    // let alice_B = Math.max(...aliceSizes)
    // let alice_total = aliceSizes.reduce((a,b)=>a+b,0)

    // let bob_S = Math.min(...bobSizes)
    // let bob_B = Math.max(...bobSizes)
    // let bob_total = bobSizes.reduce((a,b)=>a+b,0)

    // let answer1 = alice_total - alice_S + bob_B 
    // let answer2 = bob_total - bob_S + alice_B
    // return [answer1,answer2]

    const sumA = aliceSizes.reduce((a, b) => a + b, 0);
    const sumB = bobSizes.reduce((a, b) => a + b, 0);
    
    const target = (sumA - sumB) / 2;
       
    const bobSet = new Set(bobSizes);
     console.log(bobSet)
    for (let a of aliceSizes) {
        const b = a - target;
        if (bobSet.has(b)) {
            return [a, b];
        }
    }
    
    return [];

};