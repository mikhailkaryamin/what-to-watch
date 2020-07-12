import React from 'react';
import {
  string,
} from 'prop-types';

import {FilmCardsListType} from '../../const.js';

import FilmCardsList from '../film-cards-list/film-cards-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';

const FilmCatalog = (props) => {
  const {
    sign,
  } = props;

  return (
    <section className="catalog">
      {sign === FilmCardsListType.MAIN && <React.Fragment>
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList />

        <FilmCardsList
          sign={FilmCardsListType.MAIN}
        />


        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </React.Fragment>}

      {sign === FilmCardsListType.LIKE_THIS && <React.Fragment>
        <h2 className="catalog__title">
          More like this
        </h2>

        <FilmCardsList
          sign={FilmCardsListType.LIKE_THIS}
        />
      </React.Fragment>}

    </section>
  );
};

FilmCatalog.propTypes = {
  sign: string.isRequired,
};

export default FilmCatalog;
