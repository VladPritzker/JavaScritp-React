// // const answers = []
// // answers[0] = prompt('What is your name?', '')
// // answers[1] = prompt('What is your lastname?', '')
// // answers[2] = prompt('What is your DOB?', '')
// // console.log(answers)

// // const category = 'toys'
// // console.log(`https://someurl.com/${category}/5`);

// // const user = "Vlad the best creature in the world";
// // alert(`Hello, ${user}`);

// // //Операторы 
// // console.log('arr' + " - object");

// // console.log(4 + +'фкк')
// // // ёто выведет результат NaN так как, так как мы не можем добвавить число к строке
// // console.log(4 + +'5')
// // // ёто выведет результат 9 

// // let incr = 10,
// // decr = 10;
// // incr++;
// // incr--;

// // console.log(incr)
// // console.log(decr)
// ////
// const Closed = true,
// 	isOpen = false;
// console.log( Closed && !isOpen) // выдаст результат true, так как open равнялось fals,

//// задание урок 1 

//1
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
//2
const personalMovieDB =
{   
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres:[],
    privat: false 
};
//3
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

