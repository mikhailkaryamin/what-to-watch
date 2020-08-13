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
} from 'prop-types';

import {
  AppRoute,
  AuthStatus,
} from '../../const.js';

import {Operation as CommentOperation} from '../../reducer/comment/comment.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';

import {getStatus as getStatusCommentUpload} from '../../reducer/comment/selectors.js';
import {getStatus as getStatusFilmsLoad} from '../../reducer/films/selectors.js';
import {getAuthStatus} from '../../reducer/user/selectors.js';

import Comment from '../comment/comment.jsx';
import Main from '../main/main.jsx';
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
      commentUpload,
      signIn,
      statusLoadFilms,
      statusUploadComment,
    } = this.props;

    const isAuth = authStatus === AuthStatus.AUTH;
    const isLoading = statusLoadFilms !== true;

    if (isLoading) {
      return ``;
    }

    return (
      <Router>
        <Switch>
          <Route
            exact
            path={AppRoute.ROOT}
            render={() => {
              return (
                <Main />
              );
            }}
          />
          <Route
            exact
            path={AppRoute.LOGIN}
            render={ () => {
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
            exact
            isAuth={isAuth}
            path={AppRoute.ADD_COMMENT}
            render={(renderProps) => {
              const filmId = parseInt(renderProps.match.params.id, 10);

              return (
                <CommentWrapped
                  filmId={filmId}
                  commentUpload={commentUpload}
                  statusUploadComment={statusUploadComment}
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
  authStatus: string.isRequired,
  commentUpload: func.isRequired,
  signIn: func.isRequired,
  statusLoadFilms: bool.isRequired,
  statusUploadComment: oneOfType([
    string.isRequired,
    oneOf([null]).isRequired,
  ]),
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  statusLoadFilms: getStatusFilmsLoad(state),
  statusUploadComment: getStatusCommentUpload(state),
});

const mapDispatchToProps = (dispatch) => ({
  commentUpload: (commentData, id) => {
    dispatch(CommentOperation.uploadComment(commentData, id));
  },
  signIn: (user) => {
    dispatch(UserOperation.signIn(user));
  }
});

export {
  App,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
