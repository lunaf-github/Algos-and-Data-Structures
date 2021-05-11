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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode newNode = new ListNode(0);
        ListNode walker = newNode;
        ListNode runner = newNode;
        newNode.next = head;

        while(n > 0){
            runner = runner.next;
            n--;
        }

        while (runner.next != null){
            runner = runner.next;
            walker = walker.next;
        }

        walker.next = walker.next.next;

        return newNode.next;

    }
}