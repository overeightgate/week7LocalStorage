const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const userInputYear = document.querySelector('.userInputYear');
const moviePosterUrl = document.querySelector('.userInputTitleUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let yearInStorage = localStorage.getItem('year');
let imageUrlInStorage = localStorage.getItem('imageUrl');

if (titleInStorage && yearInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage + " (" + yearInStorage + ")";
    container.style.backgroundImage = `linear-gradient(rgb(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)), url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let movieYearInput = userInputYear.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('year', movieYearInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput + " (" + movieYearInput + ")";
    container.style.backgroundImage = `linear-gradient(rgb(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)), url('${posterUrlInput}')`;
});
