import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {func} from 'prop-types';

import {AppRoute} from '../../const.js';
import {ActionCreator as ActionOptions} from '../../reducer/options/options.js';

const ButtonExitPlayer = (props) => {
  const {onButtonExitClick} = props;

  return (
    <Link
      to={AppRoute.ROOT}
    >
      <button
        type="button"
        className="player__exit"
        onClick={() => {
          onButtonExitClick();
        }}
      >
        Exit
      </button>
    </Link>

  );
};

ButtonExitPlayer.propTypes = {
  onButtonExitClick: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onButtonExitClick() {
    dispatch(ActionOptions.resetFilm());
  }
});

export {
  ButtonExitPlayer,
};

export default connect(null, mapDispatchToProps)(ButtonExitPlayer);
