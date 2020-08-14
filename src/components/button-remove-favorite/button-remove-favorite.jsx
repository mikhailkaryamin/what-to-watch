import React from 'react';
import {connect} from 'react-redux';

import {
  func,
  string,
} from 'prop-types';
import {filmPropTypes} from '../../types.js';

import {Operation as FavoriteOperation} from '../../reducer/favorite/favorite.js';

const ButtonRemoveFavorite = (props) => {
  const {
    film,
    place,
    removeFavorite,
  } = props;

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

ButtonRemoveFavorite.propTypes = {
  film: filmPropTypes,
  place: string.isRequired,
  removeFavorite: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (film, place) => {
    dispatch(FavoriteOperation.removeFavoriteFilm(film, place));
  }
});

export {ButtonRemoveFavorite};

export default connect(null, mapDispatchToProps)(ButtonRemoveFavorite);
