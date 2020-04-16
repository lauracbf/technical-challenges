//Const that is equal to an array of strings
const stringArray = ['November', 'is', 'the', 'coolest', 'month', 'of', 'the', 'year'];

//Finction that will receive the string as an argument
const frameIt = (arr) => {

  //Create a variable that will keep the length of each of the items in the array to determin the length of the top and bottom of the frame.
  let newArray = [];
  arr.forEach((word) => {
    let length = word.length;
    return newArray.push(length);
  });

  //Obtainig the length of the longest word in the array with a sort method and adding 4 positions more to leave enough space for the longest word to fit inside the frame
  let topAndBottomLength = newArray.sort((a, b) => {
    return b - a;
  });
  topAndBottomLength = topAndBottomLength[0] + 4;

  //building the top and bottom with * and method repeat
  const topAndBottomFrame = '*'.repeat(topAndBottomLength);
  stringArray.push(topAndBottomFrame);
  stringArray.unshift(topAndBottomFrame);

  // contants that will be the left and right sides of the frame
  const leftSideFrame = '* ';
  const rightSideFrame = '*';


  stringArray.forEach((item) => {

    //condition that will keep the first and last item out of the construction of the sides of the frame
    if(item === stringArray[0] && item === stringArray[stringArray.length - 1]){
      console.log(item);
    }

    //condition that will add enough spaces between the string and the rightSideFrame to keep everything straight
    if(item !== 0 && item !== stringArray[stringArray.length - 1]){
      let space = ' '.repeat(topAndBottomLength - item.length - 3);
      let framed = leftSideFrame.concat(item, space, rightSideFrame);
      console.log(framed);
    }


  });

}

frameIt(stringArray);
