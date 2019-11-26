// This is only  a blue print for 'New Objects'
class Shows {
  constructor(tvShow, network, numShows, fan) {
    this.tvShow = tvShow;
    this.network = network;
    this.numShows = numShows;
    this.fan = fan;
  }



  //these are functions to use on the "New Objects"
    get favoriteShows (){
      return ` Supergirl, Expanse, Supernatural, and Doctor Who are some of my favorite shows. `;
     }

set favoriteShows (favoriteShows) {
  this.fav = favoriteShows;
}
    get superFan () {
     if (this.numShows > 2) {
        return `If you like to watch science fiction shows. We should definitely have a watch party sometime!`;
     } else {
       return `I like to watch dramas, too.`;
      }
    }


   get Geek  () {
       return `Hi!${this.favoriteShows()} If you watch these, then you are definitely a ${this.fan} fan . `;
         }


     get ShowInfo () {
        return `${this.tvShow} on ${this.network} is a new favorite.`;
      }
    }

      //setter



   const redo = new Shows ('Xfiles','FOX', 5, "Mystery");


  // console.log(redo);

  class addMovie extends Shows{
    constructor (tvShow, network, numShows, fan, movie ){
      super( tvShow, network, numShows, fan);
      this.film = movie;
    }
  }
const picture = new addMovie("Dancing with the stars", "ABC", 3,"Comedy", "Coming to America");
// console.log(picture);
console.log(favoriteShows);
