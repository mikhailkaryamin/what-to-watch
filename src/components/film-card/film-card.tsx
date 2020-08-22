import * as React from 'react';
import {Link} from 'react-router-dom';

import {FilmType} from '../../types';

import VideoPlayer from '../preview-video/preview-video';

type Props = {
  film: FilmType,
  isPlayVideo: boolean,
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  onStopPreviewClick: () => void,
}

const FilmCard: React.FC<Props> = (props: Props) => {
  const {
    isPlayVideo,
    onMouseEnter,
    onMouseLeave,
    onStopPreviewClick,
  } = props;

  const {
    id,
    posterImage,
    previewImage,
    previewVideoLink,
    name,
  } = props.film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => {
        onStopPreviewClick();
      }}

      onMouseEnter={() => {
        onMouseEnter();
      }}

      onMouseLeave={() => {
        onMouseLeave();
      }}
    >
      <Link
        to={`/films/${id}`}
      >
        <div
          className="small-movie-card__image"
        >
          {isPlayVideo || <img
            src={previewImage}
            alt={name}
            width="280"
            height="175"
          />}

          {isPlayVideo && <VideoPlayer
            posterImage={posterImage}
            previewVideoLink={previewVideoLink}
          />}
        </div>
      </Link>
      <h3
        className="small-movie-card__title"
      >
        <Link
          className="small-movie-card__link"
          href="#"
          to={`/films/${id}`}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

export default FilmCard;
