import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';

import {
  CommentRAWType,
  FilmType,
  UserRAWType,
} from '../../types';

import {
  AppRoute,
  AuthStatus,
  NoAvailableMessage,
} from '../../const';

import WithFilm from '../with-film/with-film';
import Private from '../private/private';

import Comment from '../../components/comment/comment';
import Favorites from '../../components/favorites/favorites';
import Main from '../../components/main/main';
import NoAvailable from '../../components/no-available/no-available';
import SignIn from '../../components/sign-in/sign-in';

import withAuthorization from '../../hocs/with-authorization/with-authorization';
import withComment from '../../hocs/with-comment/with-comment';

const CommentWrapped = withComment(Comment);
const SignInWrapped = withAuthorization(SignIn);

type Props = {
  authStatus: string | null;
  films: FilmType[];
  signIn: (userData: UserRAWType) => void;
  statusLoadFilms: string | null;
  statusUploadComment: string | null;
  uploadComment: (commentData: CommentRAWType, id: number) => void;
}

const App: React.FC<Props> = (props: Props) => {
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
          isAuth={isAuth}
          path={AppRoute.PLAYER}
          statusLoadFilms={statusLoadFilms}
        />

        <WithFilm
          exact
          isAuth={isAuth}
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
          render={(renderProps: RouteComponentProps<any>) => {
            console.log(renderProps)
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
                isWithSignIn={true}
                message={NoAvailableMessage.PAGE}
              />
            );
          }}
        />

      </Switch>
    </Router>
  );
};

export {App};
