class Solution {
    public String decodeString(String s) {
        Stack<Integer> intStack = new Stack<>();
        Stack<StringBuilder> strStack = new Stack<>();
        StringBuilder cur = new StringBuilder();
        int k = 0;
        for(char ch : s.toCharArray()){
            if(Character.isDigit(ch)){
                k = k * 10 + ch - '0';
            }else if(ch == '['){
                strStack.push(cur);
                intStack.push(k);
                cur = new StringBuilder();
                k = 0;
            }else if(ch == ']'){
                StringBuilder temp = cur;
                cur = strStack.pop();
                for (int i = intStack.pop() ; i > 0; i--) cur.append(temp);
            }else{
                cur.append(ch);
            }
        }

        return cur.toString();

    }
}