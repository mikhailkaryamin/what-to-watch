import React, {
  PureComponent
} from 'react';
import {
  arrayOf,
  func,
} from 'prop-types';
import {filmCardPropTypes} from '../../types.js';

import FilmCard from '../film-card/film-card.jsx';

class FilmCardsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null,
    };
    this._setActiveFilmCard = this._setActiveFilmCard.bind(this);
    this._removeActiveFilmCard = this._removeActiveFilmCard.bind(this);
  }

  render() {
    const {
      filmCards,
      onHeadlineButtonClick,
    } = this.props;

    const filmCardsMarkup = filmCards.map((filmCard) => {
      return <FilmCard
        filmCard={filmCard}
        key={filmCard.id}
        onHeadlineButtonClick={onHeadlineButtonClick}
        onMouseEnter={this._setActiveFilmCard}
        onMouseLeave={this._removeActiveFilmCard}
      />;
    });

    return filmCardsMarkup;
  }

  _setActiveFilmCard(id) {
    this.setState({
      activeCardId: id,
    });
  }

  _removeActiveFilmCard() {
    this.setState({
      activeCardId: null,
    });
  }
}

FilmCardsList.propTypes = {
  onHeadlineButtonClick: func,
  filmCards: arrayOf(filmCardPropTypes),
};

export default FilmCardsList;
