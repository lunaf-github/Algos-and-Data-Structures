/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
  Input: head = [1,2,3,4,5]
  Output: [5,4,3,2,1]
Example 2:
  Input: head = [1,2]
  Output: [2,1]
Example 3:
  Input: head = []
  Output: []
 
Constraints:
  The number of nodes in the list is the range [0, 5000].
  -5000 <= Node.val <= 5000
 
Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

const reverseList = function (head){
  if(!head) return head;
  let cur = head;
  let pivot = head.next;

  while(pivot != null){
    cur.next = pivot.next;
    pivot.next = head;
    head = pivot;
    pivot = cur.next;
  }
  return head;
}

/*
  h
|---|
1-2 3-4-5
c
  p
  
 
    h  
  |---|
2-1 3 4-5
| c p
|___|  
    
    
3-2-1-4-5
  
while(pivot != null)
    

cur.next = pivot.next;
pivot.next = head;
head = pivot;
pivot = cur.next;


*/