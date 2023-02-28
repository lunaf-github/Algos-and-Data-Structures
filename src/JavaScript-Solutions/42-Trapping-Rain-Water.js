/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    const arrLength = height.length;
    const maxLeft = Array(arrLength);
    const maxRight = Array(arrLength);
    const minWallHeight = Array(arrLength);
    
    var maxValue = 0;
    for (let cur = 0; cur < arrLength; cur += 1) {
        maxLeft[cur] = maxValue;
        maxValue = Math.max(maxValue, height[cur]);
    }
    
    maxValue = 0;
    for (let cur = arrLength - 1; cur >= 0; cur -= 1) {
        maxRight[cur] = maxValue;
        maxValue = Math.max(maxValue, height[cur]);
    }

    for (let cur = 0; cur < arrLength; cur += 1) {
        minWallHeight[cur] = Math.min(maxLeft[cur], maxRight[cur]);
    }
    
    var totalTrappedWater = 0;
    
    for (let cur = 0; cur < arrLength; cur += 1) {
        let containedWater = minWallHeight[cur] - height[cur];
        if(containedWater > 0) totalTrappedWater += containedWater;
    }
    
    return totalTrappedWater;
};






