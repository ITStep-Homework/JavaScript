const parseBtn = document.querySelector('.parseBtn');
const searchMenu = document.querySelector('#searchMenu');
const genresSelect = document.querySelector('select');
const main = document.querySelector('main');
const fetchUrl = 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=12&selectFields=name&selectFields=alternativeName&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=poster&notNullFields=name&notNullFields=alternativeName&notNullFields=shortDescription&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&sortField=rating.kp&sortType=-1&genres.name=';

let currentGenre = '';
let moviesCache = [];

parseBtn.addEventListener('click', () => {
    const selectedGenre = genresSelect.value;
    if (!selectedGenre) {
        alert('Выберите жанр фильма');
    } else if (selectedGenre !== currentGenre) {
        currentGenre = selectedGenre;
        fetchMovies(selectedGenre);
    }
});

searchMenu.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredMovies = moviesCache.filter(movie => 
        (movie.name || movie.alternativeName).toLowerCase().includes(searchTerm)
    );
    render(filteredMovies);
});

async function fetchMovies(genre) {
    try {
        const response = await fetch(`${fetchUrl}${encodeURIComponent(genre)}`, {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': 'JHBGJXX-J1BMACY-H7X6T9R-6ZK180V'
            }
        });
        const data = await response.json();
        moviesCache = data.docs;
        render(moviesCache);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

function render(movies) {
    main.innerHTML = '';
    movies.forEach(elem => {
        main.innerHTML += `
            <div class="movieCard">
                <img src="${elem.poster.url || elem.poster.previewUrl}" alt="${elem.name || elem.alternativeName} (${elem.year})">
                <p class="movieTitle">${elem.name || elem.alternativeName} (${elem.year})</p>
                <p class="movieDescription">${elem.shortDescription || 'Описание отсутствует'}</p>
            </div>
        `;
    });
}