function Person(fname, lname, age, occupation) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.occ = occupation;

  this.canDrink = function() {
    if (this.age < 21) {
      return " I like to keep 6-packs of beer...er, soda in my fridge!"
    }
  };

this.getBio = function() {
      return `Hi! My name is ${this.getFullName()}. I am ${this.age} years old. ${this.canDrink()}`;
    };

this.getFullName = function() {
      return `${this.fname} ${this.lname}`
    };
  }

//function constructor is keyword new
//instantiate we create variables
const me = new Person ('Heather','Nash', 3, 'Dev');
console.log(me);
console.log(me.canDrink());
console.log(me.getFullName());
console.log(me.getBio());
