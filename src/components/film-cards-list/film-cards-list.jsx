import React, {
  PureComponent
} from 'react';
import {
  arrayOf,
  func,
  string,
} from 'prop-types';
import {filmCardPropTypes} from '../../types.js';
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
      filmCards,
      onFilmCardClick,
      sign,
    } = this.props;

    if (sign === FilmCardsListType.LIKE_THIS) {
      return filmCards.slice(0, LIKE_THIS_CARDS_COUNT).map((filmCard) => {
        return <FilmCard
          filmCard={filmCard}
          key={filmCard.id}
          onFilmCardClick={onFilmCardClick}
        />;
      });
    }

    return filmCards.map((filmCard) => {
      return <FilmCard
        filmCard={filmCard}
        key={filmCard.id}
        onFilmCardClick={onFilmCardClick}
      />;
    });
  }
}

FilmCardsList.propTypes = {
  filmCards: arrayOf(filmCardPropTypes),
  onFilmCardClick: func,
  sign: string,
};

export default FilmCardsList;
