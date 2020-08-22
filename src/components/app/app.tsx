import * as React from 'react';
import {connect} from 'react-redux';
import {
  CommentRAWType,
  FilmType,
  UserRAWType,
} from '../../types';

import {
  AuthStatus,
  NoAvailableMessage,
  StatusRequestServer,
} from '../../const';

import {Operation as CommentOperation} from '../../reducer/comment/comment';
import {Operation as FavoriteOperation} from '../../reducer/favorite/favorite';
import {Operation as UserOperation} from '../../reducer/user/user';

import {getStatusFilms as getStatusCommentUpload} from '../../reducer/comment/selectors';
import {
  getStatusFilms as getStatusLoadingFilms,
  getStatusPromo as getStatusLoadingPromo,
  getFilms,
} from '../../reducer/films/selectors';
import {getAuthStatus} from '../../reducer/user/selectors';

import Loader from '../loader/loader';
import NoAvailable from '../no-available/no-available';

import {App as Router} from '../../routers/app/app';

type Props = {
  authStatus: string | null,
  films: FilmType[],
  loadFavorite: () => void,
  signIn: (arg0: UserRAWType) => void,
  statusLoadFilms: string | null,
  statusLoadPromo: string | null,
  statusUploadComment: string | null,
  uploadComment: (arg0: CommentRAWType) => void,
}

const App: React.FC<Props> = (props: Props) => {
  const {
    authStatus,
    films,
    loadFavorite,
    signIn,
    statusLoadFilms,
    statusLoadPromo,
    statusUploadComment,
    uploadComment,
  } = props;

  const isAuth = authStatus === AuthStatus.AUTH;
  const isErrorNetwork = statusLoadFilms === StatusRequestServer.FAIL;
  const isLoading = statusLoadFilms === null || statusLoadPromo === null || authStatus === null;

  if (isErrorNetwork) {
    return <NoAvailable
      isAuth={isAuth}
      isLink={false}
      isWithSignIn={false}
      message={NoAvailableMessage.ERROR_SERVER}
    />;
  }

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (isAuth) {
    loadFavorite();
  }

  return (
    <Router
      authStatus={authStatus}
      films={films}
      signIn={signIn}
      statusLoadFilms={statusLoadFilms}
      statusUploadComment={statusUploadComment}
      uploadComment={uploadComment}
    />
  );
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  films: getFilms(state),
  statusLoadFilms: getStatusLoadingFilms(state),
  statusLoadPromo: getStatusLoadingPromo(state),
  statusUploadComment: getStatusCommentUpload(state),
});

const mapDispatchToProps = (dispatch: (arg0: () => void) => void) => ({
  loadFavorite: () => {
    dispatch(FavoriteOperation.loadFavoriteFilms());
  },
  signIn: (user: (arg0: () => void) => void) => {
    dispatch(UserOperation.signIn(user));
  },
  uploadComment: (commentData, id) => {
    dispatch(CommentOperation.uploadComment(commentData, id));
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
