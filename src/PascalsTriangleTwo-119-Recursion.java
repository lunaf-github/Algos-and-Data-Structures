// Lesson learned:
// Arrays.asList() returns an array with the exact order as the List.
// Methods for ArrayList are get(), size(), and asList().

class Solution {
    public List<Integer> getRow(int rowIndex) {
        if(rowIndex == 0) return Arrays.asList(1);
        List<Integer> previousList = getRow(--rowIndex);
        List<Integer> thisList = new ArrayList<>();

        for(int i = 0; i < previousList.size(); i++){
            if(i == 0) thisList.add(1);
            if(i > 0) thisList.add(previousList.get(i) + previousList.get(i - 1));
            if(i == previousList.size() - 1) thisList.add(1);
        }

        return thisList;
    }
}