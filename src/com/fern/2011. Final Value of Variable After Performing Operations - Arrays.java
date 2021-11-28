// Java

class Solution {
     public int finalValueAfterOperations(String[] operations) {
         // create a result integer and set it equal to zero
         int result = 0;
         // create a hashmap with four operations as key, and 1 or -1 as values
         HashMap<String, Integer> operationMap = new HashMap<>();
         operationMap.put("++X", 1);
         operationMap.put("X++", 1);
         operationMap.put("X--", -1);
         operationMap.put("--X", -1);

         // for loop though the input array.
         for(int i = 0; i < operations.length; i++){
             // add or subtract the value of the element in the givin array to result variable
             result += operationMap.get(operations[i]);
         }
         // return result
         return result;
     }
 }

 // Faster version, Java
class Solution {
    public int finalValueAfterOperations(String[] operations) {
        // create a result integer and set it equal to zero
        int result = 0;

        // for loop though the input array.
        for(int i = 0; i < operations.length; i++){
            // The second character of the input array element will either be a '+' or '-'
            // increment result if the second character of the input array is '+' or else decrement the result variable
            if(operations[i].charAt(1) == '+') result++;
            else result--;
        }
        // return result
        return result;
    }
}

     /**
      * @param {string[]} operations
      * @return {number}
      */
     // JavaScript, readable version

     const finalValueAfterOperations = function(operations) {
        // Declare a result array and set it equal to 0
        let result = 0;
        // Declare an object and add the four operations
        const map = {
        "++X":1,
        "X++":1,
        "--X":-1,
        "X--":-1
        };

        // loop through the input array
        for (let i = 0; i < operations.length; i++){
        // Add or subtract from the result variable depending on current element
        result += map[operations[i]];
        }
        // return result
        return result;
        };

// Faster JavaScript Version
        /**
         * @param {string[]} operations
         * @return {number}
         */
        var finalValueAfterOperations = function(operations) {
        // Declare a result array and set it equal to 0
        let result = 0;

        // loop through the input array
        for (let i = 0; i < operations.length; i++){
        // if the second character of current element is '+' then increment 1 to result
        if(operations[i][1] === '+') result++;
        // else decrement 1 from result
        else result--;

        }
        // return result
        return result;
        };
