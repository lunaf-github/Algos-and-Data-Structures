function searchWord(text, pattern) {
    const res = [];
    // preprocess pattern
    const shiftLookupMap = {};
    
    [...pattern].forEach((char, index) => {
      const shift = Math.max(1, pattern.length - 1 - index)
      shiftLookupMap[char] = shift;
    });
    
    // search for pattern
    let right = pattern.length - 1;
    
    while (right < text.length) {
      let badCharIndex = - 1;
      
      for (let i = 0; i < pattern.length; i += 1) {
        if (text[right - i] !== pattern[pattern.length - 1 - i]) {
            badCharIndex = right - i;
          break;
        } 
      }
      
      if (badCharIndex < 0) {
        res.push(right - pattern.length + 1);
      }
        
      const shift = shiftLookupMap[text[badCharIndex]];
  
      if (shift) {
          right += shift;
      } else {
        right += pattern.length;
  
      }
  
    }
    
    return res;
    
  }