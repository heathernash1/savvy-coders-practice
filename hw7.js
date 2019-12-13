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


    get geek  () {
      return `Hi!${this.fav} If you watch these, then you are definitely a ${this.fan} fan . `;
    }




    get showInfo () {
      return `${this.tvShow} on ${this.network} is a new favorite.`;
      }

    set greatMovies (greatMovies){
      this.gMovies = greatMovies;
    }

    get greatMovies (){
      let mList = `Here are some great movies:`
      for (let i = 0; i < this.gMovies.length; i +=1){
        mList += `${this.gMovies[i]}`;

      }
      return mList;
    }

    get printAllMovies () {
      console.log(`Here are some my favorite movies `);
      let allMovies =this.fav.concat(this.gMovies);
      return allMovies;
    }
  }


  const redo = new Shows ('Xfiles','FOX', 5, "Mystery");
  redo.greatMovies = [' Avatar ', ' Star Wars ', ' Lord of the Rings ',' Avengers'];

  const gDramas = ['Titanic', 'Cars', 'Superman'];
  redo.favoriteShows = gDramas;
//console.log(redo.gDramas);


//console.log(redo)
console.log(redo.printAllMovies);

class addMovie extends Shows{
    constructor (tvShow, network, numShows, fan, movie ){
      super( tvShow, network, numShows, fan);
      this.film = movie;
    }
  }
const picture = new addMovie("Dancing with the stars", "ABC", 2,"Comedy", "Coming to America");

console.log(picture)
console.log(picture.showInfo)

