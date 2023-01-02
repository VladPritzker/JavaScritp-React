// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
// str.length - и получить её длину)
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
// 4) Потренироваться и переписать цикл еще двумя способами*/

function myOwnScript() {
    
    const personalMovieDB = {
        count: {},
        movies: {}
    };

    for (i = 0; i < 1; i++) {
        const numberOfFilms = +prompt("How many films have you watch?", "");
        if (numberOfFilms < 10) {
            personalMovieDB.count = numberOfFilms;
            console.log(personalMovieDB.count);
            console.log("Просмотрено довольно мало фильмов")
        } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
            console.log("вы класический зритель!");
            personalMovieDB.count = numberOfFilms;
            console.log(personalMovieDB.count);
        } else if (numberOfFilms >= 30) {
                    personalMovieDB.count = numberOfFilms;
            console.log("Вы киноман!");
            console.log(personalMovieDB.count);
        } else if(numberOfFilms == null){
            console.log("Нудно ввести что то");
            console.log(personalMovieDB.count);
        }
        else{
            console.log("Произошла ошибка");
            personalMovieDB.count = numberOfFilms;
            console.log(personalMovieDB.count);
            i--;
        }
    }

    for (let i = 0; i < 1; i++) {
        const a = prompt('Which last movie did you watch ?', ''),
            b = +prompt('How do you appraise it?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b > 0) {
            personalMovieDB.movies[a] = b;
            console.log('done');
            console.log(personalMovieDB.movies);
        } else{
            console.log('error');
            console.log(personalMovieDB.movies);
            i--;
        }
    }

    // for (let i = 0; i < 2; i++) {
    //     const a = prompt('Один из последних просмотренных фильмов?', ''),
    //           b = prompt('На сколько оцените его?', '');
    
    //     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    //         personalMovieDB.movies[a] = b;
    //         console.log('done');
    //     } else {
    //         console.log('error');
    //         i--;
    //     }
    // }

    
    
    

}