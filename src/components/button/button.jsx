import React from 'react';

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

export default Button;
