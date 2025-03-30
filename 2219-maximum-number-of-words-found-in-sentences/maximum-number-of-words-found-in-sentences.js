/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let Arr =[]
    for(let item of sentences){
        count(item,Arr)
    }
    return Math.max(...Arr)
};

function count(item,arr){
    let count=0
    item = item.split(' ')
    for(let i = 0;i<item.length;i++){
            count++
    }
    arr.push(count)
    return arr
}   