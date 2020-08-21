import React from 'react';

import {
  arrayOf,
  oneOf,
  oneOfType,
  string,
} from 'prop-types';

import {filmPropTypes} from '../../types.js';

import FilmCard from '../film-card/film-card.js';
import withPreviewVideo from '../../hocs/with-preview-video/with-preview-video.tsx';

const FilmCardWrapped = withPreviewVideo(FilmCard);

const FilmCards = (props) => {
  const {
    films,
    prefix,
  } = props;

  return (
    <div className={`catalog__movies-list ${prefix ? prefix : ``}`}>
      {
        films.map((film) => {
          return <FilmCardWrapped
            film={film}
            key={film.id}
          />;
        })
      }
    </div>
  );
};

FilmCards.propTypes = {
  films: arrayOf(filmPropTypes).isRequired,
  prefix: oneOfType([
    string.isRequired,
    oneOf([undefined]).isRequired,
  ]),
};

export default FilmCards;
