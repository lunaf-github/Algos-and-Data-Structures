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
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode newHead = null;
        ListNode current = head;

        while(current != null){
            ListNode nextCurrent = current.next;
            current.next = newHead;
            newHead = current;
            current = nextCurrent;

        }

        return newHead;


    }
}