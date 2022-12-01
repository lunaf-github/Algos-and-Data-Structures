class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        Stack<Integer> dfs = new Stack<>();
        dfs.push(0);
        HashSet<Integer> seen = new HashSet<>();
        seen.add(0);

        while(!dfs.empty()){
            int i = dfs.pop();
            for(int r : rooms.get(i)){
                if(!seen.contains(r)){
                    dfs.push(r);
                    seen.add(r);
                    if(seen.size() == rooms.size()) return true;
                }
            }
        }

        return seen.size() == rooms.size();
    }
}