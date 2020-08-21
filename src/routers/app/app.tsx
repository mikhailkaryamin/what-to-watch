import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {
  func,
  string,
  oneOf,
  oneOfType,
  arrayOf,
} from 'prop-types';
import {filmPropTypes} from '../../types.js';

import {
  AppRoute,
  AuthStatus,
  NoAvailableMessage,
} from '../../const.js';

import WithFilm from '../with-film/with-film.tsx';
import Private from '../private/private.tsx';

import Comment from '../../components/comment/comment.tsx';
import Favorites from '../../components/favorites/favorites.js';
import Main from '../../components/main/main.js';
import NoAvailable from '../../components/no-available/no-available.js';
import SignIn from '../../components/sign-in/sign-in.js';

import withAuthorization from '../../hocs/with-authorization/with-authorization.js';
import withComment from '../../hocs/with-comment/with-comment.js';

const CommentWrapped = withComment(Comment);
const SignInWrapped = withAuthorization(SignIn);

const App = (props) => {
  const {
    authStatus,
    films,
    signIn,
    statusLoadFilms,
    statusUploadComment,
    uploadComment,
  } = props;

  const isAuth = authStatus === AuthStatus.AUTH;
  const isEmptyListFilms = films.length === 0;
  const isLoading = statusLoadFilms === null || authStatus === null;

  return (
    <Router>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={() => {
            return (
              (!isLoading && isEmptyListFilms)
                ? <NoAvailable
                  isAuth={isAuth}
                  isLink={false}
                  isWithSignIn={true}
                  message={NoAvailableMessage.FILMS}
                />
                : <Main />
            );
          }}
        />

        <Route
          exact
          path={AppRoute.LOGIN}
          render={() => {
            return (
              <SignInWrapped
                isAuth={isAuth}
                signIn={signIn}
              />
            );
          }}
        />

        <WithFilm
          exact
          path={AppRoute.PLAYER}
          statusLoadFilms={statusLoadFilms}
        />

        <WithFilm
          exact
          path={AppRoute.FILM}
          statusLoadFilms={statusLoadFilms}
        />

        <Private
          exact={true}
          isAuth={isAuth}
          path={AppRoute.MY_LIST}
          render={() => {
            return (
              <Favorites
                isAuth={isAuth}
              />
            );
          }}
        />

        <Private
          exact={true}
          isAuth={isAuth}
          path={AppRoute.ADD_COMMENT}
          render={(renderProps) => {
            const filmId = parseInt(renderProps.match.params.id, 10);

            return (
              <CommentWrapped
                filmId={filmId}
                uploadComment={uploadComment}
                statusUploadComment={statusUploadComment}
              />
            );
          }}
        />

        <Route
          path={AppRoute.NOT_FOUND}
          render={() => {
            return (
              <NoAvailable
                isAuth={isAuth}
                isLink={true}
                message={NoAvailableMessage.PAGE}
              />
            );
          }}
        />

      </Switch>
    </Router>
  );
};

App.propTypes = {
  authStatus: oneOfType([
    string.isRequired,
    oneOf([null]).isRequired,
  ]),
  films: arrayOf(filmPropTypes),
  signIn: func.isRequired,
  statusLoadFilms: oneOfType([
    string.isRequired,
    oneOf([null]).isRequired,
  ]),
  statusUploadComment: oneOfType([
    string.isRequired,
    oneOf([null]).isRequired,
  ]),
  uploadComment: func.isRequired,
};

export {App};
