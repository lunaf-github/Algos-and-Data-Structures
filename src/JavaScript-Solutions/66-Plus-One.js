var plusOne = function(digits) {
  const lastIndex = digits.length - 1;
  const result = Array.from(Array(digits.length), x => 0);
  var carry = 0;
  
  result[lastIndex] = 1;
  
  for (let i = lastIndex; i >= 0; i -= 1) {
      const sum = (result[i] + digits[i] + carry);
      carry = Math.floor(sum / 10);
      result[i] = (sum % 10);
  }

  if (carry > 0) {
      result.unshift(carry);
  }
  
  return result;
};

var plusOne = function(digits) {
 for (let i = digits.length - 1; i >= 0; i -= 1) {
     if (digits[i] === 9) {
         digits[i] = 0;
     } else {
         digits[i] = digits[i] + 1;
         return digits;
     }
 }
 
 return [1, ...digits]
};