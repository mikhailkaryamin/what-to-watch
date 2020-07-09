import React from 'react';
import {
  arrayOf,
  func,
} from 'prop-types';
import {filmCardPropTypes} from '../../types.js';

import FilmCardsList from '../film-cards-list/film-cards-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';

const FilmCatalog = (props) => {
  const {
    filmCards,
    onHeadlineButtonClick,
  } = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />

      <div className="catalog__movies-list">
        <FilmCardsList
          filmCards={filmCards}
          onHeadlineButtonClick={onHeadlineButtonClick}
        />
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

FilmCatalog.propTypes = {
  onHeadlineButtonClick: func,
  filmCards: arrayOf(filmCardPropTypes),
};

export default FilmCatalog;
