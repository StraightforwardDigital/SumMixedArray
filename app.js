function sumMix(x){
//setup the variable that will be returned
let result = 0;
//setup the for loop that will go through the array
for (let i = 0; i < x.length; i++) {
//check to see if the variable is a number
  if (typeof x[i]  === 'number') {
//if its a number, add it to the result variable
    result += x[i];
  } else {
//if its a string, turn it into a number using parseInt( )
    let num = parseInt(x[i]);
//add the new number to the result variable
    result += num;
  }
}
  return result;
}