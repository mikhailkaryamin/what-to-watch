import React from 'react';
import {connect} from 'react-redux';

import {
  func,
  string,
  bool,
} from 'prop-types';
import {filmPropTypes} from '../../types.js';

import {Operation as FavoriteOperation} from '../../reducer/favorite/favorite.js';

const ButtonFavorite = (props) => {
  const {
    film,
    isFavorite,
    place,
    onRemoveFavorite,
    onSetFavorite,
  } = props;

  const getButtonInFavorite = () => {
    return (
      <button
        className="btn movie-card__button btn--list"
        type="button"
        onClick={() => onSetFavorite(film, place)}
      >

        <svg width="19" height="20" viewBox="0 0 19 20">
          <use xlinkHref="#add"></use>
        </svg>

        <span>
          My list
        </span>
      </button>
    );
  };

  const getButtonRemoveFavorite = () => {
    return (
      <button
        className="btn movie-card__button btn--list"
        type="button"
        onClick={() => onRemoveFavorite(film, place)}
      >
        <svg width="18" height="14" viewBox="0 0 18 14">
          <use xlinkHref="#in-list"></use>
        </svg>

        <span>
          My list
        </span>
      </button>
    );
  };

  return (
    isFavorite
      ? getButtonRemoveFavorite()
      : getButtonInFavorite()
  );
};

ButtonFavorite.propTypes = {
  film: filmPropTypes,
  isFavorite: bool.isRequired,
  place: string.isRequired,
  onSetFavorite: func.isRequired,
  onRemoveFavorite: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveFavorite: (film, place) => {
    dispatch(FavoriteOperation.removeFavoriteFilm(film, place));
  },
  onSetFavorite: (film, place) => {
    dispatch(FavoriteOperation.setFavoriteFilm(film, place));
  }
});

export {ButtonFavorite};

export default connect(null, mapDispatchToProps)(ButtonFavorite);
