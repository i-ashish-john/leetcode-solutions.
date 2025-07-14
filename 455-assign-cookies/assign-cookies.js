/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b)=>a-b)
    s = s.sort((a,b)=>a-b) 
    // console.log(g)
    let cookie = 0
    let child = 0
    while(child<g.length && cookie <s.length){
        if(s[cookie] >= g[child]){
            child++
        }
        cookie++
    }
    return child
};