'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из последних просмотренных фильмов?')
let b = prompt('На сколько оцените его?')

personalMovieDB.movies[a] = b;