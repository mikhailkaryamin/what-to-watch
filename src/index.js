import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {getFilmCardsList} from './mocks/films.js';
import {getCommentList} from './mocks/comments.js';

const COUNT_FILM_CARDS = 8;
const COUNT_FILM_COMMENTS = 5;

const filmCards = getFilmCardsList(COUNT_FILM_CARDS);
const filmComments = getCommentList(COUNT_FILM_COMMENTS);

ReactDOM.render(
    <App
      filmCards={filmCards}
      filmComments={filmComments}
    />,
    document.querySelector(`#root`)
);
