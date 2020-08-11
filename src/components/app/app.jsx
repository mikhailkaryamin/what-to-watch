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
import {AppRoute} from '../../const.js';

import {Operation as UserOperation} from '../../reducer/user/user.js';

import Comment from '../comment/comment.jsx';
import Main from '../main/main.jsx';
import FilmDetailed from '../film-detailed/film-detailed.jsx';
import RouteWithPlayer from '../route-with-player/route-with-player.jsx';
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
      signIn,
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={AppRoute.ROOT}
            render={() => <Main />}
          >
          </Route>
          <Route
            exact
            path={AppRoute.LOGIN}
            render={ () => {
              return (
                <SignInWrapped
                  signIn={signIn}
                />
              );
            }}
          >
          </Route>
          <RouteWithPlayer>
          </RouteWithPlayer>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentOpenFilm: filmPropTypes,
  currentWatchedFilm: filmPropTypes,
  signIn: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => {
    dispatch(UserOperation.signIn(user));
  }
});

export {
  App,
};

export default connect(null, mapDispatchToProps)(App);
