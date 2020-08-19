import React, {
  PureComponent
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  bool,
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

import {Operation as CommentOperation} from '../../reducer/comment/comment.js';
import {Operation as FavoriteOperation} from '../../reducer/favorite/favorite.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';

import {getStatus as getStatusCommentUpload} from '../../reducer/comment/selectors.js';
import {
  getStatus as getStatusFilmsLoad,
  getFilms,
} from '../../reducer/films/selectors.js';
import {getAuthStatus} from '../../reducer/user/selectors.js';

import Comment from '../comment/comment.jsx';
import Favorites from '../favorites/favorites.jsx';
import Main from '../main/main.jsx';
import NoAvailable from '../no-available/no-available.jsx';
import RouteWithFilm from '../route-with-film/route-with-film.jsx';
import RoutePrivate from '../route-private/route-private.jsx';
import SignIn from '../sign-in/sign-in.jsx';

import withAuthorization from '../../hocs/with-authorization/with-authorization.jsx';
import withComment from '../../hocs/with-comment/with-comment.jsx';

const CommentWrapped = withComment(Comment);
const SignInWrapped = withAuthorization(SignIn);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      authStatus,
      films,
      loadFavorite,
      signIn,
      statusLoadFilms,
      statusUploadComment,
      uploadComment,
    } = this.props;

    const isAuth = authStatus === AuthStatus.AUTH;
    const isEmptyListFilms = films.length === 0;
    const isLoading = statusLoadFilms !== true || authStatus === null;

    if (isLoading) {
      return ``;
    }

    if (isAuth) {
      loadFavorite();
    }

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

          <RouteWithFilm
            exact
            path={AppRoute.PLAYER}
            statusLoadFilms={statusLoadFilms}
          />

          <RouteWithFilm
            exact
            path={AppRoute.FILM}
            statusLoadFilms={statusLoadFilms}
          />

          <RoutePrivate
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

          <RoutePrivate
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
            path={`*`}
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
  }
}

App.propTypes = {
  authStatus: oneOfType([
    string.isRequired,
    oneOf([null]).isRequired,
  ]),
  films: arrayOf(filmPropTypes),
  loadFavorite: func.isRequired,
  signIn: func.isRequired,
  statusLoadFilms: bool.isRequired,
  statusUploadComment: oneOfType([
    string.isRequired,
    oneOf([null]).isRequired,
  ]),
  uploadComment: func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  films: getFilms(state),
  statusLoadFilms: getStatusFilmsLoad(state),
  statusUploadComment: getStatusCommentUpload(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorite: () => {
    dispatch(FavoriteOperation.loadFavoriteFilms());
  },
  signIn: (user) => {
    dispatch(UserOperation.signIn(user));
  },
  uploadComment: (commentData, id) => {
    dispatch(CommentOperation.uploadComment(commentData, id));
  },
});

export {
  App,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
