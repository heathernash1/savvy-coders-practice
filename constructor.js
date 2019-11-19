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

function shows( tvShow, network, numShows, fan) {
  this.tvShow = tvShow;
  this.network = network;
  this.numShows = numShows;
  this.fan = fan;
  this.getfavoriteShows = function (){
     return ` Supergirl, Expanse, Supernatural, and Doctor Who are some of my favorite shows. `
   }


  this.getsuperFan = function() {
    if (this.numShows > 2)
      return `If you like to watch science fiction shows. We should definitely have a watch party sometime!`
      else
      return `I like to watch dramas, too.`
    }


this.getGeek = function() {
      return `Hi!${this.getfavoriteShows()} If you watch these, then you are definitely a ${this.fan} fan . `
       }
  ;

this.getShowInfo = function() {
      return `${this.tvShow} on ${this.network} is a new favorite.`
    }
    ;

}
//function constructor is keyword new
//instantiate we create variables
const watch = new shows ('Emergence','ABC', 1, 'SyFy');
console.log(watch);
console.log(watch.getGeek());
console.log(watch.getShowInfo());
console.log(watch.getsuperFan());
