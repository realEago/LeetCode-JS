
var RecentCounter = function() {
  this.que = [];
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
  this.que.push(t);
  while(this.que[0] < t-3000) {
      this.que.shift()
  }  
  return this.que.length
};

/** 
* Your RecentCounter object will be instantiated and called as such:
* var obj = Object.create(RecentCounter).createNew()
* var param_1 = obj.ping(t)
*/


//Runtime: 312 ms, faster than 49.12% of JavaScript online submissions for Number of Recent Calls.
//Memory Usage: 38.9 MB, less than 25.67% of JavaScript online submissions for Number of Recent Calls.