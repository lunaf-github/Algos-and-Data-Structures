class Data{
    String value;
    int timestamp;

    public Data(String val, int time){
        this.value = val;
        this.timestamp = time;
    }
}


class TimeMap {

    HashMap<String, List<Data>> timeMap;

    public TimeMap() {
        timeMap = new HashMap<String, List<Data>>();
    }

    public void set(String key, String value, int timestamp) {
        if(!timeMap.containsKey(key)) timeMap.put(key, new ArrayList<Data>());
        timeMap.get(key).add(new Data(value, timestamp));
    }

    public String get(String key, int timestamp) {

        if(!timeMap.containsKey(key)) return "";

        List<Data> list = new ArrayList<>();
        list = timeMap.get(key);

        String res = "";

        int left = 0;
        int right = list.size() - 1;

        while(left <= right){
            int mid = left + (right - left)/2;

            if(list.get(mid).timestamp == timestamp) return list.get(mid).value;

            if(list.get(mid).timestamp < timestamp){
                res = list.get(mid).value;
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }

        return res;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.set(key,value,timestamp);
 * String param_2 = obj.get(key,timestamp);
 */