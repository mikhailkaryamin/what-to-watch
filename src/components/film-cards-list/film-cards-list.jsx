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

import FilmCard from '../film-card/film-card.jsx';
import withPreviewVideo from '../../hocs/with-preview-video/with-preview-video.jsx';

const FilmCardWrapped = withPreviewVideo(FilmCard);

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
      amountRenderFilmCard,
      filmsByGenre,
      filmsLikeThis,
      sign,
    } = this.props;

    if (sign === FilmCardsListType.LIKE_THIS) {
      return filmsLikeThis.slice(0, LIKE_THIS_CARDS_COUNT).map((film) => {
        return <FilmCardWrapped
          film={film}
          key={film.id}
        />;
      });
    }

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
  amountRenderFilmCard: state.amountRenderFilmCard,
  filmsByGenre: state.filmsByGenre,
  filmsLikeThis: state.filmsLikeThis,
});

export {
  FilmCardsList
};

export default connect(mapStateToProps)(FilmCardsList);
