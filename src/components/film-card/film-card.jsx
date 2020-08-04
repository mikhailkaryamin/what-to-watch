import React, {
  PureComponent
} from 'react';
import {connect} from 'react-redux';
import {
  bool,
  func,
} from 'prop-types';

import {ActionCreator as CurrentStateAction} from '../../reducer/current-state/current-state.js';
import {Operation as CommentOperation} from '../../reducer/comment/comment.js';
import {filmPropTypes} from '../../types.js';

import VideoPlayer from '../preview-video/preview-video.jsx';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isPlayVideo,
      onFilmCardClick,
      onMouseEnter,
      onMouseLeave,
      onStopPreviewClick,
    } = this.props;

    const {
      posterImage,
      previewImage,
      previewVideoLink,
      name,
    } = this.props.film;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={() => {
          onFilmCardClick(this.props.film);
          onStopPreviewClick();
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
  onFilmCardClick: func.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
  onStopPreviewClick: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(film) {
    dispatch(CurrentStateAction.setCurrentOpenFilm(film));
    dispatch(CommentOperation.loadComments());
  }
});

export {
  FilmCard
};

export default connect(null, mapDispatchToProps)(FilmCard);
