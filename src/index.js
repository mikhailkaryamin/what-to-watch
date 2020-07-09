import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {getFilmCardsList} from './mock/mock.js';

const COUNT_FILM_CARDS = 20;
const filmCards = getFilmCardsList(COUNT_FILM_CARDS);

ReactDOM.render(
    <App
      filmCards={filmCards}
    />,
    document.querySelector(`#root`)
);
