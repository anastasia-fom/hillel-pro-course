const API_KEY = '91d38c9e';
const searchInput = document.querySelector('.search-films__input');
const searchButton = document.querySelector('.search-films__button');
let pageNum;

function notFoundError(data){
    const p = document.createElement('div');
    p.innerText = `${data.Error}`;
    p.className = 'search-error';
    document.querySelector('.list-films').append(p);
}

//Показ фільмів
function showMovie(film){
    const divFilmDescription = document.createElement('div');
    divFilmDescription.className = 'list-films__element';

    //Додаємо зображення
    const poster = document.createElement('img');
    if(film.Poster === 'N/A'){
        poster.src = '../assets/poster.jpg';
    } else{
        poster.src = `${film.Poster}`;
    }
    poster.alt = `Poster of "${film.Title}"`;

    const divFilmInfo = document.createElement('div');
    divFilmInfo.className = 'list-films__info';

    const titleOfFilm = document.createElement('p');
    titleOfFilm.className = 'list-films__description';
    titleOfFilm.innerText = `${film.Title}, ${film.Year}, ${film.Type}`
    divFilmInfo.append(titleOfFilm);

    const btnDetails = document.createElement('button');
    btnDetails.className = `list-films__details`
    btnDetails.innerText = `Details`;
    btnDetails.id = film.imdbID;

    //Невеличку інформацію групуємо у окремий блок
    divFilmDescription.append(poster, divFilmInfo, btnDetails);
    document.querySelector('.list-films').append(divFilmDescription);
}

//Запит данних та виведення їх
function movieList() {
    document.querySelector('.list-films').innerHTML = '';

    const filmName = searchInput.value;
    const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${filmName}&page=${pageNum}`;
    const getFilms = fetch(URL);
    getFilms
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            if(data.Response === 'False'){
                notFoundError(data);
            } else {
                data.Search.forEach((film) => {
                    showMovie(film);
                });

                //Вивід кнопок пагінації
                getPaginationNumbers(getPageCount(data.totalResults));

                //Функціонал кнопки Details
                document.querySelector('.list-films').addEventListener('click', function (event) {
                    if (event.target.classList.contains('list-films__details')) {
                        let filmId = event.target.id;
                        detailsInfo(filmId);
                    } else {
                        alert('Ooops. Something went wrong!');
                    }
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

//Будуємо блок та показуємо детальну інформацію про фільм
function showDetails(details){
    document.querySelector('.film-details').innerHTML = '';
    const filmPoster = document.createElement('img');
    if(details.Poster === 'N/A'){
        filmPoster.src = '../assets/poster.jpg';
    } else{
        filmPoster.src = `${details.Poster}`;
    }
    filmPoster.className = 'film-details__poster';
    filmPoster.alt = `Poster of "${details.Title}"`;

    const title = document.createElement('p');
    title.innerHTML = `<span class="characteristic film-details__title">${details.Title} </span>`;
    const year = document.createElement('p');
    year.innerHTML = `<span class="characteristic"> Year: </span> ${details.Year}`;

    const country = document.createElement('p');
    country.innerHTML = `<span class="characteristic"> Country: </span> ${details.Country}`;

    const director = document.createElement('p');
    director.innerHTML = `<span class="characteristic"> Director: </span> ${details.Director}`;

    const writer = document.createElement('p');
    writer.innerHTML = `<span class="characteristic"> Writer: </span> ${details.Writer}`;

    const type = document.createElement('p');
    type.innerHTML = `<span class="characteristic"> Type: </span> ${details.Type}`;

    const genre = document.createElement('p');
    genre.innerHTML = `<span class="characteristic"> Genre: </span> ${details.Genre}`;

    const language = document.createElement('p');
    language.innerHTML = `<span class="characteristic"> Language: </span> ${details.Language}`;

    const released = document.createElement('p');
    released.innerHTML = `<span class="characteristic"> Released: </span> ${details.Released}`;

    const runtime = document.createElement('p');
    runtime.innerHTML = `<span class="characteristic"> Runtime: </span> ${details.Runtime}`;

    const actors = document.createElement('p');
    actors.innerHTML = `<span class="characteristic"> Actors: </span> ${details.Actors}`;

    const awards = document.createElement('p');
    awards.innerHTML = `<span class="characteristic"> Awards: </span> ${details.Awards}`;

    const plot = document.createElement('p');
    plot.innerHTML = `<span class="characteristic__plot"> <span class="characteristic"> Plot: </span><br> ${details.Plot} </span>`;

    const description = document.createElement('div');
    description.className = 'film-details__content';
    description.append(title, year, country, director, writer, type, genre, language, released, runtime, actors, awards, plot);



    const divDetails =  document.querySelector('.film-details');
    divDetails.append(filmPoster, description);

    document.querySelector('.details__wrapper').append(divDetails);
}

//Показ інформації про фільм
function detailsInfo(filmId){
    document.querySelector('.film-details').innerHTML = '';

    const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${filmId}`;
    const getDetailFilm = fetch(URL);

    getDetailFilm
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            showDetails(data);
        })
}

//Пошук фільму та вивід даних
searchButton.addEventListener('click', function (event){
    event.preventDefault();
    movieList();
});

//Додавання пагінації
const paginationNumbers = document.getElementById("pagination-numbers");
const paginationLimit = 10;

//Додаванняя кнопок пагінації
const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
};

//Додавання кожного елементу на сторінку
const getPaginationNumbers = (pageCount) => {
    paginationNumbers.innerHTML = '';
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};

//Підрахунок усієї кількості сторінок
function getPageCount (data) {
    const results = data;
    return Math.ceil(results / paginationLimit);
}

//Перехід на іншу сторінку
paginationNumbers.addEventListener('click', function(event){
    pageNum = event.target.textContent;
    movieList(filmName = this, pageNum = pageNum);
});











