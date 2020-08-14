import React from 'react';
import {connect} from 'react-redux';

import {
  func,
  number
} from 'prop-types';

import {Operation as FavoriteOperation} from '../../reducer/favorite/favorite.js';

const ButtonRemoveFavorite = (props) => {
  const {
    id,
    removeFavorite,
  } = props;

  return (
    <button
      className="btn movie-card__button btn--list"
      type="button"
      onClick={() => removeFavorite(id)}
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
  id: number.isRequired,
  removeFavorite: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (id) => {
    dispatch(FavoriteOperation.removeFavoriteFilm(id));
  }
});

export {ButtonRemoveFavorite};

export default connect(null, mapDispatchToProps)(ButtonRemoveFavorite);
