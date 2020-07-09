import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {getFilmCardsList} from './mocks/films.js';

const COUNT_FILM_CARDS = 8;
const filmCards = getFilmCardsList(COUNT_FILM_CARDS);

ReactDOM.render(
    <App
      filmCards={filmCards}
    />,
    document.querySelector(`#root`)
);
