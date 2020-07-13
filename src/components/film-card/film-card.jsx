import React, {
  PureComponent
} from 'react';
import {connect} from 'react-redux';
import {func} from 'prop-types';

import {
  getFilmsLikeThis,
  setCurrentFilm
} from '../../actions/actions.js';
import {filmPropTypes} from '../../types.js';

import VideoPlayer from '../video-player/video-player.jsx';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlayVideo: false,
    };
    this._timer = null;
    this._setPlayVideo = this._setPlayVideo.bind(this);
  }

  componentWillUnmount() {
    if (this._timer) {
      clearTimeout(this._timer);
    }
  }

  render() {
    const {
      onFilmCardClick,
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
          this.setState({
            isPlayVideo: false,
          });
        }}

        onMouseEnter={() => {
          const controlPlayPreview = () => {
            this._setPlayVideo();
          };
          this._timer = setTimeout(controlPlayPreview, 1000);
        }}

        onMouseLeave={() => {
          if (this._timer && !this.state.isPlayVideo) {
            clearTimeout(this._timer);
          } else {
            this._setPlayVideo();
            clearTimeout(this._timer);
          }

        }}
      >
        <div
          className="small-movie-card__image"
        >
          {this.state.isPlayVideo || <img
            src={posterImage}
            alt={name}
            width="280"
            height="175"
          />}

          {this.state.isPlayVideo && <VideoPlayer
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

  _setPlayVideo() {
    this.setState((state) => ({
      isPlayVideo: !state.isPlayVideo
    }));
  }
}

FilmCard.propTypes = {
  film: filmPropTypes.isRequired,
  onFilmCardClick: func.isRequired,
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
