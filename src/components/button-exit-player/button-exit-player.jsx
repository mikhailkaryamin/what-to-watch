import React from 'react';
import {connect} from 'react-redux';
import {func} from 'prop-types';

import {ActionCreator as CurrentStateCreator} from '../../reducer/current-state/current-state.js';

const ButtonExitPlayer = (props) => {
  const {onButtonExitClick} = props;

  return (
    <button
      type="button"
      className="player__exit"
      onClick={() => {
        onButtonExitClick();
      }}
    >
      Exit
    </button>
  );
};

ButtonExitPlayer.propTypes = {
  onButtonExitClick: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onButtonExitClick() {
    dispatch(CurrentStateCreator.resetCurrentPlayingFilm());
  }
});

export {
  ButtonExitPlayer,
};

export default connect(null, mapDispatchToProps)(ButtonExitPlayer);
