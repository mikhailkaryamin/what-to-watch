import * as React from 'react';

import {
  arrayOf,
  oneOf,
  oneOfType,
  string,
} from 'prop-types';

import {FilmType} from '../../types';

import FilmCard from '../film-card/film-card';
import withPreviewVideo from '../../hocs/with-preview-video/with-preview-video';

type Props = {
  films: FilmType[],
  prefix?: string | null,
}

const FilmCardWrapped = withPreviewVideo(FilmCard);

const FilmCards: React.FC<Props> = (props: Props) => {
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

export default FilmCards;
