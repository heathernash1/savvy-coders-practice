// arrays are objects [] objects have named keys
//and auto incremented numerical keys A.K.A index
// collections are composite data types
const students = [
"Andrew","Billy","George","Heather","Madison","Marque","Martin","Nikki","Oscar","RhondaLyn","Sidney","Tracie","Wallat"];

function getMs(namesArr){
  const mNames = [];
  for (let i =0; i < namesArr.length; i += 1){
    if (namesArr[i].startsWith("M")){
      mNames.push(namesArr[i]);
    }
  }
  return mNames;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(students[getRandomInt(0, students.length-1)]);

console.log(getMs(students));
