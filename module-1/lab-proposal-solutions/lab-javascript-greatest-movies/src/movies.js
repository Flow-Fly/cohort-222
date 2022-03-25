/* eslint no-restricted-globals: 'off' */

function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  /*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    The array method sort(), mutates the original movies array passed in as a parameter.
    In order to avoid mutating that array, there are many ways to make a copy of this array.
      - Spread operator: [...yourArray]
      - Slice: yourArray.slice() 
      - JSON parse/stringify : JSON.parse(JSON.stringify(yourArray))
      - Array.from : Array.from(yourArray)
  */

  // Solution n°1
  const moviesCopy = [...movies];
  const sortedMovies = moviesCopy.sort((movieA, movieB) => {
    if (movieA.year === movieB.year) {
      return movieA.title.localeCompare(movieB.title);
    } else {
      return movieA.year - movieB.year;
    }
  });
  return sortedMovies;
  // ******* Solution n°2
  // return [...movies].sort((movieA, movieB) => {
  //   if (movieA.year === movieB.year) {
  //     return movieA.title.localeCompare(movieB.title);
  //   } else {
  //     return movieA.year - movieB.year;
  //   }
  // });

  // Solution n°3 with ternary operator
  // condition ? true : false
  // If the condition is true,  it resolves to the most left statement,
  // else it resolve to the most right statement.
  // return [...movies].sort((movieA, movieB) =>
  //   movieA.year === movieB.year
  //     ? movieA.title.localeCompare(movieB.title)
  //     : movieA.year - movieB.year
  // );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  // Solution n°1
  const filteredMovies = movies.filter(
    (m) => m.genre.includes('Drama') && m.director === 'Steven Spielberg'
  );
  return filteredMovies.length;

  // Solution n°2
  // return movies.filter(m => m.genre.includes("Drama") && m.director === "Steven Spielberg").length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // Solution n°1
  // Map the movies array into a new array containing only the titles.
  // This creates a new array, and since we are taking only the title property value
  // we get red of the reference on the objects.
  const movieTitles = movies.map((movie) => movie.title);
  // Sort them
  movieTitles.sort((movieA, movieB) => movieA.localeCompare(movieB));
  // Get the first 20 elements.
  const firstTwentyMovies = movieTitles.slice(0, 20);
  return firstTwentyMovies;

  // Solution n°2
  // return movies
  //   .map(m => m.title)  // take only the titles, this resolves into an array.
  //   .sort((movieA, movieB) => movieA.localeCompare(movieB)) // sort them
  //   .slice(0, 20); // slice them
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) return 0;
  // Solution n°1
  const sum = movies.reduce((acc, movie) => {
    // Some movies don't have a rate, so we have to test if there's a rate
    // otherwise we might be getting NaN if we add undefined to a number.
    if (movie.score) {
      acc += movie.score;
    }
    return acc;
  }, 0);
  const avg = sum / movies.length;
  return Math.round(avg * 100) / 100;

  //Solution n°2
  // const avg = movies.reduce((acc,movie) => movie.rate ? acc += movie.rate : acc,0) / movies.length;
  // return Math.round(avg * 100) / 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  /******************************************* 
    Rates average expects an array of movies,
    movies.filter, returns an array containing only the
    movies that have the Drama genre.
    *****************************************/
  return scoresAverage(movies.filter((movie) => movie.genre.includes('Drama')));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  // Solution n°1
  return movies.map((m) => {
    // Make a shallow copy of the object.
    const copy = { ...m };
    let durationStr = m.duration.split(' ');
    let hours = 0;
    let minutes = 0;
    // If after the split we get an array of length 1, it means we had either
    // only minutes or only hours.
    // So we have to check if the string contained at the first index (0)
    //  includes the string "min" or "h"
    //
    if (durationStr.length === 1) {
      if (durationStr[0].includes('h')) {
        hours = parseFloat(durationStr[0]);
      } else {
        minutes = parseFloat(durationStr[0]);
      }
    } else {
      hours = parseFloat(durationStr[0]);
      minutes = parseFloat(durationStr[1]);
    }
    const durationInMinutes = hours * 60 + minutes;
    copy.duration = durationInMinutes;
    return copy;
  });

  //Solution n°2 using regex https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  // return movies.map(m => {
  //   const match = /(?<hours>\dh)*\W*(?<minutes>\d*min)*/gi.exec(m.duration);
  //   let hours = parseFloat(match.groups.hours || 0);
  //   let minutes = parseFloat(match.groups.minutes || 0);
  //   let duration = hours * 60 + minutes;
  //   return { ...m, duration };
  // });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  /* 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
  
  The idea here, is to find a way to group all the rates belonging to the same year together.
  Reduce is a powerful function in which the accumulator can be of any type: number, object, string...
  For this bonus, the accumulator will be an object, each key will represent a given year, and it's value 
  will be an array containing all the rates belonging to that year.
  */

  if (!movies.length) return null;

  const ratesPerYear = movies.reduce((acc, movie) => {
    if (movie.year in acc) {
      // If the the year property eg: "2000" exists, since we have created an array previously
      // for this property (year), we can simply push it's rate to the array.
      acc[movie.year].push({ score: movie.score });
    } else {
      // If they year property eg: "1994" doesn't exist, then we define a new property with
      // with the bracket accessor, and define a new array containing the movie rate.
      acc[movie.year] = [{ score: movie.score }];
    }
    // Don't forget to return the accumulator.
    return acc;
  }, {}); // Accumulator starts as an empty object.

  /*
    Now that we have an object regrouping all the rates for a given year, we can simply iterate through every year,
    look which is best and then return the result.
    Since ratesPerYear is an object, we'll be using the for in loop.
  */

  let bestYear = 0;
  let bestAvg = 0;

  for (const year in ratesPerYear) {
    const avg = scoresAverage(ratesPerYear[year]);
    if (avg > bestAvg) {
      bestYear = year;
      bestAvg = avg;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}

if (typeof module !== 'undefined') {
  module.exports = {
    howManyMovies,
    getAllDirectors,
    dramaMoviesScore,
    scoresAverage,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
