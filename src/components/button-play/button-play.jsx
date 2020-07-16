import React from 'react';
import {connect} from 'react-redux';
import {string} from 'prop-types';
import { setCurrentWatchedFilm } from '../../actions/actions';

const ButtonPlay = (props) => {
  const {
    onPlayButtonClick,
    film,
  } = props;
  return (
    <button
      className="btn btn--play movie-card__button"
      type="button"
      onClick={() => {
        onPlayButtonClick(film);
      }}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>
        Play
      </span>
    </button>
  );
};

ButtonPlay.propTypes = {
  sign: string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick(film) {
    dispatch(setCurrentWatchedFilm(film));
  }
});

export {ButtonPlay};

export default connect(null, mapDispatchToProps)(ButtonPlay);
