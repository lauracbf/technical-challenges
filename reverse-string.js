//Declare a const with the string that needs to be reversed.
const string = 'JavaScript';

//variable that will save the reversed string.
let reverseString = '';

  //loop that will iterate over the string
  for(let i = 0; i <= string.length; i++){
    // constant that will save the value of the las character of the string,
    const lastChar = string.charAt(string.length - i);

    //Adding and saving values from last to first
    reverseString += lastChar;

  }

console.log(reverseString);
