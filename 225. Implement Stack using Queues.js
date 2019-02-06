/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.store = []
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.store.push(x)
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  var t = this.store[this.store.length - 1]
  this.store.pop()
  return t
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.store[this.store.length - 1]
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.store.length == 0
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = Object.create(MyStack).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/

//Runtime: 68 ms, faster than 32.52% of JavaScript online submissions for Implement Stack using Queues.
//Memory Usage: 14.5 MB, less than 27.27% of JavaScript online submissions for Implement Stack using Queues.