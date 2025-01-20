/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count =0;
    for(let i =0;i<items.length;i++){
        for(let j =0;j<items[i].length;j++){
              if(ruleKey =='color' && j == 1){
                if(items[i][j]==ruleValue){count++}
              }else if(ruleKey == 'type' && j == 0){
                if(items[i][j]==ruleValue){count++}
              }else if(ruleKey =='name' && j == 2){
                if(items[i][j]==ruleValue){count++}
              }
        }
    }
    return count
};