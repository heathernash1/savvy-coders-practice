const nums = [1,2,3,4,5,6,7,8,9,10];
function add1(n){
  return n + 1;
}
function double (n) {
  return n*2;
}
// function composition is when we pass the return value of one function
//into another function

function add1AndDouble(n) {
  return double(add1(n));
}

function doubleAndAdd1(n){
  return add1(double(n));
}
//todo Add 1 and double each num inside of nums
const numsAddedOneAndDouble = nums.map(num => add1AndDouble(num));
console.log( numsAddedOneAndDouble);
//todo add 1 and double each num inside of nums only using the first 2 fxn
//my example
const stnum = nums.map( num =>  num + 1  ).map(num => num * 2);
console.log(stnum);
//manvas example
console.log(nums.map(nbr => add1(nbr)).map (nbr => double(nbr)));
//todo: filter out all odd numbers and then repeat
const results = nums
.filter(num => num % 2 === 1)//pulls all odd numbers
.map(num => add1(num))//add 1 to odd numbers to make them even
.map(num => double(num));//double all the even numbers
console.log(results);


//functional programming employs function composition with pure functions
