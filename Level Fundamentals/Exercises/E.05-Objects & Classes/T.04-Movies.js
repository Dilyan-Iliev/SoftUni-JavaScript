const addMovieDate = (currentEl, movies, command) => {
    let index = currentEl.indexOf(command);
    let movieName = currentEl.slice(0, index).join(' ');
    let date = currentEl.slice(index + 1).join(' ');

    if (movies.some(x => x.name === movieName)) {
        let index = movies.findIndex(x => x.name === movieName);
        return movies[index].date = date;
    }
}

const addMovieDirector = (currentEl, movies, command) => {
    let index = currentEl.indexOf(command);
    let movieName = currentEl.slice(0, index).join(' ');
    let directorName = currentEl.slice(index + 1).join(' ');

    //or let info = currentEl.split(` ${command} `);
    //let name = info[0];
    //let director = info[1];

    if (movies.some(x => x.name === movieName)) { 
        //think of .find(връща 1я елемент отговарящ на дадено условие или undefined ако не намери такъв)
        let index = movies.findIndex(x => x.name === movieName);
        return movies[index].director = directorName;
    }
}

class Movie {
    constructor(name, director, date) {
        this.name = name;
        this.director = director;
        this.date = date;
    }
}

function extractMovies(input) {
    let movies = [];

    for (let i = 0; i < input.length; i++) {
        let currentEl = input[i].split(' ');

        if (currentEl.includes('addMovie')) {
            let movieName = currentEl.slice(1).join(' ');

            //or let movieName = currentEl.split(' addMovie ')[1];

            movies.push(new Movie(movieName));
        }
        else if (currentEl.includes('directedBy')) {
            addMovieDirector(currentEl, movies, 'directedBy');
        }
        else if (currentEl.includes('onDate')) {
            addMovieDate(currentEl, movies, 'onDate');
        }
    }

    let filteredMovies = movies.filter(x => x.name !== undefined
        && x.director !== undefined
        && x.date !== undefined);

    filteredMovies
        .forEach(x => console.log(JSON.stringify(x)));
}
extractMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

