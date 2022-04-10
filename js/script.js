'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



/* Вариант 2 */

/* let i = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
        i++;
    if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Спасибо за ответы!');
    } else {
        console.log('Ответьте пожалуйста на все вопросы');
        i--;
    }
} while (i < 2); */


/* Вариант 3 */

/* let i = 0;
while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    i++;
    if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Спасибо за ответы!');
    } else {
    console.log('Ответьте пожалуйста на все вопросы');
    i--;
    }
} */

/* Вариант 1 */

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Спасибо за ответы!');
    } else {
        console.log('Ответьте пожалуйста на все вопросы');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов:(');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы настоящий киноман!');
} else {
    console.log('Ошибка');
}

console.log(personalMovieDB);


