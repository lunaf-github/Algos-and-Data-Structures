/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
 const dummy = new ListNode();
 var cur = dummy;
 var p1 = l1;
 var p2 = l2;   
 var carry = 0; 
 
 while (p1 || p2) {
     const a = (p1)? p1.val: 0;
     const b = (p2)? p2.val: 0;
     
     const sum = a + b + carry;
     carry = Math.floor(sum / 10); 
     cur.next = new ListNode(sum % 10);
     cur = cur.next;
     
     if(p1) p1 = p1.next;
     if(p2) p2 = p2.next;
 }
 
 if (carry > 0) {
     cur.next = new ListNode(carry);
 }
 
 return dummy.next;
};


 
 
 

