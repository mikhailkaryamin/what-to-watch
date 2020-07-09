import React from 'react';
import {func} from 'prop-types';
import {filmCardPropTypes} from '../../types.js';

const FilmCard = (props) => {
  const {
    onHeadlineButtonClick,
    onMouseEnter,
    onMouseLeave,
  } = props;

  const {
    posterImage,
    name,
  } = props.filmCard;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMouseEnter(props.filmCard);
      }}
      onMouseLeave={() => {
        onMouseLeave();
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
        onClick={onHeadlineButtonClick}
      >
        <a
          className="small-movie-card__link"
          href="movie-page.html"
        >
          {name}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  filmCard: filmCardPropTypes,
  onMouseEnter: func,
  onMouseLeave: func,
  onHeadlineButtonClick: func,
};

export default FilmCard;
