import React from 'react';
import {connect} from 'react-redux';
import {
  func,
  string,
  oneOf,
  oneOfType,
  arrayOf,
} from 'prop-types';
import {filmPropTypes} from '../../types.js';

import {
  AuthStatus,
  NoAvailableMessage,
  StatusRequestServer,
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

import NoAvailable from '../no-available/no-available.tsx';

import {App as Router} from '../../routers/app/app.tsx';

const App = (props) => {
  const {
    authStatus,
    films,
    loadFavorite,
    signIn,
    statusLoadFilms,
    statusUploadComment,
    uploadComment,
  } = props;

  const isAuth = authStatus === AuthStatus.AUTH;
  const isErrorNetwork = statusLoadFilms === StatusRequestServer.FAIL;
  const isLoading = statusLoadFilms === null || authStatus === null;

  if (isErrorNetwork) {
    return <NoAvailable
      isAuth={isAuth}
      isLink={false}
      isWithSignIn={false}
      message={NoAvailableMessage.ERROR_SERVER}
    />;
  }

  if (isLoading) {
    return ``;
  }

  if (isAuth) {
    loadFavorite();
  }

  return (
    <Router
      authStatus={authStatus}
      films={films}
      loadFavorite={loadFavorite}
      signIn={signIn}
      statusLoadFilms={statusLoadFilms}
      statusUploadComment={statusUploadComment}
      uploadComment={uploadComment}
    />
  );
};

App.propTypes = {
  authStatus: oneOfType([
    string.isRequired,
    oneOf([null]).isRequired,
  ]),
  films: arrayOf(filmPropTypes),
  loadFavorite: func.isRequired,
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
