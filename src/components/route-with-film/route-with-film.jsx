import React, {
  PureComponent
} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  arrayOf,
  bool,
  func,
  string,
} from 'prop-types';

import {AppRoute} from '../../const.js';
import {ActionCreator as CurrentStateCreator} from '../../reducer/current-state/current-state.js';
import {
  getFilms,
  getStatusLoad,
} from '../../reducer/films/selectors.js';
import {getCurrentFilm} from '../../reducer/current-state/selectors.js';
import {filmPropTypes} from '../../types.js';

import FilmDetailed from '../film-detailed/film-detailed.jsx';
import VideoPlayer from '../video-player/video-player.jsx';

import withToggleFilmInfo from '../../hocs/with-toggle-film-info/with-toggle-film-info.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

const FilmDetailedWrapped = withToggleFilmInfo(FilmDetailed);
const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);

class RouteWithFilm extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      path,
      statusLoadFilms,
    } = this.props;

    const isLoading = statusLoadFilms !== true;

    if (isLoading) {
      return ``;
    }

    return (
      <Route
        exact
        path={path}
        render={(renderProps) => {

          if (this.props.currentFilm === null) {
            const currentPlayingFilmId = parseInt(renderProps.match.params.id, 10);

            this._setCurrentPlayingFilm(currentPlayingFilmId);
            return ``;
          }

          switch (path) {
            case AppRoute.PLAYER: {
              return <VideoPlayerWrapped
                posterImage={this.props.currentFilm.posterImage}
                video={this.props.currentFilm.video}
              />;
            }
            case AppRoute.FILM: {
              return <FilmDetailedWrapped
                film={this.props.currentFilm}
              />;
            }
          }

          return ``;
        }}
      />
    );
  }

  _setCurrentPlayingFilm(id) {
    const {
      films,
      onSetCurrentFilm,
    } = this.props;

    const currentFilm = films.find((film) => film.id === id);

    onSetCurrentFilm(currentFilm);
  }
}

RouteWithFilm.propTypes = {
  currentFilm: filmPropTypes,
  films: arrayOf(filmPropTypes),
  onSetCurrentFilm: func.isRequired,
  path: string.isRequired,
  statusLoadFilms: bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentFilm: getCurrentFilm(state),
  films: getFilms(state),
  statusLoadFilms: getStatusLoad(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetCurrentFilm(film) {
    dispatch(CurrentStateCreator.setCurrentFilm(film));
  }
});

export {
  RouteWithFilm
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteWithFilm);
