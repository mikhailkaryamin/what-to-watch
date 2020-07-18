import React from 'react';
import {connect} from 'react-redux';
import {func} from 'prop-types';

import {ActionCreator as CurrentStateCreator} from '../../reducer/current-state/current-state.js';
import {filmPropTypes} from '../../types.js';

const ButtonPlay = (props) => {
  const {
    film,
    onPlayButtonClick,
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
  film: filmPropTypes.isRequired,
  onPlayButtonClick: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick(film) {
    dispatch(CurrentStateCreator.setCurrentWatchedFilm(film));
  }
});

export {ButtonPlay};

export default connect(null, mapDispatchToProps)(ButtonPlay);
