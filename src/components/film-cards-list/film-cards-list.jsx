import React, {
  PureComponent
} from 'react';
import {connect} from 'react-redux';
import {
  arrayOf,
  string,
} from 'prop-types';

import {filmPropTypes} from '../../types.js';
import {FilmCardsListType} from '../../const.js';

import FilmCard from '../film-card/film-card.jsx';

const LIKE_THIS_CARDS_COUNT = 4;

class FilmCardsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      sign,
    } = this.props;

    return (
      <div className={`catalog__movies-list ${sign === FilmCardsListType.MAIN ? `` : `catalog--like-this`}`}>

        {this._getFilmCardsMarkup()}

      </div>
    );
  }

  _getFilmCardsMarkup() {
    const {
      filmsByGenre,
      filmsLikeThis,
      sign,
    } = this.props;

    if (sign === FilmCardsListType.LIKE_THIS) {
      return filmsLikeThis.slice(0, LIKE_THIS_CARDS_COUNT).map((film) => {
        return <FilmCard
          film={film}
          key={film.id}
        />;
      });
    }

    return filmsByGenre.map((film) => {
      return <FilmCard
        film={film}
        key={film.id}
      />;
    });
  }
}

FilmCardsList.propTypes = {
  filmsByGenre: arrayOf(filmPropTypes).isRequired,
  filmsLikeThis: arrayOf(filmPropTypes),
  sign: string.isRequired,
};

const mapStateToProps = (state) => ({
  filmsByGenre: state.filmsByGenre,
  filmsLikeThis: state.filmsLikeThis,
});

export {
  FilmCardsList
};

export default connect(mapStateToProps)(FilmCardsList);
