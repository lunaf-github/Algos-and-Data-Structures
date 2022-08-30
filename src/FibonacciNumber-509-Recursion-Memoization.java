//You can use a HashMap to save values so that the function does not calculate the same
//values at every iteration.

class Solution {

    HashMap<Integer, Integer> cache = new HashMap<Integer,Integer>();

    public int fib (int n) {

        if(cache.containsKey(n)){
            return cache.get(n);
        }
        int result;

        if(n < 2){
            return n;
        } else{
            result =  fib(n - 1) + fib(n - 2);
        }


        cache.put(n, result);

        return result;

    }

}