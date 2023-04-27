
var TimeMap = function() {
 this.store = new Map();
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
 if (!this.store.has(key)) this.store.set(key, []);
 this.store.get(key).push({value, timestamp});
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
 if (!this.store.has(key)) return '';
 
 const values = this.store.get(key);  
 var res = '';
 var l = 0;
 var r = values.length - 1;
 
 while (l <= r) {
     const mid = Math.floor(l + (r - l)/2);
     const {value: midValue, timestamp: midTimestamp} = values[mid];
     
     if (midTimestamp === timestamp) return midValue;
     
     if (midTimestamp < timestamp) {
         res = midValue
         l = mid + 1;
     } else {
         r = mid - 1;
     }
 }
     
 return res;
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/
