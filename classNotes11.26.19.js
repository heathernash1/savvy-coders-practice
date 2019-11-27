// Iterate over an ARRAY with WHILE and separate out the NUMBERS and STRINGS
const numbers = [1,2,3,4,5,6];
const strings = ['hello', 'world', 'again'];
const numbersAndStrings = numbers.concat(strings);
// Arrow syntax does not have a THIS reference.
numbers.forEach(number => {
  console.log(number)
});

// use map to  add 1 to each number
const results = numbers.map(number => {
  return number + 1;
});
console.log(numbers);
console.log(results);

//forEach needs to know what it should do for each element - callback function
numbers.forEach(function(number){
  console.log(' number is', number);

});

strings.forEach(strings => {
  console.log("string is", strings)
});

function updateNumbersAndStrings (originalArr, stringUpdate, numberUpdate){
  return originalArr.map(el => {
    // a map will return an array with the original length of the array
    if(typeof el === "string" ) {
      return el + stringUpdate;
    }

    return el + numberUpdate;
      //A return in a map callback function pushes the result onto the new array that will be created from the top


  });
}





console.log(updateNumbersAndStrings(numbersAndStrings, "hello", 236) );
console.log('strings is', strings);
console.log('numbersAndStrings is', numbersAndStrings);
