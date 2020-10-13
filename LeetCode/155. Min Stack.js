/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.store = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.store.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.store.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.store[this.store.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return Math.min(...this.store)
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

//Runtime: 252 ms, faster than 10.64% of JavaScript online submissions for Min Stack.
//Memory Usage: 26.3 MB, less than 28.57% of JavaScript online submissions for Min Stack.