function shows( tvShow, network, numShows, fan) {
  this.tvShow = tvShow
  this.network = network;
  this.numShows = numShows;
  this.fan = fan;

}
  shows.prototype.getfavoriteShows = function (){

     return ` Supergirl, Expanse, Supernatural, and Doctor Who are some of my favorite shows. `
   }


  shows.prototype.getsuperFan = function() {
    if (this.numShows > 2)
      return `If you like to watch science fiction shows. We should definitely have a watch party sometime!`
      else
      return `I like to watch dramas, too.`
    }


shows.prototype.getGeek = function() {
      return `Hi!${this.getfavoriteShows()} If you watch these, then you are definitely a ${this.fan} fan . `
       }
  ;

shows.prototype.getShowInfo = function() {
      return `${this.tvShow} on ${this.network} is a new favorite.`
    }
    ;
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
shows.prototype.setGreatMovies = function (newMovies) {

 this.greatMovies = newMovies
 //console.log();
};
const movieList = ['Avatar', 'Star Wars', 'Lord of the Rings','Avengers'] ;

//overide Example
const movieBuff = new shows('Avatar','Sony', 3, 'movie fan');
movieBuff.getGeek = function() {
  return "I like to watch movies.";
}
const watchMovies = ['Avatar', 'Star Wars', 'Lord of the Rings','Avengers'];

shows.prototype.getGreatMovies = function() {
  console.log(`Here are some great movies`)
  for( let i = 0; i < this.greatMovies.length; i += 1) {
  console.log( `${i+1} - ${this.greatMovies[i]}`);
}
}

movieBuff.setGreatMovies(movieList);
movieBuff.getGreatMovies();
//prototype carrie their own methods
//instantiate we create variables
// const watch = new shows ('Emergence','ABC', 1, 'SyFy');
// console.log(watch);
// console.log(watch.getGeek());
// console.log(watch.getShowInfo());
// console.log(watch.getsuperFan());
// watch.settvShow("");
// console.log( watch.getShowInfo());
// watch.settvShow("Dancing with the Stars");
// console.log(watch.getShowInfo());
// watch.setMovie("");
// console.log(watch.setMovie());
// watch.setMovie("transformers");
// console.log(movieBuff);
// console.log(movieBuff.getGeek());
// console.log(watchMovies);
// movieBuff.setGreatMovies();
//console.log(movieBuff.getGreatMovies());
