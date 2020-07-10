import React from 'react';
import {string} from 'prop-types';

import {ButtonType} from '../../const.js';

const Button = (props) => {
  const {
    sign
  } = props;
  return (
    <button className="btn btn--play movie-card__button" type="button" >
      <svg viewBox="0 0 19 19" width="19" height="19">
        {sign === ButtonType.PLAY && <use xlinkHref="#play-s"></use>}

        {sign === ButtonType.ADD && <use xlinkHref="#add"></use>}
      </svg>
      <span>
        {sign === ButtonType.PLAY && `Play`}

        {sign === ButtonType.ADD && `My list`}
      </span>
    </button>
  );
};

Button.propTypes = {
  sign: string.isRequired,
};

export default Button;
