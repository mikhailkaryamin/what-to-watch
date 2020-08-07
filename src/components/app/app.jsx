import React, {
  PureComponent
} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import {func} from 'prop-types';

import {
  filmPropTypes,
} from '../../types.js';
import {FilmCardsListType} from '../../const.js';
import {
  getCurrentOpenFilm,
  getCurrentWatchedFilm,
} from '../../reducer/current-state/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';

import Comment from '../comment/comment.jsx';
import Main from '../main/main.jsx';
import FilmDetailed from '../film-detailed/film-detailed.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import VideoPlayer from '../video-player/video-player.jsx';
import withAuthorization from '../../hocs/with-authorization/with-authorization.jsx';
import withToggleFilmInfo from '../../hocs/with-toggle-film-info/with-toggle-film-info.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

const FilmDetailedWrapped = withToggleFilmInfo(FilmDetailed);
const SignInWrapped = withAuthorization(SignIn);
const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      signIn
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
          >
            {this._renderApp()}
          </Route>
          <Route
            path="/dev-component"
          >
            <SignInWrapped
              signIn={signIn}
            />
          </Route>
          <Route
            path="/dev-comment">
            <Comment />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {
      currentOpenFilm,
      currentWatchedFilm,
    } = this.props;

    switch (true) {
      case (currentWatchedFilm !== null && !undefined):
        return (
          <VideoPlayerWrapped
            posterImage={currentWatchedFilm.posterImage}
            video={currentWatchedFilm.video}
          />
        );
      case (currentOpenFilm !== null && !undefined):
        return (
          <FilmDetailedWrapped
            sign={FilmCardsListType.LIKE_THIS}
          />
        );
      default:
        return (
          <Main />
        );
    }
  }
}

App.propTypes = {
  currentOpenFilm: filmPropTypes,
  currentWatchedFilm: filmPropTypes,
  signIn: func.isRequired,
};

const mapStateToProps = (state) => ({
  currentOpenFilm: getCurrentOpenFilm(state),
  currentWatchedFilm: getCurrentWatchedFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => {
    dispatch(UserOperation.signIn(user));
  }
});

export {
  App,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
