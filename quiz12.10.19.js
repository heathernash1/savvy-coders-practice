const students = [
  {
    name: "Jane",
    score: 99
  },
  {
    name: "Joe",
    score: 88
  },
  { name: "Mark", score: 71 },
  { name: "Sheamus", score: 55 },
  { name: "Sanjay", score: 77 }
];

/**
 * TODO: Build a function that takes in an Array of people with scores and a specified threshold,
 * and gives back a list of NAMES ONLY of the ones who scored less than that threshold.
 *
 * HINTS:
 * 1. Try filtering out based on if the SCORE is less than the threshold.
 * 2. Chain a map() to map over those filtered results but only return the 'name'.
 * 3. You can use OBJECT DESTRUCTURING...or not.
 */
function getLowScores(people, threshold) {

return people.filter (person => person.score <= threshold )
.map(person => person.name);
  }

  console.log(getLowScores(students, 80));


//return  people .filter (({score}) => score <= threshold).map(({name}) => name);
