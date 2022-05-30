// Time Complexity: O(NLogN)
// Space Complexity: O(N)

// Use time to determine whether a car will meet another car. If time to get to target is larger than the
// car in front of it, then they will not meet. So, the car will be it's own fleet. Then we look at the
// behind and do the same comparison.

// Before this, we need to do some setup. We need to create an array that holds the position and time it takes to
// get to the destination.

// Then sort the array from furdest to closest. We use Double because we are working with decimal places and
// want to avoid rounding down.

class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        int length = position.length;
        double[][] cars = new double[length][2];

        for(int i=0; i < length; i++) cars[i] = new double[] {position[i], (double)(target - position[i])/speed[i]};

        Arrays.sort(cars, (a,b) -> Double.compare(a[0],b[0]));

        double curr = 0;
        int res = 0;

        for(int i = length - 1; i >= 0; i--){
            if(cars[i][1] > curr){
                curr = cars[i][1];
                res++;
            }
        }

        return res;
    }
}