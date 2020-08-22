import * as React from 'react';
import {Route} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';

import {FilmType} from '../../types';

import {
  AppRoute,
  StatusRequestServer,
} from '../../const';

import {Operation as CommentOperation} from '../../reducer/comment/comment';
import {ActionCreator as OptionsCreator} from '../../reducer/options/options';
import {getFilm} from '../../reducer/options/selectors';
import {getFilms} from '../../reducer/films/selectors';

import ButtonExitPlayer from '../../components/button-exit-player/button-exit-player';
import FilmDetailed from '../../components/film-detailed/film-detailed';

import withToggleFilmInfo from '../../hocs/with-toggle-film-info/with-toggle-film-info';

type Props = {
  film: FilmType,
  films: FilmType[],
  onLoadComment: (arg0: number) => void,
  onSetCurrentFilm: (arg0: FilmType) => void,
  path: string,
  statusLoadFilms: string | null,
}

const FilmDetailedWrapped = withToggleFilmInfo(FilmDetailed);

const setFilm = (films: FilmType[], id: number, onSetCurrentFilm: (arg0: FilmType) => void) => {
  const currentFilm = films.find((film) => film.id === id);

  onSetCurrentFilm(currentFilm);
};

const WithFilm: React.FC<Props> = (props: Props) =>{
  const {
    films,
    onLoadComment,
    onSetCurrentFilm,
    path,
    statusLoadFilms,
  } = props;

  const isLoading = statusLoadFilms !== StatusRequestServer.SUCCESS;

  if (isLoading) {
    return;
  }

  return (
    <Route
      exact
      path={path}
      render={(renderProps) => {
        const filmId = parseInt(renderProps.match.params.id, 10);

        if (props.film === null || props.film.id !== filmId) {
          onLoadComment(filmId);
          setFilm(films, filmId, onSetCurrentFilm);
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
                  url={props.film.video}
                  width={`100%`}
                  height={`100%`}
                />
              </div>
            );
          }
          case AppRoute.FILM: {
            return <FilmDetailedWrapped
              film={props.film}
            />;
          }
        }

        return ``;
      }}
    />
  );
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

export {WithFilm};

export default connect(mapStateToProps, mapDispatchToProps)(WithFilm);
