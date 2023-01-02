
const personalMovieDB ={
    movies: {}
}
function myFunctionn() {
for (let i = 0; i < 2; i++){
    const a = prompt('Один из последниз просматриваемых фильмов?'),
          b = prompt('На сколько вы его оцениваете ?')  
          personalMovieDB.movies[a]=b
}
// alert(personalMovieDB)
console.log(personalMovieDB)
}