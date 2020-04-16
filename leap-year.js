//Declaring a variable equal to the year that I need to verify
let year = 2021;

//Function that will take the year as an argument
const leapOrNot = (int) => {
  //If year is divisible by 4 or divisible by 100 and 400 is a leap year
  if(int % 4 === 0 || int % 100 === 0 && int % 400 === 0){
     return console.log(int + ' is a leap year!');
  }else{
    //if the consditios are not met is not a leap year
    return console.log(int + ' is not a leap year');
  }
}

leapOrNot(year);
