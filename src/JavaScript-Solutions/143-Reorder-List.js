/*
Vague question to interviewer:
You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

Questions: 
1. What is the longest link list input? (this helps me determin if a bruteforce 
   solution is acceptable). 5 * 10^4. 
2. Are the values in the given linked list sorted in accending order? (This allows 
   me decide whether I can use the values to reorder the linked list) No
3. What is the smallest linked list size that will be given? (This lets me know if 
   I need to be careful of a linked list of length 0 or 1) snakkest length = 1


Test Cases: 
1. 1-2-3-4   => 1-4-3-2     (even length)
2. 1         => 1           (length = 1)
3. 1-2-3-4-5 => 1-5-2-4-3   (odd length)


*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reorderList = function(head) {
 function reverseList(list){
     let h = list;
     let p = list;     
     while(p.next !== null){
        let f = p.next;    
         p.next = f.next;
         f.next = h;    
         h = f;
     }
     return h;
 }
 
 function merge (l1, l2){
     const dummy = new ListNode();
     let p = dummy;
     while(l1 && l2){
         if(l1){
             p.next = l1;
             p = p.next;
             l1 = l1.next;
         }
         if(l2){
             p.next = l2;
             p = p.next;
             l2 = l2.next;
         }
     }
     if(l1) p.next = l1;
     else p.next = l2;
     return dummy.next;
 }
 
 if(head == null || head.next == null ) return  head;
 // split list in half
     //slow and fast pointer approach
 let slow = head;
 let fast = head;
 let end = head;
 while(fast != null && fast.next != null){
     end = slow;
     slow = slow.next;
     fast = fast.next.next;
 }
 end.next = null;
 let list1 = head;
 let list2 = slow;
 

 // function - reverse the second half
     // pointers
 list2 = reverseList(list2);

 // function - merge in alternating order
     // poinetrs
 return merge(list1, list2);

};



/*
split list in half
   slow and fast pointer approach
function - reverse the second half
   pointers
function - merge in alternating order
   poinetrs
p 
  f
  h
1-2 3-4
|___|

    f
    h
  p
|---|  
2-1 3 4
  |___|

      f
      h
    p
|-----|    
3-2-1 4-nul
    |___|

f
h
      p
4-3-2-1-null

p = h

loop while p.next != null
  f = p.next

  p.next = f.next;
  f.next = h

  h = f
*/

/*
1-2-3-4-5
      s
          f


               
            l1
        1 2
dummy / |/|
        4 3-null
            l2
          p

declare a dummy 
connect dummy l1
declare a p = dummy

loop while(l1 != null && l2 != null)

   if(l1 != null)
      p.next = l1
      p = p.next
      l1 = l1.next
   if(l2 != null)
      p.next = l2
      p = p.next
      l2 = l2.next

if(l1 != null) p.next = l1
else p.next = l2

*/
