import React from 'react';
import {connect} from 'react-redux';

import {
  func,
  number,
} from 'prop-types';

import {Operation as FavoriteOperation} from '../../reducer/favorite/favorite.js';

const ButtonInFavorite = (props) => {
  const {
    id,
    setFavorite,
  } = props;

  return (
    <button
      className="btn movie-card__button btn--list"
      type="button"
      onClick={() => setFavorite(id)}
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
  id: number.isRequired,
  setFavorite: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setFavorite: (id) => {
    dispatch(FavoriteOperation.setFavoriteFilm(id));
  }
});

export {ButtonInFavorite};

export default connect(null, mapDispatchToProps)(ButtonInFavorite);
