
# Sliding Window w/ Character Frequency


**Purpuse** \
Finding Anagrams in a String


**Pseudo Code (Using key-value structure)** \
TC: O(2n), Which equal to O(n); \
SC: O(n), size of key-value structure depends on the number of unique characters


```
Initialize a Character frequency counter

Initialize left pointer at index 0
initialize right pointer at index 0

Loop while the "right" pointer is within bound, one character per iteration

    If frequency map has current character, decrement frequency by one 
    else reset window length (move "left" pointer to same location as right pointer)

    Loop while exceeding characters gone, detected by negative frequencies

    Check base case: 
    If window length is equal to reference word, anagram is found do something with anagram

return search results
```

**Pseudo Code (Optimized using Array)** \
TC: O(2n), Which equal to O(n); \
SC: O(24), This is because of the frequency array is length of 24
```
Initialize a Character frequency Array

Initialize left pointer at index 0
initialize right pointer at index 0

Loop while the "right" pointer is within bound, one character per iteration

    Decrement frequency by one 

    Loop while exceeding characters gone, detected by negative frequencies

    Check base case: 
    If window length is equal to reference word, anagram is found do something with anagram

return search results
```
The optimized approach reduces the need to check if the current right-character exists in the frequency counter because the while loop that checks for exceeding characters performs two tasks,

 1. Resets the window if we encounter a right-character that is not included within the frequency counter
 2. Removes excess characters that does exceed in the frequency counter 
   
If we use a hashmap or other key-value structure such as an object, we will need to add a conditional statement to check if the right-character exists in the frequency counter. If it exists, then decrement the counter for that specific right-character. If not, then reset the window by moving the left-pointer until it reaches the right-pointer, while restoring the frequency count. 


## Implementations

[567 Permutation in String](../Implementations/567_Permutation_In_String/)

