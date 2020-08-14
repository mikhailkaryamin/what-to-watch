import React from 'react';
import {connect} from 'react-redux';
import {
  arrayOf,
  number,
  string,
} from 'prop-types';

import {FilmCardsListType} from '../../const.js';
import {filmPropTypes} from '../../types.js';
import {getAmountRenderFilmCard} from '../../reducer/options/selectors.js';
import {
  getFilmsByGenre,
  getFilmsLikeThis,
} from '../../reducer/films/selectors.js';

import FilmCards from '../film-cards/film-cards.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';

const FilmCatalog = (props) => {
  const {
    amountRenderFilmCard,
    filmsByGenre,
    filmsLikeThis,
    sign,
  } = props;

  return (
    <section className="catalog">
      {sign === FilmCardsListType.MAIN &&
        <React.Fragment>
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />

          <FilmCards
            films={filmsByGenre.slice(0, amountRenderFilmCard)}
          />

          {(filmsByGenre.length <= amountRenderFilmCard) ? `` : <ShowMoreButton />}
        </React.Fragment>
      }

      {sign === FilmCardsListType.LIKE_THIS &&
        <React.Fragment>
          <h2 className="catalog__title">
            More like this
          </h2>

          <FilmCards
            films={filmsLikeThis}
            prefix={FilmCardsListType.LIKE_THIS}
          />
        </React.Fragment>
      }

    </section>
  );
};

FilmCatalog.propTypes = {
  amountRenderFilmCard: number.isRequired,
  filmsByGenre: arrayOf(filmPropTypes),
  filmsLikeThis: arrayOf(filmPropTypes),
  sign: string.isRequired,
};

const mapStateToProps = (state) => ({
  amountRenderFilmCard: getAmountRenderFilmCard(state),
  filmsByGenre: getFilmsByGenre(state),
  filmsLikeThis: getFilmsLikeThis(state),
});

export {
  FilmCatalog,
};

export default connect(mapStateToProps)(FilmCatalog);
