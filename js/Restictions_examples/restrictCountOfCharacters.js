const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB ={
    movies: {},
    count: numberOfFilms
}
for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''); 
    if(a != null && b != null && a != '' && b != '' && a.length < 3){
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else{
        console.log("error");
        i--;
        }
}
// alert(personalMovieDB)
// console.log(personalMovieDB)



    
if(personalMovieDB.count < 10){
    console.log("Любитель");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log("Класический зритель")
} else if (personalMovieDB.count > 30 || personalMovieDB.count.length < 3){
        console.log("Киноман")
} else {
        alert("Пожалуйста введите только число");
    }





