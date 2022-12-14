class Solution {

    List<String> res;
    
    public List<String> findItinerary(List<List<String>> tickets) {
        res = new ArrayList<>();
        HashMap<String, List<String>> map = new HashMap<>();

        for(List<String> ticket: tickets){
            String from = ticket.get(0);
            if(!map.containsKey(from)){
                map.put(from, new ArrayList<>());
            }
            map.get(from).add(ticket.get(1));
        }

        for(Map.Entry<String, List<String>> entry : map.entrySet()){
            Collections.sort(entry.getValue());
        }

        dfs("JFK", tickets.size(), map, new ArrayList<>());
        res.add(0, "JFK");

        return res;
    }

    public void dfs(String start, int numtickets,  HashMap<String,List<String>> map, List<String> path){
        if(path.size() == numtickets){
            res.addAll(path);
        }

        if(map.get(start) == null) return;

        for(int i = 0; i < map.get(start).size(); i++){
            String nextDestination = map.get(start).get(i);
            path.add(nextDestination);
            map.get(start).remove(nextDestination);

            dfs(nextDestination, numtickets, map, path);

            if(res.size() > 0) return;

            map.get(start).add(i, nextDestination);
            path.remove(path.size() - 1);
        }
    }
}