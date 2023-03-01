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

var trapOptimized = function(height) {
    const arrLength = height.length;
    var totalTrappedWater = 0;
    var left = 0;
    var right = arrLength - 1;
    var maxLeft = height[left];
    var maxRight = height[right];
    
    while (left < right) {
        let minWallHeight = Math.min(maxLeft, maxRight);
        let containedWater = 0;
        
        
        if (maxLeft <= maxRight) {
            left += 1;
            maxLeft = Math.max(maxLeft, height[left]);
            containedWater = minWallHeight - height[left];
        }else {
            right -= 1;
            maxRight = Math.max(maxRight, height[right]);
            containedWater = minWallHeight - height[right]
        }
        
        if (containedWater > 0) totalTrappedWater += containedWater;
    }
    
    return totalTrappedWater;
};




