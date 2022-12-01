/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

/**
 *Two pointer method
 *Fast travels twice as fast as slow. By the time fast reaches the end of the linked list, slow will be in the middle
 *of the linked list.
 *It is important to check if the linked list length is even or odd. If it is even, the slow pointer will be at the
 *correct position. If it is odd, we will need to move the slow pointer one more step because it is exactly in the middle.
 *The middle node of an odd lengthed linkedlist is shared by both halfs, so we don't need to use it on
 *our comparison process. We move the slow one node to the right.
 *
 *
 *The reverse fuction will reverse the second half. The slow pointer acts as the head for the second half.
 * For example, linked list 1 -> 2 -> 2(slow) -> 1 will turn into 1 -> 2 -> 1 (slow) -> 2. Then we compare the first half with the second
 * Using a while loop, we compare each side. Once the slow reaches the end, we end the comparison and return true if all values equalled each other.
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        // If odd, move the slow pointer one node to the right.
        if(fast != null) slow = slow.next;
        // run the reverse fuction.
        slow = reverse(slow);
        fast = head;

        while (slow != null){
            if(slow.val != fast.val ) return false;
            slow = slow.next;
            fast = fast.next;
        }
        return true;
    }


    public ListNode reverse(ListNode head){
        ListNode prev = null;

        while(head != null){
            ListNode next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}