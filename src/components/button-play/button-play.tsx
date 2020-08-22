import * as React from 'react';
import {Link} from 'react-router-dom';

import {FilmType} from '../../types';

type Props = {
  film: FilmType,
}

const ButtonPlay: React.FC<Props> = (props: Props) => {
  const {
    film,
  } = props;

  return (
    <Link
      className="btn btn--play movie-card__button"
      to={`/player/${film.id}`}
      style={{textDecoration: `none`}}
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

export default ButtonPlay;
