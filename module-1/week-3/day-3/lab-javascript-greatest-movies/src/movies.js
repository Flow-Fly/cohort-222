// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const names = moviesArray.map(movie => {
    return movie.director;
  })
  return names;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filterArray = moviesArray.filter((movie) => {
    return (movie.director === "Steven Spielberg" && movie.genre.includes('Drama'))
  })

  return filterArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0
  }
  const average = moviesArray.reduce((acc, movie) => {
    if (!movie.score) {
      return acc;
    }
    return acc + movie.score;
  }, 0)
  return +((average / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => (movie.genre.includes('Drama')));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // const copy = JSON.parse(JSON.stringify(moviesArray))
  // const copy = Array.from(moviesArray);
  // const copy = moviesArray.map(movie => movie);

  const copy = [...moviesArray];

  return copy.sort((movie1, movie2) => {
    if (movie1.year === movie2.year) {
      return movie1.title.toLowerCase().localeCompare(movie2.title.toLowerCase());
    }
    return movie1.year - movie2.year;
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map(movie => movie.title);
  const sortedTitles = titles.sort((title1, title2) => {
    return title1.toLowerCase().localeCompare(title2.toLowerCase())
  })

  return sortedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const moviesCopy = [...movies];
  return moviesCopy.map(movie => {
    let newDuration = movie.duration.split(' ').reduce((acc, el) => {
      if (el.includes('h')) {
        return acc += +el.split('h')[0] * 60;
      } else {
        return acc += +el.split('min')[0]
      }
    }, 0);

    return { ...movie, duration: newDuration }
  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies.length) {
    return null;
  }
  let year;
  let rate = 0;
  let visitedYears = []
  movies.forEach(movie => {
    if (!visitedYears.includes(movie.year)) {
      const sameYearMovies = movies.filter(el => el.year === movie.year);
      const provisionalRate = scoresAverage(sameYearMovies);
      if (provisionalRate >= rate) {
        rate = provisionalRate;
        year = movie.year;
      }
      visitedYears.push(movie.year);
    }
  })
  return `The best year was ${year} with an average score of ${rate}`
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}