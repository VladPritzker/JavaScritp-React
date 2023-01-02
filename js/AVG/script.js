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
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
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

//Условия 
const numb = 10;
(numb === 9) ? console.log('10'): console.log("need to be re-test");

if (numb > 20) {
    console.log('less then 20')
} else if (numb < 10) {
    console.log('Less then 10')
} else {
    console.log("need to be re-test");

}


//switch case 1 
const toll = true;

switch (toll) {
    case false:
        console.log("Nor right");
        break;
    case true:
        console.log("Right");
}
//switch case 2
var example = 10
switch (example) {
    case 11:
        console.log("Not right");
        break;
    case 9:
        console.log("Unfortunatly also not right");
        break;
    default:
        console.log("Not this time");
}

// && = and, || = or; if all is fals then will be displayed last wrong value, if some is true then will be displayed last value which is true 

const humburger = 3;
const free = 3;
const cola = 0;
const nuggets = 2;

if (humburger === 3 && cola === 1 || free === 3 && nuggets > 2) {
    console.log('everyone is happy')
} else {
    console.log("we are leaving")
}

console.log(humburger === 3 && cola === 2 || free === 3 && nuggets) // в консоль выведет последнее правдивое значение "2"


console.log(NaN || 2 || undefined)

console.log(NaN && 2 && undefined)

console.log(!undefined)

console.log(!1 && 2 || !3)

console.log(25 || null && !3)

console.log(NaN || null || !3 || undefined || 5)

console.log(NaN || null && !3 && undefined || 5)

console.log(5 === 5 && 3 > 1 || 5)



let num = 50;
// while (num <= 55){
//     console.log(num);
//     num++;
// }
// do {
//     console.log(num);
//     num++;
// } while(num <= 55)

// for (let i = 1; i <= 10;  i++){
//     console.log(i)
// };

// for (let i = 1; i <= 10;  i++){
//     console.log(num);
//     num++
// };


for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break; // остонавливает на заданном условви в if
        continue //пропускает заданное условие (6)
    }
    console.log(i);
};

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j)
    }
}

let result = '';
const length = 7;
for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) { // каждый раз о будет удваеваться потому что i будет увеличеваться на 1 до 7 то есть максимум 6
        result += "vlad "; //каждый раз добавлять vlad 
    }
    result += '\n'; // перенос строки 
}
console.log(result)


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    second: for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) continue second; // метка (что мы хотим продолжить после того как условие достигнуто)
            console.log(`Third level: ${k}`)
        }
    }
}


for (let i = 5; i <= 10; i++) {
    console.log(i)
}

First: for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue First
    console.log(i)
}

let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i)
    }
};

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }


for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }