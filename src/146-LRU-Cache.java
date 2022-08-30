class Node{
    int value;
    int key;

    Node next;
    Node prev;

    Node(int key, int value){
        this.key = key;
        this.value = value;
    }

    Node(){
        this(0,0);
    }
}

class LRUCache {

    int capacity;
    HashMap<Integer, Node> map = new HashMap<Integer, Node>();
    Node left;
    Node right;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.left = new Node();
        this.right = new Node();

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    private void insert(int key, int value){
        Node newNode = new Node(key, value);
        Node prev = this.right.prev;
        this.right.prev = newNode;
        prev.next = newNode;

        newNode.prev = prev;
        newNode.next = right;

        this.map.put(newNode.key , newNode);

    }

    private void remove(Node node){
        Node prev = node.prev;
        Node next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    public int get(int key) {

        if(map.containsKey(key)){
            int val = map.get(key).value;
            this.remove(map.get(key));
            this.insert(key, val);
            return val;
        }else{
            return -1;
        }
    }

    public void put(int key, int value) {
        if(map.containsKey(key)){
            this.remove(map.get(key));
        }
        this.insert(key ,value);

        if(map.size() > this.capacity){
            this.map.remove(left.next.key);
            this.remove(this.left.next);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */