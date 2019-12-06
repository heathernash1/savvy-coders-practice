const nums = [1,2,3,4,5,6,7,8,9,10];
//todo use reduce to sum up these number

const sumOfNums = nums.reduce((total, cNum) => total + cNum);

// todo write a fxn that takes an Array of Number and returns ... the
//average

function getAvg (num){
  return num.reduce( (total, num) => total + num) /num.length;
}
console.log(getAvg(nums));
