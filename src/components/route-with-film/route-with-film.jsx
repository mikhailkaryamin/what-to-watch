import React, {
  PureComponent
} from 'react';
import {Route} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';

import {
  arrayOf,
  func,
  oneOf,
  oneOfType,
  string,
} from 'prop-types';

import {filmPropTypes} from '../../types.js';

import {
  AppRoute,
  StatusRequestServer,
} from '../../const.js';

import {Operation as CommentOperation} from '../../reducer/comment/comment.js';
import {ActionCreator as OptionsCreator} from '../../reducer/options/options.js';
import {getFilm} from '../../reducer/options/selectors.js';
import {getFilms} from '../../reducer/films/selectors.js';

import ButtonExitPlayer from '../button-exit-player/button-exit-player.jsx';
import FilmDetailed from '../film-detailed/film-detailed.jsx';

import withToggleFilmInfo from '../../hocs/with-toggle-film-info/with-toggle-film-info.jsx';

const FilmDetailedWrapped = withToggleFilmInfo(FilmDetailed);

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

    const isLoading = statusLoadFilms !== StatusRequestServer.SUCCESS;

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
              return (
                <div className="player">
                  <ButtonExitPlayer />
                  <ReactPlayer
                    className={`react-player`}
                    controls={true}
                    playing={true}
                    url={this.props.film.video}
                    width={`100%`}
                    height={`100%`}
                  />
                </div>
              );
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
  statusLoadFilms: oneOfType([
    string.isRequired,
    oneOf([null]).isRequired,
  ]),
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
