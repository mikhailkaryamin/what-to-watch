import React from 'react';
import {connect} from 'react-redux';
import {func} from 'prop-types';

import {resetCurrentWatchedFilm} from '../../actions/actions.js';

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
    dispatch(resetCurrentWatchedFilm());
  }
});

export {
  ButtonExitPlayer,
};

export default connect(null, mapDispatchToProps)(ButtonExitPlayer);
