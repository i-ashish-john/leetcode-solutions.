
var MyQueue = function() {
    this.item =[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.item.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let value =  this.item.shift()
    return value
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.item[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.item.length ==0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */