/**
[1,8,6,2,5,4,8,3,7]
   l             r

mostWater = 
 
loop while l is not equal to r{
    currentArea = min height of two wall * dist of two walls
    currentArea = min(valueL, valueR) * (indexR - indexL)

    mostWater = max(mostWater or currentArea)

    if(valueL <= valueR) increment indexL
    else increment indexR
}



textCase = [1,1]
              l  
              r
*/

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
 let mostWater = 0;
 let l = 0;
 let r = height.length - 1;
 
 while(l < r){
     const currentArea = Math.min(height[l], height[r]) * (r - l);
     mostWater = Math.max(currentArea, mostWater);
     
     if(height[l] <= height[r]){
         l++;
     }else{
         r--;
     }
 }
 
 return mostWater;
};
