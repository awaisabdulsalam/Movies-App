//     ******************************************************************

(async function () {
  const response = await fetch("./movies.json");
  const movies = await response.json();

  const genreElem = document.getElementById("genre");
  const yearElem = document.getElementById("year");
  const languageElem = document.getElementById("language");
  const ratingElem = document.getElementById("rating");
  const moviesElem = document.getElementById("movies");

  let moviesArray = [movies];
  console.log(moviesArray);
  let filteredMoviesArray = [];

  const displayMovies = (filteredMovies) => {
    moviesElem.innerHTML = "";

    // if(genreElem.value === "All" )

    let number = 0;
    for (let i = 0; i < filteredMoviesArray.length; i++) {
      number = filteredMoviesArray[i];
    }
    filteredMovies.forEach((movie, number) => {
      const div = document.createElement("div");
      div.classList.add("every_movie");
      const movieList = `
       <div>
          <ul>
            <li>${number}</li>
          </ul>
        </div>   
         <div class="movies_details">
          <div>
              <img src ="https://image.tmdb.org/t/p/w45${movie.poster_path}"/>
          </div>
          <div class="movie_dec">
          <div>
          <h4>${movie.title}</h4>
          </div>
            <div class="details">
            <p>${movie.certification}</p>
            <p>${movie.genres}</p>
            <p>${movie.runtime}</p>
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>${movie.release_date}</li>
          </ul>
        </div>
      `;
      filteredMoviesArray.push(movieList);
      div.innerHTML = movieList;
      moviesElem.appendChild(div);
    });
  };

  const searchMovie = () => {
    const genreQuery = genreElem.value;
    const yearQuery = yearElem.value;
    const languageQuery = languageElem.value;
    const ratingQuery = ratingElem.value;

    const resultMovie = movies.filter((movie) => {
      return (
        movie.genres.includes(genreQuery) ||
        movie.original_language.toString().includes(languageQuery) ||
        movie.release_date.toString().includes(yearQuery) ||
        movie.vote_average.toString().includes(ratingQuery)
      );
    });
    console.log(resultMovie);
    displayMovies(resultMovie);
  };

  genreElem.addEventListener("change", searchMovie);
  yearElem.addEventListener("change", searchMovie);
  languageElem.addEventListener("change", searchMovie);
  ratingElem.addEventListener("change", searchMovie);

  // displayMovies(movies);
})();
