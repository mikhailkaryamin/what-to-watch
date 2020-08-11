import React from 'react';
import {Link} from 'react-router-dom';

import {filmPropTypes} from '../../types.js';

const ButtonPlay = (props) => {
  const {
    film,
  } = props;

  return (
    <Link
      to={`/player/${film.id}`}
      className="btn btn--play movie-card__button"
      type="button"
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>
        Play
      </span>
    </Link>
  );
};

ButtonPlay.propTypes = {
  film: filmPropTypes.isRequired,
};

export default ButtonPlay;
