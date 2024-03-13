/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */

// When it is certain that we will only be dealing with triplets
var mergeTriplets = function(triplets, target) {
    const merged = [0, 0, 0];

    for (const triplet of triplets) {
        if (isValidTriplet(triplet)) {
            merged[0] = Math.max(triplet[0], merged[0]);
            merged[1] = Math.max(triplet[1], merged[1]);
            merged[2] = Math.max(triplet[2], merged[2]);
        }
    }

    return isEqual(merged, target);


    // ***************
    function isEqual(triplet1, triplet2) {
        return (
            triplet1[0] === triplet2[0] &&
            triplet1[1] === triplet2[1] &&
            triplet1[2] === triplet2[2]
        );
    }

    function isValidTriplet(triplet) {
        return (
            triplet[0] <= target[0] && 
            triplet[1] <= target[1] &&
            triplet[2] <= target[2]
        )
    }
};


// If we want the function to be addaptable for array of different sizes 
var mergeTriplets = function(triplets, target) {

    const merged = triplets.reduce((acc, triplet) => {
        const curMerged = [];

        let i = 0;
        for (i = 0; i < triplet.length; i += 1) {
            if (triplet[i] > target[i]) return acc;
            curMerged[i] = Math.max(triplet[i], acc[i]?? triplet[i]);
        }

        return curMerged;
    }, [])



    for (let i = 0; i < target.length; i += 1) {
        if (merged[i] !== target[i]) return false;
    }

    return true;

};

