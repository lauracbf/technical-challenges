const whatISee = (numA, numB) => {

  let string = numA.toString();
  let whatISee = '';

  for(let i = 0; i < string.length; i++){
    let letter = string[i]; //number i see
    let counter = 1; //how many i see

    while (string[i + 1] === letter) {
      counter++;
      i++;
    }

   whatISee += letter + counter;

  }

  console.log(whatISee);

}


whatISee(1, 5);
