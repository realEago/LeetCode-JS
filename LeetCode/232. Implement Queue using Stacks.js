/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.store = []
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.store.push(x)
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if(this.peek() !== null)
     var a = this.peek()
     this.store.shift()
      return a
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  return this.store[0]
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.store.length == 0
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = Object.create(MyQueue).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/

//Runtime: 68 ms, faster than 25.98% of JavaScript online submissions for Implement Queue using Stacks.
//Memory Usage: 14.5 MB, less than 13.79% of JavaScript online submissions for Implement Queue using Stacks.
