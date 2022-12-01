/** Given head, the head of a linked list, determine if the linked list has a cycle in it.

        There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

        Return true if there is a cycle in the linked list. Otherwise, return false.



        Example 1:


        Input: head = [3,2,0,-4], pos = 1
        Output: true
        Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
        Example 2:


        Input: head = [1,2], pos = 0
        Output: true
        Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
        Example 3:


        Input: head = [1], pos = -1
        Output: false
        Explanation: There is no cycle in the linked list.


        Constraints:

        The number of the nodes in the list is in the range [0, 104].
        -105 <= Node.val <= 105
        pos is -1 or a valid index in the linked-list.

 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */

/**
 *We create two pointers referenced to the head.  The walker will transverse the linked list by one while the
 *Runner will transverse the linked list by two. If the linked list has a cycle, it will eventually catch up with
 *the walker. If it is not a cycle, the runner will end up reaching the end of the cycle.
 */



public class Solution {
    public boolean hasCycle(ListNode head) {

        ListNode walker = head;
        ListNode runner = head;
        while (runner != null && runner.next != null){


            walker = walker.next;
            runner = runner.next.next;
            if (walker == runner) return true;
        }

        return false;

    }
}
