// we choose the character with the most frequency because this minimizes the idle time. 
// If we start wit hthe smallest frequence, we will be left with the character with the
// most frequency and will be forced to take the cool down idle time. 

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

var leastInterval = function(tasks, n) {
    
 if (n === 0) return tasks.length;
 
 const freqMap = new Map();
 const maxHeap = new MaxPriorityQueue();
 var time = 0;
 
 for (const task of tasks) {
     if (!freqMap.has(task)) freqMap.set(task, 0);
     freqMap.set(task, freqMap.get(task) + 1);
 }
 
 freqMap.forEach(addValueToMaxHeap);
 
 while (maxHeap.size() !== 0) {
     const waitlist = [];
     let cooldown = n + 1;
     
     while (cooldown > 0 && maxHeap.size() !== 0) {
         let freq = maxHeap.dequeue().element;
         
         if (freq > 1) waitlist.push(freq - 1);
         
         time += 1;
         cooldown -= 1;    
     }
     
     waitlist.forEach(addValueToMaxHeap);
     
     if (maxHeap.size() !== 0) time += cooldown;
     
 }
 
 return time;
 
 // ************************************
 function addValueToMaxHeap(value) {
     maxHeap.enqueue(value);
 }
 
};


