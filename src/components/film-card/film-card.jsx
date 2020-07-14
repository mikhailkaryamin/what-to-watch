import React, {
  PureComponent
} from 'react';
import {connect} from 'react-redux';
import {
  bool,
  func,
} from 'prop-types';

import {
  getFilmsLikeThis,
  setCurrentFilm
} from '../../actions/actions.js';
import {filmPropTypes} from '../../types.js';

import VideoPlayer from '../video-player/video-player.jsx';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isPlayVideo,
      onFilmCardClick,
      onClick,
      onMouseEnter,
      onMouseLeave,
    } = this.props;

    const {
      posterImage,
      previewVideoLink,
      name,
    } = this.props.film;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={() => {
          onFilmCardClick(this.props.film);
          onClick();
        }}

        onMouseEnter={() => {
          onMouseEnter();
        }}

        onMouseLeave={() => {
          onMouseLeave();
        }}
      >
        <div
          className="small-movie-card__image"
        >
          {isPlayVideo || <img
            src={posterImage}
            alt={name}
            width="280"
            height="175"
          />}

          {isPlayVideo && <VideoPlayer
            posterImage={posterImage}
            previewVideoLink={previewVideoLink}
          />}
        </div>
        <h3
          className="small-movie-card__title"
        >
          <a
            className="small-movie-card__link"
            href="#"
          >
            {name}
          </a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: filmPropTypes.isRequired,
  isPlayVideo: bool.isRequired,
  onClick: func.isRequired,
  onFilmCardClick: func.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(film) {
    dispatch(setCurrentFilm(film));
    dispatch(getFilmsLikeThis(film));
  }
});

export {
  FilmCard
};

export default connect(null, mapDispatchToProps)(FilmCard);
