// This is only  a blue print for 'New Objects'
class shows{
  constructor( tvShow, network, numShows, fan) {
    this.tvShow = tvShow;
    this.network = network;
    this.numShows = numShows;
    this.fan = fan;
  }
    set favMovie( firstMovie)  {

    this.firstMovie = 'E.T.';
  }
  const bestMovie = new favMovie ('Xfiles','FOX', 5, "Mystery");
  console.log(bestMovie);


  }//these are functions to use on the "New Objects"
    get favoriteShows (){

       return ` Supergirl, Expanse, Supernatural, and Doctor Who are some of my favorite shows. `;
     }


    get superFan () {
      if (this.numShows > 2)
        return `If you like to watch science fiction shows. We should definitely have a watch party sometime!`;
        else
        return `I like to watch dramas, too.`;
      }


    get Geek  () {
        return `Hi!${this.getfavoriteShows()} If you watch these, then you are definitely a ${this.fan} fan . `;
         }


     get ShowInfo () {
        return `${this.tvShow} on ${this.network} is a new favorite.`;
      }

      //setter
  shows.prototype.settvShow = function(newtvShow){
   // this.tvShow = newtvShow;
   if(!newtvShow) {
     console.error("This is a movie not a tv show");
     return;
   }
   this.tvShow = newtvShow;
  };
  shows.prototype.setMovie = function(movie) {
    if (movie && typeof movie === "string") {
      this.movie = movie;
    } else{
      console.error('Movie cannot be blank');
    }

  };

  //
  //
  shows.prototype.favoriteMovies = function (array){
    return this.favoriteMovies = array;
  }
  // This just creates an array of the greatest movies
  let greatMovies = ['Lord of the Rings', 'Star Wars', 'Back to the Future', 'Avengers'];


  //overide Example create new objects
  const movieBuff = new shows('Avatar','Sony', 3, 'movie fan');
  movieBuff.getGeek = function() {
    return "I like to watch movies.";
  };
  shows.prototype.setGenre = function (drama) {
    return this.setGenre = drama;
  };
  let greatDrama = ['Titanic', 'Greatest Showman', 'Lion King', 'Harriet'];

  movieBuff.favoriteMovies(greatMovies);
  console.log(movieBuff);
  //prototype carrie their own methods
  //instantiate we create variables
  const watch = new shows ('Emergence','ABC', 1, 'SyFy');
  console.log(watch);
  console.log(watch.getGeek());
  console.log(watch.getShowInfo());
  console.log(watch.getsuperFan());
  watch.settvShow("");
  console.log( watch.getShowInfo());
  watch.settvShow("Dancing with the Stars");
  console.log(watch.getShowInfo());
  watch.setMovie("");
  console.log(watch.setMovie());
  watch.setMovie("transformers");
  console.log(movieBuff);
  console.log(movieBuff.getGeek());
  for( let i = 0; i < movieBuff.favoriteMovies.length; i += 1)
  console.log(movieBuff.favoriteMovies[i]);
  movieBuff.favoriteMovies.push(greatDrama);
  console.log(movieBuff.favoriteMovies);

