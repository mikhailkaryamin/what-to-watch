import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {getFilmCard} from './mock/mock.js';

const filmCard = getFilmCard();

ReactDOM.render(
    <App
      filmCard={filmCard}
    />,
    document.querySelector(`#root`)
);
