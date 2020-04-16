// Declare a variable with the string to compress.
const  decompressedString = 'aabccccaaaaaa';


//Decalre a function that will take the string as an argument.
const compressingString = (string) => {

  //variable that will save the compressed string.
  let compressed = '';

  //Iterate on every character
  for(let i = 0; i < string.length; i++){
      let letter = string[i]; //Variable equal to current character
      let counter = 1;// counter that will keep the count of the equal characters

      //loop that will increase the counter while current character and next character are equal and then it will advance to next position
      while (string[i + 1] === letter) {
        counter++;
        i++;
      }

    //Save the results in variable.
    compressed += letter + counter;
  }

  //condition that print the string in case that it cannot be compress
  if(compressed.length > string.length){
    return string;
  }

  //returns the value of the compressed string.
  return console.log(compressed);
};

compressingString(decompressedString);
