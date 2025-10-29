/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let i= 0, j= 0
    for(let char of commands){
        if(char=="DOWN"){
            i++
        }else if(char=="UP"){
            i--
        }else if(char== "LEFT"){
            j--
        }else{
            j++
        }
    }
    return n*i+j
};