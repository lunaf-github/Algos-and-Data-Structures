var timeStamp = 0;

var Twitter = function() {
    this.userIdToUserObj = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {

    if (!this.userIdToUserObj.has(userId)) {
        const user = new User(userId);
        this.userIdToUserObj.set(userId, user);
    }
    
    const user = this.userIdToUserObj.get(userId);
    user.post(tweetId);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {

    if (!this.userIdToUserObj.has(userId)) return [];
    
    const TimeToTweets = new Map();
    const maxHeap = new MaxPriorityQueue();
    const user = this.userIdToUserObj.get(userId);
    const followees = user.followed;

    for (const user of followees) {
        const t = this.userIdToUserObj.get(user).tweetHead;
        if (t) {
            if (!TimeToTweets.has(t.time)) TimeToTweets.set(t.time, []);
            TimeToTweets.get(t.time).push(t);
            maxHeap.enqueue(t.time)
        };
    }

    const res = [];
    
    while (maxHeap.size() !== 0 && res.length < 10) {
        const time = maxHeap.dequeue().element;
        const t = TimeToTweets.get(time).shift();
        res.push(t.id);
        if (t.next) {
            maxHeap.enqueue(t.next.time);
            
            if (!TimeToTweets.get(t.next.time)) TimeToTweets.set(t.next.time, []);
            TimeToTweets.get(t.next.time).push(t.next);
        }
    }
        
    return res;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {

    if (!this.userIdToUserObj.has(followerId)) {
        const u = new User(followerId);
        this.userIdToUserObj.set(followerId, u);
    }
    
    if (!this.userIdToUserObj.has(followeeId)) {
        const u = new User(followeeId);
        this.userIdToUserObj.set(followeeId, u);
    }
    
    const follower = this.userIdToUserObj.get(followerId);
    follower.follow(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (!this.userIdToUserObj.has(followerId) || followerId === followeeId) return;
    const follower = this.userIdToUserObj.get(followerId);
    follower.unfollow(followeeId);
};



// ****** User Definition *************


var User = function(id) {
    this.id = id;
    this.followed = new Set();
    this.tweetHead;
    this.follow(id);
}

User.prototype.follow = function(id) {
    this.followed.add(id)
}

User.prototype.unfollow = function(id) {
    this.followed.delete(id)
}

User.prototype.post = function(id) {
    const t = new Tweet(id);
    t.next = this.tweetHead;
    this.tweetHead = t;
}

// ****** Tweet Definition ************

var Tweet = function(id) {
    this.id = id;
    this.time = timeStamp++;
    this.next = null;
}


/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
