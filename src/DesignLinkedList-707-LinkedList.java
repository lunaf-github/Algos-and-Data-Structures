/*     Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
        A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
        If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

        Implement the MyLinkedList class:

        MyLinkedList() Initializes the MyLinkedList object.
        int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
        void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
        void addAtTail(int val) Append a node of value val as the last element of the linked list.
        void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
        void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.


        Example 1:

        Input
        ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
        [[], [1], [3], [1, 2], [1], [1], [1]]
        Output
        [null, null, null, null, 2, null, 3]

        Explanation
        MyLinkedList myLinkedList = new MyLinkedList();
        myLinkedList.addAtHead(1);
        myLinkedList.addAtTail(3);
        myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
        myLinkedList.get(1);              // return 2
        myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
        myLinkedList.get(1);              // return 3


        Constraints:

        0 <= index, val <= 1000
        Please do not use the built-in LinkedList library.
      At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.
*/
/*
We have a linked list that is enclosed inside a class called MyLinkedList. The MylinkedList class includes methods that facilitate the manipulation of the linkedlist.
*/


class MyLinkedList {

/*
Start off by creating a variable to keep track of the length of the linkedlist. Create a
variable called a head and set it as a Node type. The head variable is used to reference the next node.

Then, the node class is created.
*/

    int length;
    Node head;

    class Node {
        int val;
        Node next;
        Node(int val){
            this.val = val;
        }
    }

/*
The startup linkedlist is an empty linked list, so length will be 0 and the head node is null.
This creates an instance of the MyLinkedList class, and instructions to build a linkedlist
is created.
*/

    /** Initialize your data structure here. The MyLinkedList constructor function */
    public MyLinkedList() {
        this.length = 0;
        this.head = null;
    }

    /*

        /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
    public int get(int index) {
        // check for invalid index, less than 0 or index greater than the length.
        if( index < 0 || index >= this.length) return -1;
        else{
            // If the index is valid, then create a new reference variable and reference it to the head node.
            // start a counter at zero.
            Node curr = head;
            int counter = 0;
            // Loop until the counter is equal to the index we are looking for. In every iteration, the
            // curr reference variable will be assigned to the next node.
            while ( counter != index){
                curr = curr.next;
                //   System.out.println(curr.val);
                counter++;
            }
            // In a linked list, we need to go through each node until we find the desired node to get its value.
            // Once we found the Node located at the index specified, we can return the node's value.
            return curr.val;
        }
    }

    /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
    public void addAtHead(int val) {
        //create the new node that needs to be added with the desired value
        Node newNode = new Node(val);
        //link new node to the head
        newNode.next = this.head;
        //Reassign the head reference variable to the newNode.
        this.head = newNode;
        //Add length since we added a new node.
        this.length++;
    }

    /** Append a node of value val to the last element of the linked list. */
    public void addAtTail(int val) {
        // Check if the linked list has any values, if no values then run the addAtHead method. This will create
        // the first node.
        if(this.length == 0){
            addAtHead(val);
            return;
        }
        // Create the new node we plan to add with the desired value.
        Node newNode = new Node(val);
        // Reference a new name to the head.
        Node temp = this.head;
        // Loop through the linked list until we hit the end. The temp reference variable will be moved throughtout
        // the linked list.
        while (temp.next != null){
            temp = temp.next;
        }
        // Once the end is found. Connect the last node's next node to the new node.

        temp.next = newNode;
        newNode.next = null;
        // Increase the length of the linked list.
        this.length++;
    }

    /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
    public void addAtIndex(int index, int val) {

        //First, create the new node that will be added with the desired value.
        Node newNode = new Node(val);
        //start a counter, this will be used to loop through the linked list to find the nth index.
        int counter = 0;
        //create a reference variable and reference it to the head node.
        Node temp = head;
        //checks if the n-th index is the end of linked list. If it is, run the addAtTail method.

        if (index == this.length){
            addAtTail(val);
            return;
        }
        // Check if the index given is valid. If it's bigger than linked list length, return nothing.

        if (index > this.length){
            return;
        }
        // If the index is 0, then run the method addAtHead.

        if (index == 0){
            addAtHead(val);
            return;
        }
        // Loop through the linkedList to find the node before the Nth index.

        while (counter != (index - 1)){
            temp = temp.next;
            counter++;
        }
        // Connect the new node to the nth index.
        newNode.next = temp.next;
        // connect the node before the nth index to the new node.
        temp.next = newNode;
        // add the length of the linked list by one.
        this.length++;


    }

    /** Delete the index-th node in the linked list, if the index is valid. */
    public void deleteAtIndex(int index) {
        if(index < 0 || index >= this.length){
            return;
        }
        // create a reference variable and refer it to the head node.
        Node curr = head;
        // if we went to delete the head, we will asign the head to the next node.
        if(index == 0){
            head = curr.next;
        }else{
            // Else  reference current to the head node.
            Node current = head;
            // Create a variable called pre, but don't reference to anything. Create a counter and loop through the linked list until the counter equals the desired index.
            Node pre = null;
            int counter = 0;
            while (counter != index){
                // pre will equal the current node and the current node will be moved to the next node.
                // add one to the counter.
                pre = current;
                current = current.next;
                ++counter;
            }
            // the current node will end up being the nth index node. The previous node (pre) will be connected
            // to the current node's next value. Dont need to worry about the current node anymore because it
            // is not linked to the head anymore. No way to locate it, so therefore deleted. Reduce the
            // lenth by 1.

            pre.next = current.next;

        }
        this.length--;

    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */