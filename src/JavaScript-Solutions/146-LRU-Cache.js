/**
 * @param {number} capacity
 */

// key is needed to create a two way connection between the linkedList and HashMap. 
// This allows me to grab the least recently used node from my LinkedList and delete the
// entry from the hashmap

const Node = function(key, value) {
    this.value = value;
    this.key = key;
    this.next;
    this.prev;
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.left = new Node(undefined, 'left');
    this.right = new Node(undefined, 'right');

    this.left.next = this.right;
    this.right.prev = this.left;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.cache.get(key);

    if (!node) return -1;

    this.delete(node);
    this.insert(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    let node = this.cache.get(key);
    if (!node) node = new Node();
    
    node.value = value;
    node.key = key;

    this.cache.set(key, node);
    this.delete(node);
    this.insert(node);

    if (this.cache.size > this.capacity) {
        const deleteNode = this.left.next;
        this.cache.delete(deleteNode.key);
        this.delete(deleteNode);
    }
    
};

LRUCache.prototype.insert = function(node) {
    const right = this.right;
    const left = right.prev;

    left.next = node;
    right.prev = node;

    node.next = right;
    node.prev = left;
}

LRUCache.prototype.delete = function(node) {
    const left = node.prev;
    const right = node.next;

    if (!left || !right) return;

    left.next = right;
    right.prev = left;
}



/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// *********** Tests **********
// const cache = new LRUCache(2)
// console.log(cache.capacity, '= 2');
// console.log(cache.left.next === cache.right, '= true');
// console.log(cache.right.prev === cache.left, '= true');
// console.log(cache.get(3), '= -1')

// const newNode = new Node(undefined, 'new Node');
// cache.insert(newNode);
// console.log(cache.right.prev === newNode, '= true');
// console.log(cache.left.next === newNode, '= true');

// const secondNewNode = new Node(undefined, 'second new Node');
// cache.insert(secondNewNode);
// console.log(cache.right.prev === secondNewNode, '= true');
// console.log(cache.left.next === newNode, '= true');

// cache.delete(secondNewNode);
// console.log(cache.right.value, ' = right');
// console.log(cache.left.value, '= left');
// console.log(cache.right.prev === newNode, '= true');

// cache.delete(newNode);
// cache.put(1, 1);
// cache.put(2, 2);
// cache.put(3, 3);
// console.log(cache.get(1), '= -1');
// console.log(cache.right.prev.value, '= 3')