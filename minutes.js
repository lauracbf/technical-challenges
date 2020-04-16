//Declare two variales with the beginning date and last date

let dateOne = new Date('04/11/2020');
let dateTwo = new Date('04/14/2020');

//function that will receive the two dates as arguments
const getMinutes = (dateA, dateB) => {
  //Constant equal to milliseconds in a second
  const conversionFactor = 0.0000166667;
  //obtaining difference in time from date b to date a
  let getMinutes = dateB.getTime() - dateA.getTime();
  //removing decimals and multipliying by the conversion factor
  return Math.floor(getMinutes * conversionFactor);
};

console.log(getMinutes(dateOne, dateTwo));
