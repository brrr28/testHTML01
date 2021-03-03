'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 1; i++) {
let a = prompt('Один из последних просмотренных фильмов?')
let b = prompt('На сколько оцените его?')

    if(a != null && b !=null && a.length < 50 && a != '' && b != '') {
        console.log('done')
    } else {
        console.log('error')
        i--;
    }

        if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов!')
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель!') 
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман!')
    } else {
        console.log('Error 404 BOY')
    }
    
    personalMovieDB.movies[a] = b;
};