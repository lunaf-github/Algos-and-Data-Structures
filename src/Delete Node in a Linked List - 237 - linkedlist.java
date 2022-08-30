/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

/* We are not given the head of the linked list, but are given the node that needs to be deleted.
in order to delete the given node, we will copy the node that is next to it. Then we can delete the next node.
*/

class Solution {
    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;

    }
}