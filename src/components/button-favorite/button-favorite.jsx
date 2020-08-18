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
    removeFavorite,
    setFavorite,
  } = props;

  const getButtonInFavorite = () => {
    return (
      <button
        className="btn movie-card__button btn--list"
        type="button"
        onClick={() => setFavorite(film, place)}
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
        onClick={() => removeFavorite(film, place)}
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
  setFavorite: func.isRequired,
  removeFavorite: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (film, place) => {
    dispatch(FavoriteOperation.removeFavoriteFilm(film, place));
  },
  setFavorite: (film, place) => {
    dispatch(FavoriteOperation.setFavoriteFilm(film, place));
  }
});

export {ButtonFavorite};

export default connect(null, mapDispatchToProps)(ButtonFavorite);
