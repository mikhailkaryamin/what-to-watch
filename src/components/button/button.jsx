import React from 'react';
import {connect} from 'react-redux';
import {string} from 'prop-types';

import {ButtonType} from '../../const.js';

const Button = (props) => {
  const {
    sign
  } = props;
  return (
    <button
      className={`btn movie-card__button btn--${sign}`}
      type="button"
    >
      {sign === ButtonType.PLAY &&
      <React.Fragment>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>
          Play
        </span>
      </React.Fragment>
      }

      {sign === ButtonType.LIST &&
      <React.Fragment>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>
          My list
        </span>
      </React.Fragment>
      }
    </button>
  );
};

Button.propTypes = {
  sign: string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({

});

export default Button;
