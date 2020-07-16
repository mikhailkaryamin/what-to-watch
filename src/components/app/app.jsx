import React, {
  PureComponent
} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  filmPropTypes,
} from '../../types.js';
import {FilmCardsListType} from '../../const.js';

import Main from '../main/main.jsx';
import FilmDetailed from '../film-detailed/film-detailed.jsx';
import VideoPlayer from '../video-player/video-player.jsx';
import withToggleFilmInfo from '../../hocs/with-toggle-film-info/with-toggle-film-info.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

const FilmDetailedWrapped = withToggleFilmInfo(FilmDetailed);
const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

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
      case (currentOpenFilm !== null):
        return (
          <FilmDetailedWrapped
            sign={FilmCardsListType.LIKE_THIS}
          />
        );
      case (currentWatchedFilm !== null):
        return (
          <VideoPlayerWrapped
            posterImage={currentWatchedFilm.posterImage}
            video={currentWatchedFilm.video}
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
};

const mapStateToProps = (state) => ({
  currentOpenFilm: state.currentOpenFilm,
  currentWatchedFilm: state.currentWatchedFilm,
});

export {
  App,
};

export default connect(mapStateToProps)(App);
