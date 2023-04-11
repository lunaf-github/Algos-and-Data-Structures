/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
 const freqMap = new Map();
 const minHeap = new MinPriorityQueue();
 const cardHolder = [];
 
 //record card quantities
 for (const card of hand) {
     if (!freqMap.get(card)) freqMap.set(card, 0);
     freqMap.set(card, freqMap.get(card) + 1);
 }

 // populate minheap
 freqMap.forEach(pushKeyToMinHeap);

 // Djistra's Algorithm
 var startCard = minHeap.front().element;
 var k = 0;
 
 while (minHeap.size() !== 0) {

         
     const card = minHeap.dequeue().element;
     
     if(card !== startCard + k) return false;
     
     if (freqMap.get(card) > 1) {
         cardHolder.push(card);
     }
     
     freqMap.set(card, freqMap.get(card) - 1);
     k += 1;
     
     if (k === groupSize) {
         k = 0;
         while (cardHolder.length !== 0) {
             minHeap.enqueue(cardHolder.pop());
         }
         
         if (minHeap.size() > 0) {
             startCard = minHeap.front().element;
         }
     }
 }

 return k === 0;
 
 // **************************************************
 
 function pushKeyToMinHeap(value, key) {
     minHeap.enqueue(key);
 }
 
};

