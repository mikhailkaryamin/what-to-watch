import React from 'react';
import {func} from 'prop-types';

import {filmCardPropTypes} from '../../types.js';

const FilmCard = (props) => {
  const {
    onFilmCardClick,
  } = props;

  const {
    posterImage,
    name,
  } = props.filmCard;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => {
        onFilmCardClick(props.filmCard);
      }}
    >
      <div
        className="small-movie-card__image"
      >
        <img
          src={posterImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3
        className="small-movie-card__title"
      >
        <a
          className="small-movie-card__link"
          href="#"
        >
          {name}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  filmCard: filmCardPropTypes,
  onFilmCardClick: func,
};

export default FilmCard;
