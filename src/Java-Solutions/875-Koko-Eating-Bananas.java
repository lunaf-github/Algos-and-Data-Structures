class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int max = 0;
        for(int pile: piles){
            max = Math.max(max, pile);
        }

        int left = 1;
        int right = max;
        int res = max;


        while(left <= right){
            int mid = left + (right - left)/2;

            int hoursToEat = timeToEatBananas(piles, mid);

            if(hoursToEat <= h ){
                res = Math.min(res, mid);
                right = mid - 1;
            }else left = mid + 1;

        }

        return res;
    }


    public int timeToEatBananas(int[] piles, int k){
        int hours = 0;
        // Double eatPer.Hour = Double.valueOf(k);

        for(int pile: piles){
            hours += (pile + k - 1) / k;
            // Double numInPile = Double.valueOf(pile);
            // hours += (int)Math.ceil(numInPile/eatPerHour);
        }
        return hours;
    }

}