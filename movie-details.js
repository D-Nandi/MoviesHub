const movieData = JSON.parse(localStorage.getItem('movieData'));
const movieContainer = document.querySelector('.movie-container');

const showMovieData = (movieData) => {
    if (
        movieData &&
        typeof movieData !== 'undefined' &&
        movieData.Title &&
        movieData.Genre &&
        movieData.Released &&
        movieData.Runtime &&
        movieData.Actors &&
        movieData.Plot &&
        movieData.Poster
    ) {
        movieContainer.innerHTML = " ";
        movieContainer.classList.remove('noBackground');

        const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = movieData;

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-info');
        movieElement.innerHTML = `<h2>${Title}</h2>
                                <p><strong>Rating: &#11088;</strong> ${imdbRating || 'N/A'}</p>`;

        const movieGenreElement = document.createElement('div');
        movieGenreElement.classList.add('movie-genre');

        if (Genre && typeof Genre === 'string') {
            Genre.split(",").forEach(element => {
                const p = document.createElement('p');
                p.innerText = element.trim(); // Trim to remove extra spaces
                movieGenreElement.appendChild(p);
            });
        } else {
            movieGenreElement.innerHTML = '<p>No genre information available</p>';
        }

        movieElement.appendChild(movieGenreElement);

        movieElement.innerHTML += `<p><strong>Released Date: </strong>${Released}</p>
                                <p><strong>Duration: </strong>${Runtime}</p>
                                <p><strong>Cast: </strong>${Actors}</p>
                                <p><strong>Plot: </strong>${Plot}</p>`;

        const moviePosterElement = document.createElement('div');
        moviePosterElement.classList.add('movie-poster');

        if (Poster && Poster !== "N/A") {
            moviePosterElement.innerHTML = `<img src="${Poster}" alt="Poster of ${Title}" />`;
        } else {
            moviePosterElement.innerHTML = `<p>No poster available</p>`;
        }

        movieContainer.appendChild(moviePosterElement);
        movieContainer.appendChild(movieElement);

    } else {
        movieContainer.innerHTML = '<h2>No movie data available!</h2>';
    }
};
showMovieData(movieData);

showMovieData(movieData);

// Clear the movie data from localStorage after displaying it
localStorage.removeItem('movieData');

// Adding event listener to the back button
const backButton = document.querySelector('.back-button');
backButton.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect to the main page
});

