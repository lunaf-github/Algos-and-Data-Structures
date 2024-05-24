


**Pseudo Code:** 

```
Initialize a frequency counter

Initialize left pointer at index 0
initialize right pointer at index 0

Loop while the "right" pointer is within bound, one character per iteration
If frequency map has current character, decrement frequency by one 
else reset window length (move "left" pointer to same location as right pointer)

Loop while exceeding characters gone, detected by negative frequencies

Check base case: Found permutation when window length is equal to reference word
```



