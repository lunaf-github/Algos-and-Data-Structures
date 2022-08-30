/**Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

        There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

        Notice that you should not modify the linked list.



        Example 1:


        Input: head = [3,2,0,-4], pos = 1
        Output: tail connects to node index 1
        Explanation: There is a cycle in the linked list, where tail connects to the second node.
        Example 2:


        Input: head = [1,2], pos = 0
        Output: tail connects to node index 0
        Explanation: There is a cycle in the linked list, where tail connects to the first node.
        Example 3:


        Input: head = [1], pos = -1
        Output: no cycle
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
 *Create a runner and walker node. The runner will move twice a fast as the walker. If the linked list has a cycle, it will eventually
 *do a whole lap and catch up with the walker.
 *Now, let say that the distance between the head node and the start of cycle is A. Distance B will be the distance after the start of the cycle
 *until the runner catches up to it. Distance C is the distance between where the runner met the walker and the start of the cycle.
 *The runner will travel a distance of A + 2B + C ( or A + B + (C + B)) while the walker will move a ditance of A + B. During the time the walker
 * moved to a distance of A + B, the runner moved twice this distance. So the runner moved 2(A+B) or 2A + 2B. So now we know that the distance of
 * of the runner can be calculated in two ways. A+2B+C = 2A + 2B. Doing some algebra, we get A = C. note that the distance from the head and start
 *of the cycle is A. If the walker continues walking after it met with the runnder and we create another walker starting form the head. Both walkers
 *moving at the same speed. Once walker will move a distance of A and another walker a Distance of C. They will end up meeting at the start of the
 *cycle.
 */

public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode walker = head;
        ListNode runner = head;

        while(runner != null && runner.next != null){
            walker = walker.next;
            runner = runner.next.next;
            if(runner == walker){
                ListNode walker2 = head;
                while(walker != walker2){
                    walker = walker.next;
                    walker2 = walker2.next;
                }
                return walker;
            }
        }
        return null;
    }
}
