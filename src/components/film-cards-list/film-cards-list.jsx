import React, {
  PureComponent
} from 'react';
import {connect} from 'react-redux';
import {
  arrayOf,
  string,
  number,
} from 'prop-types';

import {filmPropTypes} from '../../types.js';
import {FilmCardsListType} from '../../const.js';
import {getAmountRenderFilmCard} from '../../reducer/options/selectors.js';
import {
  getFilmsByGenre,
  getFilmsLikeThis,
} from '../../reducer/films/selectors.js';

import FilmCard from '../film-card/film-card.jsx';
import withPreviewVideo from '../../hocs/with-preview-video/with-preview-video.jsx';

const FilmCardWrapped = withPreviewVideo(FilmCard);

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

        {sign === FilmCardsListType.MAIN && this._getFilmCardsMainMarkup()}

        {sign === FilmCardsListType.LIKE_THIS && this._getFilmCardsLikeThisMarkup()}
      </div>
    );
  }

  _getFilmCardsLikeThisMarkup() {
    const {
      filmsLikeThis,
    } = this.props;

    return filmsLikeThis.map((film) => {
      return <FilmCardWrapped
        film={film}
        key={film.id}
      />;
    });

  }

  _getFilmCardsMainMarkup() {
    const {
      amountRenderFilmCard,
      filmsByGenre,
    } = this.props;

    return filmsByGenre.slice(0, amountRenderFilmCard).map((film) => {
      return <FilmCardWrapped
        film={film}
        key={film.id}
      />;
    });
  }
}

FilmCardsList.propTypes = {
  amountRenderFilmCard: number,
  filmsByGenre: arrayOf(filmPropTypes).isRequired,
  filmsLikeThis: arrayOf(filmPropTypes),
  sign: string.isRequired,
};

const mapStateToProps = (state) => ({
  amountRenderFilmCard: getAmountRenderFilmCard(state),
  filmsByGenre: getFilmsByGenre(state),
  filmsLikeThis: getFilmsLikeThis(state),
});

export {
  FilmCardsList
};

export default connect(mapStateToProps)(FilmCardsList);
