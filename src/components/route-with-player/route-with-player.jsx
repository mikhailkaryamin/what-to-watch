import React, {
  PureComponent
} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  arrayOf, func, bool
} from 'prop-types';

import {AppRoute} from '../../const.js';
import {ActionCreator as CurrentStateCreator} from '../../reducer/current-state/current-state.js';
import {
  getFilms,
  getStatusLoad,
} from '../../reducer/films/selectors.js';
import {getCurrentPlayingFilm} from '../../reducer/current-state/selectors.js';
import {filmPropTypes} from '../../types.js';

import VideoPlayer from '../video-player/video-player.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);

class RouteWithPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      statusLoadFilms,
    } = this.props;

    const isLoading = statusLoadFilms !== true;

    if (isLoading) {
      return ``;
    }

    return (
      <Route
        exact
        path={AppRoute.PLAYER}
        render={(renderProps) => {

          if (this.props.currentPlayingFilm === null) {
            const currentPlayingFilmId = parseInt(renderProps.match.params.id, 10);

            this._setCurrentPlayingFilm(currentPlayingFilmId);
            return ``;
          }

          return (
            <VideoPlayerWrapped
              posterImage={this.props.currentPlayingFilm.posterImage}
              video={this.props.currentPlayingFilm.video}
            />
          );
        }}
      />
    );
  }

  _setCurrentPlayingFilm(id) {
    const {
      films,
      onSetCurrentPlayingFilm,
    } = this.props;

    const currentPlayingFilm = films.find((film) => film.id === id);

    onSetCurrentPlayingFilm(currentPlayingFilm);
  }
}
RouteWithPlayer.propTypes = {
  currentPlayingFilm: filmPropTypes,
  films: arrayOf(filmPropTypes),
  onSetCurrentPlayingFilm: func.isRequired,
  statusLoadFilms: bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentPlayingFilm: getCurrentPlayingFilm(state),
  films: getFilms(state),
  statusLoadFilms: getStatusLoad(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetCurrentPlayingFilm(film) {
    dispatch(CurrentStateCreator.setCurrentPlayingFilm(film));
  }
});

export {
  RouteWithPlayer
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteWithPlayer);
