class Solution {
    public int numSquares(int n) {
        Queue<Integer> q = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();
        q.offer(0);
        visited.add(0);
        int level = 0;

        while(!q.isEmpty()){
            level++;
            int size = q.size();

            while (size-- > 0){
                int curr = q.poll();

                for(int i=1; i*i <= n; i++){

                    int num = curr + i*i;

                    if(num == n) {
                        return level;
                    }

                    if(num > n) break;

                    if(!visited.contains(num)) {
                        q.offer(num);
                        visited.add(num);
                    }
                }
            }

        }
        return  -1;
    }
}