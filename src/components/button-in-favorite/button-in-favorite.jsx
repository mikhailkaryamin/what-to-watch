import React from 'react';
import {connect} from 'react-redux';

import {
  func,
  string,
} from 'prop-types';
import {filmPropTypes} from '../../types.js';

import {Operation as FavoriteOperation} from '../../reducer/favorite/favorite.js';

const ButtonInFavorite = (props) => {
  const {
    film,
    place,
    setFavorite,
  } = props;

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

ButtonInFavorite.propTypes = {
  film: filmPropTypes,
  place: string.isRequired,
  setFavorite: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setFavorite: (film, place) => {
    dispatch(FavoriteOperation.setFavoriteFilm(film, place));
  }
});

export {ButtonInFavorite};

export default connect(null, mapDispatchToProps)(ButtonInFavorite);
