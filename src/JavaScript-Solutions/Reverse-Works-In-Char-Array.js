/*
Reverse the words inside the character array: 

Given: 
  input = ['t','h','e',' ','c','a','t',' ','i','n',' ','t','h','e',' ','h','a','t']

Return: 
  output = ['h','a','t',' ','t','h','e',' ','i','n',' ','c','a','t',' ','t','h','e']


*/

// two pointers, create output array

function reverse(input){
  // declare i pointer and set it equal to 0
  let i = 0;
  // declare a word length tracker and set it to 1
  let wordLength = 0;
  
  const output = new Array(input.length);
  // declare output pointer, set it equal to the last index of input array
  let outputIndex = output.length - 1;
  // loop while i pointer is not out of bound
  while(i < input.length){
  		// count letters of word
  		while(i < input.length && input[i] !== ' '){
  		wordLength++;
  		i++;
  		}		
    	//add letters to output array, in reverse
  		for(let j = i - 1; j >= i - wordLength; j--){
        output[outputIndex] = input[j];
        outputIndex--;
  		}
    	// add space
  		if(i < input.length){
  		output[outputIndex] = ' ';
  		outputIndex--;
  		}
  		// set wordLength to zero
    	wordLength = 0;
      i++;  	
  }
  // return output
  return output  
}

/**           reverse inplace             */ 

function reverseInPlace(input){

  // reverses characters given a start and end point
  function reverse(s,e){ 
    while(s < e){
      let t = input[s];
      input[s++] = input[e];   
      input[e--] = t;
    }
  }

  // reverse all words in char array
  function reverseWords(){
    let s = 0;
    let e = 0;
    while(s < input.length){
      while( s < e || s < input.length && input[s] === ' ') s++;
      while( e < s || e < input.length && input[e] !== ' ') e++;
      reverse(s,e - 1);
    }
  }

  //Step 1: reverse all characters in input array
  reverse(0, input.length - 1);

  //Step 2: unreverse each word 
  reverseWords();

  return input;
}

const input = ['t','h','e',' ','c','a','t',' ','i','n',' ','t','h','e',' ','h','a','t']
console.log(reverseInPlace(input))