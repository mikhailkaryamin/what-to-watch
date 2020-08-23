import * as React from 'react';
import {Route} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';

import {
  FilmType,
  RootState,
} from '../../types';

import {
  AppRoute,
  NoAvailableMessage,
} from '../../const';

import {Operation as CommentOperation} from '../../reducer/comment/comment';
import {ActionCreator as OptionsCreator} from '../../reducer/options/options';
import {getFilm} from '../../reducer/options/selectors';
import {getFilms} from '../../reducer/films/selectors';

import ButtonExitPlayer from '../../components/button-exit-player/button-exit-player';
import FilmDetailed from '../../components/film-detailed/film-detailed';
import NoAvailable from '../../components/no-available/no-available';

import withToggleFilmInfo from '../../hocs/with-toggle-film-info/with-toggle-film-info';

type Props = {
  isAuth: boolean;
  film: FilmType;
  films: FilmType[];
  onLoadComment: (filmId: number) => void;
  onSetCurrentFilm: (film: FilmType) => void;
  path: string;
}

const FilmDetailedWrapped = withToggleFilmInfo(FilmDetailed);

const setFilm = (
  films: FilmType[],
  id: number,
  onSetCurrentFilm: (film: FilmType) => void
) => {
  const currentFilm = films.find((film) => film.id === id);

  onSetCurrentFilm(currentFilm);
};

const WithFilm: React.FC<Props> = (props: Props) =>{
  const {
    isAuth,
    films,
    onLoadComment,
    onSetCurrentFilm,
    path,
  } = props;

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

        return (
          <NoAvailable
            isAuth={isAuth}
            isLink={true}
            isWithSignIn={true}
            message={NoAvailableMessage.PAGE}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  film: getFilm(state),
  films: getFilms(state),
});

const mapDispatchToProps = (dispatch: Function) => ({
  onLoadComment(id: number) {
    dispatch(CommentOperation.loadComments(id));
  },
  onSetCurrentFilm(film: FilmType) {
    dispatch(OptionsCreator.setFilm(film));
  },
});

export {WithFilm};

export default connect(mapStateToProps, mapDispatchToProps)(WithFilm);
