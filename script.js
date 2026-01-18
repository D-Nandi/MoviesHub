const searchForm = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
const movieContainers = document.querySelector('.movie-containers');
const inputBox = document.querySelector('.inputBox');

//function to fetch movie details using OMDB API

const getMovieInfo = async (movie) => {
    try {
        const myAPIKey = "32d36f87";
        const url = `https://www.omdbapi.com/?apikey=${myAPIKey}&t=${movie}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to fetch movie data.");
        }
        const data = await response.json();
        addMovieData(data);
    }
    catch (error) {
        showErrorMessage("No Movie Found!!!");
    }
}

//Function to show movie data on screen
const addMovieData = (data) => {

        // Store the movie data in localStorage
        localStorage.setItem('movieData', JSON.stringify(data));

        // Redirect to the movie details page
        window.location.href = 'movie-details.html';

        // Clear the input box
        inputBox.value = '';
}

//function to display error message
const showErrorMessage = (message) => {
    movieContainer.innerHTML = `<h2>${message}</h2>`;
    movieContainer.classList.add('noBackground');
}

//adding event listener to search form

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const movieName = inputBox.value.trim();
    if (movieName !== '') {
        getMovieInfo(movieName);
    }
    else {
        showErrorMessage("Enter movie name to get movie information");
    }
});
