//Template two solution
// Add the times (while rounding up every decimal point) sum += Math.ceil((double)dist[i]/mid). Add all elements of the array except the last one
// The last array will not be rounded up. sum = sum + ((double)dist[len - 1]/mid)

class Solution {
    public int minSpeedOnTime(int[] dist, double hour) {
        int len = dist.length;
        int min = 1;
        int max = 10000000;
        int ans = -1;

        while (min <= max){
            double sum = 0;
            int mid = min + (max - min)/2;
            for (int i = 0; i < len - 1; i++){
                sum += Math.ceil((double)dist[i]/mid);
            }

            sum = sum + ((double)dist[len - 1]/mid);

            if(sum > hour){
                min = mid + 1;
                min = mid + 1;
            }else{
                ans = mid;
                max = mid - 1;
            }

        }

        return ans;
    }
}