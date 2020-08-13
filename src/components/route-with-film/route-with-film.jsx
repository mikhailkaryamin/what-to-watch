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
import {ActionCreator as OptionsCreator} from '../../reducer/options/options.js';
import {getFilm} from '../../reducer/options/selectors.js';
import {getFilms} from '../../reducer/films/selectors.js';

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

          if (this.props.film === null || this.props.film.id !== filmId) {
            onLoadComment(filmId);
            this._setFilm(filmId);
            return ``;
          }

          switch (path) {
            case AppRoute.PLAYER: {
              return <VideoPlayerWrapped
                posterImage={this.props.film.posterImage}
                video={this.props.film.video}
              />;
            }
            case AppRoute.FILM: {
              return <FilmDetailedWrapped
                film={this.props.film}
              />;
            }
          }

          return ``;
        }}
      />
    );
  }
  _setFilm(id) {
    const {
      films,
      onSetCurrentFilm,
    } = this.props;

    const currentFilm = films.find((film) => film.id === id);

    onSetCurrentFilm(currentFilm);
  }
}

RouteWithFilm.propTypes = {
  film: filmPropTypes,
  films: arrayOf(filmPropTypes),
  onLoadComment: func.isRequired,
  onSetCurrentFilm: func.isRequired,
  path: string.isRequired,
  statusLoadFilms: bool.isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
  films: getFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadComment(id) {
    dispatch(CommentOperation.loadComments(id));
  },
  onSetCurrentFilm(film) {
    dispatch(OptionsCreator.setFilm(film));
  },
});

export {
  RouteWithFilm
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteWithFilm);
