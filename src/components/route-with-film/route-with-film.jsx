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
import {filmPropTypes} from '../../types.js';

import {AppRoute} from '../../const.js';

import {Operation as CommentOperation} from '../../reducer/comment/comment.js';
import {ActionCreator as CurrentStateCreator} from '../../reducer/current-state/current-state.js';
import {getCurrentFilm} from '../../reducer/current-state/selectors.js';
import {
  getFilms,
  getStatusLoad,
} from '../../reducer/films/selectors.js';

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
      onLoadComment,
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

          const filmId = parseInt(renderProps.match.params.id, 10);

          if (this.props.currentFilm === null || this.props.currentFilm.id !== filmId) {
            onLoadComment(filmId);
            this._setCurrentPlayingFilm(filmId);
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
  onLoadComment: func.isRequired,
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
  onLoadComment(id) {
    dispatch(CommentOperation.loadComments(id));
  },
  onSetCurrentFilm(film) {
    dispatch(CurrentStateCreator.setCurrentFilm(film));
  },
});

export {
  RouteWithFilm
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteWithFilm);
